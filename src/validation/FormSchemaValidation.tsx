import { z } from "zod";

export const FormSchemaValidation = z.object({
  tahun: z.string().min(1),
  semester: z.string(),
  jenis_pilihan: z.string(),
  jenis_masuk: z.string(),
  target_db: z.number().min(0),
});

export type FormValidation = z.infer<typeof FormSchemaValidation>;
