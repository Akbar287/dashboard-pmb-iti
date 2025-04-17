"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, PenIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import FormUpdateProdiIntake from "./FormUpdateProdiIntake";
import { convertNumberToId, replaceItemAtIndex } from "@/lib/utils";
import { toast } from "sonner";
import FormUpdateTargetDB from "./FormUpdateTargetDB";

const ProgramIntake = ({
  dataTargetDbServer,
  dataProdiServer,
}: {
  dataTargetDbServer: any;
  dataProdiServer: any;
}) => {
  const [dataProdi, setDataProdi] = React.useState(dataProdiServer);
  const [dataTargetDb, setDataTargetDb] = React.useState(dataTargetDbServer);
  const router = useRouter();
  const [isOpenUpdateProdiIntake, setIsOpenUpdateProdiIntake] =
    React.useState(false);
  const [isOpenUpdateTargetDb, setIsOpenUpdateTargetDb] = React.useState(false);
  const [formUpdate, setFormUpdate] = React.useState<{
    id: string;
    target: number;
    weekday: number;
    weekend: number;
    prodiId: string;
    namaProdi: string;
    capaianId: string;
  }>({
    id: "",
    target: 0,
    weekday: 0,
    weekend: 0,
    prodiId: "",
    namaProdi: "",
    capaianId: "",
  });
  const [formUpdateTargetDb, setFormUpdateTargetDb] = React.useState<{
    targetDbId: string;
    target: number;
  }>({
    targetDbId: "",
    target: 0,
  });
  const getBack = () => {
    router.push("/");
  };

  const [loading, setLoading] = React.useState<boolean>(false);

  const openFormEdit = (
    id: string,
    target: number,
    weekday: number,
    weekend: number,
    prodiId: string,
    namaProdi: string,
    capaianId: string
  ) => {
    setFormUpdate({
      id,
      target,
      weekday,
      weekend,
      prodiId,
      namaProdi,
      capaianId,
    });
    setIsOpenUpdateProdiIntake(true);
  };

  const submitUpdateTargetDb = async () => {
    setLoading(true);
    const res = await fetch("/api/protected/target_db", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUpdateTargetDb),
    });
    const data = await res.json();

    if (data.status === "success") {
      setDataTargetDb({ ...dataTargetDb, target: formUpdateTargetDb.target });
      setLoading(false);
      setIsOpenUpdateTargetDb(false);
    } else {
      setLoading(false);
    }
  };

  const submitUpdate = async () => {
    setLoading(true);
    const res = await fetch("/api/protected/intake", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUpdate),
    });
    const data = await res.json();

    if (data.status === "success") {
      const index = dataProdi.findIndex(
        (d: any) => d.targetIntakeId === formUpdate.id
      );
      setDataProdi(
        replaceItemAtIndex(dataProdi, index, {
          targetIntakeId: formUpdate.id,
          target: formUpdate.target,
          Prodi: {
            prodiId: formUpdate.prodiId,
            namaProdi: formUpdate.namaProdi,
          },
          Capaian: [
            {
              capaianId: formUpdate.capaianId,
              weekday: formUpdate.weekday,
              weekend: formUpdate.weekend,
            },
          ],
        })
      );
      toast("Berhasil Mengubah data");
      setIsOpenUpdateProdiIntake(false);
      setFormUpdate({
        id: "",
        target: 0,
        weekday: 0,
        weekend: 0,
        prodiId: "",
        namaProdi: "",
        capaianId: "",
      });
      setLoading(false);
    } else {
      toast("Gagal Mengubah data");
      setLoading(false);
    }
  };

  return (
    <div className="container w-full mx-auto p-4">
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Ubah Data</CardTitle>
            <CardDescription>Mengubah data untuk pelaporan PMB</CardDescription>
          </CardHeader>
          <CardContent>
            Data Utama
            <ul>
              <li>
                Tahun:{" "}
                {dataTargetDb === null
                  ? "Tidak ada data"
                  : dataTargetDb.Tahun.namaTahun}
              </li>
              <li>
                Semester:{" "}
                {dataTargetDb === null
                  ? "Tidak ada data"
                  : dataTargetDb.Tahun.Semester.namaSemester}
              </li>
              <li>
                Jenis Masuk:{" "}
                {dataTargetDb === null
                  ? "Tidak ada data"
                  : dataTargetDb.JenisMasuk.namaJenisMasuk}
              </li>
              <li>
                Jenis Pilihan:{" "}
                {dataTargetDb === null
                  ? "Tidak ada data"
                  : dataTargetDb.JenisMasuk.JenisPilihan.namaJenisPilihan}
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant={"default"}
              className="cursor-pointer hover:scale-110 active:scale-90 transition-all duration-100"
              onClick={() => getBack()}
            >
              <ArrowLeft />
              Kembali
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Capaian Rincian
            </CardTitle>
            <CardDescription>
              Mengubah data capaian per status intake
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <h1>Target DB: {convertNumberToId(dataTargetDb.target)}</h1>
              <Button
                onClick={() => {
                  setFormUpdateTargetDb({
                    targetDbId: dataTargetDb.targetDbId,
                    target: dataTargetDb.target,
                  });
                  setIsOpenUpdateTargetDb(true);
                }}
                className="cursor-pointer hover:scale-110 active:scale-90 duration-100 transition-all"
              >
                <PenIcon />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Ubah Data Intake per Prodi
            </CardTitle>
            <CardDescription>Mengubah data intake per prodi</CardDescription>
          </CardHeader>
          <CardContent>
            {dataProdi.length === 0 ? (
              <div>Tidak ada Data</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Nama Prodi</TableHead>
                    <TableHead>Target Intake</TableHead>
                    <TableHead>Weekday</TableHead>
                    <TableHead>Weekend</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dataProdi.map((d: any, i: number) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>
                        {d.Prodi == null ? "-" : d.Prodi.namaProdi ?? "-"}
                      </TableCell>
                      <TableCell>{d.target ?? 0}</TableCell>
                      <TableCell>{d.Capaian[0].weekday ?? 0}</TableCell>
                      <TableCell>{d.Capaian[0].weekend ?? 0}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            openFormEdit(
                              d.targetIntakeId,
                              d.target,
                              d.Capaian[0].weekday,
                              d.Capaian[0].weekend,
                              d.Prodi.prodiId,
                              d.Prodi.namaProdi,
                              d.Capaian[0].capaianId
                            );
                          }}
                          variant={"default"}
                          className="cursor-pointer hover:scale-110 active:scale-90 duration-100 transition-all"
                        >
                          <PenIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
      <FormUpdateProdiIntake
        isOpenUpdateProdiIntake={isOpenUpdateProdiIntake}
        setIsOpenUpdateProdiIntake={setIsOpenUpdateProdiIntake}
        formUpdate={formUpdate}
        setFormUpdate={setFormUpdate}
        submitUpdate={submitUpdate}
        loading={loading}
      />
      <FormUpdateTargetDB
        isOpenUpdateTargetDb={isOpenUpdateTargetDb}
        setIsOpenUpdateTargetDb={setIsOpenUpdateTargetDb}
        formUpdateTargetDb={formUpdateTargetDb}
        setFormUpdateTargetDb={setFormUpdateTargetDb}
        loading={loading}
        submitUpdateTargetDb={submitUpdateTargetDb}
      />
    </div>
  );
};

export default ProgramIntake;
