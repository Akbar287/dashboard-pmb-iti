"use client";
import React, { useEffect } from "react";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IntakeOutput } from "@/types/type";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BarchartComponent = ({ dataRaw }: { dataRaw: IntakeOutput[] }) => {
  const isMobile = useIsMobile();
  const [index, setIndex] = React.useState<number>(0);
  const [information, setInformation] = React.useState(
    dataRaw[index].tahun +
      " Semester " +
      dataRaw[index].semester +
      " - " +
      dataRaw[index].jenis_pilihan +
      " " +
      dataRaw[index].jenis_masuk
  );
  const [chartData, setChartData] = React.useState(
    dataRaw[index].prodi.map((p, i) => {
      return {
        nama_prodi: p.nama_prodi,
        target_intake: p.target_intake,
        jumlah: p.weekday + p.weekend,
      };
    })
  );

  useEffect(() => {
    setChartData(
      dataRaw[index].prodi.map((p, i) => {
        return {
          nama_prodi: p.nama_prodi,
          target_intake: p.target_intake,
          jumlah: p.weekday + p.weekend,
        };
      })
    );

    setInformation(
      dataRaw[index].tahun +
        " Semester " +
        dataRaw[index].semester +
        " - " +
        dataRaw[index].jenis_pilihan +
        " " +
        dataRaw[index].jenis_masuk
    );
  }, [index]);

  const chartConfig = {
    target_intake: {
      label: "Target Intake",
      color: "#2563eb",
    },
    jumlah: {
      label: "Jumlah Realisasi",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card className="border shadow-sm bg-white/60 dark:bg-gray-800">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Penerimaan Berdasarkan Program Studi</CardTitle>
            <CardDescription>{information}</CardDescription>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size={"sm"}
              className="rounded-full cursor-pointer hover:scale-110 transition-all duration-150 hover:bg-amber-500 bg-transparent border border-gray-300 active:scale-90"
              variant={"default"}
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
            >
              <ChevronLeft className="text-gray-500 dark:text-gray-200" />
            </Button>
            <Button
              size={"sm"}
              className="rounded-full cursor-pointer  hover:scale-110 transition-all duration-150 hover:bg-amber-500 bg-transparent border border-gray-300 active:scale-90"
              variant={"default"}
              disabled={index === dataRaw.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              <ChevronRight className="text-gray-500 dark:text-gray-200" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {chartData === null ? (
            <h3>Belum ada Data</h3>
          ) : (
            <ChartContainer
              config={chartConfig}
              className=" w-full mb-6 h-[250px] md:h-[400px] lg:h-[500px]"
            >
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="nama_prodi"
                  angle={-35}
                  textAnchor="end"
                  height={70}
                  tick={{ fontSize: 10 }}
                />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend
                  wrapperStyle={{
                    fontSize: isMobile ? 10 : 12,
                  }}
                />
                <CartesianGrid vertical={true} horizontal />
                <Bar
                  dataKey="target_intake"
                  fill="var(--color-target_intake)"
                  radius={4}
                />
                <Bar dataKey="jumlah" fill="var(--color-jumlah)" radius={4} />
              </BarChart>
            </ChartContainer>
          )}
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-200 text-justify">
          <p>
            Grafik ini menampilkan pencapaian penerimaan mahasiswa baru untuk
            setiap program studi, yang dikelompokkan berdasarkan jalur S1
            Reguler dan S1 RPL. Batang kuning menunjukkan target untuk setiap
            program, sehingga memungkinkan perbandingan cepat antara pendaftaran
            aktual dan target. Program dengan batang yang melebihi target
            berarti melebihi ekspektasi, sementara yang di bawah target mungkin
            memerlukan upaya rekrutmen tambahan.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarchartComponent;
