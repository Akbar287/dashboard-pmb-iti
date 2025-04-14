import React from "react";
import Barchart from "./charts/BarchartComponent";
import StackedBarChart from "./charts/StackedBarChart";
import Donutchart from "./charts/DonutChart";
import FunnelChart from "./charts/FunnelChart";
import HeatmapChart from "./charts/HeatmapChart";
import { IntakeOutput } from "../types/type";
import {
  transformData,
  transformDataHeatmap,
  transformJson,
} from "@/lib/utils";
import DataRincianIntake from "./DataRincianIntake";
import HeaderDashboard from "./HeaderDashboard";
import DataRincianPerProdi from "./DataRincianPerProdi";
import { Session } from "next-auth";

const Dashboard = async ({
  session,
  finalResult,
}: {
  session: Session | null;
  finalResult: IntakeOutput[];
}) => {
  return (
    <div className="container w-full mx-auto p-4">
      <div className="mb-8">
        <HeaderDashboard session={session} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <Barchart dataRaw={finalResult} />
        </div>

        <div className="col-span-1">
          <StackedBarChart dataRaw={finalResult} />
        </div>

        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <Donutchart dataRaw={finalResult} />
            </div>
            <div className="col-span-1">
              <FunnelChart dataRaw={finalResult} />
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <HeatmapChart dataRaw={transformDataHeatmap(finalResult)} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <DataRincianIntake dataRaw={transformData(finalResult)} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <DataRincianPerProdi dataRaw={transformJson(finalResult)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
