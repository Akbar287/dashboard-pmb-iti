"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { programSemesterComparison } from "@/lib/data";

const getColor = (value: number) => {
  // Color gradient from light to dark blue based on value
  if (value >= 200) return "#4338ca"; // Very dark blue for highest values
  if (value >= 180) return "#4f46e5";
  if (value >= 160) return "#6366f1";
  if (value >= 140) return "#818cf8";
  if (value >= 120) return "#a5b4fc";
  return "#c7d2fe"; // Lightest blue for lowest values
};

const HeatmapChart = () => {
  const maxValue = Math.max(
    ...programSemesterComparison.map((item) =>
      Math.max(item.oddSemester, item.evenSemester)
    )
  );
  return (
    <Card className="border shadow-sm bg-white/60">
      <CardHeader>
        <CardTitle>Program Achievement Comparison by Semester</CardTitle>
        <CardDescription>Comparative heatmap visualization</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={`p-2 text-left text-sm`}>Study Program</th>
                <th className={`p-2 text-center text-sm`}>Odd Semester</th>
                <th className={`p-2 text-center text-sm`}>Even Semester</th>
              </tr>
            </thead>
            <tbody>
              {programSemesterComparison.map((program, index) => (
                <tr key={index}>
                  <td className={`p-2 border-t text-sm`}>{program.program}</td>
                  <td className="p-2 border-t">
                    <div className="flex items-center justify-center">
                      <div
                        className={`h-10 w-full flex items-center justify-center text-sm font-medium text-white`}
                        style={{
                          backgroundColor: getColor(program.oddSemester),
                          opacity: program.oddSemester / maxValue,
                        }}
                      >
                        {program.oddSemester}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 border-t">
                    <div className="flex items-center justify-center">
                      <div
                        className={`h-10 w-full flex items-center justify-center text-sm font-medium text-white`}
                        style={{
                          backgroundColor: getColor(program.evenSemester),
                          opacity: program.evenSemester / maxValue,
                        }}
                      >
                        {program.evenSemester}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <div className="flex justify-center items-center gap-2">
            <div className="text-xs">Low</div>
            <div className="flex">
              {[
                "#c7d2fe",
                "#a5b4fc",
                "#818cf8",
                "#6366f1",
                "#4f46e5",
                "#4338ca",
              ].map((color, i) => (
                <div
                  key={i}
                  className="h-4 w-6"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <div className="text-xs">High</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            This heatmap provides a visual comparison of enrollment achievements
            across different study programs between odd and even semesters. The
            color intensity represents the volume of enrollments, with darker
            blues indicating higher student numbers. This visualization enables
            quick identification of high-performing programs and
            semester-specific patterns. Programs with consistent color intensity
            across both semesters show stable enrollment, while variations
            highlight seasonal differences.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeatmapChart;
