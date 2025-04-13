export interface CapaianRincian {
  nama_status_intake: string;
  capaian: number;
}

export interface ProdiItem {
  nama_prodi: string;
  deskripsi: string;
  target_intake: number;
  weekday: number;
  weekend: number;
}

export interface IntakeOutput {
  tahun: number | string;
  semester: string;
  jenis_pilihan: string;
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

export interface Prodi {
  nama_prodi: string;
  deskripsi: string;
  target_intake: number;
  weekday: number;
  weekend: number;
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
