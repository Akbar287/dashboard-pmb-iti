import Dashboard from "@/components/Dashboard";
import { PrismaClient } from "@/generated/prisma";
import { IntakeOutput } from "../types/type";
import { getSession } from "../provider/api";
import DashboardAdmin from "@/components/DashboardAdmin";

export default async function Home() {
  const session = await getSession();
  const prisma = new PrismaClient();

  const intake = await prisma.targetIntake.findMany({
    select: {
      targetIntakeId: true,
      Tahun: {
        select: {
          tahunId: true,
          namaTahun: true,
          Semester: {
            select: {
              semesterId: true,
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          jenisMasukId: true,
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              jenisPilihanId: true,
              namaJenisPilihan: true,
            },
          },
        },
      },
      Prodi: {
        select: {
          prodiId: true,
          namaProdi: true,
        },
      },
      target: true,
      Capaian: {
        select: {
          capaianId: true,
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
          tahunId: true,
          namaTahun: true,
          Semester: {
            select: {
              semesterId: true,
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          jenisMasukId: true,
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              jenisPilihanId: true,
              namaJenisPilihan: true,
            },
          },
        },
      },
      target: true,
      targetDbId: true,
    },
  });

  const intakeRincian = await prisma.capaianRincian.findMany({
    select: {
      Tahun: {
        select: {
          tahunId: true,
          namaTahun: true,
          Semester: {
            select: {
              semesterId: true,
              namaSemester: true,
            },
          },
        },
      },
      JenisMasuk: {
        select: {
          jenisMasukId: true,
          namaJenisMasuk: true,
          JenisPilihan: {
            select: {
              jenisPilihanId: true,
              namaJenisPilihan: true,
            },
          },
        },
      },
      capaian: true,
      capaianRincianId: true,
      StatusIntake: {
        select: {
          statusIntakeId: true,
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
    jenisMasuk: string,
    targetIntakeId: string,
    targetDbId: string,
    tahunId: string,
    semesterId: string,
    jenisMasukId: string,
    jenisPilihanId: string
  ) => {
    return `${tahun}__${semester}__${jenisPilihan}__${jenisMasuk}`;
  };

  const mergedMap = new Map<string, any>();

  for (const item of intake) {
    const tahun = item.Tahun?.namaTahun;
    const semester = item.Tahun?.Semester?.namaSemester;
    const jenisPilihan = item.JenisMasuk?.JenisPilihan?.namaJenisPilihan;
    const jenisMasuk = item.JenisMasuk?.namaJenisMasuk;
    const tahunId = item.Tahun?.tahunId;
    const semesterId = item.Tahun?.Semester.semesterId;
    const jenisPilihanId = item.JenisMasuk?.JenisPilihan.jenisPilihanId;
    const jenisMasukId = item.JenisMasuk.jenisMasukId;
    const targetIntakeId = item.targetIntakeId;
    const targetDbId = "";

    const key = makeKey(
      tahun,
      semester,
      jenisPilihan,
      jenisMasuk,
      targetIntakeId,
      targetDbId,
      tahunId,
      semesterId,
      jenisMasukId,
      jenisPilihanId
    );

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
        tahun_id: tahunId,
        semester_id: semesterId,
        jenis_masuk_id: jenisMasukId,
        jenis_pilihan_id: jenisPilihanId,
        targetIntakeId,
        targetDbId,
      });
    }

    const group = mergedMap.get(key);
    if (jenisPilihan === "PSPPI") {
      if (!group._psppiCounted) {
        group.target_intake += item.target;
        group.prodi.push({
          prodi_id: item.Prodi?.prodiId,
          capaian_id: item.Capaian[0].capaianId,
          nama_prodi: null,
          target_intake: item.target,
          targetIntakeId: item.targetIntakeId,
          weekday: item.Capaian[0]?.weekday ?? 0,
          weekend: item.Capaian[0]?.weekend ?? 0,
        });
        group._psppiCounted = true;
      }
    } else {
      if (item.Prodi) {
        group.target_intake += item.target;
        group.prodi.push({
          prodi_id: item.Prodi?.prodiId,
          nama_prodi: item.Prodi.namaProdi,
          target_intake: item.target,
          targetIntakeId: item.targetIntakeId,
          capaian_id: item.Capaian[0].capaianId,
          weekday: item.Capaian[0].weekday ?? 0,
          weekend: item.Capaian[0].weekend ?? 0,
        });
      }
    }
  }

  for (const item of targetDb) {
    const tahun = item.Tahun?.namaTahun;
    const semester = item.Tahun?.Semester?.namaSemester;
    const jenisPilihan = item.JenisMasuk?.JenisPilihan?.namaJenisPilihan;
    const jenisMasuk = item.JenisMasuk?.namaJenisMasuk;
    const tahunId = item.Tahun?.tahunId;
    const semesterId = item.Tahun?.Semester.semesterId;
    const jenisPilihanId = item.JenisMasuk?.JenisPilihan.jenisPilihanId;
    const jenisMasukId = item.JenisMasuk.jenisMasukId;
    const targetIntakeId = "";
    const targetDbId = item.targetDbId;

    const key = makeKey(
      tahun,
      semester,
      jenisPilihan,
      jenisMasuk,
      targetIntakeId,
      targetDbId,
      tahunId,
      semesterId,
      jenisMasukId,
      jenisPilihanId
    );

    const group = mergedMap.get(key);
    if (group) {
      group.target_db += item.target;
    } else {
      mergedMap.set(key, {
        tahun,
        semester,
        jenisPilihan,
        jenisMasuk,
        targetIntakeId,
        targetDbId,
        tahunId,
        semesterId,
        jenisMasukId,
        jenisPilihanId,

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
    const tahunId = item.Tahun?.tahunId;
    const semesterId = item.Tahun?.Semester.semesterId;
    const jenisPilihanId = item.JenisMasuk?.JenisPilihan.jenisPilihanId;
    const jenisMasukId = item.JenisMasuk.jenisMasukId;
    const targetIntakeId = "";
    const targetDbId = "";

    const key = makeKey(
      tahun,
      semester,
      jenisPilihan,
      jenisMasuk,
      targetIntakeId,
      targetDbId,
      tahunId,
      semesterId,
      jenisMasukId,
      jenisPilihanId
    );

    const group = mergedMap.get(key);
    if (group) {
      if (group.capaian_rincian.length < 5) {
        group.capaian_rincian.push({
          capaian_id: item.capaianRincianId,
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
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-300 via-green-200 dark:from-gray-800 dark:to-gray-600 dark:via-gray-700 w-full overflow-x-hidden">
      {session ? (
        <DashboardAdmin session={session} finalResultServer={finalResult} />
      ) : (
        <Dashboard session={session} finalResult={finalResult} />
      )}
    </div>
  );
}
