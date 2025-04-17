export interface CapaianRincian {
  capaian_id: string;
  nama_status_intake: string;
  capaian: number;
}

export interface CapaianRincianDetail {
  tahunId: string;
  jenisMasukId: string;
  capaian: number;
  capaianRincianId: string;
  StatusIntake: StatusIntake;
}

export interface ProdiItem {
  prodi_id: string;
  nama_prodi: string;
  deskripsi: string;
  target_intake: number;
  weekday: number;
  weekend: number;
}

export interface IntakeOutput {
  tahun: number | string;
  tahun_id: string;
  semester_id: string;
  semester: string;
  jenis_pilihan_id: string;
  jenis_pilihan: string;
  jenis_masuk_id: string;
  jenis_masuk: string;
  target_db: number;
  target_intake: number;
  targetIntakeId: string;
  capaian_rincian: CapaianRincian[];
  prodi: ProdiItem[];
}

export interface StatusIntake {
  deskripsi: string;
    statusIntakeId: string;
    namaStatus: string;
    persentase: number;
}

export interface TransformedStatus {
  nama_status_intake: string;
  data: number[];
}

export interface TransformedData {
  tahun: (string)[];
  jenis_masuk: string[];
  status: TransformedStatus[];
}

export interface TransformedDataProdi {
  tahun: string[];
  jenis_masuk: string[];
  prodi: {
      nama_prodi: string;
      data: {
          target_intake: number;
          weekday: number;
          weekend: number;
          jumlah: number;
      }[];
  }[];
  no_prodi: {
    jenis_masuk: string;
    data: {
      target_intake: number;
      weekday: number;
      weekend: number;
      jumlah: number;
    }[];
  }[];
};

export interface OutputProdi {
  nama_prodi: string;
  data: {
    target_intake: number;
    weekday: number;
    weekend: number;
    jumlah: number;
  }[];
};

export interface OutputNoProdi {
  nama_prodi: null;
  data: {
    target_intake: number;
    weekday: number;
    weekend: number;
    jumlah: number;
  }[];
};

export interface OutputJson {
  tahun: string[];
  jenis_masuk: string[];
  prodi?: OutputProdi[];
  no_prodi?: OutputNoProdi[];
};

export interface GroupedDataItem {
  jenis_pilihan: string;
  jenis_masuk: string;
  tahun: number;
  data: {
      semester: string;
      target_db: number;
      target_intake: number;
  }[];
}
export interface AuthTypesProps {
  id: string
  username: string
  nama: string
  avatar: string
  email: string
}



export interface Semester {
  semesterId: number;
  namaSemester: string;
}

export interface Tahun {
  tahunId: number;
  namaTahun: string;
  Semester: Semester[];
}

export interface JenisPilihan {
  jenisPilihanId: number;
  namaJenisPilihan: string;
}

export interface JenisMasuk {
  jenisMasukId: number;
  namaJenisMasuk: string;
  JenisPilihan: JenisPilihan[];
}

export interface TargetDb {
  targetDbId: number;
  target: number;
  Tahun: Tahun;
  JenisMasuk: JenisMasuk;
}

export interface Prodi {
  prodiId: number;
  namaProdi: string;
}

export interface Capaian {
  capaianId: number;
  weekday: number;
  weekend: number;
}

export interface TargetIntake {
  targetIntakeId: number;
  target: number;
  Prodi: Prodi;
  Capaian: Capaian;
}

export interface CapaianRincianEdit {
  capaianRincianId: number;
  capaian: number;
  StatusIntake: StatusIntake;
}
