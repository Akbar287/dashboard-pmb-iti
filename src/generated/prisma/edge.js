
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  userId: 'userId',
  nama: 'nama',
  nomorHp: 'nomorHp',
  nomorWa: 'nomorWa',
  username: 'username',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.JenisPilihanScalarFieldEnum = {
  jenisPilihanId: 'jenisPilihanId',
  namaJenisPilihan: 'namaJenisPilihan',
  deskripsi: 'deskripsi'
};

exports.Prisma.JenisMasukScalarFieldEnum = {
  jenisMasukId: 'jenisMasukId',
  jenisPilihanId: 'jenisPilihanId',
  namaJenisMasuk: 'namaJenisMasuk',
  deskripsi: 'deskripsi'
};

exports.Prisma.ProdiScalarFieldEnum = {
  prodiId: 'prodiId',
  namaProdi: 'namaProdi',
  deskripsi: 'deskripsi'
};

exports.Prisma.SemesterScalarFieldEnum = {
  semesterId: 'semesterId',
  namaSemester: 'namaSemester',
  deskripsi: 'deskripsi'
};

exports.Prisma.TahunScalarFieldEnum = {
  tahunId: 'tahunId',
  semesterId: 'semesterId',
  namaTahun: 'namaTahun',
  deskripsi: 'deskripsi'
};

exports.Prisma.TargetDbScalarFieldEnum = {
  targetDbId: 'targetDbId',
  tahunId: 'tahunId',
  jenisMasukId: 'jenisMasukId',
  target: 'target'
};

exports.Prisma.StatusIntakeScalarFieldEnum = {
  statusIntakeId: 'statusIntakeId',
  namaStatus: 'namaStatus',
  persentase: 'persentase',
  deskripsi: 'deskripsi'
};

