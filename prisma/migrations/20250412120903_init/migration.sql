/*
  Warnings:

  - You are about to drop the column `target_intake_id` on the `capaian_rincian` table. All the data in the column will be lost.
  - Added the required column `jenis_masuk_id` to the `capaian_rincian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahun_id` to the `capaian_rincian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "capaian_rincian" DROP CONSTRAINT "capaian_rincian_target_intake_id_fkey";

-- AlterTable
ALTER TABLE "capaian_rincian" DROP COLUMN "target_intake_id",
ADD COLUMN     "jenis_masuk_id" TEXT NOT NULL,
ADD COLUMN     "tahun_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "capaian_rincian" ADD CONSTRAINT "capaian_rincian_tahun_id_fkey" FOREIGN KEY ("tahun_id") REFERENCES "tahun"("tahun_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capaian_rincian" ADD CONSTRAINT "capaian_rincian_jenis_masuk_id_fkey" FOREIGN KEY ("jenis_masuk_id") REFERENCES "jenis_masuk"("jenis_masuk_id") ON DELETE RESTRICT ON UPDATE CASCADE;
