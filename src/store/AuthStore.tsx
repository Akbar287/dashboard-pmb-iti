import { AuthTypesProps } from "@/types/type";
import { createZustandStore } from "nes-zustand";

export const authStore = createZustandStore<AuthTypesProps | null>({
  key: "authStore",
  default: null,
});
