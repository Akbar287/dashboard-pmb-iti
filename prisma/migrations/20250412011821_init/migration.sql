-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nomor_hp" TEXT NOT NULL,
    "nomor_wa" TEXT,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "jenis_pilihan" (
    "jenis_pilihan_id" TEXT NOT NULL,
    "nama_jenis_pilihan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "jenis_pilihan_pkey" PRIMARY KEY ("jenis_pilihan_id")
);

-- CreateTable
CREATE TABLE "jenis_masuk" (
    "jenis_masuk_id" TEXT NOT NULL,
    "jenis_pilihan_id" TEXT NOT NULL,
    "nama_jenis_masuk" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "jenis_masuk_pkey" PRIMARY KEY ("jenis_masuk_id")
);

-- CreateTable
CREATE TABLE "prodi" (
    "prodi_id" TEXT NOT NULL,
    "nama_prodi" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "prodi_pkey" PRIMARY KEY ("prodi_id")
);

-- CreateTable
CREATE TABLE "semester" (
    "semester_id" TEXT NOT NULL,
    "nama_semester" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "semester_pkey" PRIMARY KEY ("semester_id")
);

-- CreateTable
CREATE TABLE "tahun" (
    "tahun_id" TEXT NOT NULL,
    "semester_id" TEXT NOT NULL,
    "nama_tahun" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "tahun_pkey" PRIMARY KEY ("tahun_id")
);

-- CreateTable
CREATE TABLE "status_intake" (
    "status_intake_id" TEXT NOT NULL,
    "nama_status" TEXT NOT NULL,
    "persentase" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "status_intake_pkey" PRIMARY KEY ("status_intake_id")
);

-- CreateTable
CREATE TABLE "target_intake" (
    "target_intake_id" TEXT NOT NULL,
    "tahun_id" TEXT NOT NULL,
    "prodi_id" TEXT,
    "jenis_masuk_id" TEXT NOT NULL,
    "kuota" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "target_intake_pkey" PRIMARY KEY ("target_intake_id")
);

-- CreateTable
CREATE TABLE "capaian" (
    "capaian_id" TEXT NOT NULL,
    "target_intake_id" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "weekend" INTEGER NOT NULL,

    CONSTRAINT "capaian_pkey" PRIMARY KEY ("capaian_id")
);

-- CreateTable
CREATE TABLE "capaian_rincian" (
    "capaian_rincian_id" TEXT NOT NULL,
    "status_intake_id" TEXT NOT NULL,
    "target_intake_id" TEXT NOT NULL,
    "capaian" INTEGER NOT NULL,

    CONSTRAINT "capaian_rincian_pkey" PRIMARY KEY ("capaian_rincian_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nomor_hp_key" ON "users"("nomor_hp");

-- CreateIndex
CREATE UNIQUE INDEX "users_nomor_wa_key" ON "users"("nomor_wa");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "jenis_masuk" ADD CONSTRAINT "jenis_masuk_jenis_pilihan_id_fkey" FOREIGN KEY ("jenis_pilihan_id") REFERENCES "jenis_pilihan"("jenis_pilihan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tahun" ADD CONSTRAINT "tahun_semester_id_fkey" FOREIGN KEY ("semester_id") REFERENCES "semester"("semester_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "target_intake" ADD CONSTRAINT "target_intake_tahun_id_fkey" FOREIGN KEY ("tahun_id") REFERENCES "tahun"("tahun_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "target_intake" ADD CONSTRAINT "target_intake_prodi_id_fkey" FOREIGN KEY ("prodi_id") REFERENCES "prodi"("prodi_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "target_intake" ADD CONSTRAINT "target_intake_jenis_masuk_id_fkey" FOREIGN KEY ("jenis_masuk_id") REFERENCES "jenis_masuk"("jenis_masuk_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capaian" ADD CONSTRAINT "capaian_target_intake_id_fkey" FOREIGN KEY ("target_intake_id") REFERENCES "target_intake"("target_intake_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capaian_rincian" ADD CONSTRAINT "capaian_rincian_target_intake_id_fkey" FOREIGN KEY ("target_intake_id") REFERENCES "target_intake"("target_intake_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capaian_rincian" ADD CONSTRAINT "capaian_rincian_status_intake_id_fkey" FOREIGN KEY ("status_intake_id") REFERENCES "status_intake"("status_intake_id") ON DELETE RESTRICT ON UPDATE CASCADE;
