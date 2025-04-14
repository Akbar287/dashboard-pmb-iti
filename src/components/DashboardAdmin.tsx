"use client";
import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import { Session } from "next-auth";
import DataRincianIntake from "./DataRincianIntake";
import { transformData, transformJson } from "@/lib/utils";
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
import { PenIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DashboardAdmin = ({
  session,
  finalResult,
}: {
  session: Session | null;
  finalResult: IntakeOutput[];
}) => {
  const router = useRouter();
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
                  {finalResult.map((f, i) => (
                    <TableRow key={i}>
                      <TableCell>{f.tahun}</TableCell>
                      <TableCell>{f.semester}</TableCell>
                      <TableCell>{f.jenis_masuk}</TableCell>
                      <TableCell>{f.jenis_pilihan}</TableCell>
                      <TableCell>{f.target_db}</TableCell>
                      <TableCell>{f.target_intake}</TableCell>
                      <TableCell>
                        <Button
                          variant={"default"}
                          onClick={() =>
                            router.push(
                              "/program/" +
                                "/" +
                                f.jenis_masuk_id +
                                "/year/" +
                                f.tahun_id
                            )
                          }
                          className="mr-2 hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
                        >
                          <PenIcon />
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
    </div>
  );
};

export default DashboardAdmin;
