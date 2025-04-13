import React from "react";
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { OutputJson } from "@/types/type";

const DataRIncianPerProdiPSPPI = ({ dataRaw }: { dataRaw: OutputJson }) => {
  return (
    <Card className="w-full shadow-md bg-white/70">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Rincian Intake PSPPI
        </CardTitle>
        <CardDescription>
          Tabel data rincian PSPPI dari data mentah Excel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {dataRaw.no_prodi !== undefined ? (
            dataRaw.jenis_masuk.map((jm, idx) => (
              <Card key={idx} className="bg-transparent">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{jm}</CardTitle>
                  <CardDescription>{dataRaw.tahun[idx]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableHead>Target Intake</TableHead>
                        <TableCell>
                          {dataRaw.no_prodi === undefined
                            ? 0
                            : dataRaw.no_prodi[0].data[idx].target_intake}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Weekday</TableHead>
                        <TableCell>
                          {dataRaw.no_prodi === undefined
                            ? 0
                            : dataRaw.no_prodi[0].data[idx].weekday}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Weekend</TableHead>
                        <TableCell>
                          {dataRaw.no_prodi === undefined
                            ? 0
                            : dataRaw.no_prodi[0].data[idx].weekend}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))
          ) : (
            <h1 className="text-center">Tidak ada data</h1>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataRIncianPerProdiPSPPI;
