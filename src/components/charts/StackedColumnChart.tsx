"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { psppiOutcomes } from "@/lib/data";

const StackedColumnChart = () => {
  const chartConfig = {
    semester1: {
      label: "Semester 1",
      theme: {
        light: "#4f46e5",
        dark: "#4f46e5",
      },
    },
    semester2: {
      label: "Semester 2",
      theme: {
        light: "#06b6d4",
        dark: "#06b6d4",
      },
    },
  };

  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <CardTitle>PSPPI Outcomes by Pathway</CardTitle>
        <CardDescription>Program performance across semesters</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`w-full`}>
          <ChartContainer
            config={chartConfig}
            className="w-full h-[250px] md:h-[270px]"
          >
            <BarChart
              data={psppiOutcomes}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pathway" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar
                dataKey="semester1"
                name="Semester 1"
                stackId="a"
                fill="#4f46e5"
              />
              <Bar
                dataKey="semester2"
                name="Semester 2"
                stackId="a"
                fill="#06b6d4"
              />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>
            This stacked column chart presents the outcomes of the Professional
            Engineer Program (PSPPI) across different educational pathways. The
            chart compares the performance between Semester 1 (blue) and
            Semester 2 (cyan) for each pathway. This visualization allows for
            easy comparison of both the total outcomes across pathways and the
            semester-by-semester distribution within each pathway.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StackedColumnChart;
