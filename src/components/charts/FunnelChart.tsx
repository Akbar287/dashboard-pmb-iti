"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const FunnelChart = ({ dataRaw }: { dataRaw: IntakeOutput[] }) => {
  const [index, setIndex] = React.useState<number>(0);
  const [enrollmentFunnel, setEnrollmentFunnel] = React.useState(
    dataRaw[index].capaian_rincian.map((c, i) => ({
      name: c.nama_status_intake,
      value: c.capaian,
    }))
  );

  useEffect(() => {
    setEnrollmentFunnel(
      dataRaw[index].capaian_rincian.map((c, i) => ({
        name: c.nama_status_intake,
        value: c.capaian,
      }))
    );
  }, [index]);

  const chartConfig = {};

  const totalValue = enrollmentFunnel.reduce((sum, c) => sum + c.value, 0);
  const dataWithPercentage = enrollmentFunnel.map((item) => ({
    ...item,
    percentage: ((item.value / totalValue) * 100).toFixed(1),
  }));

  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Alur Penerimaan Mahasiswa Baru</CardTitle>
            <CardDescription>
              {dataRaw[index].tahun +
                " Semester " +
                dataRaw[index].semester +
                " - " +
                dataRaw[index].jenis_pilihan +
                " " +
                dataRaw[index].jenis_masuk}
            </CardDescription>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size={"sm"}
              className="rounded-full cursor-pointer hover:scale-110 transition-all duration-150 hover:bg-amber-500 bg-transparent border border-gray-300 active:scale-90"
              variant={"default"}
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
            >
              <ChevronLeft className="text-gray-500" />
            </Button>
            <Button
              size={"sm"}
              className="rounded-full cursor-pointer  hover:scale-110 transition-all duration-150 hover:bg-amber-500 bg-transparent border border-gray-300 active:scale-90"
              variant={"default"}
              disabled={index === dataRaw.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              <ChevronRight className="text-gray-500" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`w-full`}>
          <ChartContainer config={chartConfig}>
            <BarChart
              data={dataWithPercentage}
              layout="vertical"
              margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={150}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                content={<ChartTooltipContent />}
                formatter={(value, name, props) => [
                  `${value} (${props.payload.percentage}%)`,
                  " Mahasiswa",
                ]}
              />
              <Bar
                dataKey="value"
                fill="#4f46e5"
                radius={[0, 4, 4, 0]}
                label={{
                  position: "right",
                  formatter: (value: number, entry: any) => {
                    if (entry && entry.percentage) {
                      return `${entry.percentage}%`;
                    }
                    return "";
                  },
                  fill: "#666",
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
