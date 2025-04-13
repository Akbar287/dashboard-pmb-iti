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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { TransformedData } from "@/types/type";

const DataRincianIntake = ({ dataRaw }: { dataRaw: TransformedData }) => {
  return (
    <Card className="w-full shadow-md bg-white/70">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Rincian Intake
        </CardTitle>
        <CardDescription>
          Tabel data rincian dari data mentah Excel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Semester</TableHead>
              {dataRaw.tahun.map((item, idx) => (
                <TableHead key={idx}>{item}</TableHead>
              ))}
              <TableHead rowSpan={2}>Total</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>Program</TableHead>
              {dataRaw.jenis_masuk.map((item, idx) => (
                <TableHead key={idx}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataRaw.status.map((status, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  {status.nama_status_intake}
                </TableCell>
                {status.data.map((data, idx) => (
                  <TableCell key={idx} className="text-center">
                    {data.toLocaleString("id-ID", {
                      style: "decimal",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </TableCell>
                ))}
                <TableCell className="text-center font-bold">
                  {status.data
                    .reduce((acc, curr) => acc + curr, 0)
                    .toLocaleString("id-ID", {
                      style: "decimal",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DataRincianIntake;
