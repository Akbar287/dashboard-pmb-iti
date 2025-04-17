import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

import bcrypt from 'bcrypt';


async function main() {

    let user = await prisma.user.create({
        data: { 
            nama: "Akbar",
            nomorHp: "081288748757",
            nomorWa: "081288748757",
            username: "akbar287",
            email: "akbar@email.com",
            password: await bcrypt.hash("akbar287", 10),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        }
    });

    const jenisPilihan = [{
        namaJenisPilihan: "S1",
        deskripsi: "Sarjana S1",
        JenisMasuk: {
            create: [{
                namaJenisMasuk: "Reguler",
                deskripsi: "Reguler",
            }, {
                namaJenisMasuk: "RPL",
                deskripsi: "Rekognisi Pembelajaran Lampau",
            }]
        }
    }, {
        namaJenisPilihan: "PSPPI",
        deskripsi: "Program Studi Program Profesi Insinyur",
        JenisMasuk: {
            create: [{
                namaJenisMasuk: "Reguler",
                deskripsi: "Reguler",
            }, {
                namaJenisMasuk: "RPL",
                deskripsi: "Rekognisi Pembelajaran Lampau",
            }]
        }
    }];

    const prodi = [{
        namaProdi: "Teknik Elektro",
        deskripsi: "Teknik Elektro",
    }, {
        namaProdi: "Teknik Mesin",
        deskripsi: "Teknik Mesin",
    }, {
        namaProdi: "Teknik Industri",
        deskripsi: "Teknik Industri",
    }, {
        namaProdi: "Teknik Kimia",
        deskripsi: "Teknik Kimia",
    }, {
        namaProdi: "Teknik Informatika",
        deskripsi: "Teknik Informatika",
    }, {
        namaProdi: "Teknik Sipil",
        deskripsi: "Teknik Sipil",
    }, {
        namaProdi: "Arsitektur",
        deskripsi: "Arsitektur",
    }, {
        namaProdi: "Perencanaan Wilayah Kota",
        deskripsi: "Perencanaan Wilayah Kota",
    }, {
        namaProdi: "Teknologi Industri Pertanian",
        deskripsi: "Teknologi Industri Pertanian",
    }, {
        namaProdi: "Manajemen",
        deskripsi: "Manajemen",
    }];

    const statusIntake = [{
        namaStatus: "Identify",
        persentase: 10,
        deskripsi: "Database",
    }, {
        namaStatus: "Proposal",
        persentase: 30,
        deskripsi: "Follow up --> buat akun PMB saja",
    }, {
        namaStatus: "Potensial",
        persentase: 50,
        deskripsi: "Aktif Akun PMB (Bayar Pendaftaran)",
    }, {
        namaStatus: "Almost",
        persentase: 80,
        deskripsi: "Selesai Seleksi Belum Daftar Ulang",
    }, {
        namaStatus: "Finished",
        persentase: 100,
        deskripsi: "Selesai Daftar Ulang",
    }];

    const semester = [{
        namaSemester: "Ganjil",
        deskripsi: "Ganjil",
        Tahun: {
            create: [{
                namaTahun: "2025",
                deskripsi: "Tahun 2025",
            }]
        }
    }, {
        namaSemester: "Genap",
        deskripsi: "Genap",
        Tahun: {
            create: [{
                namaTahun: "2025",
                deskripsi: "Tahun 2025",
            }]
        }
    }];

    const jenisPilihanDb = [];
    for (const jenis of jenisPilihan) {
        const created = await prisma.jenisPilihan.create({
            data: jenis,
            include: {
                JenisMasuk: true,
            }
        });
        jenisPilihanDb.push(created);
    }

    const prodiDb = [];
    for (const jenis of prodi) {
        const created = await prisma.prodi.create({
            data: jenis,
        });
        prodiDb.push(created);
    }

    const semesterDb = [];
    for (const jenis of semester) {
        const created = await prisma.semester.create({
            data: jenis,
            include: {
                Tahun: true,
            }
        });
        semesterDb.push(created);
    }
    const statusIntakeDb = [];
    for (const jenis of statusIntake) {
        const created = await prisma.statusIntake.create({
            data: jenis
        });
        statusIntakeDb.push(created);
    }

    const targetIntakeDb = [];
    for (const jenisPilihan of jenisPilihanDb) {
        for (const jenisMasuk of jenisPilihan.JenisMasuk) {
            for (const semester of semesterDb) {
                for (const tahun of semester.Tahun) {
                    for (const prodi of prodiDb) {
                        let created = null;
                        let capaian = null;
                        if(
                            jenisPilihan.namaJenisPilihan === "S1" && 
                            jenisMasuk.namaJenisMasuk === "RPL" && 
                            semester.namaSemester === "Genap" && 
                            tahun.namaTahun === "2025"
                        ) {
                            let target = 
                                (prodi.namaProdi === "Teknik Informatika") ? [20, 0, 5] : 
                                (prodi.namaProdi === "Teknik Elektro") ? [20, 1, 12] :
                                (prodi.namaProdi === "Teknik Mesin") ? [20, 3, 12] :
                                (prodi.namaProdi === "Teknik Industri") ? [20, 0, 2] :
                                (prodi.namaProdi === "Teknik Kimia") ? [20, 1, 11] :
                                (prodi.namaProdi === "Teknik Sipil") ? [20, 0, 7] :
                                (prodi.namaProdi === "Arsitektur") ? [10, 0, 5] :
                                (prodi.namaProdi === "Perencanaan Wilayah Kota") ? [10, 0, 0] :
                                (prodi.namaProdi === "Teknologi Industri Pertanian") ? [15, 0, 1] :
                                (prodi.namaProdi === "Manajemen") ? [20, 0, 4] : 
                                [0, 0, 0];

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: prodi.prodiId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: target[0],
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: target[1],
                                    weekend: target[2],
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 1500, 
                                Identify: 229,
                                Proposal: 37,
                                Potensial: 33,
                                Almost: 4,
                                Finished: 64
                            }

                            await prisma.targetDb.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: temp.targetDb
                                }
                            })

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }

                        if(
                            jenisPilihan.namaJenisPilihan === "S1" && 
                            jenisMasuk.namaJenisMasuk === "RPL" && 
                            semester.namaSemester === "Ganjil" && 
                            tahun.namaTahun === "2025"
                        ) {
                            let target = 
                                (prodi.namaProdi === "Teknik Informatika") ? [20, 0, 0] : 
                                (prodi.namaProdi === "Teknik Elektro") ? [20, 0, 0] :
                                (prodi.namaProdi === "Teknik Mesin") ? [20, 0, 0] :
                                (prodi.namaProdi === "Teknik Industri") ? [20, 0, 0] :
                                (prodi.namaProdi === "Teknik Kimia") ? [20, 0, 0] :
                                (prodi.namaProdi === "Teknik Sipil") ? [20, 0, 0] :
                                (prodi.namaProdi === "Arsitektur") ? [10, 0, 0] :
                                (prodi.namaProdi === "Perencanaan Wilayah Kota") ? [10, 0, 0] :
                                (prodi.namaProdi === "Teknologi Industri Pertanian") ? [15, 0, 0] :
                                (prodi.namaProdi === "Manajemen") ? [20, 0, 0] : 
                                [0, 0, 0];

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: prodi.prodiId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: target[0],
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: target[1],
                                    weekend: target[2],
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 1500, 
                                Identify: 0,
                                Proposal: 11,
                                Potensial: 6,
                                Almost: 0,
                                Finished: 0
                            }

                            await prisma.targetDb.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: temp.targetDb
                                }
                            })

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }


                        if(
                            jenisPilihan.namaJenisPilihan === "S1" && 
                            jenisMasuk.namaJenisMasuk === "Reguler" && 
                            semester.namaSemester === "Genap" && 
                            tahun.namaTahun === "2025"
                        ) {
                            let target = 
                                (prodi.namaProdi === "Teknik Informatika") ? [0, 0, 0] : 
                                (prodi.namaProdi === "Teknik Elektro") ? [0, 0, 0] :
                                (prodi.namaProdi === "Teknik Mesin") ? [0, 0, 0] :
                                (prodi.namaProdi === "Teknik Industri") ? [0, 0, 0] :
                                (prodi.namaProdi === "Teknik Kimia") ? [0, 0, 0] :
                                (prodi.namaProdi === "Teknik Sipil") ? [0, 0, 0] :
                                (prodi.namaProdi === "Arsitektur") ? [0, 0, 0] :
                                (prodi.namaProdi === "Perencanaan Wilayah Kota") ? [0, 0, 0] :
                                (prodi.namaProdi === "Teknologi Industri Pertanian") ? [0, 0, 0] :
                                (prodi.namaProdi === "Manajemen") ? [0, 0, 0] : 
                                [0, 0, 0];

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: prodi.prodiId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: target[0],
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: target[1],
                                    weekend: target[2],
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 60000, 
                                Identify: 11760,
                                Proposal: 0,
                                Potensial: 0,
                                Almost: 0,
                                Finished: 8
                            }

                            await prisma.targetDb.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: temp.targetDb
                                }
                            })

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        
                        if(
                            jenisPilihan.namaJenisPilihan === "S1" && 
                            jenisMasuk.namaJenisMasuk === "Reguler" && 
                            semester.namaSemester === "Ganjil" && 
                            tahun.namaTahun === "2025"
                        ) {
                            let target = 
                                (prodi.namaProdi === "Teknik Informatika") ? [70, 3, 0] : 
                                (prodi.namaProdi === "Teknik Elektro") ? [40, 0, 1] :
                                (prodi.namaProdi === "Teknik Mesin") ? [40, 2, 0] :
                                (prodi.namaProdi === "Teknik Industri") ? [40, 0, 0] :
                                (prodi.namaProdi === "Teknik Kimia") ? [40, 0, 0] :
                                (prodi.namaProdi === "Teknik Sipil") ? [30, 2, 0] :
                                (prodi.namaProdi === "Arsitektur") ? [25, 2, 0] :
                                (prodi.namaProdi === "Perencanaan Wilayah Kota") ? [20, 0, 0] :
                                (prodi.namaProdi === "Teknologi Industri Pertanian") ? [20, 0, 0] :
                                (prodi.namaProdi === "Manajemen") ? [25, 1, 0] : 
                                [0, 0, 0];

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: prodi.prodiId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: target[0],
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: target[1],
                                    weekend: target[2],
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 60000, 
                                Identify: 0,
                                Proposal: 41,
                                Potensial: 15,
                                Almost: 18,
                                Finished: 3
                            }

                            await prisma.targetDb.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: temp.targetDb
                                }
                            })

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        
                        if(
                            jenisPilihan.namaJenisPilihan === "PSPPI" && 
                            jenisMasuk.namaJenisMasuk === "Reguler" && 
                            semester.namaSemester === "Ganjil" && 
                            tahun.namaTahun === "2025"
                        ) {

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: null,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: 50,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: 0,
                                    weekend: 0,
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 200, 
                                Identify: 0,
                                Proposal: 0,
                                Potensial: 0,
                                Almost: 0,
                                Finished: 0
                            }

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        
                        if(
                            jenisPilihan.namaJenisPilihan === "PSPPI" && 
                            jenisMasuk.namaJenisMasuk === "RPL" && 
                            semester.namaSemester === "Ganjil" && 
                            tahun.namaTahun === "2025"
                        ) {

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: null,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: 350,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: 0,
                                    weekend: 0,
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 1400, 
                                Identify: 0,
                                Proposal: 0,
                                Potensial: 0,
                                Almost: 0,
                                Finished: 0
                            }

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        
                        if(
                            jenisPilihan.namaJenisPilihan === "PSPPI" && 
                            jenisMasuk.namaJenisMasuk === "RPL" && 
                            semester.namaSemester === "Genap" && 
                            tahun.namaTahun === "2025"
                        ) {

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: null,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: 350,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: 166,
                                    weekend: 0,
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 1400, 
                                Identify: 3006,
                                Proposal: 77,
                                Potensial: 36,
                                Almost: 28,
                                Finished: 166
                            }

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        if(
                            jenisPilihan.namaJenisPilihan === "PSPPI" && 
                            jenisMasuk.namaJenisMasuk === "Reguler" && 
                            semester.namaSemester === "Genap" && 
                            tahun.namaTahun === "2025"
                        ) {

                            created = await prisma.targetIntake.create({
                                data: {
                                    tahunId: tahun.tahunId,
                                    prodiId: null,
                                    jenisMasukId: jenisMasuk.jenisMasukId,
                                    target: 50,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });

                            capaian = await prisma.capaian.create({
                                data: {
                                    weekday: 19,
                                    weekend: 0,
                                    targetIntakeId: created.targetIntakeId,
                                }
                            });

                            let temp = {
                                targetDb: 200, 
                                Identify: 598,
                                Proposal: 11,
                                Potensial: 3,
                                Almost: 6,
                                Finished: 19
                            }

                            for (const status of statusIntakeDb) {
                                await prisma.capaianRincian.create({
                                    data: {
                                        statusIntakeId: status.statusIntakeId,
                                        tahunId: tahun.tahunId,
                                        jenisMasukId: jenisMasuk.jenisMasukId,
                                        capaian: temp[status.namaStatus as keyof typeof temp] ?? 0
                                    }
                                })
                            }
                        }
                        targetIntakeDb.push(created);
                    }
                }
            }
        }
    }



}

main()
    .then(() => {
        console.log('✅ Seeder selesai');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
