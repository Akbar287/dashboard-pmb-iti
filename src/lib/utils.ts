import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { IntakeOutput, TransformedData, TransformedStatus, OutputJson, GroupedDataItem } from "../types/type"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformData(data: IntakeOutput[]): TransformedData {
  const semesterOrder = {
    Genap: 0,
    Ganjil: 1,
  };

  // Sort data
  const sortedData = [...data].sort((a, b) => {
    const semesterCompare = semesterOrder[a.semester === 'Genap' ? 'Genap' : 'Ganjil'] - semesterOrder[b.semester === 'Genap' ? 'Genap' : 'Ganjil'];
    if (semesterCompare !== 0) return semesterCompare;
    return parseInt(String(b.tahun)) - parseInt(String(a.tahun));
  });

  const tahunSemester: string[] = [];
  const jenisPilihanMasuk: string[] = [];

  const targetDbData: number[] = [];
  const targetIntakeData: number[] = [];

  const statusMap: Map<string, number[]> = new Map();

  sortedData.forEach(item => {
    tahunSemester.push(`${item.tahun} - ${item.semester}`);
    jenisPilihanMasuk.push(`${item.jenis_pilihan} - ${item.jenis_masuk}`);

    targetDbData.push(item.target_db);
    targetIntakeData.push(item.target_intake);

    item.capaian_rincian.forEach(status => {
      if (!statusMap.has(status.nama_status_intake)) {
        statusMap.set(status.nama_status_intake, new Array(data.length).fill(0));
      }
      const currentIndex = tahunSemester.length - 1;
      statusMap.get(status.nama_status_intake)![currentIndex] = status.capaian;
    });
  });

  const status: TransformedStatus[] = [
    {
      nama_status_intake: "Target DB",
      data: targetDbData,
    },
    {
      nama_status_intake: "Target Intake",
      data: targetIntakeData,
    },
    ...Array.from(statusMap.entries()).map(([nama_status_intake, data]) => ({
      nama_status_intake,
      data,
    })),
  ];

  return {
    tahun: tahunSemester,
    jenis_masuk: jenisPilihanMasuk,
    status,
  };
}

export function transformJson(input: IntakeOutput[]): { s1: OutputJson; psppi: OutputJson } {
  const s1Output: OutputJson = {
    tahun: [],
    jenis_masuk: [],
    prodi: []
  };

  const psppiOutput: OutputJson = {
    tahun: [],
    jenis_masuk: [],
    no_prodi: []
  };

  for (const item of input) {
    const tahunSemester = `${item.tahun} - ${item.semester}`;
    const jenisMasukLabel = `${item.jenis_pilihan} - ${item.jenis_masuk}`;

    if (item.jenis_pilihan.startsWith("S1")) {
      s1Output.tahun.push(tahunSemester);
      s1Output.jenis_masuk.push(jenisMasukLabel);

      item.prodi.forEach(prodiItem => {
        if (prodiItem.nama_prodi) {
          let existingProdi = s1Output.prodi!.find(p => p.nama_prodi === prodiItem.nama_prodi);
          if (!existingProdi) {
            existingProdi = {
              nama_prodi: prodiItem.nama_prodi,
              data: []
            };
            s1Output.prodi!.push(existingProdi);
          }

          const jumlah = prodiItem.weekday + prodiItem.weekend;
          existingProdi.data.push({
            target_intake: prodiItem.target_intake,
            weekday: prodiItem.weekday,
            weekend: prodiItem.weekend,
            jumlah
          });
        }
      });

    } else if (item.jenis_pilihan.startsWith("PSPPI")) {
      psppiOutput.tahun.push(tahunSemester);
      psppiOutput.jenis_masuk.push(jenisMasukLabel);

      item.prodi.forEach(prodiItem => {
        if (prodiItem.nama_prodi === null) {
          let existing = psppiOutput.no_prodi!.find(p => p.nama_prodi === null);
          if (!existing) {
            existing = {
              nama_prodi: null,
              data: []
            };
            psppiOutput.no_prodi!.push(existing);
          }

          const jumlah = prodiItem.weekday + prodiItem.weekend;
          existing.data.push({
            target_intake: prodiItem.target_intake,
            weekday: prodiItem.weekday,
            weekend: prodiItem.weekend,
            jumlah
          });
        }
      });
    }
  }

  return {
    s1: s1Output,
    psppi: psppiOutput
  };
}

export function transformDataHeatmap(data: IntakeOutput[]): GroupedDataItem[] {
  const groupedData: Record<string, { 
    jenis_pilihan: string; 
    jenis_masuk: string; 
    tahun: number; 
    data: { 
      semester: string; 
      target_db: number; 
      target_intake: number; 
    }[]; 
  }> = {};

  for (const item of data) {
      const key = `${item.jenis_pilihan}-${item.jenis_masuk}-${item.tahun}`;
      
      if (!groupedData[key]) {
          groupedData[key] = {
              jenis_pilihan: item.jenis_pilihan,
              jenis_masuk: item.jenis_masuk,
              tahun: parseInt(String(item.tahun)),
              data: []
          };
      }

      groupedData[key].data.push({
          semester: item.semester,
          target_db: item.target_db,
          target_intake: item.target_intake
      });
  }

  return Object.values(groupedData);
}
