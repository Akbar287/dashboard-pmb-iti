"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
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

const StackedBarChart = ({ dataRaw }: { dataRaw: IntakeOutput[] }) => {
  const [chartData, setChartData] = React.useState(
    dataRaw.map((item) => {
      const result: { name: string | number; [key: string]: any } = {
        name:
          item.tahun +
          " " +
          item.semester +
          " " +
          item.jenis_masuk +
          " " +
          item.jenis_pilihan,
      };

      item.capaian_rincian.forEach((rincian) => {
        result[rincian.nama_status_intake] = rincian.capaian;
      });

      return result;
    })
  );

  const chartConfig = {
    "10% - Identify": {
      label: "10% - Identify",
      theme: {
        light: "#4f46e5",
        dark: "#4f46e5",
      },
    },
    "30% - Proposal": {
      label: "30% - Proposal",
      theme: {
        light: "#06b6d4",
        dark: "#06b6d4",
      },
    },
    "50% - Potensial": {
      label: "50% - Potensial",
      theme: {
        light: "#10b981",
        dark: "#10b981",
      },
    },
    "80% - Almost": {
      label: "80% - Almost",
      theme: {
        light: "#f59e0b",
        dark: "#f59e0b",
      },
    },
    "100% - Finished": {
      label: "100% - Finished",
      theme: {
        light: "#12fe0b",
        dark: "#12fe0b",
      },
    },
  };
  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <CardTitle>Capaian Target Per Program</CardTitle>
        <CardDescription>Distribution across admission stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`w-full`}>
          <ChartContainer
            config={chartConfig}
            className="w-full h-[350px] md:h-[500px] lg:h-[650px]"
          >
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" fontSize={10} type="category" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="10% - Identify" stackId="a" fill="#4f46e5" />
              <Bar dataKey="30% - Proposal" stackId="a" fill="#06b6d4" />
              <Bar dataKey="50% - Potensial" stackId="a" fill="#10b981" />
              <Bar dataKey="80% - Almost" stackId="a" fill="#f59e0b" />
              <Bar dataKey="100% - Finished" stackId="a" fill="#12fe0b" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StackedBarChart;
