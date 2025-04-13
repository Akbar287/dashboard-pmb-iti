import React from "react";
import { OutputJson } from "@/types/type";
import DataRincianPerProdiS1 from "./DataRincianPerProdiS1";
import DataRIncianPerProdiPSPPI from "./DataRIncianPerProdiPSPPI";

const DataRincianPerProdi = ({
  dataRaw,
}: {
  dataRaw: { s1: OutputJson; psppi: OutputJson };
}) => {
  return (
    <React.Fragment>
      <div className="mb-5">
        <DataRincianPerProdiS1 dataRaw={dataRaw.s1} />
      </div>
      <div className="mb-5">
        <DataRIncianPerProdiPSPPI dataRaw={dataRaw.psppi} />
      </div>
    </React.Fragment>
  );
};

export default DataRincianPerProdi;
