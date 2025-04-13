import Dashboard from "@/components/Dashboard";
import { PrismaClient } from "@/generated/prisma";
import { IntakeOutput } from "../types/type";

export default async function Home() {
  const prisma = new PrismaClient();

  const intake = await prisma.targetIntake.findMany({
    select: {
      Tahun: {
        select: {
          namaTahun: true,
          Semester: {
            select: {
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              namaJenisPilihan: true,
            },
          },
        },
      },
      Prodi: {
        select: {
          namaProdi: true,
        },
      },
      target: true,
      Capaian: {
        select: {
          weekday: true,
          weekend: true,
        },
      },
    },
  });

  const targetDb = await prisma.targetDb.findMany({
    select: {
      Tahun: {
        select: {
          namaTahun: true,
          Semester: {
            select: {
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              namaJenisPilihan: true,
            },
          },
        },
      },
      target: true,
    },
  });

  const intakeRincian = await prisma.capaianRincian.findMany({
    select: {
      Tahun: {
        select: {
          namaTahun: true,
          Semester: {
            select: {
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              namaJenisPilihan: true,
            },
          },
        },
      },
      capaian: true,
      StatusIntake: {
        select: {
          namaStatus: true,
          persentase: true,
          deskripsi: true,
        },
      },
    },
  });

  const makeKey = (
    tahun: string,
    semester: string,
    jenisPilihan: string,
    jenisMasuk: string
  ) => {
    return `${tahun}__${semester}__${jenisPilihan}__${jenisMasuk}`;
  };

  const mergedMap = new Map<string, any>();

  for (const item of intake) {
    const tahun = item.Tahun?.namaTahun;
    const semester = item.Tahun?.Semester?.namaSemester;
    const jenisPilihan = item.JenisMasuk?.JenisPilihan?.namaJenisPilihan;
    const jenisMasuk = item.JenisMasuk?.namaJenisMasuk;

    const key = makeKey(tahun, semester, jenisPilihan, jenisMasuk);

    if (!mergedMap.has(key)) {
      mergedMap.set(key, {
        tahun,
        semester,
        jenis_pilihan: jenisPilihan,
        jenis_masuk: jenisMasuk,
        target_db: 0,
        target_intake: 0,
        capaian_rincian: [],
        prodi: [],
        _psppiCounted: false,
      });
    }

    const group = mergedMap.get(key);
    if (jenisPilihan === "PSPPI") {
      if (!group._psppiCounted) {
        group.target_intake += item.target;
        group.prodi.push({
          nama_prodi: null,
          target_intake: item.target,
          weekday: item.Capaian[0]?.weekday ?? 0,
          weekend: item.Capaian[0]?.weekend ?? 0,
        });
        group._psppiCounted = true;
      }
    } else {
      if (item.Prodi) {
        group.target_intake += item.target;
        group.prodi.push({
          nama_prodi: item.Prodi.namaProdi,
          target_intake: item.target,
          weekday: item.Capaian[0]?.weekday ?? 0,
          weekend: item.Capaian[0]?.weekend ?? 0,
        });
      }
    }
  }

  for (const item of targetDb) {
    const tahun = item.Tahun?.namaTahun;
    const semester = item.Tahun?.Semester?.namaSemester;
    const jenisPilihan = item.JenisMasuk?.JenisPilihan?.namaJenisPilihan;
    const jenisMasuk = item.JenisMasuk?.namaJenisMasuk;

    const key = makeKey(tahun, semester, jenisPilihan, jenisMasuk);

    const group = mergedMap.get(key);
    if (group) {
      group.target_db += item.target;
    } else {
      mergedMap.set(key, {
        tahun,
        semester,
        jenis_pilihan: jenisPilihan,
        jenis_masuk: jenisMasuk,
        target_db: item.target,
        target_intake: 0,
        capaian_rincian: [],
        prodi: [],
      });
    }
  }

  for (const item of intakeRincian) {
    const tahun = item.Tahun?.namaTahun;
    const semester = item.Tahun?.Semester?.namaSemester;
    const jenisPilihan = item.JenisMasuk?.JenisPilihan?.namaJenisPilihan;
    const jenisMasuk = item.JenisMasuk?.namaJenisMasuk;

    const key = makeKey(tahun, semester, jenisPilihan, jenisMasuk);

    const group = mergedMap.get(key);
    if (group) {
      if (group.capaian_rincian.length < 5) {
        group.capaian_rincian.push({
          nama_status_intake:
            item.StatusIntake?.persentase +
            "% - " +
            item.StatusIntake?.namaStatus,
          capaian: item.capaian,
        });
      }
    }
  }

  const finalResult: IntakeOutput[] = Array.from(mergedMap.values()).map(
    ({ _psppiCounted, ...rest }) => rest
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-300 via-green-200 w-full overflow-x-hidden">
      <Dashboard finalResult={finalResult} />
    </div>
  );
}
