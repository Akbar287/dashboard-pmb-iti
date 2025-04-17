import ProgramIntake from "@/components/ProgramIntake";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

interface PageParams {
  id: string;
  yearId: string;
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { id, yearId } = await params;

  const dataTargetDb = await prisma.targetDb.findFirst({
    select: {
      targetDbId: true,
      target: true,
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
    },
    where: {
      jenisMasukId: id,
      tahunId: yearId,
    },
  });

  const dataProdiServer = await prisma.targetIntake.findMany({
    select: {
      targetIntakeId: true,
      target: true,
      Prodi: {
        select: {
          prodiId: true,
          namaProdi: true,
        },
      },
      Capaian: {
        select: {
          capaianId: true,
          weekday: true,
          weekend: true,
        },
      },
    },
    where: {
      tahunId: yearId,
      jenisMasukId: id,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-300 via-green-200 dark:from-gray-800 dark:to-gray-600 dark:via-gray-700 w-full overflow-x-hidden">
      <ProgramIntake
        dataTargetDbServer={dataTargetDb}
        dataProdiServer={dataProdiServer}
      />
    </div>
  );
}
