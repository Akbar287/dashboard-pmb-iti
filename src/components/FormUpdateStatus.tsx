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
import { CapaianRincianDetail } from "@/types/type";

interface IFormUpdateStatus {
  submitUpdatePsppi: () => void;
  formUpdate: CapaianRincianDetail;
  setFormUpdate: React.Dispatch<React.SetStateAction<CapaianRincianDetail>>;
  isOpenUpdateForm: boolean;
  setIsOpenUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const FormUpdateStatus = ({
  submitUpdatePsppi,
  formUpdate,
  setFormUpdate,
  isOpenUpdateForm,
  setIsOpenUpdateForm,
  loading,
}: IFormUpdateStatus) => {
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
              <Label htmlFor="capaian" className="text-right">
                Capaian
              </Label>
              <Input
                id="capaian"
                value={formUpdate.capaian ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdate({
                    ...formUpdate,
                    capaian: Number(e.target.value),
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

export default FormUpdateStatus;
