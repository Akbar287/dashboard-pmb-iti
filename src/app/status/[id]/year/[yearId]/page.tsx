import ListRincianCapaian from "@/components/ListRincianCapaian";
import { PrismaClient } from "@/generated/prisma";

export default async function Page({
  params,
}: {
  params: {
    id: string;
    yearId: string;
  };
}) {
  const prisma = new PrismaClient();
  const { id, yearId } = params;

  const statusIntake = await prisma.statusIntake.findMany({
    select: {
      statusIntakeId: true,
      namaStatus: true,
      persentase: true,
      deskripsi: true,
    },
  });

  const data = await prisma.capaianRincian.findMany({
    select: {
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
      jenisMasukId: true,
      tahunId: true,
    },
    where: {
      tahunId: yearId,
      jenisMasukId: id,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-300 via-green-200 dark:from-gray-800 dark:to-gray-600 dark:via-gray-700 w-full overflow-x-hidden">
      <ListRincianCapaian statusIntake={statusIntake} dataCapaian={data} />
    </div>
  );
}
