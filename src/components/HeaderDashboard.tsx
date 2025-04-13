import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const HeaderDashboard = () => {
  return (
    <Card className="w-full shadow-md bg-white/70">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Penerimaan Mahasiswa Baru
        </CardTitle>
        <CardDescription>
          Monitoring Penerimaan Mahasiswa Baru ITI
        </CardDescription>
      </CardHeader>
      <CardFooter className="text-sm">
        Data diupdate pada 12 April 2025
      </CardFooter>
    </Card>
  );
};

export default HeaderDashboard;
