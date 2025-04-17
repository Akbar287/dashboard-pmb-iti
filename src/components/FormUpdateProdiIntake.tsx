"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface IFormUpdateProdiIntake {
  isOpenUpdateProdiIntake: boolean;
  loading: boolean;
  setIsOpenUpdateProdiIntake: React.Dispatch<React.SetStateAction<boolean>>;
  formUpdate: {
    id: string;
    target: number;
    weekday: number;
    weekend: number;
    prodiId: string;
    namaProdi: string;
    capaianId: string;
  };
  setFormUpdate: React.Dispatch<
    React.SetStateAction<{
      id: string;
      target: number;
      weekday: number;
      weekend: number;
      prodiId: string;
      namaProdi: string;
      capaianId: string;
    }>
  >;
  submitUpdate: () => void;
}

const FormUpdateProdiIntake = ({
  isOpenUpdateProdiIntake,
  setIsOpenUpdateProdiIntake,
  formUpdate,
  setFormUpdate,
  submitUpdate,
  loading,
}: IFormUpdateProdiIntake) => {
  return (
    <Sheet
      open={isOpenUpdateProdiIntake}
      onOpenChange={setIsOpenUpdateProdiIntake}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ubah Intake Prodi {formUpdate.namaProdi}</SheetTitle>
          <SheetDescription>Ubah Data anda</SheetDescription>
        </SheetHeader>
        <div className="mx-2">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="target" className="text-right">
                Target Intake
              </Label>
              <Input
                id="target"
                value={formUpdate.target ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    target: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weekday" className="text-right">
                Weekday
              </Label>
              <Input
                id="weekday"
                value={formUpdate.weekday ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    weekday: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weekend" className="text-right">
                Weekend
              </Label>
              <Input
                id="weekend"
                value={formUpdate.weekend ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    weekend: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button
            className="hover:scale-110 cursor-pointer active:scale-90 transition-all duration-100"
            variant={"default"}
            disabled={loading}
            onClick={() => submitUpdate()}
          >
            {loading ? "Loading" : "Save changes"}
          </Button>
          <Button
            className="hover:scale-110 cursor-pointer active:scale-90 transition-all duration-100"
            variant={"destructive"}
            disabled={loading}
            onClick={() => setIsOpenUpdateProdiIntake(false)}
          >
            Tutup
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FormUpdateProdiIntake;
