"use client";
import { CapaianRincianDetail, StatusIntake } from "@/types/type";
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
import { convertNumberToId, replaceItemAtIndex } from "@/lib/utils";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import FormUpdateStatus from "./FormUpdateStatus";

interface IListRincianCapaian {
  statusIntake: StatusIntake[];
  dataCapaian: CapaianRincianDetail[];
}

const ListRincianCapaian = ({
  statusIntake,
  dataCapaian,
}: IListRincianCapaian) => {
  console.dir(dataCapaian);
  const router = useRouter();
  const [capaianRincian, setCapaianRincian] =
    React.useState<CapaianRincianDetail[]>(dataCapaian);
  const [isOpenUpdateForm, setIsOpenUpdateForm] =
    React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const [formUpdate, setFormUpdate] = React.useState<CapaianRincianDetail>({
    tahunId: "",
    jenisMasukId: "",
    capaian: 0,
    capaianRincianId: "",
    StatusIntake: {
      deskripsi: "",
      statusIntakeId: "",
      namaStatus: "",
      persentase: 0,
    },
  });

  const getBack = () => {
    router.push("/");
  };

  const submitUpdatePsppi = async () => {
    setLoading(true);
    const res = await fetch("/api/protected/capaian_rincian", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tahunId: formUpdate.tahunId,
        jenisMasukId: formUpdate.jenisMasukId,
        capaian: formUpdate.capaian,
        capaianRincianId: formUpdate.capaianRincianId,
        StatusIntakeId: formUpdate.StatusIntake.statusIntakeId,
      }),
    });
    const data = await res.json();

    if (data.status === "success") {
      const idx = capaianRincian.findIndex(
        (c) => c.capaianRincianId === formUpdate.capaianRincianId
      );
      setCapaianRincian(replaceItemAtIndex(capaianRincian, idx, formUpdate));
      setLoading(false);
      toast("Berhasil Mengubah Data");
      setIsOpenUpdateForm(false);
    } else {
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
          <CardContent></CardContent>
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
              Ubah Data Intake per Status
            </CardTitle>
            <CardDescription>Mengubah data intake per status</CardDescription>
          </CardHeader>
          <CardContent className="">
            {capaianRincian.length === 0 ? (
              <div className="text-2xl font-bold justify-center items-center">
                Data tidak ada
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Status</TableHead>
                    <TableHead>Persentase</TableHead>
                    <TableHead>Capaian</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {capaianRincian.map((c) => (
                    <TableRow key={c.capaianRincianId}>
                      <TableCell>{c.StatusIntake.namaStatus}</TableCell>
                      <TableCell>{c.StatusIntake.persentase}</TableCell>
                      <TableCell>{c.capaian}</TableCell>
                      <TableCell>
                        <Button
                          variant={"default"}
                          onClick={() => {
                            setFormUpdate(c);
                            setIsOpenUpdateForm(true);
                          }}
                          className="mr-2 hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
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
      <FormUpdateStatus
        submitUpdatePsppi={submitUpdatePsppi}
        formUpdate={formUpdate}
        setFormUpdate={setFormUpdate}
        isOpenUpdateForm={isOpenUpdateForm}
        setIsOpenUpdateForm={setIsOpenUpdateForm}
        loading={loading}
      />
    </div>
  );
};

export default ListRincianCapaian;
