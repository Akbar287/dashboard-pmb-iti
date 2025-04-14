export interface CapaianRincian {
  capaian_id: string;
  nama_status_intake: string;
  capaian: number;
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
  capaian_rincian: CapaianRincian[];
  prodi: ProdiItem[];
}

export interface StatusIntake {
  namaStatus: string;
  persentase: number;
  deskripsi: string;
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