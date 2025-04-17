"use client";
import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import { Session } from "next-auth";
import DataRincianIntake from "./DataRincianIntake";
import { replaceItemAtIndex, transformData, transformJson } from "@/lib/utils";
import DataRincianPerProdi from "./DataRincianPerProdi";
import { IntakeOutput } from "@/types/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { MenuIcon, PencilIcon, PenIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FormUpdatePsppi from "./FormUpdatePsppi";
import { StatusIntake } from "@/generated/prisma";

const DashboardAdmin = ({
  session,
  finalResultServer,
}: {
  session: Session | null;
  finalResultServer: any;
}) => {
  const router = useRouter();

  const [finalResult, setFinalResult] = React.useState(finalResultServer);
  const [isOpenUpdateForm, setIsOpenUpdateForm] =
    React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const [formUpdate, setFormUpdate] = React.useState<{
    targetIntakeId: string;
    capaianId: string;
    targetDb: number;
    targetIntake: number;
    weekday: number;
    weekend: number;
  }>({
    targetIntakeId: "",
    capaianId: "",
    targetDb: 0,
    targetIntake: 0,
    weekday: 0,
    weekend: 0,
  });

  const submitUpdatePsppi = async () => {
    setLoading(true);
    const res = await fetch("/api/protected/psppi", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUpdate),
    });
    const data = await res.json();

    if (data.status === "success") {
      setLoading(false);
      const index = finalResult.findIndex(
        (d: any) => d.targetIntakeId === formUpdate.targetIntakeId
      );
      setFinalResult(
        replaceItemAtIndex(finalResult, index, {
          ...finalResult[index],
          prodi: [
            {
              capaian_id: formUpdate.capaianId,
              nama_prodi: null,
              target_intake: formUpdate.targetIntake,
              targetIntakeId: formUpdate.targetIntakeId,
              weekday: formUpdate.weekday,
              weekend: formUpdate.weekend,
            },
          ],
          target_db: formUpdate.targetDb,
          target_intake: formUpdate.targetIntake,
        })
      );
      setIsOpenUpdateForm(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="container w-full mx-auto p-4">
      <div className="mb-8">
        <HeaderDashboard session={session} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <DataRincianIntake dataRaw={transformData(finalResult)} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <DataRincianPerProdi dataRaw={transformJson(finalResult)} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <Card className="w-full shadow-md bg-white/70 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Form Admin</CardTitle>
              <CardDescription>
                Tabel data rincian dari data mentah Excel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tahun</TableHead>
                    <TableHead>Semester</TableHead>
                    <TableHead>Jenis Masuk</TableHead>
                    <TableHead>Jenis Pilihan</TableHead>
                    <TableHead>Target DB</TableHead>
                    <TableHead>Target Intake</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {finalResult.map((f: any, i: number) => (
                    <TableRow key={i}>
                      <TableCell>{f.tahun}</TableCell>
                      <TableCell>{f.semester}</TableCell>
                      <TableCell>{f.jenis_masuk}</TableCell>
                      <TableCell>{f.jenis_pilihan}</TableCell>
                      <TableCell>
                        {f.target_db.toLocaleString("id-ID", {
                          style: "decimal",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </TableCell>
                      <TableCell>
                        {f.target_intake.toLocaleString("id-ID", {
                          style: "decimal",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant={"default"}
                          onClick={() => {
                            if (f.jenis_pilihan === "PSPPI") {
                              setFormUpdate({
                                targetIntakeId: f.targetIntakeId,
                                capaianId: f.prodi[0].capaian_id,
                                targetDb: f.target_db,
                                targetIntake: f.target_intake,
                                weekday: f.prodi[0].weekday,
                                weekend: f.prodi[0].weekend,
                              });
                              setIsOpenUpdateForm(true);
                            } else {
                              router.push(
                                "/program/" +
                                  "/" +
                                  f.jenis_masuk_id +
                                  "/year/" +
                                  f.tahun_id
                              );
                            }
                          }}
                          className="mr-2 hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
                        >
                          <PenIcon />
                        </Button>
                        <Button
                          variant={"default"}
                          onClick={() =>
                            router.push(
                              "/status/" +
                                "/" +
                                f.jenis_masuk_id +
                                "/year/" +
                                f.tahun_id
                            )
                          }
                          className="mr-2 hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
                        >
                          <MenuIcon />
                        </Button>
                        <Button
                          onClick={() => toast("Belum Tersedia")}
                          variant={"destructive"}
                          className="hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
                        >
                          <Trash2Icon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <FormUpdatePsppi
        isOpenUpdateForm={isOpenUpdateForm}
        setIsOpenUpdateForm={setIsOpenUpdateForm}
        formUpdate={formUpdate}
        setFormUpdate={setFormUpdate}
        loading={loading}
        submitUpdatePsppi={submitUpdatePsppi}
      />
    </div>
  );
};

export default DashboardAdmin;