exports.Prisma.TargetIntakeScalarFieldEnum = {
  targetIntakeId: 'targetIntakeId',
  tahunId: 'tahunId',
  prodiId: 'prodiId',
  jenisMasukId: 'jenisMasukId',
  target: 'target',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CapaianScalarFieldEnum = {
  capaianId: 'capaianId',
  targetIntakeId: 'targetIntakeId',
  weekday: 'weekday',
  weekend: 'weekend'
};

exports.Prisma.CapaianRincianScalarFieldEnum = {
  capaianRincianId: 'capaianRincianId',
  statusIntakeId: 'statusIntakeId',
  tahunId: 'tahunId',
  jenisMasukId: 'jenisMasukId',
  capaian: 'capaian'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  JenisPilihan: 'JenisPilihan',
  JenisMasuk: 'JenisMasuk',
  Prodi: 'Prodi',
  Semester: 'Semester',
  Tahun: 'Tahun',
  TargetDb: 'TargetDb',
  StatusIntake: 'StatusIntake',
  TargetIntake: 'TargetIntake',
  Capaian: 'Capaian',
  CapaianRincian: 'CapaianRincian'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/muhammadakbar/Documents/Projek/Koding/dashboard-pmb-iti/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/muhammadakbar/Documents/Projek/Koding/dashboard-pmb-iti/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  userId    String    @id @default(uuid()) @map(\"user_id\")\n  nama      String    @map(\"nama\")\n  nomorHp   String    @unique @map(\"nomor_hp\")\n  nomorWa   String?   @unique @map(\"nomor_wa\")\n  username  String?   @unique @map(\"username\")\n  email     String?   @unique @map(\"email\")\n  password  String?   @map(\"password\")\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  updatedAt DateTime  @updatedAt @map(\"updated_at\")\n  deletedAt DateTime? @map(\"deleted_at\")\n\n  @@map(\"users\")\n}\n\nmodel JenisPilihan {\n  jenisPilihanId   String       @id @default(uuid()) @map(\"jenis_pilihan_id\")\n  namaJenisPilihan String       @map(\"nama_jenis_pilihan\")\n  deskripsi        String       @map(\"deskripsi\")\n  JenisMasuk       JenisMasuk[]\n\n  @@map(\"jenis_pilihan\")\n}\n\nmodel JenisMasuk {\n  jenisMasukId   String           @id @default(uuid()) @map(\"jenis_masuk_id\")\n  jenisPilihanId String           @map(\"jenis_pilihan_id\")\n  namaJenisMasuk String           @map(\"nama_jenis_masuk\")\n  deskripsi      String           @map(\"deskripsi\")\n  JenisPilihan   JenisPilihan     @relation(fields: [jenisPilihanId], references: [jenisPilihanId])\n  TargetIntake   TargetIntake[]\n  TargetDb       TargetDb[]\n  CapaianRincian CapaianRincian[]\n\n  @@map(\"jenis_masuk\")\n}\n\nmodel Prodi {\n  prodiId      String         @id @default(uuid()) @map(\"prodi_id\")\n  namaProdi    String         @map(\"nama_prodi\")\n  deskripsi    String         @map(\"deskripsi\")\n  TargetIntake TargetIntake[]\n\n  @@map(\"prodi\")\n}\n\nmodel Semester {\n  semesterId   String  @id @default(uuid()) @map(\"semester_id\")\n  namaSemester String  @map(\"nama_semester\")\n  deskripsi    String  @map(\"deskripsi\")\n  Tahun        Tahun[]\n\n  @@map(\"semester\")\n}\n\nmodel Tahun {\n  tahunId        String           @id @default(uuid()) @map(\"tahun_id\")\n  semesterId     String           @map(\"semester_id\")\n  namaTahun      String           @map(\"nama_tahun\")\n  deskripsi      String           @map(\"deskripsi\")\n  Semester       Semester         @relation(fields: [semesterId], references: [semesterId])\n  TargetIntake   TargetIntake[]\n  TargetDb       TargetDb[]\n  CapaianRincian CapaianRincian[]\n\n  @@map(\"tahun\")\n}\n\nmodel TargetDb {\n  targetDbId   String     @id @default(uuid()) @map(\"target_db_id\")\n  tahunId      String     @map(\"tahun_id\")\n  jenisMasukId String     @map(\"jenis_masuk_id\")\n  target       Int        @map(\"target\")\n  Tahun        Tahun      @relation(fields: [tahunId], references: [tahunId])\n  JenisMasuk   JenisMasuk @relation(fields: [jenisMasukId], references: [jenisMasukId])\n\n  @@map(\"target_db\")\n}\n\nmodel StatusIntake {\n  statusIntakeId String           @id @default(uuid()) @map(\"status_intake_id\")\n  namaStatus     String           @map(\"nama_status\")\n  persentase     Int              @map(\"persentase\")\n  deskripsi      String           @map(\"deskripsi\")\n  CapaianRincian CapaianRincian[]\n\n  @@map(\"status_intake\")\n}\n\nmodel TargetIntake {\n  targetIntakeId String     @id @default(uuid()) @map(\"target_intake_id\")\n  tahunId        String     @map(\"tahun_id\")\n  prodiId        String?    @map(\"prodi_id\")\n  jenisMasukId   String     @map(\"jenis_masuk_id\")\n  target         Int        @map(\"kuota\")\n  createdAt      DateTime   @default(now()) @map(\"created_at\")\n  updatedAt      DateTime   @updatedAt @map(\"updated_at\")\n  Tahun          Tahun      @relation(fields: [tahunId], references: [tahunId])\n  Prodi          Prodi?     @relation(fields: [prodiId], references: [prodiId])\n  JenisMasuk     JenisMasuk @relation(fields: [jenisMasukId], references: [jenisMasukId])\n  Capaian        Capaian[]\n\n  @@map(\"target_intake\")\n}\n\nmodel Capaian {\n  capaianId      String       @id @default(uuid()) @map(\"capaian_id\")\n  targetIntakeId String       @map(\"target_intake_id\")\n  weekday        Int          @map(\"weekday\")\n  weekend        Int          @map(\"weekend\")\n  TargetIntake   TargetIntake @relation(fields: [targetIntakeId], references: [targetIntakeId])\n\n  @@map(\"capaian\")\n}\n\nmodel CapaianRincian {\n  capaianRincianId String       @id @default(uuid()) @map(\"capaian_rincian_id\")\n  statusIntakeId   String       @map(\"status_intake_id\")\n  tahunId          String       @map(\"tahun_id\")\n  jenisMasukId     String       @map(\"jenis_masuk_id\")\n  capaian          Int          @map(\"capaian\")\n  StatusIntake     StatusIntake @relation(fields: [statusIntakeId], references: [statusIntakeId])\n  Tahun            Tahun        @relation(fields: [tahunId], references: [tahunId])\n  JenisMasuk       JenisMasuk   @relation(fields: [jenisMasukId], references: [jenisMasukId])\n\n  @@map(\"capaian_rincian\")\n}\n",
  "inlineSchemaHash": "4041f180f2b110fd51a936f92df45def60ace5a2f57d6ed85c7b600234f75cde",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"dbName\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomorHp\",\"dbName\":\"nomor_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomorWa\",\"dbName\":\"nomor_wa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"dbName\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"dbName\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JenisPilihan\":{\"dbName\":\"jenis_pilihan\",\"schema\":null,\"fields\":[{\"name\":\"jenisPilihanId\",\"dbName\":\"jenis_pilihan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaJenisPilihan\",\"dbName\":\"nama_jenis_pilihan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisMasuk\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisMasuk\",\"nativeType\":null,\"relationName\":\"JenisMasukToJenisPilihan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JenisMasuk\":{\"dbName\":\"jenis_masuk\",\"schema\":null,\"fields\":[{\"name\":\"jenisMasukId\",\"dbName\":\"jenis_masuk_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisPilihanId\",\"dbName\":\"jenis_pilihan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaJenisMasuk\",\"dbName\":\"nama_jenis_masuk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisPilihan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisPilihan\",\"nativeType\":null,\"relationName\":\"JenisMasukToJenisPilihan\",\"relationFromFields\":[\"jenisPilihanId\"],\"relationToFields\":[\"jenisPilihanId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetIntake\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetIntake\",\"nativeType\":null,\"relationName\":\"JenisMasukToTargetIntake\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetDb\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetDb\",\"nativeType\":null,\"relationName\":\"JenisMasukToTargetDb\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CapaianRincian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CapaianRincian\",\"nativeType\":null,\"relationName\":\"CapaianRincianToJenisMasuk\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Prodi\":{\"dbName\":\"prodi\",\"schema\":null,\"fields\":[{\"name\":\"prodiId\",\"dbName\":\"prodi_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaProdi\",\"dbName\":\"nama_prodi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetIntake\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetIntake\",\"nativeType\":null,\"relationName\":\"ProdiToTargetIntake\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Semester\":{\"dbName\":\"semester\",\"schema\":null,\"fields\":[{\"name\":\"semesterId\",\"dbName\":\"semester_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaSemester\",\"dbName\":\"nama_semester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tahun\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tahun\",\"nativeType\":null,\"relationName\":\"SemesterToTahun\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tahun\":{\"dbName\":\"tahun\",\"schema\":null,\"fields\":[{\"name\":\"tahunId\",\"dbName\":\"tahun_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"dbName\":\"semester_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaTahun\",\"dbName\":\"nama_tahun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Semester\",\"nativeType\":null,\"relationName\":\"SemesterToTahun\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"semesterId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetIntake\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetIntake\",\"nativeType\":null,\"relationName\":\"TahunToTargetIntake\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetDb\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetDb\",\"nativeType\":null,\"relationName\":\"TahunToTargetDb\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CapaianRincian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CapaianRincian\",\"nativeType\":null,\"relationName\":\"CapaianRincianToTahun\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TargetDb\":{\"dbName\":\"target_db\",\"schema\":null,\"fields\":[{\"name\":\"targetDbId\",\"dbName\":\"target_db_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tahunId\",\"dbName\":\"tahun_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisMasukId\",\"dbName\":\"jenis_masuk_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target\",\"dbName\":\"target\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tahun\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tahun\",\"nativeType\":null,\"relationName\":\"TahunToTargetDb\",\"relationFromFields\":[\"tahunId\"],\"relationToFields\":[\"tahunId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisMasuk\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisMasuk\",\"nativeType\":null,\"relationName\":\"JenisMasukToTargetDb\",\"relationFromFields\":[\"jenisMasukId\"],\"relationToFields\":[\"jenisMasukId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusIntake\":{\"dbName\":\"status_intake\",\"schema\":null,\"fields\":[{\"name\":\"statusIntakeId\",\"dbName\":\"status_intake_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaStatus\",\"dbName\":\"nama_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persentase\",\"dbName\":\"persentase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"dbName\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CapaianRincian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CapaianRincian\",\"nativeType\":null,\"relationName\":\"CapaianRincianToStatusIntake\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TargetIntake\":{\"dbName\":\"target_intake\",\"schema\":null,\"fields\":[{\"name\":\"targetIntakeId\",\"dbName\":\"target_intake_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tahunId\",\"dbName\":\"tahun_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prodiId\",\"dbName\":\"prodi_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisMasukId\",\"dbName\":\"jenis_masuk_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target\",\"dbName\":\"kuota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Tahun\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tahun\",\"nativeType\":null,\"relationName\":\"TahunToTargetIntake\",\"relationFromFields\":[\"tahunId\"],\"relationToFields\":[\"tahunId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Prodi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prodi\",\"nativeType\":null,\"relationName\":\"ProdiToTargetIntake\",\"relationFromFields\":[\"prodiId\"],\"relationToFields\":[\"prodiId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisMasuk\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisMasuk\",\"nativeType\":null,\"relationName\":\"JenisMasukToTargetIntake\",\"relationFromFields\":[\"jenisMasukId\"],\"relationToFields\":[\"jenisMasukId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Capaian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Capaian\",\"nativeType\":null,\"relationName\":\"CapaianToTargetIntake\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Capaian\":{\"dbName\":\"capaian\",\"schema\":null,\"fields\":[{\"name\":\"capaianId\",\"dbName\":\"capaian_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetIntakeId\",\"dbName\":\"target_intake_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weekday\",\"dbName\":\"weekday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weekend\",\"dbName\":\"weekend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TargetIntake\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TargetIntake\",\"nativeType\":null,\"relationName\":\"CapaianToTargetIntake\",\"relationFromFields\":[\"targetIntakeId\"],\"relationToFields\":[\"targetIntakeId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CapaianRincian\":{\"dbName\":\"capaian_rincian\",\"schema\":null,\"fields\":[{\"name\":\"capaianRincianId\",\"dbName\":\"capaian_rincian_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusIntakeId\",\"dbName\":\"status_intake_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tahunId\",\"dbName\":\"tahun_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisMasukId\",\"dbName\":\"jenis_masuk_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capaian\",\"dbName\":\"capaian\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StatusIntake\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusIntake\",\"nativeType\":null,\"relationName\":\"CapaianRincianToStatusIntake\",\"relationFromFields\":[\"statusIntakeId\"],\"relationToFields\":[\"statusIntakeId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tahun\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tahun\",\"nativeType\":null,\"relationName\":\"CapaianRincianToTahun\",\"relationFromFields\":[\"tahunId\"],\"relationToFields\":[\"tahunId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisMasuk\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisMasuk\",\"nativeType\":null,\"relationName\":\"CapaianRincianToJenisMasuk\",\"relationFromFields\":[\"jenisMasukId\"],\"relationToFields\":[\"jenisMasukId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

