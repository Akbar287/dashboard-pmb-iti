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

interface IFormUpdateTargetDB {
  isOpenUpdateTargetDb: boolean;
  setIsOpenUpdateTargetDb: React.Dispatch<React.SetStateAction<boolean>>;
  formUpdateTargetDb: { targetDbId: string; target: number };
  setFormUpdateTargetDb: React.Dispatch<
    React.SetStateAction<{ targetDbId: string; target: number }>
  >;
  loading: boolean;
  submitUpdateTargetDb: () => void;
}

const FormUpdateTargetDB = ({
  isOpenUpdateTargetDb,
  setIsOpenUpdateTargetDb,
  formUpdateTargetDb,
  setFormUpdateTargetDb,
  loading,
  submitUpdateTargetDb,
}: IFormUpdateTargetDB) => {
  return (
    <Sheet open={isOpenUpdateTargetDb} onOpenChange={setIsOpenUpdateTargetDb}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ubah Target DB</SheetTitle>
          <SheetDescription>Ubah Data Target anda</SheetDescription>
        </SheetHeader>
        <div className="mx-2">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="target" className="text-right">
                Target DB
              </Label>
              <Input
                id="target"
                value={formUpdateTargetDb.target ?? 0}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormUpdateTargetDb({
                    ...formUpdateTargetDb,
                    target: Number(e.target.value),
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
            onClick={() => submitUpdateTargetDb()}
          >
            {loading ? "Loading" : "Save changes"}
          </Button>
          <Button
            className="hover:scale-110 cursor-pointer active:scale-90 transition-all duration-100"
            variant={"destructive"}
            disabled={loading}
            onClick={() => setIsOpenUpdateTargetDb(false)}
          >
            Tutup
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FormUpdateTargetDB;
