-- CreateTable
CREATE TABLE "target_db" (
    "target_db_id" TEXT NOT NULL,
    "tahun_id" TEXT NOT NULL,
    "jenis_masuk_id" TEXT NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "target_db_pkey" PRIMARY KEY ("target_db_id")
);

-- AddForeignKey
ALTER TABLE "target_db" ADD CONSTRAINT "target_db_tahun_id_fkey" FOREIGN KEY ("tahun_id") REFERENCES "tahun"("tahun_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "target_db" ADD CONSTRAINT "target_db_jenis_masuk_id_fkey" FOREIGN KEY ("jenis_masuk_id") REFERENCES "jenis_masuk"("jenis_masuk_id") ON DELETE RESTRICT ON UPDATE CASCADE;
