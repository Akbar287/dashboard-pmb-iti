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
import { GroupedDataItem } from "@/types/type";

const getColor = (value: number) => {
  if (value >= 200) return "#4338ca";
  if (value >= 180) return "#4f46e5";
  if (value >= 160) return "#6366f1";
  if (value >= 140) return "#818cf8";
  if (value >= 120) return "#a5b4fc";
  return "#c7d2fe";
};

type IHeatmapChart = {
  dataRaw: GroupedDataItem[];
};

const HeatmapChart = ({ dataRaw }: IHeatmapChart) => {
  const data = dataRaw.map((d, i) => ({
    program: d.tahun + " " + d.jenis_masuk + " " + d.jenis_pilihan,
    oddSemester: d.data.find((s) => s.semester === "Ganjil")?.target_intake,
    evenSemester: d.data.find((s) => s.semester === "Genap")?.target_intake,
  }));

  const maxValue = Math.max(
    ...data.map((item) =>
      Math.max(item.oddSemester ?? 0, item.evenSemester ?? 0)
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
                <th className={`p-2 text-left text-sm`}>Program</th>
                <th className={`p-2 text-center text-sm`}>Semester Ganjil</th>
                <th className={`p-2 text-center text-sm`}>Semester Genap</th>
              </tr>
            </thead>
            <tbody>
              {data.map((program, index) => (
                <tr key={index}>
                  <td className={`p-2 border-t text-sm`}>{program.program}</td>
                  <td className="p-2 border-t">
                    <div className="flex items-center justify-center">
                      <div
                        className={`h-10 w-full flex items-center justify-center text-sm font-medium text-white`}
                        style={{
                          backgroundColor: getColor(program.oddSemester ?? 0),
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
                          backgroundColor: getColor(program.evenSemester ?? 0),
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
      </CardContent>
    </Card>
  );
};

export default HeatmapChart;
