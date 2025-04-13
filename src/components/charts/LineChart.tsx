"use client";
import {
  LineChart as RechartsLineChart,
  Line,
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
import { semesterTrends } from "@/lib/data";

const Linechart = () => {
  const isPrediction = (semester: string) => semester.includes("Prediction");

  const chartConfig = {
    achievement: {
      label: "Achievement",
      theme: {
        light: "#4f46e5",
        dark: "#4f46e5",
      },
    },
  };
  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <CardTitle>Intake Achievement Trends by Semester</CardTitle>
        <CardDescription>
          Historical data and future predictions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className={` w-full`}>
          <ChartContainer
            config={chartConfig}
            className="w-full h-[250px] md:h-[400px] lg:h-[500px]"
          >
            <RechartsLineChart
              data={semesterTrends}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="semester"
                tick={{ fontSize: 12 }}
                angle={0}
                textAnchor={"middle"}
                height={30}
              />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="achievement"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  return isPrediction(payload.semester) ? (
                    <circle
                      cx={cx}
                      cy={cy}
                      key={payload.semester}
                      r={5}
                      stroke="#f59e0b"
                      strokeWidth={2}
                      fill="#fff"
                    />
                  ) : (
                    <circle
                      cx={cx}
                      key={payload.semester}
                      cy={cy}
                      r={5}
                      stroke="#4f46e5"
                      strokeWidth={2}
                      fill="#fff"
                    />
                  );
                }}
              />
            </RechartsLineChart>
          </ChartContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>
            This line chart tracks student intake achievement trends across
            consecutive semesters, with orange markers indicating future
            predictions based on historical data. The chart demonstrates both
            seasonal patterns between odd and even semesters and the overall
            enrollment trend over time. Historical data shows fluctuations
            between semesters, with a general upward trend in recent periods.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Linechart;
