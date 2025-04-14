import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { OutputJson } from "@/types/type";

const DataRincianPerProdiS1 = ({ dataRaw }: { dataRaw: OutputJson }) => {
  return (
    <Card className="w-full shadow-md bg-white/70 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Rincian Intake Per Prodi
        </CardTitle>
        <CardDescription>
          Tabel data rincian per prodi dari data mentah Excel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Data untuk S1</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Semester</TableHead>
              {dataRaw.jenis_masuk.map((item, index) => (
                <TableHead key={index} colSpan={3} className="text-center">
                  {item}
                </TableHead>
              ))}
            </TableRow>
            <TableRow>
              <TableHead className="" rowSpan={2}>
                Program
              </TableHead>
              {dataRaw.tahun.map((item, index) => (
                <TableHead key={index} colSpan={3} className="text-center">
                  {item}
                </TableHead>
              ))}
            </TableRow>
            <TableRow>
              {dataRaw.jenis_masuk.map((item, idx) => (
                <React.Fragment key={idx}>
                  <TableHead>Target Intake</TableHead>
                  <TableHead>Weekday</TableHead>
                  <TableHead>Weekend</TableHead>
                </React.Fragment>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataRaw.prodi !== undefined ? (
              dataRaw.prodi.map((prodi, index) => (
                <TableRow key={index}>
                  <TableCell className="">{prodi.nama_prodi}</TableCell>
                  {prodi.data.map((data, index) => (
                    <React.Fragment key={index}>
                      <TableCell className="">{data.target_intake}</TableCell>
                      <TableCell className="">{data.weekday}</TableCell>
                      <TableCell className="">{data.weekend}</TableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>Tidak Ada Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DataRincianPerProdiS1;
