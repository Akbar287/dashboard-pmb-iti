"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { IntakeOutput } from "@/types/type";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Donutchart = ({ dataRaw }: { dataRaw: IntakeOutput[] }) => {
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
  const [pieData, setPieData] = React.useState(
    dataRaw[index].capaian_rincian.map((c, i) => {
      return { name: c.nama_status_intake, value: c.capaian };
    })
  );

  const COLORS = ["#4f46e5", "#8884d8", "#82ca9d", "#00bcd4", "#ffc107"];

  const [prodiData, setProdiData] = React.useState(
    dataRaw[index].prodi.map((p, i) => ({
      name: p.nama_prodi ?? "",
      value: p.target_intake ?? 0,
    }))
  );

  const COLORS_PRODI = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#413ea0",
    "#a4de6c",
    "#d0ed57",
    "#ffc107",
    "#00bcd4",
    "#f44336",
  ];

  useEffect(() => {
    setPieData(
      dataRaw[index].capaian_rincian.map((c, i) => {
        return { name: c.nama_status_intake, value: c.capaian };
      })
    );
    setProdiData(
      dataRaw[index].prodi.map((p, i) => ({
        name: p.nama_prodi ?? "",
        value: p.target_intake ?? 0,
      }))
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

  const chartConfig = {};

  return (
    <Card className="border shadow-sm bg-white/60 dark:bg-gray-800">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Status Intake Vs Proporsi Per Prodi</CardTitle>
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
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <div className="flex flex-col items-center">
            <p className="text-sm mb-1 text-gray-500">
              Proporsi Per Status Intake
            </p>
            <div className={`w-full relative`}>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[200px] md:h-[250px]"
              >
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Legend />
                </PieChart>
              </ChartContainer>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm mb-1 text-gray-500">
              Proporsi Target Intake Per Prodi
            </p>
            <div className={`w-full relative`}>
              {dataRaw[index].jenis_pilihan === "PSPPI" ? (
                <div className="w-full text-center my-3 ">
                  <h1>PSPPI tidak memiliki prodi</h1>
                </div>
              ) : (
                <ChartContainer
                  config={chartConfig}
                  className="w-full h-[200px] md:h-[250px]"
                >
                  <PieChart>
                    <Pie
                      data={prodiData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {prodiData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS_PRODI[index % COLORS_PRODI.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ChartContainer>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600"></div>
      </CardContent>
    </Card>
  );
};

export default Donutchart;
