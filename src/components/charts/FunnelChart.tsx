"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
import { enrollmentFunnel } from "@/lib/data";

const FunnelChart = () => {
  const sortedData = [...enrollmentFunnel].sort((a, b) => b.value - a.value);

  const chartConfig = {
    value: {
      label: "Students",
      theme: {
        light: "#4f46e5",
        dark: "#4f46e5",
      },
    },
  };

  // Calculate percentage from the initial stage
  const initialValue = sortedData[0].value;
  const dataWithPercentage = sortedData.map((item) => ({
    ...item,
    percentage: ((item.value / initialValue) * 100).toFixed(1),
  }));

  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <CardTitle>Student Enrollment Funnel</CardTitle>
        <CardDescription>
          Transition from lead to enrolled student
        </CardDescription>
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
                  "Students",
                ]}
              />
              <Bar
                dataKey="value"
                fill="#4f46e5"
                radius={[0, 4, 4, 0]}
                label={{
                  position: "right",
                  formatter: (value: number, entry: any) => {
                    // Make sure entry and entry.percentage exist before accessing
                    if (entry && entry.percentage) {
                      return `${entry.percentage}%`;
                    }
                    return ""; // Return empty string if percentage is not available
                  },
                  fill: "#666",
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>
            This funnel visualization demonstrates the student enrollment
            journey from initial identification to becoming active students. The
            chart shows a decreasing pattern as students progress through each
            stage, with percentages reflecting the conversion rate from the
            initial pool of prospects.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
