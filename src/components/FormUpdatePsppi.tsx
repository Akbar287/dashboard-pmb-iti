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

interface IFormUpdatePsppi {
  isOpenUpdateForm: boolean;
  loading: boolean;
  setIsOpenUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
  formUpdate: {
    targetIntakeId: string;
    capaianId: string;
    targetDb: number;
    targetIntake: number;
    weekday: number;
    weekend: number;
  };
  setFormUpdate: React.Dispatch<
    React.SetStateAction<{
      targetIntakeId: string;
      capaianId: string;
      targetDb: number;
      targetIntake: number;
      weekday: number;
      weekend: number;
    }>
  >;
  submitUpdatePsppi: () => void;
}

const FormUpdatePsppi = ({
  isOpenUpdateForm,
  setIsOpenUpdateForm,
  formUpdate,
  setFormUpdate,
  submitUpdatePsppi,
  loading,
}: IFormUpdatePsppi) => {
  return (
    <Sheet open={isOpenUpdateForm} onOpenChange={setIsOpenUpdateForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ubah Intake PSPPI</SheetTitle>
          <SheetDescription>Ubah Data anda</SheetDescription>
        </SheetHeader>
        <div className="mx-2">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="target_db" className="text-right">
                Target DB
              </Label>
              <Input
                id="target_db"
                value={formUpdate.targetDb ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    targetDb: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="target_intake" className="text-right">
                Target Intake
              </Label>
              <Input
                id="target_intake"
                value={formUpdate.targetIntake ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    targetIntake: Number(e.target.value),
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
            onClick={() => submitUpdatePsppi()}
          >
            {loading ? "Loading" : "Save changes"}
          </Button>
          <Button
            className="hover:scale-110 cursor-pointer active:scale-90 transition-all duration-100"
            variant={"destructive"}
            disabled={loading}
            onClick={() => setIsOpenUpdateForm(false)}
          >
            Tutup
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FormUpdatePsppi;
