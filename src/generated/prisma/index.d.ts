
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JenisPilihan
 * 
 */
export type JenisPilihan = $Result.DefaultSelection<Prisma.$JenisPilihanPayload>
/**
 * Model JenisMasuk
 * 
 */
export type JenisMasuk = $Result.DefaultSelection<Prisma.$JenisMasukPayload>
/**
 * Model Prodi
 * 
 */
export type Prodi = $Result.DefaultSelection<Prisma.$ProdiPayload>
/**
 * Model Semester
 * 
 */
export type Semester = $Result.DefaultSelection<Prisma.$SemesterPayload>
/**
 * Model Tahun
 * 
 */
export type Tahun = $Result.DefaultSelection<Prisma.$TahunPayload>
/**
 * Model TargetDb
 * 
 */
export type TargetDb = $Result.DefaultSelection<Prisma.$TargetDbPayload>
/**
 * Model StatusIntake
 * 
 */
export type StatusIntake = $Result.DefaultSelection<Prisma.$StatusIntakePayload>
/**
 * Model TargetIntake
 * 
 */
export type TargetIntake = $Result.DefaultSelection<Prisma.$TargetIntakePayload>
/**
 * Model Capaian
 * 
 */
export type Capaian = $Result.DefaultSelection<Prisma.$CapaianPayload>
/**
 * Model CapaianRincian
 * 
 */
export type CapaianRincian = $Result.DefaultSelection<Prisma.$CapaianRincianPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisPilihan`: Exposes CRUD operations for the **JenisPilihan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisPilihans
    * const jenisPilihans = await prisma.jenisPilihan.findMany()
    * ```
    */
  get jenisPilihan(): Prisma.JenisPilihanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisMasuk`: Exposes CRUD operations for the **JenisMasuk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisMasuks
    * const jenisMasuks = await prisma.jenisMasuk.findMany()
    * ```
    */
  get jenisMasuk(): Prisma.JenisMasukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prodi`: Exposes CRUD operations for the **Prodi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prodis
    * const prodis = await prisma.prodi.findMany()
    * ```
    */
  get prodi(): Prisma.ProdiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **Semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.SemesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tahun`: Exposes CRUD operations for the **Tahun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tahuns
    * const tahuns = await prisma.tahun.findMany()
    * ```
    */
  get tahun(): Prisma.TahunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targetDb`: Exposes CRUD operations for the **TargetDb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetDbs
    * const targetDbs = await prisma.targetDb.findMany()
    * ```
    */
  get targetDb(): Prisma.TargetDbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusIntake`: Exposes CRUD operations for the **StatusIntake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusIntakes
    * const statusIntakes = await prisma.statusIntake.findMany()
    * ```
    */
  get statusIntake(): Prisma.StatusIntakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targetIntake`: Exposes CRUD operations for the **TargetIntake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetIntakes
    * const targetIntakes = await prisma.targetIntake.findMany()
    * ```
    */
  get targetIntake(): Prisma.TargetIntakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capaian`: Exposes CRUD operations for the **Capaian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capaians
    * const capaians = await prisma.capaian.findMany()
    * ```
    */
  get capaian(): Prisma.CapaianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capaianRincian`: Exposes CRUD operations for the **CapaianRincian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapaianRincians
    * const capaianRincians = await prisma.capaianRincian.findMany()
    * ```
    */
  get capaianRincian(): Prisma.CapaianRincianDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "jenisPilihan" | "jenisMasuk" | "prodi" | "semester" | "tahun" | "targetDb" | "statusIntake" | "targetIntake" | "capaian" | "capaianRincian"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JenisPilihan: {
        payload: Prisma.$JenisPilihanPayload<ExtArgs>
        fields: Prisma.JenisPilihanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisPilihanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisPilihanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          findFirst: {
            args: Prisma.JenisPilihanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisPilihanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          findMany: {
            args: Prisma.JenisPilihanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>[]
          }
          create: {
            args: Prisma.JenisPilihanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          createMany: {
            args: Prisma.JenisPilihanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisPilihanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>[]
          }
          delete: {
            args: Prisma.JenisPilihanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          update: {
            args: Prisma.JenisPilihanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          deleteMany: {
            args: Prisma.JenisPilihanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisPilihanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JenisPilihanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>[]
          }
          upsert: {
            args: Prisma.JenisPilihanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPilihanPayload>
          }
          aggregate: {
            args: Prisma.JenisPilihanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisPilihan>
          }
          groupBy: {
            args: Prisma.JenisPilihanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisPilihanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisPilihanCountArgs<ExtArgs>
            result: $Utils.Optional<JenisPilihanCountAggregateOutputType> | number
          }
        }
      }
      JenisMasuk: {
        payload: Prisma.$JenisMasukPayload<ExtArgs>
        fields: Prisma.JenisMasukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisMasukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisMasukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          findFirst: {
            args: Prisma.JenisMasukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisMasukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          findMany: {
            args: Prisma.JenisMasukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>[]
          }
          create: {
            args: Prisma.JenisMasukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          createMany: {
            args: Prisma.JenisMasukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisMasukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>[]
          }
          delete: {
            args: Prisma.JenisMasukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          update: {
            args: Prisma.JenisMasukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          deleteMany: {
            args: Prisma.JenisMasukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisMasukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JenisMasukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>[]
          }
          upsert: {
            args: Prisma.JenisMasukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisMasukPayload>
          }
          aggregate: {
            args: Prisma.JenisMasukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisMasuk>
          }
          groupBy: {
            args: Prisma.JenisMasukGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisMasukGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisMasukCountArgs<ExtArgs>
            result: $Utils.Optional<JenisMasukCountAggregateOutputType> | number
          }
        }
      }
      Prodi: {
        payload: Prisma.$ProdiPayload<ExtArgs>
        fields: Prisma.ProdiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          findFirst: {
            args: Prisma.ProdiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          findMany: {
            args: Prisma.ProdiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>[]
          }
          create: {
            args: Prisma.ProdiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          createMany: {
            args: Prisma.ProdiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>[]
          }
          delete: {
            args: Prisma.ProdiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          update: {
            args: Prisma.ProdiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          deleteMany: {
            args: Prisma.ProdiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>[]
          }
          upsert: {
            args: Prisma.ProdiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdiPayload>
          }
          aggregate: {
            args: Prisma.ProdiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdi>
          }
          groupBy: {
            args: Prisma.ProdiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdiCountArgs<ExtArgs>
            result: $Utils.Optional<ProdiCountAggregateOutputType> | number
          }
        }
      }
      Semester: {
        payload: Prisma.$SemesterPayload<ExtArgs>
        fields: Prisma.SemesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findFirst: {
            args: Prisma.SemesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findMany: {
            args: Prisma.SemesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          create: {
            args: Prisma.SemesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          createMany: {
            args: Prisma.SemesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SemesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          delete: {
            args: Prisma.SemesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          update: {
            args: Prisma.SemesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          deleteMany: {
            args: Prisma.SemesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SemesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          upsert: {
            args: Prisma.SemesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.SemesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      Tahun: {
        payload: Prisma.$TahunPayload<ExtArgs>
        fields: Prisma.TahunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TahunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TahunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          findFirst: {
            args: Prisma.TahunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TahunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          findMany: {
            args: Prisma.TahunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>[]
          }
          create: {
            args: Prisma.TahunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          createMany: {
            args: Prisma.TahunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TahunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>[]
          }
          delete: {
            args: Prisma.TahunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          update: {
            args: Prisma.TahunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          deleteMany: {
            args: Prisma.TahunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TahunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TahunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>[]
          }
          upsert: {
            args: Prisma.TahunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TahunPayload>
          }
          aggregate: {
            args: Prisma.TahunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTahun>
          }
          groupBy: {
            args: Prisma.TahunGroupByArgs<ExtArgs>
            result: $Utils.Optional<TahunGroupByOutputType>[]
          }
          count: {
            args: Prisma.TahunCountArgs<ExtArgs>
            result: $Utils.Optional<TahunCountAggregateOutputType> | number
          }
        }
      }
      TargetDb: {
        payload: Prisma.$TargetDbPayload<ExtArgs>
        fields: Prisma.TargetDbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetDbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetDbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          findFirst: {
            args: Prisma.TargetDbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetDbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          findMany: {
            args: Prisma.TargetDbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>[]
          }
          create: {
            args: Prisma.TargetDbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          createMany: {
            args: Prisma.TargetDbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetDbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>[]
          }
          delete: {
            args: Prisma.TargetDbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          update: {
            args: Prisma.TargetDbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          deleteMany: {
            args: Prisma.TargetDbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetDbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetDbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>[]
          }
          upsert: {
            args: Prisma.TargetDbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetDbPayload>
          }
          aggregate: {
            args: Prisma.TargetDbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetDb>
          }
          groupBy: {
            args: Prisma.TargetDbGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetDbGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetDbCountArgs<ExtArgs>
            result: $Utils.Optional<TargetDbCountAggregateOutputType> | number
          }
        }
      }
      StatusIntake: {
        payload: Prisma.$StatusIntakePayload<ExtArgs>
        fields: Prisma.StatusIntakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusIntakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusIntakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          findFirst: {
            args: Prisma.StatusIntakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusIntakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          findMany: {
            args: Prisma.StatusIntakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>[]
          }
          create: {
            args: Prisma.StatusIntakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          createMany: {
            args: Prisma.StatusIntakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusIntakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>[]
          }
          delete: {
            args: Prisma.StatusIntakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          update: {
            args: Prisma.StatusIntakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          deleteMany: {
            args: Prisma.StatusIntakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusIntakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusIntakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>[]
          }
          upsert: {
            args: Prisma.StatusIntakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusIntakePayload>
          }
          aggregate: {
            args: Prisma.StatusIntakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusIntake>
          }
          groupBy: {
            args: Prisma.StatusIntakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusIntakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusIntakeCountArgs<ExtArgs>
            result: $Utils.Optional<StatusIntakeCountAggregateOutputType> | number
          }
        }
      }
      TargetIntake: {
        payload: Prisma.$TargetIntakePayload<ExtArgs>
        fields: Prisma.TargetIntakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetIntakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetIntakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          findFirst: {
            args: Prisma.TargetIntakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetIntakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          findMany: {
            args: Prisma.TargetIntakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>[]
          }
          create: {
            args: Prisma.TargetIntakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          createMany: {
            args: Prisma.TargetIntakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetIntakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>[]
          }
          delete: {
            args: Prisma.TargetIntakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          update: {
            args: Prisma.TargetIntakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          deleteMany: {
            args: Prisma.TargetIntakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetIntakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetIntakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>[]
          }
          upsert: {
            args: Prisma.TargetIntakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIntakePayload>
          }
          aggregate: {
            args: Prisma.TargetIntakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetIntake>
          }
          groupBy: {
            args: Prisma.TargetIntakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetIntakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetIntakeCountArgs<ExtArgs>
            result: $Utils.Optional<TargetIntakeCountAggregateOutputType> | number
          }
        }
      }
      Capaian: {
        payload: Prisma.$CapaianPayload<ExtArgs>
        fields: Prisma.CapaianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapaianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapaianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          findFirst: {
            args: Prisma.CapaianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapaianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          findMany: {
            args: Prisma.CapaianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>[]
          }
          create: {
            args: Prisma.CapaianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          createMany: {
            args: Prisma.CapaianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapaianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>[]
          }
          delete: {
            args: Prisma.CapaianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          update: {
            args: Prisma.CapaianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          deleteMany: {
            args: Prisma.CapaianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapaianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapaianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>[]
          }
          upsert: {
            args: Prisma.CapaianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPayload>
          }
          aggregate: {
            args: Prisma.CapaianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapaian>
          }
          groupBy: {
            args: Prisma.CapaianGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapaianGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapaianCountArgs<ExtArgs>
            result: $Utils.Optional<CapaianCountAggregateOutputType> | number
          }
        }
      }
      CapaianRincian: {
        payload: Prisma.$CapaianRincianPayload<ExtArgs>
        fields: Prisma.CapaianRincianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapaianRincianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapaianRincianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          findFirst: {
            args: Prisma.CapaianRincianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapaianRincianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          findMany: {
            args: Prisma.CapaianRincianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>[]
          }
          create: {
            args: Prisma.CapaianRincianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          createMany: {
            args: Prisma.CapaianRincianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapaianRincianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>[]
          }
          delete: {
            args: Prisma.CapaianRincianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          update: {
            args: Prisma.CapaianRincianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          deleteMany: {
            args: Prisma.CapaianRincianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapaianRincianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapaianRincianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>[]
          }
          upsert: {
            args: Prisma.CapaianRincianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianRincianPayload>
          }
          aggregate: {
            args: Prisma.CapaianRincianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapaianRincian>
          }
          groupBy: {
            args: Prisma.CapaianRincianGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapaianRincianGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapaianRincianCountArgs<ExtArgs>
            result: $Utils.Optional<CapaianRincianCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    jenisPilihan?: JenisPilihanOmit
    jenisMasuk?: JenisMasukOmit
    prodi?: ProdiOmit
    semester?: SemesterOmit
    tahun?: TahunOmit
    targetDb?: TargetDbOmit
    statusIntake?: StatusIntakeOmit
    targetIntake?: TargetIntakeOmit
    capaian?: CapaianOmit
    capaianRincian?: CapaianRincianOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JenisPilihanCountOutputType
   */

  export type JenisPilihanCountOutputType = {
    JenisMasuk: number
  }

  export type JenisPilihanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JenisMasuk?: boolean | JenisPilihanCountOutputTypeCountJenisMasukArgs
  }

  // Custom InputTypes
  /**
   * JenisPilihanCountOutputType without action
   */
  export type JenisPilihanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihanCountOutputType
     */
    select?: JenisPilihanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisPilihanCountOutputType without action
   */
  export type JenisPilihanCountOutputTypeCountJenisMasukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisMasukWhereInput
  }


  /**
   * Count Type JenisMasukCountOutputType
   */

  export type JenisMasukCountOutputType = {
    TargetIntake: number
    TargetDb: number
    CapaianRincian: number
  }

  export type JenisMasukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | JenisMasukCountOutputTypeCountTargetIntakeArgs
    TargetDb?: boolean | JenisMasukCountOutputTypeCountTargetDbArgs
    CapaianRincian?: boolean | JenisMasukCountOutputTypeCountCapaianRincianArgs
  }

  // Custom InputTypes
  /**
   * JenisMasukCountOutputType without action
   */
  export type JenisMasukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasukCountOutputType
     */
    select?: JenisMasukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisMasukCountOutputType without action
   */
  export type JenisMasukCountOutputTypeCountTargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetIntakeWhereInput
  }

  /**
   * JenisMasukCountOutputType without action
   */
  export type JenisMasukCountOutputTypeCountTargetDbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetDbWhereInput
  }

  /**
   * JenisMasukCountOutputType without action
   */
  export type JenisMasukCountOutputTypeCountCapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianRincianWhereInput
  }


  /**
   * Count Type ProdiCountOutputType
   */

  export type ProdiCountOutputType = {
    TargetIntake: number
  }

  export type ProdiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | ProdiCountOutputTypeCountTargetIntakeArgs
  }

  // Custom InputTypes
  /**
   * ProdiCountOutputType without action
   */
  export type ProdiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdiCountOutputType
     */
    select?: ProdiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdiCountOutputType without action
   */
  export type ProdiCountOutputTypeCountTargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetIntakeWhereInput
  }


  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    Tahun: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | SemesterCountOutputTypeCountTahunArgs
  }

  // Custom InputTypes
  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountTahunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TahunWhereInput
  }


  /**
   * Count Type TahunCountOutputType
   */

  export type TahunCountOutputType = {
    TargetIntake: number
    TargetDb: number
    CapaianRincian: number
  }

  export type TahunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | TahunCountOutputTypeCountTargetIntakeArgs
    TargetDb?: boolean | TahunCountOutputTypeCountTargetDbArgs
    CapaianRincian?: boolean | TahunCountOutputTypeCountCapaianRincianArgs
  }

  // Custom InputTypes
  /**
   * TahunCountOutputType without action
   */
  export type TahunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TahunCountOutputType
     */
    select?: TahunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TahunCountOutputType without action
   */
  export type TahunCountOutputTypeCountTargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetIntakeWhereInput
  }

  /**
   * TahunCountOutputType without action
   */
  export type TahunCountOutputTypeCountTargetDbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetDbWhereInput
  }

  /**
   * TahunCountOutputType without action
   */
  export type TahunCountOutputTypeCountCapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianRincianWhereInput
  }


  /**
   * Count Type StatusIntakeCountOutputType
   */

  export type StatusIntakeCountOutputType = {
    CapaianRincian: number
  }

  export type StatusIntakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CapaianRincian?: boolean | StatusIntakeCountOutputTypeCountCapaianRincianArgs
  }

  // Custom InputTypes
  /**
   * StatusIntakeCountOutputType without action
   */
  export type StatusIntakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntakeCountOutputType
     */
    select?: StatusIntakeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusIntakeCountOutputType without action
   */
  export type StatusIntakeCountOutputTypeCountCapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianRincianWhereInput
  }


  /**
   * Count Type TargetIntakeCountOutputType
   */

  export type TargetIntakeCountOutputType = {
    Capaian: number
  }

  export type TargetIntakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capaian?: boolean | TargetIntakeCountOutputTypeCountCapaianArgs
  }

  // Custom InputTypes
  /**
   * TargetIntakeCountOutputType without action
   */
  export type TargetIntakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntakeCountOutputType
     */
    select?: TargetIntakeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TargetIntakeCountOutputType without action
   */
  export type TargetIntakeCountOutputTypeCountCapaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    nama: string | null
    nomorHp: string | null
    nomorWa: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    nama: string | null
    nomorHp: string | null
    nomorWa: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    nama: number
    nomorHp: number
    nomorWa: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    nama?: true
    nomorHp?: true
    nomorWa?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    nama?: true
    nomorHp?: true
    nomorWa?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    nama?: true
    nomorHp?: true
    nomorWa?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    nama: string
    nomorHp: string
    nomorWa: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    nama?: boolean
    nomorHp?: boolean
    nomorWa?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    nama?: boolean
    nomorHp?: boolean
    nomorWa?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    nama?: boolean
    nomorHp?: boolean
    nomorWa?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    nama?: boolean
    nomorHp?: boolean
    nomorWa?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "nama" | "nomorHp" | "nomorWa" | "username" | "email" | "password" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      nama: string
      nomorHp: string
      nomorWa: string | null
      username: string | null
      email: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly nomorHp: FieldRef<"User", 'String'>
    readonly nomorWa: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model JenisPilihan
   */

  export type AggregateJenisPilihan = {
    _count: JenisPilihanCountAggregateOutputType | null
    _min: JenisPilihanMinAggregateOutputType | null
    _max: JenisPilihanMaxAggregateOutputType | null
  }

  export type JenisPilihanMinAggregateOutputType = {
    jenisPilihanId: string | null
    namaJenisPilihan: string | null
    deskripsi: string | null
  }

  export type JenisPilihanMaxAggregateOutputType = {
    jenisPilihanId: string | null
    namaJenisPilihan: string | null
    deskripsi: string | null
  }

  export type JenisPilihanCountAggregateOutputType = {
    jenisPilihanId: number
    namaJenisPilihan: number
    deskripsi: number
    _all: number
  }


  export type JenisPilihanMinAggregateInputType = {
    jenisPilihanId?: true
    namaJenisPilihan?: true
    deskripsi?: true
  }

  export type JenisPilihanMaxAggregateInputType = {
    jenisPilihanId?: true
    namaJenisPilihan?: true
    deskripsi?: true
  }

  export type JenisPilihanCountAggregateInputType = {
    jenisPilihanId?: true
    namaJenisPilihan?: true
    deskripsi?: true
    _all?: true
  }

  export type JenisPilihanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisPilihan to aggregate.
     */
    where?: JenisPilihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPilihans to fetch.
     */
    orderBy?: JenisPilihanOrderByWithRelationInput | JenisPilihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisPilihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPilihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPilihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisPilihans
    **/
    _count?: true | JenisPilihanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisPilihanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisPilihanMaxAggregateInputType
  }

  export type GetJenisPilihanAggregateType<T extends JenisPilihanAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisPilihan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisPilihan[P]>
      : GetScalarType<T[P], AggregateJenisPilihan[P]>
  }




  export type JenisPilihanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisPilihanWhereInput
    orderBy?: JenisPilihanOrderByWithAggregationInput | JenisPilihanOrderByWithAggregationInput[]
    by: JenisPilihanScalarFieldEnum[] | JenisPilihanScalarFieldEnum
    having?: JenisPilihanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisPilihanCountAggregateInputType | true
    _min?: JenisPilihanMinAggregateInputType
    _max?: JenisPilihanMaxAggregateInputType
  }

  export type JenisPilihanGroupByOutputType = {
    jenisPilihanId: string
    namaJenisPilihan: string
    deskripsi: string
    _count: JenisPilihanCountAggregateOutputType | null
    _min: JenisPilihanMinAggregateOutputType | null
    _max: JenisPilihanMaxAggregateOutputType | null
  }

  type GetJenisPilihanGroupByPayload<T extends JenisPilihanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisPilihanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisPilihanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisPilihanGroupByOutputType[P]>
            : GetScalarType<T[P], JenisPilihanGroupByOutputType[P]>
        }
      >
    >


  export type JenisPilihanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisPilihanId?: boolean
    namaJenisPilihan?: boolean
    deskripsi?: boolean
    JenisMasuk?: boolean | JenisPilihan$JenisMasukArgs<ExtArgs>
    _count?: boolean | JenisPilihanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisPilihan"]>

  export type JenisPilihanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisPilihanId?: boolean
    namaJenisPilihan?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["jenisPilihan"]>

  export type JenisPilihanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisPilihanId?: boolean
    namaJenisPilihan?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["jenisPilihan"]>

  export type JenisPilihanSelectScalar = {
    jenisPilihanId?: boolean
    namaJenisPilihan?: boolean
    deskripsi?: boolean
  }

  export type JenisPilihanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jenisPilihanId" | "namaJenisPilihan" | "deskripsi", ExtArgs["result"]["jenisPilihan"]>
  export type JenisPilihanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JenisMasuk?: boolean | JenisPilihan$JenisMasukArgs<ExtArgs>
    _count?: boolean | JenisPilihanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JenisPilihanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JenisPilihanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JenisPilihanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisPilihan"
    objects: {
      JenisMasuk: Prisma.$JenisMasukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      jenisPilihanId: string
      namaJenisPilihan: string
      deskripsi: string
    }, ExtArgs["result"]["jenisPilihan"]>
    composites: {}
  }

  type JenisPilihanGetPayload<S extends boolean | null | undefined | JenisPilihanDefaultArgs> = $Result.GetResult<Prisma.$JenisPilihanPayload, S>

  type JenisPilihanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisPilihanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisPilihanCountAggregateInputType | true
    }

  export interface JenisPilihanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisPilihan'], meta: { name: 'JenisPilihan' } }
    /**
     * Find zero or one JenisPilihan that matches the filter.
     * @param {JenisPilihanFindUniqueArgs} args - Arguments to find a JenisPilihan
     * @example
     * // Get one JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisPilihanFindUniqueArgs>(args: SelectSubset<T, JenisPilihanFindUniqueArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisPilihan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisPilihanFindUniqueOrThrowArgs} args - Arguments to find a JenisPilihan
     * @example
     * // Get one JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisPilihanFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisPilihanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisPilihan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanFindFirstArgs} args - Arguments to find a JenisPilihan
     * @example
     * // Get one JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisPilihanFindFirstArgs>(args?: SelectSubset<T, JenisPilihanFindFirstArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisPilihan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanFindFirstOrThrowArgs} args - Arguments to find a JenisPilihan
     * @example
     * // Get one JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisPilihanFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisPilihanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisPilihans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisPilihans
     * const jenisPilihans = await prisma.jenisPilihan.findMany()
     * 
     * // Get first 10 JenisPilihans
     * const jenisPilihans = await prisma.jenisPilihan.findMany({ take: 10 })
     * 
     * // Only select the `jenisPilihanId`
     * const jenisPilihanWithJenisPilihanIdOnly = await prisma.jenisPilihan.findMany({ select: { jenisPilihanId: true } })
     * 
     */
    findMany<T extends JenisPilihanFindManyArgs>(args?: SelectSubset<T, JenisPilihanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisPilihan.
     * @param {JenisPilihanCreateArgs} args - Arguments to create a JenisPilihan.
     * @example
     * // Create one JenisPilihan
     * const JenisPilihan = await prisma.jenisPilihan.create({
     *   data: {
     *     // ... data to create a JenisPilihan
     *   }
     * })
     * 
     */
    create<T extends JenisPilihanCreateArgs>(args: SelectSubset<T, JenisPilihanCreateArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisPilihans.
     * @param {JenisPilihanCreateManyArgs} args - Arguments to create many JenisPilihans.
     * @example
     * // Create many JenisPilihans
     * const jenisPilihan = await prisma.jenisPilihan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisPilihanCreateManyArgs>(args?: SelectSubset<T, JenisPilihanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisPilihans and returns the data saved in the database.
     * @param {JenisPilihanCreateManyAndReturnArgs} args - Arguments to create many JenisPilihans.
     * @example
     * // Create many JenisPilihans
     * const jenisPilihan = await prisma.jenisPilihan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisPilihans and only return the `jenisPilihanId`
     * const jenisPilihanWithJenisPilihanIdOnly = await prisma.jenisPilihan.createManyAndReturn({
     *   select: { jenisPilihanId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisPilihanCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisPilihanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JenisPilihan.
     * @param {JenisPilihanDeleteArgs} args - Arguments to delete one JenisPilihan.
     * @example
     * // Delete one JenisPilihan
     * const JenisPilihan = await prisma.jenisPilihan.delete({
     *   where: {
     *     // ... filter to delete one JenisPilihan
     *   }
     * })
     * 
     */
    delete<T extends JenisPilihanDeleteArgs>(args: SelectSubset<T, JenisPilihanDeleteArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisPilihan.
     * @param {JenisPilihanUpdateArgs} args - Arguments to update one JenisPilihan.
     * @example
     * // Update one JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisPilihanUpdateArgs>(args: SelectSubset<T, JenisPilihanUpdateArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisPilihans.
     * @param {JenisPilihanDeleteManyArgs} args - Arguments to filter JenisPilihans to delete.
     * @example
     * // Delete a few JenisPilihans
     * const { count } = await prisma.jenisPilihan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisPilihanDeleteManyArgs>(args?: SelectSubset<T, JenisPilihanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisPilihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisPilihans
     * const jenisPilihan = await prisma.jenisPilihan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisPilihanUpdateManyArgs>(args: SelectSubset<T, JenisPilihanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisPilihans and returns the data updated in the database.
     * @param {JenisPilihanUpdateManyAndReturnArgs} args - Arguments to update many JenisPilihans.
     * @example
     * // Update many JenisPilihans
     * const jenisPilihan = await prisma.jenisPilihan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JenisPilihans and only return the `jenisPilihanId`
     * const jenisPilihanWithJenisPilihanIdOnly = await prisma.jenisPilihan.updateManyAndReturn({
     *   select: { jenisPilihanId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JenisPilihanUpdateManyAndReturnArgs>(args: SelectSubset<T, JenisPilihanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JenisPilihan.
     * @param {JenisPilihanUpsertArgs} args - Arguments to update or create a JenisPilihan.
     * @example
     * // Update or create a JenisPilihan
     * const jenisPilihan = await prisma.jenisPilihan.upsert({
     *   create: {
     *     // ... data to create a JenisPilihan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisPilihan we want to update
     *   }
     * })
     */
    upsert<T extends JenisPilihanUpsertArgs>(args: SelectSubset<T, JenisPilihanUpsertArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisPilihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanCountArgs} args - Arguments to filter JenisPilihans to count.
     * @example
     * // Count the number of JenisPilihans
     * const count = await prisma.jenisPilihan.count({
     *   where: {
     *     // ... the filter for the JenisPilihans we want to count
     *   }
     * })
    **/
    count<T extends JenisPilihanCountArgs>(
      args?: Subset<T, JenisPilihanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisPilihanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisPilihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisPilihanAggregateArgs>(args: Subset<T, JenisPilihanAggregateArgs>): Prisma.PrismaPromise<GetJenisPilihanAggregateType<T>>

    /**
     * Group by JenisPilihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPilihanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisPilihanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisPilihanGroupByArgs['orderBy'] }
        : { orderBy?: JenisPilihanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisPilihanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisPilihanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisPilihan model
   */
  readonly fields: JenisPilihanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisPilihan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisPilihanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    JenisMasuk<T extends JenisPilihan$JenisMasukArgs<ExtArgs> = {}>(args?: Subset<T, JenisPilihan$JenisMasukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisPilihan model
   */
  interface JenisPilihanFieldRefs {
    readonly jenisPilihanId: FieldRef<"JenisPilihan", 'String'>
    readonly namaJenisPilihan: FieldRef<"JenisPilihan", 'String'>
    readonly deskripsi: FieldRef<"JenisPilihan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JenisPilihan findUnique
   */
  export type JenisPilihanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter, which JenisPilihan to fetch.
     */
    where: JenisPilihanWhereUniqueInput
  }

  /**
   * JenisPilihan findUniqueOrThrow
   */
  export type JenisPilihanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter, which JenisPilihan to fetch.
     */
    where: JenisPilihanWhereUniqueInput
  }

  /**
   * JenisPilihan findFirst
   */
  export type JenisPilihanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter, which JenisPilihan to fetch.
     */
    where?: JenisPilihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPilihans to fetch.
     */
    orderBy?: JenisPilihanOrderByWithRelationInput | JenisPilihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisPilihans.
     */
    cursor?: JenisPilihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPilihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPilihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisPilihans.
     */
    distinct?: JenisPilihanScalarFieldEnum | JenisPilihanScalarFieldEnum[]
  }

  /**
   * JenisPilihan findFirstOrThrow
   */
  export type JenisPilihanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter, which JenisPilihan to fetch.
     */
    where?: JenisPilihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPilihans to fetch.
     */
    orderBy?: JenisPilihanOrderByWithRelationInput | JenisPilihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisPilihans.
     */
    cursor?: JenisPilihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPilihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPilihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisPilihans.
     */
    distinct?: JenisPilihanScalarFieldEnum | JenisPilihanScalarFieldEnum[]
  }

  /**
   * JenisPilihan findMany
   */
  export type JenisPilihanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter, which JenisPilihans to fetch.
     */
    where?: JenisPilihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPilihans to fetch.
     */
    orderBy?: JenisPilihanOrderByWithRelationInput | JenisPilihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisPilihans.
     */
    cursor?: JenisPilihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPilihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPilihans.
     */
    skip?: number
    distinct?: JenisPilihanScalarFieldEnum | JenisPilihanScalarFieldEnum[]
  }

  /**
   * JenisPilihan create
   */
  export type JenisPilihanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisPilihan.
     */
    data: XOR<JenisPilihanCreateInput, JenisPilihanUncheckedCreateInput>
  }

  /**
   * JenisPilihan createMany
   */
  export type JenisPilihanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisPilihans.
     */
    data: JenisPilihanCreateManyInput | JenisPilihanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisPilihan createManyAndReturn
   */
  export type JenisPilihanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * The data used to create many JenisPilihans.
     */
    data: JenisPilihanCreateManyInput | JenisPilihanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisPilihan update
   */
  export type JenisPilihanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisPilihan.
     */
    data: XOR<JenisPilihanUpdateInput, JenisPilihanUncheckedUpdateInput>
    /**
     * Choose, which JenisPilihan to update.
     */
    where: JenisPilihanWhereUniqueInput
  }

  /**
   * JenisPilihan updateMany
   */
  export type JenisPilihanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisPilihans.
     */
    data: XOR<JenisPilihanUpdateManyMutationInput, JenisPilihanUncheckedUpdateManyInput>
    /**
     * Filter which JenisPilihans to update
     */
    where?: JenisPilihanWhereInput
    /**
     * Limit how many JenisPilihans to update.
     */
    limit?: number
  }

  /**
   * JenisPilihan updateManyAndReturn
   */
  export type JenisPilihanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * The data used to update JenisPilihans.
     */
    data: XOR<JenisPilihanUpdateManyMutationInput, JenisPilihanUncheckedUpdateManyInput>
    /**
     * Filter which JenisPilihans to update
     */
    where?: JenisPilihanWhereInput
    /**
     * Limit how many JenisPilihans to update.
     */
    limit?: number
  }

  /**
   * JenisPilihan upsert
   */
  export type JenisPilihanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisPilihan to update in case it exists.
     */
    where: JenisPilihanWhereUniqueInput
    /**
     * In case the JenisPilihan found by the `where` argument doesn't exist, create a new JenisPilihan with this data.
     */
    create: XOR<JenisPilihanCreateInput, JenisPilihanUncheckedCreateInput>
    /**
     * In case the JenisPilihan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisPilihanUpdateInput, JenisPilihanUncheckedUpdateInput>
  }

  /**
   * JenisPilihan delete
   */
  export type JenisPilihanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
    /**
     * Filter which JenisPilihan to delete.
     */
    where: JenisPilihanWhereUniqueInput
  }

  /**
   * JenisPilihan deleteMany
   */
  export type JenisPilihanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisPilihans to delete
     */
    where?: JenisPilihanWhereInput
    /**
     * Limit how many JenisPilihans to delete.
     */
    limit?: number
  }

  /**
   * JenisPilihan.JenisMasuk
   */
  export type JenisPilihan$JenisMasukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    where?: JenisMasukWhereInput
    orderBy?: JenisMasukOrderByWithRelationInput | JenisMasukOrderByWithRelationInput[]
    cursor?: JenisMasukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JenisMasukScalarFieldEnum | JenisMasukScalarFieldEnum[]
  }

  /**
   * JenisPilihan without action
   */
  export type JenisPilihanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPilihan
     */
    select?: JenisPilihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisPilihan
     */
    omit?: JenisPilihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisPilihanInclude<ExtArgs> | null
  }


  /**
   * Model JenisMasuk
   */

  export type AggregateJenisMasuk = {
    _count: JenisMasukCountAggregateOutputType | null
    _min: JenisMasukMinAggregateOutputType | null
    _max: JenisMasukMaxAggregateOutputType | null
  }

  export type JenisMasukMinAggregateOutputType = {
    jenisMasukId: string | null
    jenisPilihanId: string | null
    namaJenisMasuk: string | null
    deskripsi: string | null
  }

  export type JenisMasukMaxAggregateOutputType = {
    jenisMasukId: string | null
    jenisPilihanId: string | null
    namaJenisMasuk: string | null
    deskripsi: string | null
  }

  export type JenisMasukCountAggregateOutputType = {
    jenisMasukId: number
    jenisPilihanId: number
    namaJenisMasuk: number
    deskripsi: number
    _all: number
  }


  export type JenisMasukMinAggregateInputType = {
    jenisMasukId?: true
    jenisPilihanId?: true
    namaJenisMasuk?: true
    deskripsi?: true
  }

  export type JenisMasukMaxAggregateInputType = {
    jenisMasukId?: true
    jenisPilihanId?: true
    namaJenisMasuk?: true
    deskripsi?: true
  }

  export type JenisMasukCountAggregateInputType = {
    jenisMasukId?: true
    jenisPilihanId?: true
    namaJenisMasuk?: true
    deskripsi?: true
    _all?: true
  }

  export type JenisMasukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisMasuk to aggregate.
     */
    where?: JenisMasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisMasuks to fetch.
     */
    orderBy?: JenisMasukOrderByWithRelationInput | JenisMasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisMasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisMasuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisMasuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisMasuks
    **/
    _count?: true | JenisMasukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisMasukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisMasukMaxAggregateInputType
  }

  export type GetJenisMasukAggregateType<T extends JenisMasukAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisMasuk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisMasuk[P]>
      : GetScalarType<T[P], AggregateJenisMasuk[P]>
  }




  export type JenisMasukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisMasukWhereInput
    orderBy?: JenisMasukOrderByWithAggregationInput | JenisMasukOrderByWithAggregationInput[]
    by: JenisMasukScalarFieldEnum[] | JenisMasukScalarFieldEnum
    having?: JenisMasukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisMasukCountAggregateInputType | true
    _min?: JenisMasukMinAggregateInputType
    _max?: JenisMasukMaxAggregateInputType
  }

  export type JenisMasukGroupByOutputType = {
    jenisMasukId: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
    _count: JenisMasukCountAggregateOutputType | null
    _min: JenisMasukMinAggregateOutputType | null
    _max: JenisMasukMaxAggregateOutputType | null
  }

  type GetJenisMasukGroupByPayload<T extends JenisMasukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisMasukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisMasukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisMasukGroupByOutputType[P]>
            : GetScalarType<T[P], JenisMasukGroupByOutputType[P]>
        }
      >
    >


  export type JenisMasukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisMasukId?: boolean
    jenisPilihanId?: boolean
    namaJenisMasuk?: boolean
    deskripsi?: boolean
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
    TargetIntake?: boolean | JenisMasuk$TargetIntakeArgs<ExtArgs>
    TargetDb?: boolean | JenisMasuk$TargetDbArgs<ExtArgs>
    CapaianRincian?: boolean | JenisMasuk$CapaianRincianArgs<ExtArgs>
    _count?: boolean | JenisMasukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisMasuk"]>

  export type JenisMasukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisMasukId?: boolean
    jenisPilihanId?: boolean
    namaJenisMasuk?: boolean
    deskripsi?: boolean
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisMasuk"]>

  export type JenisMasukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jenisMasukId?: boolean
    jenisPilihanId?: boolean
    namaJenisMasuk?: boolean
    deskripsi?: boolean
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisMasuk"]>

  export type JenisMasukSelectScalar = {
    jenisMasukId?: boolean
    jenisPilihanId?: boolean
    namaJenisMasuk?: boolean
    deskripsi?: boolean
  }

  export type JenisMasukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jenisMasukId" | "jenisPilihanId" | "namaJenisMasuk" | "deskripsi", ExtArgs["result"]["jenisMasuk"]>
  export type JenisMasukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
    TargetIntake?: boolean | JenisMasuk$TargetIntakeArgs<ExtArgs>
    TargetDb?: boolean | JenisMasuk$TargetDbArgs<ExtArgs>
    CapaianRincian?: boolean | JenisMasuk$CapaianRincianArgs<ExtArgs>
    _count?: boolean | JenisMasukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JenisMasukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
  }
  export type JenisMasukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JenisPilihan?: boolean | JenisPilihanDefaultArgs<ExtArgs>
  }

  export type $JenisMasukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisMasuk"
    objects: {
      JenisPilihan: Prisma.$JenisPilihanPayload<ExtArgs>
      TargetIntake: Prisma.$TargetIntakePayload<ExtArgs>[]
      TargetDb: Prisma.$TargetDbPayload<ExtArgs>[]
      CapaianRincian: Prisma.$CapaianRincianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      jenisMasukId: string
      jenisPilihanId: string
      namaJenisMasuk: string
      deskripsi: string
    }, ExtArgs["result"]["jenisMasuk"]>
    composites: {}
  }

  type JenisMasukGetPayload<S extends boolean | null | undefined | JenisMasukDefaultArgs> = $Result.GetResult<Prisma.$JenisMasukPayload, S>

  type JenisMasukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisMasukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisMasukCountAggregateInputType | true
    }

  export interface JenisMasukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisMasuk'], meta: { name: 'JenisMasuk' } }
    /**
     * Find zero or one JenisMasuk that matches the filter.
     * @param {JenisMasukFindUniqueArgs} args - Arguments to find a JenisMasuk
     * @example
     * // Get one JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisMasukFindUniqueArgs>(args: SelectSubset<T, JenisMasukFindUniqueArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisMasuk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisMasukFindUniqueOrThrowArgs} args - Arguments to find a JenisMasuk
     * @example
     * // Get one JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisMasukFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisMasukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisMasuk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukFindFirstArgs} args - Arguments to find a JenisMasuk
     * @example
     * // Get one JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisMasukFindFirstArgs>(args?: SelectSubset<T, JenisMasukFindFirstArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisMasuk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukFindFirstOrThrowArgs} args - Arguments to find a JenisMasuk
     * @example
     * // Get one JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisMasukFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisMasukFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisMasuks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisMasuks
     * const jenisMasuks = await prisma.jenisMasuk.findMany()
     * 
     * // Get first 10 JenisMasuks
     * const jenisMasuks = await prisma.jenisMasuk.findMany({ take: 10 })
     * 
     * // Only select the `jenisMasukId`
     * const jenisMasukWithJenisMasukIdOnly = await prisma.jenisMasuk.findMany({ select: { jenisMasukId: true } })
     * 
     */
    findMany<T extends JenisMasukFindManyArgs>(args?: SelectSubset<T, JenisMasukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisMasuk.
     * @param {JenisMasukCreateArgs} args - Arguments to create a JenisMasuk.
     * @example
     * // Create one JenisMasuk
     * const JenisMasuk = await prisma.jenisMasuk.create({
     *   data: {
     *     // ... data to create a JenisMasuk
     *   }
     * })
     * 
     */
    create<T extends JenisMasukCreateArgs>(args: SelectSubset<T, JenisMasukCreateArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisMasuks.
     * @param {JenisMasukCreateManyArgs} args - Arguments to create many JenisMasuks.
     * @example
     * // Create many JenisMasuks
     * const jenisMasuk = await prisma.jenisMasuk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisMasukCreateManyArgs>(args?: SelectSubset<T, JenisMasukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisMasuks and returns the data saved in the database.
     * @param {JenisMasukCreateManyAndReturnArgs} args - Arguments to create many JenisMasuks.
     * @example
     * // Create many JenisMasuks
     * const jenisMasuk = await prisma.jenisMasuk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisMasuks and only return the `jenisMasukId`
     * const jenisMasukWithJenisMasukIdOnly = await prisma.jenisMasuk.createManyAndReturn({
     *   select: { jenisMasukId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisMasukCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisMasukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JenisMasuk.
     * @param {JenisMasukDeleteArgs} args - Arguments to delete one JenisMasuk.
     * @example
     * // Delete one JenisMasuk
     * const JenisMasuk = await prisma.jenisMasuk.delete({
     *   where: {
     *     // ... filter to delete one JenisMasuk
     *   }
     * })
     * 
     */
    delete<T extends JenisMasukDeleteArgs>(args: SelectSubset<T, JenisMasukDeleteArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisMasuk.
     * @param {JenisMasukUpdateArgs} args - Arguments to update one JenisMasuk.
     * @example
     * // Update one JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisMasukUpdateArgs>(args: SelectSubset<T, JenisMasukUpdateArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisMasuks.
     * @param {JenisMasukDeleteManyArgs} args - Arguments to filter JenisMasuks to delete.
     * @example
     * // Delete a few JenisMasuks
     * const { count } = await prisma.jenisMasuk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisMasukDeleteManyArgs>(args?: SelectSubset<T, JenisMasukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisMasuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisMasuks
     * const jenisMasuk = await prisma.jenisMasuk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisMasukUpdateManyArgs>(args: SelectSubset<T, JenisMasukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisMasuks and returns the data updated in the database.
     * @param {JenisMasukUpdateManyAndReturnArgs} args - Arguments to update many JenisMasuks.
     * @example
     * // Update many JenisMasuks
     * const jenisMasuk = await prisma.jenisMasuk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JenisMasuks and only return the `jenisMasukId`
     * const jenisMasukWithJenisMasukIdOnly = await prisma.jenisMasuk.updateManyAndReturn({
     *   select: { jenisMasukId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JenisMasukUpdateManyAndReturnArgs>(args: SelectSubset<T, JenisMasukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JenisMasuk.
     * @param {JenisMasukUpsertArgs} args - Arguments to update or create a JenisMasuk.
     * @example
     * // Update or create a JenisMasuk
     * const jenisMasuk = await prisma.jenisMasuk.upsert({
     *   create: {
     *     // ... data to create a JenisMasuk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisMasuk we want to update
     *   }
     * })
     */
    upsert<T extends JenisMasukUpsertArgs>(args: SelectSubset<T, JenisMasukUpsertArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisMasuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukCountArgs} args - Arguments to filter JenisMasuks to count.
     * @example
     * // Count the number of JenisMasuks
     * const count = await prisma.jenisMasuk.count({
     *   where: {
     *     // ... the filter for the JenisMasuks we want to count
     *   }
     * })
    **/
    count<T extends JenisMasukCountArgs>(
      args?: Subset<T, JenisMasukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisMasukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisMasuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisMasukAggregateArgs>(args: Subset<T, JenisMasukAggregateArgs>): Prisma.PrismaPromise<GetJenisMasukAggregateType<T>>

    /**
     * Group by JenisMasuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisMasukGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisMasukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisMasukGroupByArgs['orderBy'] }
        : { orderBy?: JenisMasukGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisMasukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisMasukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisMasuk model
   */
  readonly fields: JenisMasukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisMasuk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisMasukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    JenisPilihan<T extends JenisPilihanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisPilihanDefaultArgs<ExtArgs>>): Prisma__JenisPilihanClient<$Result.GetResult<Prisma.$JenisPilihanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TargetIntake<T extends JenisMasuk$TargetIntakeArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasuk$TargetIntakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TargetDb<T extends JenisMasuk$TargetDbArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasuk$TargetDbArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CapaianRincian<T extends JenisMasuk$CapaianRincianArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasuk$CapaianRincianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisMasuk model
   */
  interface JenisMasukFieldRefs {
    readonly jenisMasukId: FieldRef<"JenisMasuk", 'String'>
    readonly jenisPilihanId: FieldRef<"JenisMasuk", 'String'>
    readonly namaJenisMasuk: FieldRef<"JenisMasuk", 'String'>
    readonly deskripsi: FieldRef<"JenisMasuk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JenisMasuk findUnique
   */
  export type JenisMasukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter, which JenisMasuk to fetch.
     */
    where: JenisMasukWhereUniqueInput
  }

  /**
   * JenisMasuk findUniqueOrThrow
   */
  export type JenisMasukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter, which JenisMasuk to fetch.
     */
    where: JenisMasukWhereUniqueInput
  }

  /**
   * JenisMasuk findFirst
   */
  export type JenisMasukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter, which JenisMasuk to fetch.
     */
    where?: JenisMasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisMasuks to fetch.
     */
    orderBy?: JenisMasukOrderByWithRelationInput | JenisMasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisMasuks.
     */
    cursor?: JenisMasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisMasuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisMasuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisMasuks.
     */
    distinct?: JenisMasukScalarFieldEnum | JenisMasukScalarFieldEnum[]
  }

  /**
   * JenisMasuk findFirstOrThrow
   */
  export type JenisMasukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter, which JenisMasuk to fetch.
     */
    where?: JenisMasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisMasuks to fetch.
     */
    orderBy?: JenisMasukOrderByWithRelationInput | JenisMasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisMasuks.
     */
    cursor?: JenisMasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisMasuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisMasuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisMasuks.
     */
    distinct?: JenisMasukScalarFieldEnum | JenisMasukScalarFieldEnum[]
  }

  /**
   * JenisMasuk findMany
   */
  export type JenisMasukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter, which JenisMasuks to fetch.
     */
    where?: JenisMasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisMasuks to fetch.
     */
    orderBy?: JenisMasukOrderByWithRelationInput | JenisMasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisMasuks.
     */
    cursor?: JenisMasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisMasuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisMasuks.
     */
    skip?: number
    distinct?: JenisMasukScalarFieldEnum | JenisMasukScalarFieldEnum[]
  }

  /**
   * JenisMasuk create
   */
  export type JenisMasukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisMasuk.
     */
    data: XOR<JenisMasukCreateInput, JenisMasukUncheckedCreateInput>
  }

  /**
   * JenisMasuk createMany
   */
  export type JenisMasukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisMasuks.
     */
    data: JenisMasukCreateManyInput | JenisMasukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisMasuk createManyAndReturn
   */
  export type JenisMasukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * The data used to create many JenisMasuks.
     */
    data: JenisMasukCreateManyInput | JenisMasukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JenisMasuk update
   */
  export type JenisMasukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisMasuk.
     */
    data: XOR<JenisMasukUpdateInput, JenisMasukUncheckedUpdateInput>
    /**
     * Choose, which JenisMasuk to update.
     */
    where: JenisMasukWhereUniqueInput
  }

  /**
   * JenisMasuk updateMany
   */
  export type JenisMasukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisMasuks.
     */
    data: XOR<JenisMasukUpdateManyMutationInput, JenisMasukUncheckedUpdateManyInput>
    /**
     * Filter which JenisMasuks to update
     */
    where?: JenisMasukWhereInput
    /**
     * Limit how many JenisMasuks to update.
     */
    limit?: number
  }

  /**
   * JenisMasuk updateManyAndReturn
   */
  export type JenisMasukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * The data used to update JenisMasuks.
     */
    data: XOR<JenisMasukUpdateManyMutationInput, JenisMasukUncheckedUpdateManyInput>
    /**
     * Filter which JenisMasuks to update
     */
    where?: JenisMasukWhereInput
    /**
     * Limit how many JenisMasuks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JenisMasuk upsert
   */
  export type JenisMasukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisMasuk to update in case it exists.
     */
    where: JenisMasukWhereUniqueInput
    /**
     * In case the JenisMasuk found by the `where` argument doesn't exist, create a new JenisMasuk with this data.
     */
    create: XOR<JenisMasukCreateInput, JenisMasukUncheckedCreateInput>
    /**
     * In case the JenisMasuk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisMasukUpdateInput, JenisMasukUncheckedUpdateInput>
  }

  /**
   * JenisMasuk delete
   */
  export type JenisMasukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
    /**
     * Filter which JenisMasuk to delete.
     */
    where: JenisMasukWhereUniqueInput
  }

  /**
   * JenisMasuk deleteMany
   */
  export type JenisMasukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisMasuks to delete
     */
    where?: JenisMasukWhereInput
    /**
     * Limit how many JenisMasuks to delete.
     */
    limit?: number
  }

  /**
   * JenisMasuk.TargetIntake
   */
  export type JenisMasuk$TargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    where?: TargetIntakeWhereInput
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    cursor?: TargetIntakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * JenisMasuk.TargetDb
   */
  export type JenisMasuk$TargetDbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    where?: TargetDbWhereInput
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    cursor?: TargetDbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TargetDbScalarFieldEnum | TargetDbScalarFieldEnum[]
  }

  /**
   * JenisMasuk.CapaianRincian
   */
  export type JenisMasuk$CapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    where?: CapaianRincianWhereInput
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    cursor?: CapaianRincianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * JenisMasuk without action
   */
  export type JenisMasukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisMasuk
     */
    select?: JenisMasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisMasuk
     */
    omit?: JenisMasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisMasukInclude<ExtArgs> | null
  }


  /**
   * Model Prodi
   */

  export type AggregateProdi = {
    _count: ProdiCountAggregateOutputType | null
    _min: ProdiMinAggregateOutputType | null
    _max: ProdiMaxAggregateOutputType | null
  }

  export type ProdiMinAggregateOutputType = {
    prodiId: string | null
    namaProdi: string | null
    deskripsi: string | null
  }

  export type ProdiMaxAggregateOutputType = {
    prodiId: string | null
    namaProdi: string | null
    deskripsi: string | null
  }

  export type ProdiCountAggregateOutputType = {
    prodiId: number
    namaProdi: number
    deskripsi: number
    _all: number
  }


  export type ProdiMinAggregateInputType = {
    prodiId?: true
    namaProdi?: true
    deskripsi?: true
  }

  export type ProdiMaxAggregateInputType = {
    prodiId?: true
    namaProdi?: true
    deskripsi?: true
  }

  export type ProdiCountAggregateInputType = {
    prodiId?: true
    namaProdi?: true
    deskripsi?: true
    _all?: true
  }

  export type ProdiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prodi to aggregate.
     */
    where?: ProdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prodis to fetch.
     */
    orderBy?: ProdiOrderByWithRelationInput | ProdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prodis
    **/
    _count?: true | ProdiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdiMaxAggregateInputType
  }

  export type GetProdiAggregateType<T extends ProdiAggregateArgs> = {
        [P in keyof T & keyof AggregateProdi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdi[P]>
      : GetScalarType<T[P], AggregateProdi[P]>
  }




  export type ProdiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdiWhereInput
    orderBy?: ProdiOrderByWithAggregationInput | ProdiOrderByWithAggregationInput[]
    by: ProdiScalarFieldEnum[] | ProdiScalarFieldEnum
    having?: ProdiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdiCountAggregateInputType | true
    _min?: ProdiMinAggregateInputType
    _max?: ProdiMaxAggregateInputType
  }

  export type ProdiGroupByOutputType = {
    prodiId: string
    namaProdi: string
    deskripsi: string
    _count: ProdiCountAggregateOutputType | null
    _min: ProdiMinAggregateOutputType | null
    _max: ProdiMaxAggregateOutputType | null
  }

  type GetProdiGroupByPayload<T extends ProdiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdiGroupByOutputType[P]>
            : GetScalarType<T[P], ProdiGroupByOutputType[P]>
        }
      >
    >


  export type ProdiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prodiId?: boolean
    namaProdi?: boolean
    deskripsi?: boolean
    TargetIntake?: boolean | Prodi$TargetIntakeArgs<ExtArgs>
    _count?: boolean | ProdiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prodi"]>

  export type ProdiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prodiId?: boolean
    namaProdi?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["prodi"]>

  export type ProdiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prodiId?: boolean
    namaProdi?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["prodi"]>

  export type ProdiSelectScalar = {
    prodiId?: boolean
    namaProdi?: boolean
    deskripsi?: boolean
  }

  export type ProdiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prodiId" | "namaProdi" | "deskripsi", ExtArgs["result"]["prodi"]>
  export type ProdiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | Prodi$TargetIntakeArgs<ExtArgs>
    _count?: boolean | ProdiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prodi"
    objects: {
      TargetIntake: Prisma.$TargetIntakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      prodiId: string
      namaProdi: string
      deskripsi: string
    }, ExtArgs["result"]["prodi"]>
    composites: {}
  }

  type ProdiGetPayload<S extends boolean | null | undefined | ProdiDefaultArgs> = $Result.GetResult<Prisma.$ProdiPayload, S>

  type ProdiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdiCountAggregateInputType | true
    }

  export interface ProdiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prodi'], meta: { name: 'Prodi' } }
    /**
     * Find zero or one Prodi that matches the filter.
     * @param {ProdiFindUniqueArgs} args - Arguments to find a Prodi
     * @example
     * // Get one Prodi
     * const prodi = await prisma.prodi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdiFindUniqueArgs>(args: SelectSubset<T, ProdiFindUniqueArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prodi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdiFindUniqueOrThrowArgs} args - Arguments to find a Prodi
     * @example
     * // Get one Prodi
     * const prodi = await prisma.prodi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdiFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prodi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiFindFirstArgs} args - Arguments to find a Prodi
     * @example
     * // Get one Prodi
     * const prodi = await prisma.prodi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdiFindFirstArgs>(args?: SelectSubset<T, ProdiFindFirstArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prodi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiFindFirstOrThrowArgs} args - Arguments to find a Prodi
     * @example
     * // Get one Prodi
     * const prodi = await prisma.prodi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdiFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prodis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prodis
     * const prodis = await prisma.prodi.findMany()
     * 
     * // Get first 10 Prodis
     * const prodis = await prisma.prodi.findMany({ take: 10 })
     * 
     * // Only select the `prodiId`
     * const prodiWithProdiIdOnly = await prisma.prodi.findMany({ select: { prodiId: true } })
     * 
     */
    findMany<T extends ProdiFindManyArgs>(args?: SelectSubset<T, ProdiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prodi.
     * @param {ProdiCreateArgs} args - Arguments to create a Prodi.
     * @example
     * // Create one Prodi
     * const Prodi = await prisma.prodi.create({
     *   data: {
     *     // ... data to create a Prodi
     *   }
     * })
     * 
     */
    create<T extends ProdiCreateArgs>(args: SelectSubset<T, ProdiCreateArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prodis.
     * @param {ProdiCreateManyArgs} args - Arguments to create many Prodis.
     * @example
     * // Create many Prodis
     * const prodi = await prisma.prodi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdiCreateManyArgs>(args?: SelectSubset<T, ProdiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prodis and returns the data saved in the database.
     * @param {ProdiCreateManyAndReturnArgs} args - Arguments to create many Prodis.
     * @example
     * // Create many Prodis
     * const prodi = await prisma.prodi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prodis and only return the `prodiId`
     * const prodiWithProdiIdOnly = await prisma.prodi.createManyAndReturn({
     *   select: { prodiId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdiCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prodi.
     * @param {ProdiDeleteArgs} args - Arguments to delete one Prodi.
     * @example
     * // Delete one Prodi
     * const Prodi = await prisma.prodi.delete({
     *   where: {
     *     // ... filter to delete one Prodi
     *   }
     * })
     * 
     */
    delete<T extends ProdiDeleteArgs>(args: SelectSubset<T, ProdiDeleteArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prodi.
     * @param {ProdiUpdateArgs} args - Arguments to update one Prodi.
     * @example
     * // Update one Prodi
     * const prodi = await prisma.prodi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdiUpdateArgs>(args: SelectSubset<T, ProdiUpdateArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prodis.
     * @param {ProdiDeleteManyArgs} args - Arguments to filter Prodis to delete.
     * @example
     * // Delete a few Prodis
     * const { count } = await prisma.prodi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdiDeleteManyArgs>(args?: SelectSubset<T, ProdiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prodis
     * const prodi = await prisma.prodi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdiUpdateManyArgs>(args: SelectSubset<T, ProdiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prodis and returns the data updated in the database.
     * @param {ProdiUpdateManyAndReturnArgs} args - Arguments to update many Prodis.
     * @example
     * // Update many Prodis
     * const prodi = await prisma.prodi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prodis and only return the `prodiId`
     * const prodiWithProdiIdOnly = await prisma.prodi.updateManyAndReturn({
     *   select: { prodiId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdiUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prodi.
     * @param {ProdiUpsertArgs} args - Arguments to update or create a Prodi.
     * @example
     * // Update or create a Prodi
     * const prodi = await prisma.prodi.upsert({
     *   create: {
     *     // ... data to create a Prodi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prodi we want to update
     *   }
     * })
     */
    upsert<T extends ProdiUpsertArgs>(args: SelectSubset<T, ProdiUpsertArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiCountArgs} args - Arguments to filter Prodis to count.
     * @example
     * // Count the number of Prodis
     * const count = await prisma.prodi.count({
     *   where: {
     *     // ... the filter for the Prodis we want to count
     *   }
     * })
    **/
    count<T extends ProdiCountArgs>(
      args?: Subset<T, ProdiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prodi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdiAggregateArgs>(args: Subset<T, ProdiAggregateArgs>): Prisma.PrismaPromise<GetProdiAggregateType<T>>

    /**
     * Group by Prodi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdiGroupByArgs['orderBy'] }
        : { orderBy?: ProdiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prodi model
   */
  readonly fields: ProdiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prodi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TargetIntake<T extends Prodi$TargetIntakeArgs<ExtArgs> = {}>(args?: Subset<T, Prodi$TargetIntakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prodi model
   */
  interface ProdiFieldRefs {
    readonly prodiId: FieldRef<"Prodi", 'String'>
    readonly namaProdi: FieldRef<"Prodi", 'String'>
    readonly deskripsi: FieldRef<"Prodi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prodi findUnique
   */
  export type ProdiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter, which Prodi to fetch.
     */
    where: ProdiWhereUniqueInput
  }

  /**
   * Prodi findUniqueOrThrow
   */
  export type ProdiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter, which Prodi to fetch.
     */
    where: ProdiWhereUniqueInput
  }

  /**
   * Prodi findFirst
   */
  export type ProdiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter, which Prodi to fetch.
     */
    where?: ProdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prodis to fetch.
     */
    orderBy?: ProdiOrderByWithRelationInput | ProdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prodis.
     */
    cursor?: ProdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prodis.
     */
    distinct?: ProdiScalarFieldEnum | ProdiScalarFieldEnum[]
  }

  /**
   * Prodi findFirstOrThrow
   */
  export type ProdiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter, which Prodi to fetch.
     */
    where?: ProdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prodis to fetch.
     */
    orderBy?: ProdiOrderByWithRelationInput | ProdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prodis.
     */
    cursor?: ProdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prodis.
     */
    distinct?: ProdiScalarFieldEnum | ProdiScalarFieldEnum[]
  }

  /**
   * Prodi findMany
   */
  export type ProdiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter, which Prodis to fetch.
     */
    where?: ProdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prodis to fetch.
     */
    orderBy?: ProdiOrderByWithRelationInput | ProdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prodis.
     */
    cursor?: ProdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prodis.
     */
    skip?: number
    distinct?: ProdiScalarFieldEnum | ProdiScalarFieldEnum[]
  }

  /**
   * Prodi create
   */
  export type ProdiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * The data needed to create a Prodi.
     */
    data: XOR<ProdiCreateInput, ProdiUncheckedCreateInput>
  }

  /**
   * Prodi createMany
   */
  export type ProdiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prodis.
     */
    data: ProdiCreateManyInput | ProdiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prodi createManyAndReturn
   */
  export type ProdiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * The data used to create many Prodis.
     */
    data: ProdiCreateManyInput | ProdiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prodi update
   */
  export type ProdiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * The data needed to update a Prodi.
     */
    data: XOR<ProdiUpdateInput, ProdiUncheckedUpdateInput>
    /**
     * Choose, which Prodi to update.
     */
    where: ProdiWhereUniqueInput
  }

  /**
   * Prodi updateMany
   */
  export type ProdiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prodis.
     */
    data: XOR<ProdiUpdateManyMutationInput, ProdiUncheckedUpdateManyInput>
    /**
     * Filter which Prodis to update
     */
    where?: ProdiWhereInput
    /**
     * Limit how many Prodis to update.
     */
    limit?: number
  }

  /**
   * Prodi updateManyAndReturn
   */
  export type ProdiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * The data used to update Prodis.
     */
    data: XOR<ProdiUpdateManyMutationInput, ProdiUncheckedUpdateManyInput>
    /**
     * Filter which Prodis to update
     */
    where?: ProdiWhereInput
    /**
     * Limit how many Prodis to update.
     */
    limit?: number
  }

  /**
   * Prodi upsert
   */
  export type ProdiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * The filter to search for the Prodi to update in case it exists.
     */
    where: ProdiWhereUniqueInput
    /**
     * In case the Prodi found by the `where` argument doesn't exist, create a new Prodi with this data.
     */
    create: XOR<ProdiCreateInput, ProdiUncheckedCreateInput>
    /**
     * In case the Prodi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdiUpdateInput, ProdiUncheckedUpdateInput>
  }

  /**
   * Prodi delete
   */
  export type ProdiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    /**
     * Filter which Prodi to delete.
     */
    where: ProdiWhereUniqueInput
  }

  /**
   * Prodi deleteMany
   */
  export type ProdiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prodis to delete
     */
    where?: ProdiWhereInput
    /**
     * Limit how many Prodis to delete.
     */
    limit?: number
  }

  /**
   * Prodi.TargetIntake
   */
  export type Prodi$TargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    where?: TargetIntakeWhereInput
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    cursor?: TargetIntakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * Prodi without action
   */
  export type ProdiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
  }


  /**
   * Model Semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterMinAggregateOutputType = {
    semesterId: string | null
    namaSemester: string | null
    deskripsi: string | null
  }

  export type SemesterMaxAggregateOutputType = {
    semesterId: string | null
    namaSemester: string | null
    deskripsi: string | null
  }

  export type SemesterCountAggregateOutputType = {
    semesterId: number
    namaSemester: number
    deskripsi: number
    _all: number
  }


  export type SemesterMinAggregateInputType = {
    semesterId?: true
    namaSemester?: true
    deskripsi?: true
  }

  export type SemesterMaxAggregateInputType = {
    semesterId?: true
    namaSemester?: true
    deskripsi?: true
  }

  export type SemesterCountAggregateInputType = {
    semesterId?: true
    namaSemester?: true
    deskripsi?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semester to aggregate.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type SemesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithAggregationInput | SemesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: SemesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    semesterId: string
    namaSemester: string
    deskripsi: string
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends SemesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type SemesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    semesterId?: boolean
    namaSemester?: boolean
    deskripsi?: boolean
    Tahun?: boolean | Semester$TahunArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    semesterId?: boolean
    namaSemester?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    semesterId?: boolean
    namaSemester?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    semesterId?: boolean
    namaSemester?: boolean
    deskripsi?: boolean
  }

  export type SemesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"semesterId" | "namaSemester" | "deskripsi", ExtArgs["result"]["semester"]>
  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | Semester$TahunArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SemesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SemesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      Tahun: Prisma.$TahunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      semesterId: string
      namaSemester: string
      deskripsi: string
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }

  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface SemesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Semester'], meta: { name: 'Semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {SemesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SemesterFindUniqueArgs>(args: SelectSubset<T, SemesterFindUniqueArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SemesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SemesterFindUniqueOrThrowArgs>(args: SelectSubset<T, SemesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SemesterFindFirstArgs>(args?: SelectSubset<T, SemesterFindFirstArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SemesterFindFirstOrThrowArgs>(args?: SelectSubset<T, SemesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `semesterId`
     * const semesterWithSemesterIdOnly = await prisma.semester.findMany({ select: { semesterId: true } })
     * 
     */
    findMany<T extends SemesterFindManyArgs>(args?: SelectSubset<T, SemesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semester.
     * @param {SemesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
     */
    create<T extends SemesterCreateArgs>(args: SelectSubset<T, SemesterCreateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semesters.
     * @param {SemesterCreateManyArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SemesterCreateManyArgs>(args?: SelectSubset<T, SemesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Semesters and returns the data saved in the database.
     * @param {SemesterCreateManyAndReturnArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Semesters and only return the `semesterId`
     * const semesterWithSemesterIdOnly = await prisma.semester.createManyAndReturn({
     *   select: { semesterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SemesterCreateManyAndReturnArgs>(args?: SelectSubset<T, SemesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Semester.
     * @param {SemesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
     */
    delete<T extends SemesterDeleteArgs>(args: SelectSubset<T, SemesterDeleteArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semester.
     * @param {SemesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SemesterUpdateArgs>(args: SelectSubset<T, SemesterUpdateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semesters.
     * @param {SemesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SemesterDeleteManyArgs>(args?: SelectSubset<T, SemesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SemesterUpdateManyArgs>(args: SelectSubset<T, SemesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters and returns the data updated in the database.
     * @param {SemesterUpdateManyAndReturnArgs} args - Arguments to update many Semesters.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Semesters and only return the `semesterId`
     * const semesterWithSemesterIdOnly = await prisma.semester.updateManyAndReturn({
     *   select: { semesterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SemesterUpdateManyAndReturnArgs>(args: SelectSubset<T, SemesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Semester.
     * @param {SemesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     */
    upsert<T extends SemesterUpsertArgs>(args: SelectSubset<T, SemesterUpsertArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends SemesterCountArgs>(
      args?: Subset<T, SemesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SemesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterGroupByArgs['orderBy'] }
        : { orderBy?: SemesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SemesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Semester model
   */
  readonly fields: SemesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tahun<T extends Semester$TahunArgs<ExtArgs> = {}>(args?: Subset<T, Semester$TahunArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Semester model
   */
  interface SemesterFieldRefs {
    readonly semesterId: FieldRef<"Semester", 'String'>
    readonly namaSemester: FieldRef<"Semester", 'String'>
    readonly deskripsi: FieldRef<"Semester", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Semester findUnique
   */
  export type SemesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findUniqueOrThrow
   */
  export type SemesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findFirst
   */
  export type SemesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findFirstOrThrow
   */
  export type SemesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findMany
   */
  export type SemesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semesters to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester create
   */
  export type SemesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to create a Semester.
     */
    data: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
  }

  /**
   * Semester createMany
   */
  export type SemesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester createManyAndReturn
   */
  export type SemesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester update
   */
  export type SemesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to update a Semester.
     */
    data: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
    /**
     * Choose, which Semester to update.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester updateMany
   */
  export type SemesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester updateManyAndReturn
   */
  export type SemesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester upsert
   */
  export type SemesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The filter to search for the Semester to update in case it exists.
     */
    where: SemesterWhereUniqueInput
    /**
     * In case the Semester found by the `where` argument doesn't exist, create a new Semester with this data.
     */
    create: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
    /**
     * In case the Semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
  }

  /**
   * Semester delete
   */
  export type SemesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter which Semester to delete.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester deleteMany
   */
  export type SemesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semesters to delete
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to delete.
     */
    limit?: number
  }

  /**
   * Semester.Tahun
   */
  export type Semester$TahunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    where?: TahunWhereInput
    orderBy?: TahunOrderByWithRelationInput | TahunOrderByWithRelationInput[]
    cursor?: TahunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TahunScalarFieldEnum | TahunScalarFieldEnum[]
  }

  /**
   * Semester without action
   */
  export type SemesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
  }


  /**
   * Model Tahun
   */

  export type AggregateTahun = {
    _count: TahunCountAggregateOutputType | null
    _min: TahunMinAggregateOutputType | null
    _max: TahunMaxAggregateOutputType | null
  }

  export type TahunMinAggregateOutputType = {
    tahunId: string | null
    semesterId: string | null
    namaTahun: string | null
    deskripsi: string | null
  }

  export type TahunMaxAggregateOutputType = {
    tahunId: string | null
    semesterId: string | null
    namaTahun: string | null
    deskripsi: string | null
  }

  export type TahunCountAggregateOutputType = {
    tahunId: number
    semesterId: number
    namaTahun: number
    deskripsi: number
    _all: number
  }


  export type TahunMinAggregateInputType = {
    tahunId?: true
    semesterId?: true
    namaTahun?: true
    deskripsi?: true
  }

  export type TahunMaxAggregateInputType = {
    tahunId?: true
    semesterId?: true
    namaTahun?: true
    deskripsi?: true
  }

  export type TahunCountAggregateInputType = {
    tahunId?: true
    semesterId?: true
    namaTahun?: true
    deskripsi?: true
    _all?: true
  }

  export type TahunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tahun to aggregate.
     */
    where?: TahunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tahuns to fetch.
     */
    orderBy?: TahunOrderByWithRelationInput | TahunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TahunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tahuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tahuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tahuns
    **/
    _count?: true | TahunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TahunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TahunMaxAggregateInputType
  }

  export type GetTahunAggregateType<T extends TahunAggregateArgs> = {
        [P in keyof T & keyof AggregateTahun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTahun[P]>
      : GetScalarType<T[P], AggregateTahun[P]>
  }




  export type TahunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TahunWhereInput
    orderBy?: TahunOrderByWithAggregationInput | TahunOrderByWithAggregationInput[]
    by: TahunScalarFieldEnum[] | TahunScalarFieldEnum
    having?: TahunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TahunCountAggregateInputType | true
    _min?: TahunMinAggregateInputType
    _max?: TahunMaxAggregateInputType
  }

  export type TahunGroupByOutputType = {
    tahunId: string
    semesterId: string
    namaTahun: string
    deskripsi: string
    _count: TahunCountAggregateOutputType | null
    _min: TahunMinAggregateOutputType | null
    _max: TahunMaxAggregateOutputType | null
  }

  type GetTahunGroupByPayload<T extends TahunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TahunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TahunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TahunGroupByOutputType[P]>
            : GetScalarType<T[P], TahunGroupByOutputType[P]>
        }
      >
    >


  export type TahunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tahunId?: boolean
    semesterId?: boolean
    namaTahun?: boolean
    deskripsi?: boolean
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
    TargetIntake?: boolean | Tahun$TargetIntakeArgs<ExtArgs>
    TargetDb?: boolean | Tahun$TargetDbArgs<ExtArgs>
    CapaianRincian?: boolean | Tahun$CapaianRincianArgs<ExtArgs>
    _count?: boolean | TahunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tahun"]>

  export type TahunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tahunId?: boolean
    semesterId?: boolean
    namaTahun?: boolean
    deskripsi?: boolean
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tahun"]>

  export type TahunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tahunId?: boolean
    semesterId?: boolean
    namaTahun?: boolean
    deskripsi?: boolean
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tahun"]>

  export type TahunSelectScalar = {
    tahunId?: boolean
    semesterId?: boolean
    namaTahun?: boolean
    deskripsi?: boolean
  }

  export type TahunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tahunId" | "semesterId" | "namaTahun" | "deskripsi", ExtArgs["result"]["tahun"]>
  export type TahunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
    TargetIntake?: boolean | Tahun$TargetIntakeArgs<ExtArgs>
    TargetDb?: boolean | Tahun$TargetDbArgs<ExtArgs>
    CapaianRincian?: boolean | Tahun$CapaianRincianArgs<ExtArgs>
    _count?: boolean | TahunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TahunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }
  export type TahunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }

  export type $TahunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tahun"
    objects: {
      Semester: Prisma.$SemesterPayload<ExtArgs>
      TargetIntake: Prisma.$TargetIntakePayload<ExtArgs>[]
      TargetDb: Prisma.$TargetDbPayload<ExtArgs>[]
      CapaianRincian: Prisma.$CapaianRincianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tahunId: string
      semesterId: string
      namaTahun: string
      deskripsi: string
    }, ExtArgs["result"]["tahun"]>
    composites: {}
  }

  type TahunGetPayload<S extends boolean | null | undefined | TahunDefaultArgs> = $Result.GetResult<Prisma.$TahunPayload, S>

  type TahunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TahunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TahunCountAggregateInputType | true
    }

  export interface TahunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tahun'], meta: { name: 'Tahun' } }
    /**
     * Find zero or one Tahun that matches the filter.
     * @param {TahunFindUniqueArgs} args - Arguments to find a Tahun
     * @example
     * // Get one Tahun
     * const tahun = await prisma.tahun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TahunFindUniqueArgs>(args: SelectSubset<T, TahunFindUniqueArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tahun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TahunFindUniqueOrThrowArgs} args - Arguments to find a Tahun
     * @example
     * // Get one Tahun
     * const tahun = await prisma.tahun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TahunFindUniqueOrThrowArgs>(args: SelectSubset<T, TahunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tahun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunFindFirstArgs} args - Arguments to find a Tahun
     * @example
     * // Get one Tahun
     * const tahun = await prisma.tahun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TahunFindFirstArgs>(args?: SelectSubset<T, TahunFindFirstArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tahun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunFindFirstOrThrowArgs} args - Arguments to find a Tahun
     * @example
     * // Get one Tahun
     * const tahun = await prisma.tahun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TahunFindFirstOrThrowArgs>(args?: SelectSubset<T, TahunFindFirstOrThrowArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tahuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tahuns
     * const tahuns = await prisma.tahun.findMany()
     * 
     * // Get first 10 Tahuns
     * const tahuns = await prisma.tahun.findMany({ take: 10 })
     * 
     * // Only select the `tahunId`
     * const tahunWithTahunIdOnly = await prisma.tahun.findMany({ select: { tahunId: true } })
     * 
     */
    findMany<T extends TahunFindManyArgs>(args?: SelectSubset<T, TahunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tahun.
     * @param {TahunCreateArgs} args - Arguments to create a Tahun.
     * @example
     * // Create one Tahun
     * const Tahun = await prisma.tahun.create({
     *   data: {
     *     // ... data to create a Tahun
     *   }
     * })
     * 
     */
    create<T extends TahunCreateArgs>(args: SelectSubset<T, TahunCreateArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tahuns.
     * @param {TahunCreateManyArgs} args - Arguments to create many Tahuns.
     * @example
     * // Create many Tahuns
     * const tahun = await prisma.tahun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TahunCreateManyArgs>(args?: SelectSubset<T, TahunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tahuns and returns the data saved in the database.
     * @param {TahunCreateManyAndReturnArgs} args - Arguments to create many Tahuns.
     * @example
     * // Create many Tahuns
     * const tahun = await prisma.tahun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tahuns and only return the `tahunId`
     * const tahunWithTahunIdOnly = await prisma.tahun.createManyAndReturn({
     *   select: { tahunId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TahunCreateManyAndReturnArgs>(args?: SelectSubset<T, TahunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tahun.
     * @param {TahunDeleteArgs} args - Arguments to delete one Tahun.
     * @example
     * // Delete one Tahun
     * const Tahun = await prisma.tahun.delete({
     *   where: {
     *     // ... filter to delete one Tahun
     *   }
     * })
     * 
     */
    delete<T extends TahunDeleteArgs>(args: SelectSubset<T, TahunDeleteArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tahun.
     * @param {TahunUpdateArgs} args - Arguments to update one Tahun.
     * @example
     * // Update one Tahun
     * const tahun = await prisma.tahun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TahunUpdateArgs>(args: SelectSubset<T, TahunUpdateArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tahuns.
     * @param {TahunDeleteManyArgs} args - Arguments to filter Tahuns to delete.
     * @example
     * // Delete a few Tahuns
     * const { count } = await prisma.tahun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TahunDeleteManyArgs>(args?: SelectSubset<T, TahunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tahuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tahuns
     * const tahun = await prisma.tahun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TahunUpdateManyArgs>(args: SelectSubset<T, TahunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tahuns and returns the data updated in the database.
     * @param {TahunUpdateManyAndReturnArgs} args - Arguments to update many Tahuns.
     * @example
     * // Update many Tahuns
     * const tahun = await prisma.tahun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tahuns and only return the `tahunId`
     * const tahunWithTahunIdOnly = await prisma.tahun.updateManyAndReturn({
     *   select: { tahunId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TahunUpdateManyAndReturnArgs>(args: SelectSubset<T, TahunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tahun.
     * @param {TahunUpsertArgs} args - Arguments to update or create a Tahun.
     * @example
     * // Update or create a Tahun
     * const tahun = await prisma.tahun.upsert({
     *   create: {
     *     // ... data to create a Tahun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tahun we want to update
     *   }
     * })
     */
    upsert<T extends TahunUpsertArgs>(args: SelectSubset<T, TahunUpsertArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tahuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunCountArgs} args - Arguments to filter Tahuns to count.
     * @example
     * // Count the number of Tahuns
     * const count = await prisma.tahun.count({
     *   where: {
     *     // ... the filter for the Tahuns we want to count
     *   }
     * })
    **/
    count<T extends TahunCountArgs>(
      args?: Subset<T, TahunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TahunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tahun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TahunAggregateArgs>(args: Subset<T, TahunAggregateArgs>): Prisma.PrismaPromise<GetTahunAggregateType<T>>

    /**
     * Group by Tahun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TahunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TahunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TahunGroupByArgs['orderBy'] }
        : { orderBy?: TahunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TahunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTahunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tahun model
   */
  readonly fields: TahunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tahun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TahunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TargetIntake<T extends Tahun$TargetIntakeArgs<ExtArgs> = {}>(args?: Subset<T, Tahun$TargetIntakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TargetDb<T extends Tahun$TargetDbArgs<ExtArgs> = {}>(args?: Subset<T, Tahun$TargetDbArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CapaianRincian<T extends Tahun$CapaianRincianArgs<ExtArgs> = {}>(args?: Subset<T, Tahun$CapaianRincianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tahun model
   */
  interface TahunFieldRefs {
    readonly tahunId: FieldRef<"Tahun", 'String'>
    readonly semesterId: FieldRef<"Tahun", 'String'>
    readonly namaTahun: FieldRef<"Tahun", 'String'>
    readonly deskripsi: FieldRef<"Tahun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tahun findUnique
   */
  export type TahunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter, which Tahun to fetch.
     */
    where: TahunWhereUniqueInput
  }

  /**
   * Tahun findUniqueOrThrow
   */
  export type TahunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter, which Tahun to fetch.
     */
    where: TahunWhereUniqueInput
  }

  /**
   * Tahun findFirst
   */
  export type TahunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter, which Tahun to fetch.
     */
    where?: TahunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tahuns to fetch.
     */
    orderBy?: TahunOrderByWithRelationInput | TahunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tahuns.
     */
    cursor?: TahunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tahuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tahuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tahuns.
     */
    distinct?: TahunScalarFieldEnum | TahunScalarFieldEnum[]
  }

  /**
   * Tahun findFirstOrThrow
   */
  export type TahunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter, which Tahun to fetch.
     */
    where?: TahunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tahuns to fetch.
     */
    orderBy?: TahunOrderByWithRelationInput | TahunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tahuns.
     */
    cursor?: TahunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tahuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tahuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tahuns.
     */
    distinct?: TahunScalarFieldEnum | TahunScalarFieldEnum[]
  }

  /**
   * Tahun findMany
   */
  export type TahunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter, which Tahuns to fetch.
     */
    where?: TahunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tahuns to fetch.
     */
    orderBy?: TahunOrderByWithRelationInput | TahunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tahuns.
     */
    cursor?: TahunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tahuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tahuns.
     */
    skip?: number
    distinct?: TahunScalarFieldEnum | TahunScalarFieldEnum[]
  }

  /**
   * Tahun create
   */
  export type TahunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * The data needed to create a Tahun.
     */
    data: XOR<TahunCreateInput, TahunUncheckedCreateInput>
  }

  /**
   * Tahun createMany
   */
  export type TahunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tahuns.
     */
    data: TahunCreateManyInput | TahunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tahun createManyAndReturn
   */
  export type TahunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * The data used to create many Tahuns.
     */
    data: TahunCreateManyInput | TahunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tahun update
   */
  export type TahunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * The data needed to update a Tahun.
     */
    data: XOR<TahunUpdateInput, TahunUncheckedUpdateInput>
    /**
     * Choose, which Tahun to update.
     */
    where: TahunWhereUniqueInput
  }

  /**
   * Tahun updateMany
   */
  export type TahunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tahuns.
     */
    data: XOR<TahunUpdateManyMutationInput, TahunUncheckedUpdateManyInput>
    /**
     * Filter which Tahuns to update
     */
    where?: TahunWhereInput
    /**
     * Limit how many Tahuns to update.
     */
    limit?: number
  }

  /**
   * Tahun updateManyAndReturn
   */
  export type TahunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * The data used to update Tahuns.
     */
    data: XOR<TahunUpdateManyMutationInput, TahunUncheckedUpdateManyInput>
    /**
     * Filter which Tahuns to update
     */
    where?: TahunWhereInput
    /**
     * Limit how many Tahuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tahun upsert
   */
  export type TahunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * The filter to search for the Tahun to update in case it exists.
     */
    where: TahunWhereUniqueInput
    /**
     * In case the Tahun found by the `where` argument doesn't exist, create a new Tahun with this data.
     */
    create: XOR<TahunCreateInput, TahunUncheckedCreateInput>
    /**
     * In case the Tahun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TahunUpdateInput, TahunUncheckedUpdateInput>
  }

  /**
   * Tahun delete
   */
  export type TahunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
    /**
     * Filter which Tahun to delete.
     */
    where: TahunWhereUniqueInput
  }

  /**
   * Tahun deleteMany
   */
  export type TahunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tahuns to delete
     */
    where?: TahunWhereInput
    /**
     * Limit how many Tahuns to delete.
     */
    limit?: number
  }

  /**
   * Tahun.TargetIntake
   */
  export type Tahun$TargetIntakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    where?: TargetIntakeWhereInput
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    cursor?: TargetIntakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * Tahun.TargetDb
   */
  export type Tahun$TargetDbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    where?: TargetDbWhereInput
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    cursor?: TargetDbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TargetDbScalarFieldEnum | TargetDbScalarFieldEnum[]
  }

  /**
   * Tahun.CapaianRincian
   */
  export type Tahun$CapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    where?: CapaianRincianWhereInput
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    cursor?: CapaianRincianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * Tahun without action
   */
  export type TahunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tahun
     */
    select?: TahunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tahun
     */
    omit?: TahunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TahunInclude<ExtArgs> | null
  }


  /**
   * Model TargetDb
   */

  export type AggregateTargetDb = {
    _count: TargetDbCountAggregateOutputType | null
    _avg: TargetDbAvgAggregateOutputType | null
    _sum: TargetDbSumAggregateOutputType | null
    _min: TargetDbMinAggregateOutputType | null
    _max: TargetDbMaxAggregateOutputType | null
  }

  export type TargetDbAvgAggregateOutputType = {
    target: number | null
  }

  export type TargetDbSumAggregateOutputType = {
    target: number | null
  }

  export type TargetDbMinAggregateOutputType = {
    targetDbId: string | null
    tahunId: string | null
    jenisMasukId: string | null
    target: number | null
  }

  export type TargetDbMaxAggregateOutputType = {
    targetDbId: string | null
    tahunId: string | null
    jenisMasukId: string | null
    target: number | null
  }

  export type TargetDbCountAggregateOutputType = {
    targetDbId: number
    tahunId: number
    jenisMasukId: number
    target: number
    _all: number
  }


  export type TargetDbAvgAggregateInputType = {
    target?: true
  }

  export type TargetDbSumAggregateInputType = {
    target?: true
  }

  export type TargetDbMinAggregateInputType = {
    targetDbId?: true
    tahunId?: true
    jenisMasukId?: true
    target?: true
  }

  export type TargetDbMaxAggregateInputType = {
    targetDbId?: true
    tahunId?: true
    jenisMasukId?: true
    target?: true
  }

  export type TargetDbCountAggregateInputType = {
    targetDbId?: true
    tahunId?: true
    jenisMasukId?: true
    target?: true
    _all?: true
  }

  export type TargetDbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetDb to aggregate.
     */
    where?: TargetDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetDbs to fetch.
     */
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetDbs
    **/
    _count?: true | TargetDbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TargetDbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TargetDbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetDbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetDbMaxAggregateInputType
  }

  export type GetTargetDbAggregateType<T extends TargetDbAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetDb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetDb[P]>
      : GetScalarType<T[P], AggregateTargetDb[P]>
  }




  export type TargetDbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetDbWhereInput
    orderBy?: TargetDbOrderByWithAggregationInput | TargetDbOrderByWithAggregationInput[]
    by: TargetDbScalarFieldEnum[] | TargetDbScalarFieldEnum
    having?: TargetDbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetDbCountAggregateInputType | true
    _avg?: TargetDbAvgAggregateInputType
    _sum?: TargetDbSumAggregateInputType
    _min?: TargetDbMinAggregateInputType
    _max?: TargetDbMaxAggregateInputType
  }

  export type TargetDbGroupByOutputType = {
    targetDbId: string
    tahunId: string
    jenisMasukId: string
    target: number
    _count: TargetDbCountAggregateOutputType | null
    _avg: TargetDbAvgAggregateOutputType | null
    _sum: TargetDbSumAggregateOutputType | null
    _min: TargetDbMinAggregateOutputType | null
    _max: TargetDbMaxAggregateOutputType | null
  }

  type GetTargetDbGroupByPayload<T extends TargetDbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetDbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetDbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetDbGroupByOutputType[P]>
            : GetScalarType<T[P], TargetDbGroupByOutputType[P]>
        }
      >
    >


  export type TargetDbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDbId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetDb"]>

  export type TargetDbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDbId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetDb"]>

  export type TargetDbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDbId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetDb"]>

  export type TargetDbSelectScalar = {
    targetDbId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    target?: boolean
  }

  export type TargetDbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"targetDbId" | "tahunId" | "jenisMasukId" | "target", ExtArgs["result"]["targetDb"]>
  export type TargetDbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }
  export type TargetDbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }
  export type TargetDbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }

  export type $TargetDbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetDb"
    objects: {
      Tahun: Prisma.$TahunPayload<ExtArgs>
      JenisMasuk: Prisma.$JenisMasukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      targetDbId: string
      tahunId: string
      jenisMasukId: string
      target: number
    }, ExtArgs["result"]["targetDb"]>
    composites: {}
  }

  type TargetDbGetPayload<S extends boolean | null | undefined | TargetDbDefaultArgs> = $Result.GetResult<Prisma.$TargetDbPayload, S>

  type TargetDbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetDbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetDbCountAggregateInputType | true
    }

  export interface TargetDbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetDb'], meta: { name: 'TargetDb' } }
    /**
     * Find zero or one TargetDb that matches the filter.
     * @param {TargetDbFindUniqueArgs} args - Arguments to find a TargetDb
     * @example
     * // Get one TargetDb
     * const targetDb = await prisma.targetDb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetDbFindUniqueArgs>(args: SelectSubset<T, TargetDbFindUniqueArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TargetDb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetDbFindUniqueOrThrowArgs} args - Arguments to find a TargetDb
     * @example
     * // Get one TargetDb
     * const targetDb = await prisma.targetDb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetDbFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetDbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetDb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbFindFirstArgs} args - Arguments to find a TargetDb
     * @example
     * // Get one TargetDb
     * const targetDb = await prisma.targetDb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetDbFindFirstArgs>(args?: SelectSubset<T, TargetDbFindFirstArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetDb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbFindFirstOrThrowArgs} args - Arguments to find a TargetDb
     * @example
     * // Get one TargetDb
     * const targetDb = await prisma.targetDb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetDbFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetDbFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TargetDbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetDbs
     * const targetDbs = await prisma.targetDb.findMany()
     * 
     * // Get first 10 TargetDbs
     * const targetDbs = await prisma.targetDb.findMany({ take: 10 })
     * 
     * // Only select the `targetDbId`
     * const targetDbWithTargetDbIdOnly = await prisma.targetDb.findMany({ select: { targetDbId: true } })
     * 
     */
    findMany<T extends TargetDbFindManyArgs>(args?: SelectSubset<T, TargetDbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TargetDb.
     * @param {TargetDbCreateArgs} args - Arguments to create a TargetDb.
     * @example
     * // Create one TargetDb
     * const TargetDb = await prisma.targetDb.create({
     *   data: {
     *     // ... data to create a TargetDb
     *   }
     * })
     * 
     */
    create<T extends TargetDbCreateArgs>(args: SelectSubset<T, TargetDbCreateArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TargetDbs.
     * @param {TargetDbCreateManyArgs} args - Arguments to create many TargetDbs.
     * @example
     * // Create many TargetDbs
     * const targetDb = await prisma.targetDb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetDbCreateManyArgs>(args?: SelectSubset<T, TargetDbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetDbs and returns the data saved in the database.
     * @param {TargetDbCreateManyAndReturnArgs} args - Arguments to create many TargetDbs.
     * @example
     * // Create many TargetDbs
     * const targetDb = await prisma.targetDb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetDbs and only return the `targetDbId`
     * const targetDbWithTargetDbIdOnly = await prisma.targetDb.createManyAndReturn({
     *   select: { targetDbId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetDbCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetDbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TargetDb.
     * @param {TargetDbDeleteArgs} args - Arguments to delete one TargetDb.
     * @example
     * // Delete one TargetDb
     * const TargetDb = await prisma.targetDb.delete({
     *   where: {
     *     // ... filter to delete one TargetDb
     *   }
     * })
     * 
     */
    delete<T extends TargetDbDeleteArgs>(args: SelectSubset<T, TargetDbDeleteArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TargetDb.
     * @param {TargetDbUpdateArgs} args - Arguments to update one TargetDb.
     * @example
     * // Update one TargetDb
     * const targetDb = await prisma.targetDb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetDbUpdateArgs>(args: SelectSubset<T, TargetDbUpdateArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TargetDbs.
     * @param {TargetDbDeleteManyArgs} args - Arguments to filter TargetDbs to delete.
     * @example
     * // Delete a few TargetDbs
     * const { count } = await prisma.targetDb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetDbDeleteManyArgs>(args?: SelectSubset<T, TargetDbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetDbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetDbs
     * const targetDb = await prisma.targetDb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetDbUpdateManyArgs>(args: SelectSubset<T, TargetDbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetDbs and returns the data updated in the database.
     * @param {TargetDbUpdateManyAndReturnArgs} args - Arguments to update many TargetDbs.
     * @example
     * // Update many TargetDbs
     * const targetDb = await prisma.targetDb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TargetDbs and only return the `targetDbId`
     * const targetDbWithTargetDbIdOnly = await prisma.targetDb.updateManyAndReturn({
     *   select: { targetDbId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetDbUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetDbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TargetDb.
     * @param {TargetDbUpsertArgs} args - Arguments to update or create a TargetDb.
     * @example
     * // Update or create a TargetDb
     * const targetDb = await prisma.targetDb.upsert({
     *   create: {
     *     // ... data to create a TargetDb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetDb we want to update
     *   }
     * })
     */
    upsert<T extends TargetDbUpsertArgs>(args: SelectSubset<T, TargetDbUpsertArgs<ExtArgs>>): Prisma__TargetDbClient<$Result.GetResult<Prisma.$TargetDbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TargetDbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbCountArgs} args - Arguments to filter TargetDbs to count.
     * @example
     * // Count the number of TargetDbs
     * const count = await prisma.targetDb.count({
     *   where: {
     *     // ... the filter for the TargetDbs we want to count
     *   }
     * })
    **/
    count<T extends TargetDbCountArgs>(
      args?: Subset<T, TargetDbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetDbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetDb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetDbAggregateArgs>(args: Subset<T, TargetDbAggregateArgs>): Prisma.PrismaPromise<GetTargetDbAggregateType<T>>

    /**
     * Group by TargetDb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetDbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetDbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetDbGroupByArgs['orderBy'] }
        : { orderBy?: TargetDbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetDbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetDbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetDb model
   */
  readonly fields: TargetDbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetDb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetDbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tahun<T extends TahunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TahunDefaultArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    JenisMasuk<T extends JenisMasukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasukDefaultArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetDb model
   */
  interface TargetDbFieldRefs {
    readonly targetDbId: FieldRef<"TargetDb", 'String'>
    readonly tahunId: FieldRef<"TargetDb", 'String'>
    readonly jenisMasukId: FieldRef<"TargetDb", 'String'>
    readonly target: FieldRef<"TargetDb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TargetDb findUnique
   */
  export type TargetDbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter, which TargetDb to fetch.
     */
    where: TargetDbWhereUniqueInput
  }

  /**
   * TargetDb findUniqueOrThrow
   */
  export type TargetDbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter, which TargetDb to fetch.
     */
    where: TargetDbWhereUniqueInput
  }

  /**
   * TargetDb findFirst
   */
  export type TargetDbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter, which TargetDb to fetch.
     */
    where?: TargetDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetDbs to fetch.
     */
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetDbs.
     */
    cursor?: TargetDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetDbs.
     */
    distinct?: TargetDbScalarFieldEnum | TargetDbScalarFieldEnum[]
  }

  /**
   * TargetDb findFirstOrThrow
   */
  export type TargetDbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter, which TargetDb to fetch.
     */
    where?: TargetDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetDbs to fetch.
     */
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetDbs.
     */
    cursor?: TargetDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetDbs.
     */
    distinct?: TargetDbScalarFieldEnum | TargetDbScalarFieldEnum[]
  }

  /**
   * TargetDb findMany
   */
  export type TargetDbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter, which TargetDbs to fetch.
     */
    where?: TargetDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetDbs to fetch.
     */
    orderBy?: TargetDbOrderByWithRelationInput | TargetDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetDbs.
     */
    cursor?: TargetDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetDbs.
     */
    skip?: number
    distinct?: TargetDbScalarFieldEnum | TargetDbScalarFieldEnum[]
  }

  /**
   * TargetDb create
   */
  export type TargetDbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * The data needed to create a TargetDb.
     */
    data: XOR<TargetDbCreateInput, TargetDbUncheckedCreateInput>
  }

  /**
   * TargetDb createMany
   */
  export type TargetDbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetDbs.
     */
    data: TargetDbCreateManyInput | TargetDbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetDb createManyAndReturn
   */
  export type TargetDbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * The data used to create many TargetDbs.
     */
    data: TargetDbCreateManyInput | TargetDbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TargetDb update
   */
  export type TargetDbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * The data needed to update a TargetDb.
     */
    data: XOR<TargetDbUpdateInput, TargetDbUncheckedUpdateInput>
    /**
     * Choose, which TargetDb to update.
     */
    where: TargetDbWhereUniqueInput
  }

  /**
   * TargetDb updateMany
   */
  export type TargetDbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetDbs.
     */
    data: XOR<TargetDbUpdateManyMutationInput, TargetDbUncheckedUpdateManyInput>
    /**
     * Filter which TargetDbs to update
     */
    where?: TargetDbWhereInput
    /**
     * Limit how many TargetDbs to update.
     */
    limit?: number
  }

  /**
   * TargetDb updateManyAndReturn
   */
  export type TargetDbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * The data used to update TargetDbs.
     */
    data: XOR<TargetDbUpdateManyMutationInput, TargetDbUncheckedUpdateManyInput>
    /**
     * Filter which TargetDbs to update
     */
    where?: TargetDbWhereInput
    /**
     * Limit how many TargetDbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TargetDb upsert
   */
  export type TargetDbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * The filter to search for the TargetDb to update in case it exists.
     */
    where: TargetDbWhereUniqueInput
    /**
     * In case the TargetDb found by the `where` argument doesn't exist, create a new TargetDb with this data.
     */
    create: XOR<TargetDbCreateInput, TargetDbUncheckedCreateInput>
    /**
     * In case the TargetDb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetDbUpdateInput, TargetDbUncheckedUpdateInput>
  }

  /**
   * TargetDb delete
   */
  export type TargetDbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
    /**
     * Filter which TargetDb to delete.
     */
    where: TargetDbWhereUniqueInput
  }

  /**
   * TargetDb deleteMany
   */
  export type TargetDbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetDbs to delete
     */
    where?: TargetDbWhereInput
    /**
     * Limit how many TargetDbs to delete.
     */
    limit?: number
  }

  /**
   * TargetDb without action
   */
  export type TargetDbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetDb
     */
    select?: TargetDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetDb
     */
    omit?: TargetDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetDbInclude<ExtArgs> | null
  }


  /**
   * Model StatusIntake
   */

  export type AggregateStatusIntake = {
    _count: StatusIntakeCountAggregateOutputType | null
    _avg: StatusIntakeAvgAggregateOutputType | null
    _sum: StatusIntakeSumAggregateOutputType | null
    _min: StatusIntakeMinAggregateOutputType | null
    _max: StatusIntakeMaxAggregateOutputType | null
  }

  export type StatusIntakeAvgAggregateOutputType = {
    persentase: number | null
  }

  export type StatusIntakeSumAggregateOutputType = {
    persentase: number | null
  }

  export type StatusIntakeMinAggregateOutputType = {
    statusIntakeId: string | null
    namaStatus: string | null
    persentase: number | null
    deskripsi: string | null
  }

  export type StatusIntakeMaxAggregateOutputType = {
    statusIntakeId: string | null
    namaStatus: string | null
    persentase: number | null
    deskripsi: string | null
  }

  export type StatusIntakeCountAggregateOutputType = {
    statusIntakeId: number
    namaStatus: number
    persentase: number
    deskripsi: number
    _all: number
  }


  export type StatusIntakeAvgAggregateInputType = {
    persentase?: true
  }

  export type StatusIntakeSumAggregateInputType = {
    persentase?: true
  }

  export type StatusIntakeMinAggregateInputType = {
    statusIntakeId?: true
    namaStatus?: true
    persentase?: true
    deskripsi?: true
  }

  export type StatusIntakeMaxAggregateInputType = {
    statusIntakeId?: true
    namaStatus?: true
    persentase?: true
    deskripsi?: true
  }

  export type StatusIntakeCountAggregateInputType = {
    statusIntakeId?: true
    namaStatus?: true
    persentase?: true
    deskripsi?: true
    _all?: true
  }

  export type StatusIntakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusIntake to aggregate.
     */
    where?: StatusIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusIntakes to fetch.
     */
    orderBy?: StatusIntakeOrderByWithRelationInput | StatusIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusIntakes
    **/
    _count?: true | StatusIntakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusIntakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusIntakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusIntakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusIntakeMaxAggregateInputType
  }

  export type GetStatusIntakeAggregateType<T extends StatusIntakeAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusIntake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusIntake[P]>
      : GetScalarType<T[P], AggregateStatusIntake[P]>
  }




  export type StatusIntakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusIntakeWhereInput
    orderBy?: StatusIntakeOrderByWithAggregationInput | StatusIntakeOrderByWithAggregationInput[]
    by: StatusIntakeScalarFieldEnum[] | StatusIntakeScalarFieldEnum
    having?: StatusIntakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusIntakeCountAggregateInputType | true
    _avg?: StatusIntakeAvgAggregateInputType
    _sum?: StatusIntakeSumAggregateInputType
    _min?: StatusIntakeMinAggregateInputType
    _max?: StatusIntakeMaxAggregateInputType
  }

  export type StatusIntakeGroupByOutputType = {
    statusIntakeId: string
    namaStatus: string
    persentase: number
    deskripsi: string
    _count: StatusIntakeCountAggregateOutputType | null
    _avg: StatusIntakeAvgAggregateOutputType | null
    _sum: StatusIntakeSumAggregateOutputType | null
    _min: StatusIntakeMinAggregateOutputType | null
    _max: StatusIntakeMaxAggregateOutputType | null
  }

  type GetStatusIntakeGroupByPayload<T extends StatusIntakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusIntakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusIntakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusIntakeGroupByOutputType[P]>
            : GetScalarType<T[P], StatusIntakeGroupByOutputType[P]>
        }
      >
    >


  export type StatusIntakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusIntakeId?: boolean
    namaStatus?: boolean
    persentase?: boolean
    deskripsi?: boolean
    CapaianRincian?: boolean | StatusIntake$CapaianRincianArgs<ExtArgs>
    _count?: boolean | StatusIntakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusIntake"]>

  export type StatusIntakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusIntakeId?: boolean
    namaStatus?: boolean
    persentase?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["statusIntake"]>

  export type StatusIntakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusIntakeId?: boolean
    namaStatus?: boolean
    persentase?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["statusIntake"]>

  export type StatusIntakeSelectScalar = {
    statusIntakeId?: boolean
    namaStatus?: boolean
    persentase?: boolean
    deskripsi?: boolean
  }

  export type StatusIntakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"statusIntakeId" | "namaStatus" | "persentase" | "deskripsi", ExtArgs["result"]["statusIntake"]>
  export type StatusIntakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CapaianRincian?: boolean | StatusIntake$CapaianRincianArgs<ExtArgs>
    _count?: boolean | StatusIntakeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIntakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIntakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusIntakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusIntake"
    objects: {
      CapaianRincian: Prisma.$CapaianRincianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      statusIntakeId: string
      namaStatus: string
      persentase: number
      deskripsi: string
    }, ExtArgs["result"]["statusIntake"]>
    composites: {}
  }

  type StatusIntakeGetPayload<S extends boolean | null | undefined | StatusIntakeDefaultArgs> = $Result.GetResult<Prisma.$StatusIntakePayload, S>

  type StatusIntakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusIntakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusIntakeCountAggregateInputType | true
    }

  export interface StatusIntakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusIntake'], meta: { name: 'StatusIntake' } }
    /**
     * Find zero or one StatusIntake that matches the filter.
     * @param {StatusIntakeFindUniqueArgs} args - Arguments to find a StatusIntake
     * @example
     * // Get one StatusIntake
     * const statusIntake = await prisma.statusIntake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusIntakeFindUniqueArgs>(args: SelectSubset<T, StatusIntakeFindUniqueArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusIntake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusIntakeFindUniqueOrThrowArgs} args - Arguments to find a StatusIntake
     * @example
     * // Get one StatusIntake
     * const statusIntake = await prisma.statusIntake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusIntakeFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusIntakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusIntake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeFindFirstArgs} args - Arguments to find a StatusIntake
     * @example
     * // Get one StatusIntake
     * const statusIntake = await prisma.statusIntake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusIntakeFindFirstArgs>(args?: SelectSubset<T, StatusIntakeFindFirstArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusIntake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeFindFirstOrThrowArgs} args - Arguments to find a StatusIntake
     * @example
     * // Get one StatusIntake
     * const statusIntake = await prisma.statusIntake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusIntakeFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusIntakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusIntakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusIntakes
     * const statusIntakes = await prisma.statusIntake.findMany()
     * 
     * // Get first 10 StatusIntakes
     * const statusIntakes = await prisma.statusIntake.findMany({ take: 10 })
     * 
     * // Only select the `statusIntakeId`
     * const statusIntakeWithStatusIntakeIdOnly = await prisma.statusIntake.findMany({ select: { statusIntakeId: true } })
     * 
     */
    findMany<T extends StatusIntakeFindManyArgs>(args?: SelectSubset<T, StatusIntakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusIntake.
     * @param {StatusIntakeCreateArgs} args - Arguments to create a StatusIntake.
     * @example
     * // Create one StatusIntake
     * const StatusIntake = await prisma.statusIntake.create({
     *   data: {
     *     // ... data to create a StatusIntake
     *   }
     * })
     * 
     */
    create<T extends StatusIntakeCreateArgs>(args: SelectSubset<T, StatusIntakeCreateArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusIntakes.
     * @param {StatusIntakeCreateManyArgs} args - Arguments to create many StatusIntakes.
     * @example
     * // Create many StatusIntakes
     * const statusIntake = await prisma.statusIntake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusIntakeCreateManyArgs>(args?: SelectSubset<T, StatusIntakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusIntakes and returns the data saved in the database.
     * @param {StatusIntakeCreateManyAndReturnArgs} args - Arguments to create many StatusIntakes.
     * @example
     * // Create many StatusIntakes
     * const statusIntake = await prisma.statusIntake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusIntakes and only return the `statusIntakeId`
     * const statusIntakeWithStatusIntakeIdOnly = await prisma.statusIntake.createManyAndReturn({
     *   select: { statusIntakeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusIntakeCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusIntakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusIntake.
     * @param {StatusIntakeDeleteArgs} args - Arguments to delete one StatusIntake.
     * @example
     * // Delete one StatusIntake
     * const StatusIntake = await prisma.statusIntake.delete({
     *   where: {
     *     // ... filter to delete one StatusIntake
     *   }
     * })
     * 
     */
    delete<T extends StatusIntakeDeleteArgs>(args: SelectSubset<T, StatusIntakeDeleteArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusIntake.
     * @param {StatusIntakeUpdateArgs} args - Arguments to update one StatusIntake.
     * @example
     * // Update one StatusIntake
     * const statusIntake = await prisma.statusIntake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusIntakeUpdateArgs>(args: SelectSubset<T, StatusIntakeUpdateArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusIntakes.
     * @param {StatusIntakeDeleteManyArgs} args - Arguments to filter StatusIntakes to delete.
     * @example
     * // Delete a few StatusIntakes
     * const { count } = await prisma.statusIntake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusIntakeDeleteManyArgs>(args?: SelectSubset<T, StatusIntakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusIntakes
     * const statusIntake = await prisma.statusIntake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusIntakeUpdateManyArgs>(args: SelectSubset<T, StatusIntakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusIntakes and returns the data updated in the database.
     * @param {StatusIntakeUpdateManyAndReturnArgs} args - Arguments to update many StatusIntakes.
     * @example
     * // Update many StatusIntakes
     * const statusIntake = await prisma.statusIntake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusIntakes and only return the `statusIntakeId`
     * const statusIntakeWithStatusIntakeIdOnly = await prisma.statusIntake.updateManyAndReturn({
     *   select: { statusIntakeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusIntakeUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusIntakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusIntake.
     * @param {StatusIntakeUpsertArgs} args - Arguments to update or create a StatusIntake.
     * @example
     * // Update or create a StatusIntake
     * const statusIntake = await prisma.statusIntake.upsert({
     *   create: {
     *     // ... data to create a StatusIntake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusIntake we want to update
     *   }
     * })
     */
    upsert<T extends StatusIntakeUpsertArgs>(args: SelectSubset<T, StatusIntakeUpsertArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeCountArgs} args - Arguments to filter StatusIntakes to count.
     * @example
     * // Count the number of StatusIntakes
     * const count = await prisma.statusIntake.count({
     *   where: {
     *     // ... the filter for the StatusIntakes we want to count
     *   }
     * })
    **/
    count<T extends StatusIntakeCountArgs>(
      args?: Subset<T, StatusIntakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusIntakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusIntakeAggregateArgs>(args: Subset<T, StatusIntakeAggregateArgs>): Prisma.PrismaPromise<GetStatusIntakeAggregateType<T>>

    /**
     * Group by StatusIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusIntakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusIntakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusIntakeGroupByArgs['orderBy'] }
        : { orderBy?: StatusIntakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusIntakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusIntakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusIntake model
   */
  readonly fields: StatusIntakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusIntake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusIntakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CapaianRincian<T extends StatusIntake$CapaianRincianArgs<ExtArgs> = {}>(args?: Subset<T, StatusIntake$CapaianRincianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusIntake model
   */
  interface StatusIntakeFieldRefs {
    readonly statusIntakeId: FieldRef<"StatusIntake", 'String'>
    readonly namaStatus: FieldRef<"StatusIntake", 'String'>
    readonly persentase: FieldRef<"StatusIntake", 'Int'>
    readonly deskripsi: FieldRef<"StatusIntake", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusIntake findUnique
   */
  export type StatusIntakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StatusIntake to fetch.
     */
    where: StatusIntakeWhereUniqueInput
  }

  /**
   * StatusIntake findUniqueOrThrow
   */
  export type StatusIntakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StatusIntake to fetch.
     */
    where: StatusIntakeWhereUniqueInput
  }

  /**
   * StatusIntake findFirst
   */
  export type StatusIntakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StatusIntake to fetch.
     */
    where?: StatusIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusIntakes to fetch.
     */
    orderBy?: StatusIntakeOrderByWithRelationInput | StatusIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusIntakes.
     */
    cursor?: StatusIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusIntakes.
     */
    distinct?: StatusIntakeScalarFieldEnum | StatusIntakeScalarFieldEnum[]
  }

  /**
   * StatusIntake findFirstOrThrow
   */
  export type StatusIntakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StatusIntake to fetch.
     */
    where?: StatusIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusIntakes to fetch.
     */
    orderBy?: StatusIntakeOrderByWithRelationInput | StatusIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusIntakes.
     */
    cursor?: StatusIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusIntakes.
     */
    distinct?: StatusIntakeScalarFieldEnum | StatusIntakeScalarFieldEnum[]
  }

  /**
   * StatusIntake findMany
   */
  export type StatusIntakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter, which StatusIntakes to fetch.
     */
    where?: StatusIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusIntakes to fetch.
     */
    orderBy?: StatusIntakeOrderByWithRelationInput | StatusIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusIntakes.
     */
    cursor?: StatusIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusIntakes.
     */
    skip?: number
    distinct?: StatusIntakeScalarFieldEnum | StatusIntakeScalarFieldEnum[]
  }

  /**
   * StatusIntake create
   */
  export type StatusIntakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusIntake.
     */
    data: XOR<StatusIntakeCreateInput, StatusIntakeUncheckedCreateInput>
  }

  /**
   * StatusIntake createMany
   */
  export type StatusIntakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusIntakes.
     */
    data: StatusIntakeCreateManyInput | StatusIntakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusIntake createManyAndReturn
   */
  export type StatusIntakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * The data used to create many StatusIntakes.
     */
    data: StatusIntakeCreateManyInput | StatusIntakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusIntake update
   */
  export type StatusIntakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusIntake.
     */
    data: XOR<StatusIntakeUpdateInput, StatusIntakeUncheckedUpdateInput>
    /**
     * Choose, which StatusIntake to update.
     */
    where: StatusIntakeWhereUniqueInput
  }

  /**
   * StatusIntake updateMany
   */
  export type StatusIntakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusIntakes.
     */
    data: XOR<StatusIntakeUpdateManyMutationInput, StatusIntakeUncheckedUpdateManyInput>
    /**
     * Filter which StatusIntakes to update
     */
    where?: StatusIntakeWhereInput
    /**
     * Limit how many StatusIntakes to update.
     */
    limit?: number
  }

  /**
   * StatusIntake updateManyAndReturn
   */
  export type StatusIntakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * The data used to update StatusIntakes.
     */
    data: XOR<StatusIntakeUpdateManyMutationInput, StatusIntakeUncheckedUpdateManyInput>
    /**
     * Filter which StatusIntakes to update
     */
    where?: StatusIntakeWhereInput
    /**
     * Limit how many StatusIntakes to update.
     */
    limit?: number
  }

  /**
   * StatusIntake upsert
   */
  export type StatusIntakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusIntake to update in case it exists.
     */
    where: StatusIntakeWhereUniqueInput
    /**
     * In case the StatusIntake found by the `where` argument doesn't exist, create a new StatusIntake with this data.
     */
    create: XOR<StatusIntakeCreateInput, StatusIntakeUncheckedCreateInput>
    /**
     * In case the StatusIntake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusIntakeUpdateInput, StatusIntakeUncheckedUpdateInput>
  }

  /**
   * StatusIntake delete
   */
  export type StatusIntakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
    /**
     * Filter which StatusIntake to delete.
     */
    where: StatusIntakeWhereUniqueInput
  }

  /**
   * StatusIntake deleteMany
   */
  export type StatusIntakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusIntakes to delete
     */
    where?: StatusIntakeWhereInput
    /**
     * Limit how many StatusIntakes to delete.
     */
    limit?: number
  }

  /**
   * StatusIntake.CapaianRincian
   */
  export type StatusIntake$CapaianRincianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    where?: CapaianRincianWhereInput
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    cursor?: CapaianRincianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * StatusIntake without action
   */
  export type StatusIntakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusIntake
     */
    select?: StatusIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusIntake
     */
    omit?: StatusIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIntakeInclude<ExtArgs> | null
  }


  /**
   * Model TargetIntake
   */

  export type AggregateTargetIntake = {
    _count: TargetIntakeCountAggregateOutputType | null
    _avg: TargetIntakeAvgAggregateOutputType | null
    _sum: TargetIntakeSumAggregateOutputType | null
    _min: TargetIntakeMinAggregateOutputType | null
    _max: TargetIntakeMaxAggregateOutputType | null
  }

  export type TargetIntakeAvgAggregateOutputType = {
    target: number | null
  }

  export type TargetIntakeSumAggregateOutputType = {
    target: number | null
  }

  export type TargetIntakeMinAggregateOutputType = {
    targetIntakeId: string | null
    tahunId: string | null
    prodiId: string | null
    jenisMasukId: string | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetIntakeMaxAggregateOutputType = {
    targetIntakeId: string | null
    tahunId: string | null
    prodiId: string | null
    jenisMasukId: string | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetIntakeCountAggregateOutputType = {
    targetIntakeId: number
    tahunId: number
    prodiId: number
    jenisMasukId: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TargetIntakeAvgAggregateInputType = {
    target?: true
  }

  export type TargetIntakeSumAggregateInputType = {
    target?: true
  }

  export type TargetIntakeMinAggregateInputType = {
    targetIntakeId?: true
    tahunId?: true
    prodiId?: true
    jenisMasukId?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetIntakeMaxAggregateInputType = {
    targetIntakeId?: true
    tahunId?: true
    prodiId?: true
    jenisMasukId?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetIntakeCountAggregateInputType = {
    targetIntakeId?: true
    tahunId?: true
    prodiId?: true
    jenisMasukId?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TargetIntakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetIntake to aggregate.
     */
    where?: TargetIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIntakes to fetch.
     */
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetIntakes
    **/
    _count?: true | TargetIntakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TargetIntakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TargetIntakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetIntakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetIntakeMaxAggregateInputType
  }

  export type GetTargetIntakeAggregateType<T extends TargetIntakeAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetIntake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetIntake[P]>
      : GetScalarType<T[P], AggregateTargetIntake[P]>
  }




  export type TargetIntakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetIntakeWhereInput
    orderBy?: TargetIntakeOrderByWithAggregationInput | TargetIntakeOrderByWithAggregationInput[]
    by: TargetIntakeScalarFieldEnum[] | TargetIntakeScalarFieldEnum
    having?: TargetIntakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetIntakeCountAggregateInputType | true
    _avg?: TargetIntakeAvgAggregateInputType
    _sum?: TargetIntakeSumAggregateInputType
    _min?: TargetIntakeMinAggregateInputType
    _max?: TargetIntakeMaxAggregateInputType
  }

  export type TargetIntakeGroupByOutputType = {
    targetIntakeId: string
    tahunId: string
    prodiId: string | null
    jenisMasukId: string
    target: number
    createdAt: Date
    updatedAt: Date
    _count: TargetIntakeCountAggregateOutputType | null
    _avg: TargetIntakeAvgAggregateOutputType | null
    _sum: TargetIntakeSumAggregateOutputType | null
    _min: TargetIntakeMinAggregateOutputType | null
    _max: TargetIntakeMaxAggregateOutputType | null
  }

  type GetTargetIntakeGroupByPayload<T extends TargetIntakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetIntakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetIntakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetIntakeGroupByOutputType[P]>
            : GetScalarType<T[P], TargetIntakeGroupByOutputType[P]>
        }
      >
    >


  export type TargetIntakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetIntakeId?: boolean
    tahunId?: boolean
    prodiId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
    Capaian?: boolean | TargetIntake$CapaianArgs<ExtArgs>
    _count?: boolean | TargetIntakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetIntake"]>

  export type TargetIntakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetIntakeId?: boolean
    tahunId?: boolean
    prodiId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetIntake"]>

  export type TargetIntakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetIntakeId?: boolean
    tahunId?: boolean
    prodiId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetIntake"]>

  export type TargetIntakeSelectScalar = {
    targetIntakeId?: boolean
    tahunId?: boolean
    prodiId?: boolean
    jenisMasukId?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TargetIntakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"targetIntakeId" | "tahunId" | "prodiId" | "jenisMasukId" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["targetIntake"]>
  export type TargetIntakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
    Capaian?: boolean | TargetIntake$CapaianArgs<ExtArgs>
    _count?: boolean | TargetIntakeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TargetIntakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }
  export type TargetIntakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    Prodi?: boolean | TargetIntake$ProdiArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }

  export type $TargetIntakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetIntake"
    objects: {
      Tahun: Prisma.$TahunPayload<ExtArgs>
      Prodi: Prisma.$ProdiPayload<ExtArgs> | null
      JenisMasuk: Prisma.$JenisMasukPayload<ExtArgs>
      Capaian: Prisma.$CapaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      targetIntakeId: string
      tahunId: string
      prodiId: string | null
      jenisMasukId: string
      target: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["targetIntake"]>
    composites: {}
  }

  type TargetIntakeGetPayload<S extends boolean | null | undefined | TargetIntakeDefaultArgs> = $Result.GetResult<Prisma.$TargetIntakePayload, S>

  type TargetIntakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetIntakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetIntakeCountAggregateInputType | true
    }

  export interface TargetIntakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetIntake'], meta: { name: 'TargetIntake' } }
    /**
     * Find zero or one TargetIntake that matches the filter.
     * @param {TargetIntakeFindUniqueArgs} args - Arguments to find a TargetIntake
     * @example
     * // Get one TargetIntake
     * const targetIntake = await prisma.targetIntake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetIntakeFindUniqueArgs>(args: SelectSubset<T, TargetIntakeFindUniqueArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TargetIntake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetIntakeFindUniqueOrThrowArgs} args - Arguments to find a TargetIntake
     * @example
     * // Get one TargetIntake
     * const targetIntake = await prisma.targetIntake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetIntakeFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetIntakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetIntake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeFindFirstArgs} args - Arguments to find a TargetIntake
     * @example
     * // Get one TargetIntake
     * const targetIntake = await prisma.targetIntake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetIntakeFindFirstArgs>(args?: SelectSubset<T, TargetIntakeFindFirstArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetIntake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeFindFirstOrThrowArgs} args - Arguments to find a TargetIntake
     * @example
     * // Get one TargetIntake
     * const targetIntake = await prisma.targetIntake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetIntakeFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetIntakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TargetIntakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetIntakes
     * const targetIntakes = await prisma.targetIntake.findMany()
     * 
     * // Get first 10 TargetIntakes
     * const targetIntakes = await prisma.targetIntake.findMany({ take: 10 })
     * 
     * // Only select the `targetIntakeId`
     * const targetIntakeWithTargetIntakeIdOnly = await prisma.targetIntake.findMany({ select: { targetIntakeId: true } })
     * 
     */
    findMany<T extends TargetIntakeFindManyArgs>(args?: SelectSubset<T, TargetIntakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TargetIntake.
     * @param {TargetIntakeCreateArgs} args - Arguments to create a TargetIntake.
     * @example
     * // Create one TargetIntake
     * const TargetIntake = await prisma.targetIntake.create({
     *   data: {
     *     // ... data to create a TargetIntake
     *   }
     * })
     * 
     */
    create<T extends TargetIntakeCreateArgs>(args: SelectSubset<T, TargetIntakeCreateArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TargetIntakes.
     * @param {TargetIntakeCreateManyArgs} args - Arguments to create many TargetIntakes.
     * @example
     * // Create many TargetIntakes
     * const targetIntake = await prisma.targetIntake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetIntakeCreateManyArgs>(args?: SelectSubset<T, TargetIntakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetIntakes and returns the data saved in the database.
     * @param {TargetIntakeCreateManyAndReturnArgs} args - Arguments to create many TargetIntakes.
     * @example
     * // Create many TargetIntakes
     * const targetIntake = await prisma.targetIntake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetIntakes and only return the `targetIntakeId`
     * const targetIntakeWithTargetIntakeIdOnly = await prisma.targetIntake.createManyAndReturn({
     *   select: { targetIntakeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetIntakeCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetIntakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TargetIntake.
     * @param {TargetIntakeDeleteArgs} args - Arguments to delete one TargetIntake.
     * @example
     * // Delete one TargetIntake
     * const TargetIntake = await prisma.targetIntake.delete({
     *   where: {
     *     // ... filter to delete one TargetIntake
     *   }
     * })
     * 
     */
    delete<T extends TargetIntakeDeleteArgs>(args: SelectSubset<T, TargetIntakeDeleteArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TargetIntake.
     * @param {TargetIntakeUpdateArgs} args - Arguments to update one TargetIntake.
     * @example
     * // Update one TargetIntake
     * const targetIntake = await prisma.targetIntake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetIntakeUpdateArgs>(args: SelectSubset<T, TargetIntakeUpdateArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TargetIntakes.
     * @param {TargetIntakeDeleteManyArgs} args - Arguments to filter TargetIntakes to delete.
     * @example
     * // Delete a few TargetIntakes
     * const { count } = await prisma.targetIntake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetIntakeDeleteManyArgs>(args?: SelectSubset<T, TargetIntakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetIntakes
     * const targetIntake = await prisma.targetIntake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetIntakeUpdateManyArgs>(args: SelectSubset<T, TargetIntakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetIntakes and returns the data updated in the database.
     * @param {TargetIntakeUpdateManyAndReturnArgs} args - Arguments to update many TargetIntakes.
     * @example
     * // Update many TargetIntakes
     * const targetIntake = await prisma.targetIntake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TargetIntakes and only return the `targetIntakeId`
     * const targetIntakeWithTargetIntakeIdOnly = await prisma.targetIntake.updateManyAndReturn({
     *   select: { targetIntakeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetIntakeUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetIntakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TargetIntake.
     * @param {TargetIntakeUpsertArgs} args - Arguments to update or create a TargetIntake.
     * @example
     * // Update or create a TargetIntake
     * const targetIntake = await prisma.targetIntake.upsert({
     *   create: {
     *     // ... data to create a TargetIntake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetIntake we want to update
     *   }
     * })
     */
    upsert<T extends TargetIntakeUpsertArgs>(args: SelectSubset<T, TargetIntakeUpsertArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TargetIntakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeCountArgs} args - Arguments to filter TargetIntakes to count.
     * @example
     * // Count the number of TargetIntakes
     * const count = await prisma.targetIntake.count({
     *   where: {
     *     // ... the filter for the TargetIntakes we want to count
     *   }
     * })
    **/
    count<T extends TargetIntakeCountArgs>(
      args?: Subset<T, TargetIntakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetIntakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetIntakeAggregateArgs>(args: Subset<T, TargetIntakeAggregateArgs>): Prisma.PrismaPromise<GetTargetIntakeAggregateType<T>>

    /**
     * Group by TargetIntake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIntakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetIntakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetIntakeGroupByArgs['orderBy'] }
        : { orderBy?: TargetIntakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetIntakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetIntakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetIntake model
   */
  readonly fields: TargetIntakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetIntake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetIntakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tahun<T extends TahunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TahunDefaultArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Prodi<T extends TargetIntake$ProdiArgs<ExtArgs> = {}>(args?: Subset<T, TargetIntake$ProdiArgs<ExtArgs>>): Prisma__ProdiClient<$Result.GetResult<Prisma.$ProdiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    JenisMasuk<T extends JenisMasukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasukDefaultArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Capaian<T extends TargetIntake$CapaianArgs<ExtArgs> = {}>(args?: Subset<T, TargetIntake$CapaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetIntake model
   */
  interface TargetIntakeFieldRefs {
    readonly targetIntakeId: FieldRef<"TargetIntake", 'String'>
    readonly tahunId: FieldRef<"TargetIntake", 'String'>
    readonly prodiId: FieldRef<"TargetIntake", 'String'>
    readonly jenisMasukId: FieldRef<"TargetIntake", 'String'>
    readonly target: FieldRef<"TargetIntake", 'Int'>
    readonly createdAt: FieldRef<"TargetIntake", 'DateTime'>
    readonly updatedAt: FieldRef<"TargetIntake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TargetIntake findUnique
   */
  export type TargetIntakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter, which TargetIntake to fetch.
     */
    where: TargetIntakeWhereUniqueInput
  }

  /**
   * TargetIntake findUniqueOrThrow
   */
  export type TargetIntakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter, which TargetIntake to fetch.
     */
    where: TargetIntakeWhereUniqueInput
  }

  /**
   * TargetIntake findFirst
   */
  export type TargetIntakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter, which TargetIntake to fetch.
     */
    where?: TargetIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIntakes to fetch.
     */
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetIntakes.
     */
    cursor?: TargetIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetIntakes.
     */
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * TargetIntake findFirstOrThrow
   */
  export type TargetIntakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter, which TargetIntake to fetch.
     */
    where?: TargetIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIntakes to fetch.
     */
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetIntakes.
     */
    cursor?: TargetIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIntakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetIntakes.
     */
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * TargetIntake findMany
   */
  export type TargetIntakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter, which TargetIntakes to fetch.
     */
    where?: TargetIntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIntakes to fetch.
     */
    orderBy?: TargetIntakeOrderByWithRelationInput | TargetIntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetIntakes.
     */
    cursor?: TargetIntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIntakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIntakes.
     */
    skip?: number
    distinct?: TargetIntakeScalarFieldEnum | TargetIntakeScalarFieldEnum[]
  }

  /**
   * TargetIntake create
   */
  export type TargetIntakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * The data needed to create a TargetIntake.
     */
    data: XOR<TargetIntakeCreateInput, TargetIntakeUncheckedCreateInput>
  }

  /**
   * TargetIntake createMany
   */
  export type TargetIntakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetIntakes.
     */
    data: TargetIntakeCreateManyInput | TargetIntakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetIntake createManyAndReturn
   */
  export type TargetIntakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * The data used to create many TargetIntakes.
     */
    data: TargetIntakeCreateManyInput | TargetIntakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TargetIntake update
   */
  export type TargetIntakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * The data needed to update a TargetIntake.
     */
    data: XOR<TargetIntakeUpdateInput, TargetIntakeUncheckedUpdateInput>
    /**
     * Choose, which TargetIntake to update.
     */
    where: TargetIntakeWhereUniqueInput
  }

  /**
   * TargetIntake updateMany
   */
  export type TargetIntakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetIntakes.
     */
    data: XOR<TargetIntakeUpdateManyMutationInput, TargetIntakeUncheckedUpdateManyInput>
    /**
     * Filter which TargetIntakes to update
     */
    where?: TargetIntakeWhereInput
    /**
     * Limit how many TargetIntakes to update.
     */
    limit?: number
  }

  /**
   * TargetIntake updateManyAndReturn
   */
  export type TargetIntakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * The data used to update TargetIntakes.
     */
    data: XOR<TargetIntakeUpdateManyMutationInput, TargetIntakeUncheckedUpdateManyInput>
    /**
     * Filter which TargetIntakes to update
     */
    where?: TargetIntakeWhereInput
    /**
     * Limit how many TargetIntakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TargetIntake upsert
   */
  export type TargetIntakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * The filter to search for the TargetIntake to update in case it exists.
     */
    where: TargetIntakeWhereUniqueInput
    /**
     * In case the TargetIntake found by the `where` argument doesn't exist, create a new TargetIntake with this data.
     */
    create: XOR<TargetIntakeCreateInput, TargetIntakeUncheckedCreateInput>
    /**
     * In case the TargetIntake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetIntakeUpdateInput, TargetIntakeUncheckedUpdateInput>
  }

  /**
   * TargetIntake delete
   */
  export type TargetIntakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
    /**
     * Filter which TargetIntake to delete.
     */
    where: TargetIntakeWhereUniqueInput
  }

  /**
   * TargetIntake deleteMany
   */
  export type TargetIntakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetIntakes to delete
     */
    where?: TargetIntakeWhereInput
    /**
     * Limit how many TargetIntakes to delete.
     */
    limit?: number
  }

  /**
   * TargetIntake.Prodi
   */
  export type TargetIntake$ProdiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prodi
     */
    select?: ProdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prodi
     */
    omit?: ProdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdiInclude<ExtArgs> | null
    where?: ProdiWhereInput
  }

  /**
   * TargetIntake.Capaian
   */
  export type TargetIntake$CapaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    where?: CapaianWhereInput
    orderBy?: CapaianOrderByWithRelationInput | CapaianOrderByWithRelationInput[]
    cursor?: CapaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianScalarFieldEnum | CapaianScalarFieldEnum[]
  }

  /**
   * TargetIntake without action
   */
  export type TargetIntakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIntake
     */
    select?: TargetIntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIntake
     */
    omit?: TargetIntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIntakeInclude<ExtArgs> | null
  }


  /**
   * Model Capaian
   */

  export type AggregateCapaian = {
    _count: CapaianCountAggregateOutputType | null
    _avg: CapaianAvgAggregateOutputType | null
    _sum: CapaianSumAggregateOutputType | null
    _min: CapaianMinAggregateOutputType | null
    _max: CapaianMaxAggregateOutputType | null
  }

  export type CapaianAvgAggregateOutputType = {
    weekday: number | null
    weekend: number | null
  }

  export type CapaianSumAggregateOutputType = {
    weekday: number | null
    weekend: number | null
  }

  export type CapaianMinAggregateOutputType = {
    capaianId: string | null
    targetIntakeId: string | null
    weekday: number | null
    weekend: number | null
  }

  export type CapaianMaxAggregateOutputType = {
    capaianId: string | null
    targetIntakeId: string | null
    weekday: number | null
    weekend: number | null
  }

  export type CapaianCountAggregateOutputType = {
    capaianId: number
    targetIntakeId: number
    weekday: number
    weekend: number
    _all: number
  }


  export type CapaianAvgAggregateInputType = {
    weekday?: true
    weekend?: true
  }

  export type CapaianSumAggregateInputType = {
    weekday?: true
    weekend?: true
  }

  export type CapaianMinAggregateInputType = {
    capaianId?: true
    targetIntakeId?: true
    weekday?: true
    weekend?: true
  }

  export type CapaianMaxAggregateInputType = {
    capaianId?: true
    targetIntakeId?: true
    weekday?: true
    weekend?: true
  }

  export type CapaianCountAggregateInputType = {
    capaianId?: true
    targetIntakeId?: true
    weekday?: true
    weekend?: true
    _all?: true
  }

  export type CapaianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capaian to aggregate.
     */
    where?: CapaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capaians to fetch.
     */
    orderBy?: CapaianOrderByWithRelationInput | CapaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capaians
    **/
    _count?: true | CapaianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapaianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapaianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapaianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapaianMaxAggregateInputType
  }

  export type GetCapaianAggregateType<T extends CapaianAggregateArgs> = {
        [P in keyof T & keyof AggregateCapaian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapaian[P]>
      : GetScalarType<T[P], AggregateCapaian[P]>
  }




  export type CapaianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianWhereInput
    orderBy?: CapaianOrderByWithAggregationInput | CapaianOrderByWithAggregationInput[]
    by: CapaianScalarFieldEnum[] | CapaianScalarFieldEnum
    having?: CapaianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapaianCountAggregateInputType | true
    _avg?: CapaianAvgAggregateInputType
    _sum?: CapaianSumAggregateInputType
    _min?: CapaianMinAggregateInputType
    _max?: CapaianMaxAggregateInputType
  }

  export type CapaianGroupByOutputType = {
    capaianId: string
    targetIntakeId: string
    weekday: number
    weekend: number
    _count: CapaianCountAggregateOutputType | null
    _avg: CapaianAvgAggregateOutputType | null
    _sum: CapaianSumAggregateOutputType | null
    _min: CapaianMinAggregateOutputType | null
    _max: CapaianMaxAggregateOutputType | null
  }

  type GetCapaianGroupByPayload<T extends CapaianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapaianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapaianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapaianGroupByOutputType[P]>
            : GetScalarType<T[P], CapaianGroupByOutputType[P]>
        }
      >
    >


  export type CapaianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianId?: boolean
    targetIntakeId?: boolean
    weekday?: boolean
    weekend?: boolean
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaian"]>

  export type CapaianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianId?: boolean
    targetIntakeId?: boolean
    weekday?: boolean
    weekend?: boolean
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaian"]>

  export type CapaianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianId?: boolean
    targetIntakeId?: boolean
    weekday?: boolean
    weekend?: boolean
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaian"]>

  export type CapaianSelectScalar = {
    capaianId?: boolean
    targetIntakeId?: boolean
    weekday?: boolean
    weekend?: boolean
  }

  export type CapaianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"capaianId" | "targetIntakeId" | "weekday" | "weekend", ExtArgs["result"]["capaian"]>
  export type CapaianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }
  export type CapaianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }
  export type CapaianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TargetIntake?: boolean | TargetIntakeDefaultArgs<ExtArgs>
  }

  export type $CapaianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capaian"
    objects: {
      TargetIntake: Prisma.$TargetIntakePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      capaianId: string
      targetIntakeId: string
      weekday: number
      weekend: number
    }, ExtArgs["result"]["capaian"]>
    composites: {}
  }

  type CapaianGetPayload<S extends boolean | null | undefined | CapaianDefaultArgs> = $Result.GetResult<Prisma.$CapaianPayload, S>

  type CapaianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapaianCountAggregateInputType | true
    }

  export interface CapaianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capaian'], meta: { name: 'Capaian' } }
    /**
     * Find zero or one Capaian that matches the filter.
     * @param {CapaianFindUniqueArgs} args - Arguments to find a Capaian
     * @example
     * // Get one Capaian
     * const capaian = await prisma.capaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapaianFindUniqueArgs>(args: SelectSubset<T, CapaianFindUniqueArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Capaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapaianFindUniqueOrThrowArgs} args - Arguments to find a Capaian
     * @example
     * // Get one Capaian
     * const capaian = await prisma.capaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapaianFindUniqueOrThrowArgs>(args: SelectSubset<T, CapaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianFindFirstArgs} args - Arguments to find a Capaian
     * @example
     * // Get one Capaian
     * const capaian = await prisma.capaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapaianFindFirstArgs>(args?: SelectSubset<T, CapaianFindFirstArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianFindFirstOrThrowArgs} args - Arguments to find a Capaian
     * @example
     * // Get one Capaian
     * const capaian = await prisma.capaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapaianFindFirstOrThrowArgs>(args?: SelectSubset<T, CapaianFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capaians
     * const capaians = await prisma.capaian.findMany()
     * 
     * // Get first 10 Capaians
     * const capaians = await prisma.capaian.findMany({ take: 10 })
     * 
     * // Only select the `capaianId`
     * const capaianWithCapaianIdOnly = await prisma.capaian.findMany({ select: { capaianId: true } })
     * 
     */
    findMany<T extends CapaianFindManyArgs>(args?: SelectSubset<T, CapaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Capaian.
     * @param {CapaianCreateArgs} args - Arguments to create a Capaian.
     * @example
     * // Create one Capaian
     * const Capaian = await prisma.capaian.create({
     *   data: {
     *     // ... data to create a Capaian
     *   }
     * })
     * 
     */
    create<T extends CapaianCreateArgs>(args: SelectSubset<T, CapaianCreateArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Capaians.
     * @param {CapaianCreateManyArgs} args - Arguments to create many Capaians.
     * @example
     * // Create many Capaians
     * const capaian = await prisma.capaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapaianCreateManyArgs>(args?: SelectSubset<T, CapaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Capaians and returns the data saved in the database.
     * @param {CapaianCreateManyAndReturnArgs} args - Arguments to create many Capaians.
     * @example
     * // Create many Capaians
     * const capaian = await prisma.capaian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Capaians and only return the `capaianId`
     * const capaianWithCapaianIdOnly = await prisma.capaian.createManyAndReturn({
     *   select: { capaianId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapaianCreateManyAndReturnArgs>(args?: SelectSubset<T, CapaianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Capaian.
     * @param {CapaianDeleteArgs} args - Arguments to delete one Capaian.
     * @example
     * // Delete one Capaian
     * const Capaian = await prisma.capaian.delete({
     *   where: {
     *     // ... filter to delete one Capaian
     *   }
     * })
     * 
     */
    delete<T extends CapaianDeleteArgs>(args: SelectSubset<T, CapaianDeleteArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Capaian.
     * @param {CapaianUpdateArgs} args - Arguments to update one Capaian.
     * @example
     * // Update one Capaian
     * const capaian = await prisma.capaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapaianUpdateArgs>(args: SelectSubset<T, CapaianUpdateArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Capaians.
     * @param {CapaianDeleteManyArgs} args - Arguments to filter Capaians to delete.
     * @example
     * // Delete a few Capaians
     * const { count } = await prisma.capaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapaianDeleteManyArgs>(args?: SelectSubset<T, CapaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capaians
     * const capaian = await prisma.capaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapaianUpdateManyArgs>(args: SelectSubset<T, CapaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capaians and returns the data updated in the database.
     * @param {CapaianUpdateManyAndReturnArgs} args - Arguments to update many Capaians.
     * @example
     * // Update many Capaians
     * const capaian = await prisma.capaian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Capaians and only return the `capaianId`
     * const capaianWithCapaianIdOnly = await prisma.capaian.updateManyAndReturn({
     *   select: { capaianId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapaianUpdateManyAndReturnArgs>(args: SelectSubset<T, CapaianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Capaian.
     * @param {CapaianUpsertArgs} args - Arguments to update or create a Capaian.
     * @example
     * // Update or create a Capaian
     * const capaian = await prisma.capaian.upsert({
     *   create: {
     *     // ... data to create a Capaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capaian we want to update
     *   }
     * })
     */
    upsert<T extends CapaianUpsertArgs>(args: SelectSubset<T, CapaianUpsertArgs<ExtArgs>>): Prisma__CapaianClient<$Result.GetResult<Prisma.$CapaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Capaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianCountArgs} args - Arguments to filter Capaians to count.
     * @example
     * // Count the number of Capaians
     * const count = await prisma.capaian.count({
     *   where: {
     *     // ... the filter for the Capaians we want to count
     *   }
     * })
    **/
    count<T extends CapaianCountArgs>(
      args?: Subset<T, CapaianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapaianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapaianAggregateArgs>(args: Subset<T, CapaianAggregateArgs>): Prisma.PrismaPromise<GetCapaianAggregateType<T>>

    /**
     * Group by Capaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapaianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapaianGroupByArgs['orderBy'] }
        : { orderBy?: CapaianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capaian model
   */
  readonly fields: CapaianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capaian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapaianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TargetIntake<T extends TargetIntakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TargetIntakeDefaultArgs<ExtArgs>>): Prisma__TargetIntakeClient<$Result.GetResult<Prisma.$TargetIntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Capaian model
   */
  interface CapaianFieldRefs {
    readonly capaianId: FieldRef<"Capaian", 'String'>
    readonly targetIntakeId: FieldRef<"Capaian", 'String'>
    readonly weekday: FieldRef<"Capaian", 'Int'>
    readonly weekend: FieldRef<"Capaian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Capaian findUnique
   */
  export type CapaianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter, which Capaian to fetch.
     */
    where: CapaianWhereUniqueInput
  }

  /**
   * Capaian findUniqueOrThrow
   */
  export type CapaianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter, which Capaian to fetch.
     */
    where: CapaianWhereUniqueInput
  }

  /**
   * Capaian findFirst
   */
  export type CapaianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter, which Capaian to fetch.
     */
    where?: CapaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capaians to fetch.
     */
    orderBy?: CapaianOrderByWithRelationInput | CapaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capaians.
     */
    cursor?: CapaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capaians.
     */
    distinct?: CapaianScalarFieldEnum | CapaianScalarFieldEnum[]
  }

  /**
   * Capaian findFirstOrThrow
   */
  export type CapaianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter, which Capaian to fetch.
     */
    where?: CapaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capaians to fetch.
     */
    orderBy?: CapaianOrderByWithRelationInput | CapaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capaians.
     */
    cursor?: CapaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capaians.
     */
    distinct?: CapaianScalarFieldEnum | CapaianScalarFieldEnum[]
  }

  /**
   * Capaian findMany
   */
  export type CapaianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter, which Capaians to fetch.
     */
    where?: CapaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capaians to fetch.
     */
    orderBy?: CapaianOrderByWithRelationInput | CapaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capaians.
     */
    cursor?: CapaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capaians.
     */
    skip?: number
    distinct?: CapaianScalarFieldEnum | CapaianScalarFieldEnum[]
  }

  /**
   * Capaian create
   */
  export type CapaianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * The data needed to create a Capaian.
     */
    data: XOR<CapaianCreateInput, CapaianUncheckedCreateInput>
  }

  /**
   * Capaian createMany
   */
  export type CapaianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capaians.
     */
    data: CapaianCreateManyInput | CapaianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capaian createManyAndReturn
   */
  export type CapaianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * The data used to create many Capaians.
     */
    data: CapaianCreateManyInput | CapaianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Capaian update
   */
  export type CapaianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * The data needed to update a Capaian.
     */
    data: XOR<CapaianUpdateInput, CapaianUncheckedUpdateInput>
    /**
     * Choose, which Capaian to update.
     */
    where: CapaianWhereUniqueInput
  }

  /**
   * Capaian updateMany
   */
  export type CapaianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capaians.
     */
    data: XOR<CapaianUpdateManyMutationInput, CapaianUncheckedUpdateManyInput>
    /**
     * Filter which Capaians to update
     */
    where?: CapaianWhereInput
    /**
     * Limit how many Capaians to update.
     */
    limit?: number
  }

  /**
   * Capaian updateManyAndReturn
   */
  export type CapaianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * The data used to update Capaians.
     */
    data: XOR<CapaianUpdateManyMutationInput, CapaianUncheckedUpdateManyInput>
    /**
     * Filter which Capaians to update
     */
    where?: CapaianWhereInput
    /**
     * Limit how many Capaians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Capaian upsert
   */
  export type CapaianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * The filter to search for the Capaian to update in case it exists.
     */
    where: CapaianWhereUniqueInput
    /**
     * In case the Capaian found by the `where` argument doesn't exist, create a new Capaian with this data.
     */
    create: XOR<CapaianCreateInput, CapaianUncheckedCreateInput>
    /**
     * In case the Capaian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapaianUpdateInput, CapaianUncheckedUpdateInput>
  }

  /**
   * Capaian delete
   */
  export type CapaianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
    /**
     * Filter which Capaian to delete.
     */
    where: CapaianWhereUniqueInput
  }

  /**
   * Capaian deleteMany
   */
  export type CapaianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capaians to delete
     */
    where?: CapaianWhereInput
    /**
     * Limit how many Capaians to delete.
     */
    limit?: number
  }

  /**
   * Capaian without action
   */
  export type CapaianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capaian
     */
    select?: CapaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capaian
     */
    omit?: CapaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianInclude<ExtArgs> | null
  }


  /**
   * Model CapaianRincian
   */

  export type AggregateCapaianRincian = {
    _count: CapaianRincianCountAggregateOutputType | null
    _avg: CapaianRincianAvgAggregateOutputType | null
    _sum: CapaianRincianSumAggregateOutputType | null
    _min: CapaianRincianMinAggregateOutputType | null
    _max: CapaianRincianMaxAggregateOutputType | null
  }

  export type CapaianRincianAvgAggregateOutputType = {
    capaian: number | null
  }

  export type CapaianRincianSumAggregateOutputType = {
    capaian: number | null
  }

  export type CapaianRincianMinAggregateOutputType = {
    capaianRincianId: string | null
    statusIntakeId: string | null
    tahunId: string | null
    jenisMasukId: string | null
    capaian: number | null
  }

  export type CapaianRincianMaxAggregateOutputType = {
    capaianRincianId: string | null
    statusIntakeId: string | null
    tahunId: string | null
    jenisMasukId: string | null
    capaian: number | null
  }

  export type CapaianRincianCountAggregateOutputType = {
    capaianRincianId: number
    statusIntakeId: number
    tahunId: number
    jenisMasukId: number
    capaian: number
    _all: number
  }


  export type CapaianRincianAvgAggregateInputType = {
    capaian?: true
  }

  export type CapaianRincianSumAggregateInputType = {
    capaian?: true
  }

  export type CapaianRincianMinAggregateInputType = {
    capaianRincianId?: true
    statusIntakeId?: true
    tahunId?: true
    jenisMasukId?: true
    capaian?: true
  }

  export type CapaianRincianMaxAggregateInputType = {
    capaianRincianId?: true
    statusIntakeId?: true
    tahunId?: true
    jenisMasukId?: true
    capaian?: true
  }

  export type CapaianRincianCountAggregateInputType = {
    capaianRincianId?: true
    statusIntakeId?: true
    tahunId?: true
    jenisMasukId?: true
    capaian?: true
    _all?: true
  }

  export type CapaianRincianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapaianRincian to aggregate.
     */
    where?: CapaianRincianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianRincians to fetch.
     */
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapaianRincianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianRincians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianRincians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapaianRincians
    **/
    _count?: true | CapaianRincianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapaianRincianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapaianRincianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapaianRincianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapaianRincianMaxAggregateInputType
  }

  export type GetCapaianRincianAggregateType<T extends CapaianRincianAggregateArgs> = {
        [P in keyof T & keyof AggregateCapaianRincian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapaianRincian[P]>
      : GetScalarType<T[P], AggregateCapaianRincian[P]>
  }




  export type CapaianRincianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianRincianWhereInput
    orderBy?: CapaianRincianOrderByWithAggregationInput | CapaianRincianOrderByWithAggregationInput[]
    by: CapaianRincianScalarFieldEnum[] | CapaianRincianScalarFieldEnum
    having?: CapaianRincianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapaianRincianCountAggregateInputType | true
    _avg?: CapaianRincianAvgAggregateInputType
    _sum?: CapaianRincianSumAggregateInputType
    _min?: CapaianRincianMinAggregateInputType
    _max?: CapaianRincianMaxAggregateInputType
  }

  export type CapaianRincianGroupByOutputType = {
    capaianRincianId: string
    statusIntakeId: string
    tahunId: string
    jenisMasukId: string
    capaian: number
    _count: CapaianRincianCountAggregateOutputType | null
    _avg: CapaianRincianAvgAggregateOutputType | null
    _sum: CapaianRincianSumAggregateOutputType | null
    _min: CapaianRincianMinAggregateOutputType | null
    _max: CapaianRincianMaxAggregateOutputType | null
  }

  type GetCapaianRincianGroupByPayload<T extends CapaianRincianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapaianRincianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapaianRincianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapaianRincianGroupByOutputType[P]>
            : GetScalarType<T[P], CapaianRincianGroupByOutputType[P]>
        }
      >
    >


  export type CapaianRincianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianRincianId?: boolean
    statusIntakeId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    capaian?: boolean
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaianRincian"]>

  export type CapaianRincianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianRincianId?: boolean
    statusIntakeId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    capaian?: boolean
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaianRincian"]>

  export type CapaianRincianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    capaianRincianId?: boolean
    statusIntakeId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    capaian?: boolean
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaianRincian"]>

  export type CapaianRincianSelectScalar = {
    capaianRincianId?: boolean
    statusIntakeId?: boolean
    tahunId?: boolean
    jenisMasukId?: boolean
    capaian?: boolean
  }

  export type CapaianRincianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"capaianRincianId" | "statusIntakeId" | "tahunId" | "jenisMasukId" | "capaian", ExtArgs["result"]["capaianRincian"]>
  export type CapaianRincianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }
  export type CapaianRincianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }
  export type CapaianRincianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StatusIntake?: boolean | StatusIntakeDefaultArgs<ExtArgs>
    Tahun?: boolean | TahunDefaultArgs<ExtArgs>
    JenisMasuk?: boolean | JenisMasukDefaultArgs<ExtArgs>
  }

  export type $CapaianRincianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapaianRincian"
    objects: {
      StatusIntake: Prisma.$StatusIntakePayload<ExtArgs>
      Tahun: Prisma.$TahunPayload<ExtArgs>
      JenisMasuk: Prisma.$JenisMasukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      capaianRincianId: string
      statusIntakeId: string
      tahunId: string
      jenisMasukId: string
      capaian: number
    }, ExtArgs["result"]["capaianRincian"]>
    composites: {}
  }

  type CapaianRincianGetPayload<S extends boolean | null | undefined | CapaianRincianDefaultArgs> = $Result.GetResult<Prisma.$CapaianRincianPayload, S>

  type CapaianRincianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapaianRincianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapaianRincianCountAggregateInputType | true
    }

  export interface CapaianRincianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapaianRincian'], meta: { name: 'CapaianRincian' } }
    /**
     * Find zero or one CapaianRincian that matches the filter.
     * @param {CapaianRincianFindUniqueArgs} args - Arguments to find a CapaianRincian
     * @example
     * // Get one CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapaianRincianFindUniqueArgs>(args: SelectSubset<T, CapaianRincianFindUniqueArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CapaianRincian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapaianRincianFindUniqueOrThrowArgs} args - Arguments to find a CapaianRincian
     * @example
     * // Get one CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapaianRincianFindUniqueOrThrowArgs>(args: SelectSubset<T, CapaianRincianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapaianRincian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianFindFirstArgs} args - Arguments to find a CapaianRincian
     * @example
     * // Get one CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapaianRincianFindFirstArgs>(args?: SelectSubset<T, CapaianRincianFindFirstArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapaianRincian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianFindFirstOrThrowArgs} args - Arguments to find a CapaianRincian
     * @example
     * // Get one CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapaianRincianFindFirstOrThrowArgs>(args?: SelectSubset<T, CapaianRincianFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CapaianRincians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapaianRincians
     * const capaianRincians = await prisma.capaianRincian.findMany()
     * 
     * // Get first 10 CapaianRincians
     * const capaianRincians = await prisma.capaianRincian.findMany({ take: 10 })
     * 
     * // Only select the `capaianRincianId`
     * const capaianRincianWithCapaianRincianIdOnly = await prisma.capaianRincian.findMany({ select: { capaianRincianId: true } })
     * 
     */
    findMany<T extends CapaianRincianFindManyArgs>(args?: SelectSubset<T, CapaianRincianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CapaianRincian.
     * @param {CapaianRincianCreateArgs} args - Arguments to create a CapaianRincian.
     * @example
     * // Create one CapaianRincian
     * const CapaianRincian = await prisma.capaianRincian.create({
     *   data: {
     *     // ... data to create a CapaianRincian
     *   }
     * })
     * 
     */
    create<T extends CapaianRincianCreateArgs>(args: SelectSubset<T, CapaianRincianCreateArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CapaianRincians.
     * @param {CapaianRincianCreateManyArgs} args - Arguments to create many CapaianRincians.
     * @example
     * // Create many CapaianRincians
     * const capaianRincian = await prisma.capaianRincian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapaianRincianCreateManyArgs>(args?: SelectSubset<T, CapaianRincianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CapaianRincians and returns the data saved in the database.
     * @param {CapaianRincianCreateManyAndReturnArgs} args - Arguments to create many CapaianRincians.
     * @example
     * // Create many CapaianRincians
     * const capaianRincian = await prisma.capaianRincian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CapaianRincians and only return the `capaianRincianId`
     * const capaianRincianWithCapaianRincianIdOnly = await prisma.capaianRincian.createManyAndReturn({
     *   select: { capaianRincianId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapaianRincianCreateManyAndReturnArgs>(args?: SelectSubset<T, CapaianRincianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CapaianRincian.
     * @param {CapaianRincianDeleteArgs} args - Arguments to delete one CapaianRincian.
     * @example
     * // Delete one CapaianRincian
     * const CapaianRincian = await prisma.capaianRincian.delete({
     *   where: {
     *     // ... filter to delete one CapaianRincian
     *   }
     * })
     * 
     */
    delete<T extends CapaianRincianDeleteArgs>(args: SelectSubset<T, CapaianRincianDeleteArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CapaianRincian.
     * @param {CapaianRincianUpdateArgs} args - Arguments to update one CapaianRincian.
     * @example
     * // Update one CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapaianRincianUpdateArgs>(args: SelectSubset<T, CapaianRincianUpdateArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CapaianRincians.
     * @param {CapaianRincianDeleteManyArgs} args - Arguments to filter CapaianRincians to delete.
     * @example
     * // Delete a few CapaianRincians
     * const { count } = await prisma.capaianRincian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapaianRincianDeleteManyArgs>(args?: SelectSubset<T, CapaianRincianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapaianRincians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapaianRincians
     * const capaianRincian = await prisma.capaianRincian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapaianRincianUpdateManyArgs>(args: SelectSubset<T, CapaianRincianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapaianRincians and returns the data updated in the database.
     * @param {CapaianRincianUpdateManyAndReturnArgs} args - Arguments to update many CapaianRincians.
     * @example
     * // Update many CapaianRincians
     * const capaianRincian = await prisma.capaianRincian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CapaianRincians and only return the `capaianRincianId`
     * const capaianRincianWithCapaianRincianIdOnly = await prisma.capaianRincian.updateManyAndReturn({
     *   select: { capaianRincianId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapaianRincianUpdateManyAndReturnArgs>(args: SelectSubset<T, CapaianRincianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CapaianRincian.
     * @param {CapaianRincianUpsertArgs} args - Arguments to update or create a CapaianRincian.
     * @example
     * // Update or create a CapaianRincian
     * const capaianRincian = await prisma.capaianRincian.upsert({
     *   create: {
     *     // ... data to create a CapaianRincian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapaianRincian we want to update
     *   }
     * })
     */
    upsert<T extends CapaianRincianUpsertArgs>(args: SelectSubset<T, CapaianRincianUpsertArgs<ExtArgs>>): Prisma__CapaianRincianClient<$Result.GetResult<Prisma.$CapaianRincianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CapaianRincians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianCountArgs} args - Arguments to filter CapaianRincians to count.
     * @example
     * // Count the number of CapaianRincians
     * const count = await prisma.capaianRincian.count({
     *   where: {
     *     // ... the filter for the CapaianRincians we want to count
     *   }
     * })
    **/
    count<T extends CapaianRincianCountArgs>(
      args?: Subset<T, CapaianRincianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapaianRincianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapaianRincian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapaianRincianAggregateArgs>(args: Subset<T, CapaianRincianAggregateArgs>): Prisma.PrismaPromise<GetCapaianRincianAggregateType<T>>

    /**
     * Group by CapaianRincian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianRincianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapaianRincianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapaianRincianGroupByArgs['orderBy'] }
        : { orderBy?: CapaianRincianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapaianRincianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapaianRincianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapaianRincian model
   */
  readonly fields: CapaianRincianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapaianRincian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapaianRincianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StatusIntake<T extends StatusIntakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusIntakeDefaultArgs<ExtArgs>>): Prisma__StatusIntakeClient<$Result.GetResult<Prisma.$StatusIntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tahun<T extends TahunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TahunDefaultArgs<ExtArgs>>): Prisma__TahunClient<$Result.GetResult<Prisma.$TahunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    JenisMasuk<T extends JenisMasukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisMasukDefaultArgs<ExtArgs>>): Prisma__JenisMasukClient<$Result.GetResult<Prisma.$JenisMasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CapaianRincian model
   */
  interface CapaianRincianFieldRefs {
    readonly capaianRincianId: FieldRef<"CapaianRincian", 'String'>
    readonly statusIntakeId: FieldRef<"CapaianRincian", 'String'>
    readonly tahunId: FieldRef<"CapaianRincian", 'String'>
    readonly jenisMasukId: FieldRef<"CapaianRincian", 'String'>
    readonly capaian: FieldRef<"CapaianRincian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CapaianRincian findUnique
   */
  export type CapaianRincianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter, which CapaianRincian to fetch.
     */
    where: CapaianRincianWhereUniqueInput
  }

  /**
   * CapaianRincian findUniqueOrThrow
   */
  export type CapaianRincianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter, which CapaianRincian to fetch.
     */
    where: CapaianRincianWhereUniqueInput
  }

  /**
   * CapaianRincian findFirst
   */
  export type CapaianRincianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter, which CapaianRincian to fetch.
     */
    where?: CapaianRincianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianRincians to fetch.
     */
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapaianRincians.
     */
    cursor?: CapaianRincianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianRincians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianRincians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapaianRincians.
     */
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * CapaianRincian findFirstOrThrow
   */
  export type CapaianRincianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter, which CapaianRincian to fetch.
     */
    where?: CapaianRincianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianRincians to fetch.
     */
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapaianRincians.
     */
    cursor?: CapaianRincianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianRincians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianRincians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapaianRincians.
     */
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * CapaianRincian findMany
   */
  export type CapaianRincianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter, which CapaianRincians to fetch.
     */
    where?: CapaianRincianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianRincians to fetch.
     */
    orderBy?: CapaianRincianOrderByWithRelationInput | CapaianRincianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapaianRincians.
     */
    cursor?: CapaianRincianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianRincians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianRincians.
     */
    skip?: number
    distinct?: CapaianRincianScalarFieldEnum | CapaianRincianScalarFieldEnum[]
  }

  /**
   * CapaianRincian create
   */
  export type CapaianRincianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * The data needed to create a CapaianRincian.
     */
    data: XOR<CapaianRincianCreateInput, CapaianRincianUncheckedCreateInput>
  }

  /**
   * CapaianRincian createMany
   */
  export type CapaianRincianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapaianRincians.
     */
    data: CapaianRincianCreateManyInput | CapaianRincianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapaianRincian createManyAndReturn
   */
  export type CapaianRincianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * The data used to create many CapaianRincians.
     */
    data: CapaianRincianCreateManyInput | CapaianRincianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CapaianRincian update
   */
  export type CapaianRincianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * The data needed to update a CapaianRincian.
     */
    data: XOR<CapaianRincianUpdateInput, CapaianRincianUncheckedUpdateInput>
    /**
     * Choose, which CapaianRincian to update.
     */
    where: CapaianRincianWhereUniqueInput
  }

  /**
   * CapaianRincian updateMany
   */
  export type CapaianRincianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapaianRincians.
     */
    data: XOR<CapaianRincianUpdateManyMutationInput, CapaianRincianUncheckedUpdateManyInput>
    /**
     * Filter which CapaianRincians to update
     */
    where?: CapaianRincianWhereInput
    /**
     * Limit how many CapaianRincians to update.
     */
    limit?: number
  }

  /**
   * CapaianRincian updateManyAndReturn
   */
  export type CapaianRincianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * The data used to update CapaianRincians.
     */
    data: XOR<CapaianRincianUpdateManyMutationInput, CapaianRincianUncheckedUpdateManyInput>
    /**
     * Filter which CapaianRincians to update
     */
    where?: CapaianRincianWhereInput
    /**
     * Limit how many CapaianRincians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CapaianRincian upsert
   */
  export type CapaianRincianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * The filter to search for the CapaianRincian to update in case it exists.
     */
    where: CapaianRincianWhereUniqueInput
    /**
     * In case the CapaianRincian found by the `where` argument doesn't exist, create a new CapaianRincian with this data.
     */
    create: XOR<CapaianRincianCreateInput, CapaianRincianUncheckedCreateInput>
    /**
     * In case the CapaianRincian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapaianRincianUpdateInput, CapaianRincianUncheckedUpdateInput>
  }

  /**
   * CapaianRincian delete
   */
  export type CapaianRincianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
    /**
     * Filter which CapaianRincian to delete.
     */
    where: CapaianRincianWhereUniqueInput
  }

  /**
   * CapaianRincian deleteMany
   */
  export type CapaianRincianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapaianRincians to delete
     */
    where?: CapaianRincianWhereInput
    /**
     * Limit how many CapaianRincians to delete.
     */
    limit?: number
  }

  /**
   * CapaianRincian without action
   */
  export type CapaianRincianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianRincian
     */
    select?: CapaianRincianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapaianRincian
     */
    omit?: CapaianRincianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianRincianInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JenisPilihanScalarFieldEnum: {
    jenisPilihanId: 'jenisPilihanId',
    namaJenisPilihan: 'namaJenisPilihan',
    deskripsi: 'deskripsi'
  };

  export type JenisPilihanScalarFieldEnum = (typeof JenisPilihanScalarFieldEnum)[keyof typeof JenisPilihanScalarFieldEnum]


  export const JenisMasukScalarFieldEnum: {
    jenisMasukId: 'jenisMasukId',
    jenisPilihanId: 'jenisPilihanId',
    namaJenisMasuk: 'namaJenisMasuk',
    deskripsi: 'deskripsi'
  };

  export type JenisMasukScalarFieldEnum = (typeof JenisMasukScalarFieldEnum)[keyof typeof JenisMasukScalarFieldEnum]


  export const ProdiScalarFieldEnum: {
    prodiId: 'prodiId',
    namaProdi: 'namaProdi',
    deskripsi: 'deskripsi'
  };

  export type ProdiScalarFieldEnum = (typeof ProdiScalarFieldEnum)[keyof typeof ProdiScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    semesterId: 'semesterId',
    namaSemester: 'namaSemester',
    deskripsi: 'deskripsi'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const TahunScalarFieldEnum: {
    tahunId: 'tahunId',
    semesterId: 'semesterId',
    namaTahun: 'namaTahun',
    deskripsi: 'deskripsi'
  };

  export type TahunScalarFieldEnum = (typeof TahunScalarFieldEnum)[keyof typeof TahunScalarFieldEnum]


  export const TargetDbScalarFieldEnum: {
    targetDbId: 'targetDbId',
    tahunId: 'tahunId',
    jenisMasukId: 'jenisMasukId',
    target: 'target'
  };

  export type TargetDbScalarFieldEnum = (typeof TargetDbScalarFieldEnum)[keyof typeof TargetDbScalarFieldEnum]


  export const StatusIntakeScalarFieldEnum: {
    statusIntakeId: 'statusIntakeId',
    namaStatus: 'namaStatus',
    persentase: 'persentase',
    deskripsi: 'deskripsi'
  };

  export type StatusIntakeScalarFieldEnum = (typeof StatusIntakeScalarFieldEnum)[keyof typeof StatusIntakeScalarFieldEnum]


  export const TargetIntakeScalarFieldEnum: {
    targetIntakeId: 'targetIntakeId',
    tahunId: 'tahunId',
    prodiId: 'prodiId',
    jenisMasukId: 'jenisMasukId',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TargetIntakeScalarFieldEnum = (typeof TargetIntakeScalarFieldEnum)[keyof typeof TargetIntakeScalarFieldEnum]


  export const CapaianScalarFieldEnum: {
    capaianId: 'capaianId',
    targetIntakeId: 'targetIntakeId',
    weekday: 'weekday',
    weekend: 'weekend'
  };

  export type CapaianScalarFieldEnum = (typeof CapaianScalarFieldEnum)[keyof typeof CapaianScalarFieldEnum]


  export const CapaianRincianScalarFieldEnum: {
    capaianRincianId: 'capaianRincianId',
    statusIntakeId: 'statusIntakeId',
    tahunId: 'tahunId',
    jenisMasukId: 'jenisMasukId',
    capaian: 'capaian'
  };

  export type CapaianRincianScalarFieldEnum = (typeof CapaianRincianScalarFieldEnum)[keyof typeof CapaianRincianScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    nomorHp?: StringFilter<"User"> | string
    nomorWa?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    nama?: SortOrder
    nomorHp?: SortOrder
    nomorWa?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    nomorHp?: string
    nomorWa?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "userId" | "nomorHp" | "nomorWa" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    nama?: SortOrder
    nomorHp?: SortOrder
    nomorWa?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    nomorHp?: StringWithAggregatesFilter<"User"> | string
    nomorWa?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type JenisPilihanWhereInput = {
    AND?: JenisPilihanWhereInput | JenisPilihanWhereInput[]
    OR?: JenisPilihanWhereInput[]
    NOT?: JenisPilihanWhereInput | JenisPilihanWhereInput[]
    jenisPilihanId?: StringFilter<"JenisPilihan"> | string
    namaJenisPilihan?: StringFilter<"JenisPilihan"> | string
    deskripsi?: StringFilter<"JenisPilihan"> | string
    JenisMasuk?: JenisMasukListRelationFilter
  }

  export type JenisPilihanOrderByWithRelationInput = {
    jenisPilihanId?: SortOrder
    namaJenisPilihan?: SortOrder
    deskripsi?: SortOrder
    JenisMasuk?: JenisMasukOrderByRelationAggregateInput
  }

  export type JenisPilihanWhereUniqueInput = Prisma.AtLeast<{
    jenisPilihanId?: string
    AND?: JenisPilihanWhereInput | JenisPilihanWhereInput[]
    OR?: JenisPilihanWhereInput[]
    NOT?: JenisPilihanWhereInput | JenisPilihanWhereInput[]
    namaJenisPilihan?: StringFilter<"JenisPilihan"> | string
    deskripsi?: StringFilter<"JenisPilihan"> | string
    JenisMasuk?: JenisMasukListRelationFilter
  }, "jenisPilihanId">

  export type JenisPilihanOrderByWithAggregationInput = {
    jenisPilihanId?: SortOrder
    namaJenisPilihan?: SortOrder
    deskripsi?: SortOrder
    _count?: JenisPilihanCountOrderByAggregateInput
    _max?: JenisPilihanMaxOrderByAggregateInput
    _min?: JenisPilihanMinOrderByAggregateInput
  }

  export type JenisPilihanScalarWhereWithAggregatesInput = {
    AND?: JenisPilihanScalarWhereWithAggregatesInput | JenisPilihanScalarWhereWithAggregatesInput[]
    OR?: JenisPilihanScalarWhereWithAggregatesInput[]
    NOT?: JenisPilihanScalarWhereWithAggregatesInput | JenisPilihanScalarWhereWithAggregatesInput[]
    jenisPilihanId?: StringWithAggregatesFilter<"JenisPilihan"> | string
    namaJenisPilihan?: StringWithAggregatesFilter<"JenisPilihan"> | string
    deskripsi?: StringWithAggregatesFilter<"JenisPilihan"> | string
  }

  export type JenisMasukWhereInput = {
    AND?: JenisMasukWhereInput | JenisMasukWhereInput[]
    OR?: JenisMasukWhereInput[]
    NOT?: JenisMasukWhereInput | JenisMasukWhereInput[]
    jenisMasukId?: StringFilter<"JenisMasuk"> | string
    jenisPilihanId?: StringFilter<"JenisMasuk"> | string
    namaJenisMasuk?: StringFilter<"JenisMasuk"> | string
    deskripsi?: StringFilter<"JenisMasuk"> | string
    JenisPilihan?: XOR<JenisPilihanScalarRelationFilter, JenisPilihanWhereInput>
    TargetIntake?: TargetIntakeListRelationFilter
    TargetDb?: TargetDbListRelationFilter
    CapaianRincian?: CapaianRincianListRelationFilter
  }

  export type JenisMasukOrderByWithRelationInput = {
    jenisMasukId?: SortOrder
    jenisPilihanId?: SortOrder
    namaJenisMasuk?: SortOrder
    deskripsi?: SortOrder
    JenisPilihan?: JenisPilihanOrderByWithRelationInput
    TargetIntake?: TargetIntakeOrderByRelationAggregateInput
    TargetDb?: TargetDbOrderByRelationAggregateInput
    CapaianRincian?: CapaianRincianOrderByRelationAggregateInput
  }

  export type JenisMasukWhereUniqueInput = Prisma.AtLeast<{
    jenisMasukId?: string
    AND?: JenisMasukWhereInput | JenisMasukWhereInput[]
    OR?: JenisMasukWhereInput[]
    NOT?: JenisMasukWhereInput | JenisMasukWhereInput[]
    jenisPilihanId?: StringFilter<"JenisMasuk"> | string
    namaJenisMasuk?: StringFilter<"JenisMasuk"> | string
    deskripsi?: StringFilter<"JenisMasuk"> | string
    JenisPilihan?: XOR<JenisPilihanScalarRelationFilter, JenisPilihanWhereInput>
    TargetIntake?: TargetIntakeListRelationFilter
    TargetDb?: TargetDbListRelationFilter
    CapaianRincian?: CapaianRincianListRelationFilter
  }, "jenisMasukId">

  export type JenisMasukOrderByWithAggregationInput = {
    jenisMasukId?: SortOrder
    jenisPilihanId?: SortOrder
    namaJenisMasuk?: SortOrder
    deskripsi?: SortOrder
    _count?: JenisMasukCountOrderByAggregateInput
    _max?: JenisMasukMaxOrderByAggregateInput
    _min?: JenisMasukMinOrderByAggregateInput
  }

  export type JenisMasukScalarWhereWithAggregatesInput = {
    AND?: JenisMasukScalarWhereWithAggregatesInput | JenisMasukScalarWhereWithAggregatesInput[]
    OR?: JenisMasukScalarWhereWithAggregatesInput[]
    NOT?: JenisMasukScalarWhereWithAggregatesInput | JenisMasukScalarWhereWithAggregatesInput[]
    jenisMasukId?: StringWithAggregatesFilter<"JenisMasuk"> | string
    jenisPilihanId?: StringWithAggregatesFilter<"JenisMasuk"> | string
    namaJenisMasuk?: StringWithAggregatesFilter<"JenisMasuk"> | string
    deskripsi?: StringWithAggregatesFilter<"JenisMasuk"> | string
  }

  export type ProdiWhereInput = {
    AND?: ProdiWhereInput | ProdiWhereInput[]
    OR?: ProdiWhereInput[]
    NOT?: ProdiWhereInput | ProdiWhereInput[]
    prodiId?: StringFilter<"Prodi"> | string
    namaProdi?: StringFilter<"Prodi"> | string
    deskripsi?: StringFilter<"Prodi"> | string
    TargetIntake?: TargetIntakeListRelationFilter
  }

  export type ProdiOrderByWithRelationInput = {
    prodiId?: SortOrder
    namaProdi?: SortOrder
    deskripsi?: SortOrder
    TargetIntake?: TargetIntakeOrderByRelationAggregateInput
  }

  export type ProdiWhereUniqueInput = Prisma.AtLeast<{
    prodiId?: string
    AND?: ProdiWhereInput | ProdiWhereInput[]
    OR?: ProdiWhereInput[]
    NOT?: ProdiWhereInput | ProdiWhereInput[]
    namaProdi?: StringFilter<"Prodi"> | string
    deskripsi?: StringFilter<"Prodi"> | string
    TargetIntake?: TargetIntakeListRelationFilter
  }, "prodiId">

  export type ProdiOrderByWithAggregationInput = {
    prodiId?: SortOrder
    namaProdi?: SortOrder
    deskripsi?: SortOrder
    _count?: ProdiCountOrderByAggregateInput
    _max?: ProdiMaxOrderByAggregateInput
    _min?: ProdiMinOrderByAggregateInput
  }

  export type ProdiScalarWhereWithAggregatesInput = {
    AND?: ProdiScalarWhereWithAggregatesInput | ProdiScalarWhereWithAggregatesInput[]
    OR?: ProdiScalarWhereWithAggregatesInput[]
    NOT?: ProdiScalarWhereWithAggregatesInput | ProdiScalarWhereWithAggregatesInput[]
    prodiId?: StringWithAggregatesFilter<"Prodi"> | string
    namaProdi?: StringWithAggregatesFilter<"Prodi"> | string
    deskripsi?: StringWithAggregatesFilter<"Prodi"> | string
  }

  export type SemesterWhereInput = {
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    semesterId?: StringFilter<"Semester"> | string
    namaSemester?: StringFilter<"Semester"> | string
    deskripsi?: StringFilter<"Semester"> | string
    Tahun?: TahunListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    semesterId?: SortOrder
    namaSemester?: SortOrder
    deskripsi?: SortOrder
    Tahun?: TahunOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    semesterId?: string
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    namaSemester?: StringFilter<"Semester"> | string
    deskripsi?: StringFilter<"Semester"> | string
    Tahun?: TahunListRelationFilter
  }, "semesterId">

  export type SemesterOrderByWithAggregationInput = {
    semesterId?: SortOrder
    namaSemester?: SortOrder
    deskripsi?: SortOrder
    _count?: SemesterCountOrderByAggregateInput
    _max?: SemesterMaxOrderByAggregateInput
    _min?: SemesterMinOrderByAggregateInput
  }

  export type SemesterScalarWhereWithAggregatesInput = {
    AND?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    OR?: SemesterScalarWhereWithAggregatesInput[]
    NOT?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    semesterId?: StringWithAggregatesFilter<"Semester"> | string
    namaSemester?: StringWithAggregatesFilter<"Semester"> | string
    deskripsi?: StringWithAggregatesFilter<"Semester"> | string
  }

  export type TahunWhereInput = {
    AND?: TahunWhereInput | TahunWhereInput[]
    OR?: TahunWhereInput[]
    NOT?: TahunWhereInput | TahunWhereInput[]
    tahunId?: StringFilter<"Tahun"> | string
    semesterId?: StringFilter<"Tahun"> | string
    namaTahun?: StringFilter<"Tahun"> | string
    deskripsi?: StringFilter<"Tahun"> | string
    Semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    TargetIntake?: TargetIntakeListRelationFilter
    TargetDb?: TargetDbListRelationFilter
    CapaianRincian?: CapaianRincianListRelationFilter
  }

  export type TahunOrderByWithRelationInput = {
    tahunId?: SortOrder
    semesterId?: SortOrder
    namaTahun?: SortOrder
    deskripsi?: SortOrder
    Semester?: SemesterOrderByWithRelationInput
    TargetIntake?: TargetIntakeOrderByRelationAggregateInput
    TargetDb?: TargetDbOrderByRelationAggregateInput
    CapaianRincian?: CapaianRincianOrderByRelationAggregateInput
  }

  export type TahunWhereUniqueInput = Prisma.AtLeast<{
    tahunId?: string
    AND?: TahunWhereInput | TahunWhereInput[]
    OR?: TahunWhereInput[]
    NOT?: TahunWhereInput | TahunWhereInput[]
    semesterId?: StringFilter<"Tahun"> | string
    namaTahun?: StringFilter<"Tahun"> | string
    deskripsi?: StringFilter<"Tahun"> | string
    Semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    TargetIntake?: TargetIntakeListRelationFilter
    TargetDb?: TargetDbListRelationFilter
    CapaianRincian?: CapaianRincianListRelationFilter
  }, "tahunId">

  export type TahunOrderByWithAggregationInput = {
    tahunId?: SortOrder
    semesterId?: SortOrder
    namaTahun?: SortOrder
    deskripsi?: SortOrder
    _count?: TahunCountOrderByAggregateInput
    _max?: TahunMaxOrderByAggregateInput
    _min?: TahunMinOrderByAggregateInput
  }

  export type TahunScalarWhereWithAggregatesInput = {
    AND?: TahunScalarWhereWithAggregatesInput | TahunScalarWhereWithAggregatesInput[]
    OR?: TahunScalarWhereWithAggregatesInput[]
    NOT?: TahunScalarWhereWithAggregatesInput | TahunScalarWhereWithAggregatesInput[]
    tahunId?: StringWithAggregatesFilter<"Tahun"> | string
    semesterId?: StringWithAggregatesFilter<"Tahun"> | string
    namaTahun?: StringWithAggregatesFilter<"Tahun"> | string
    deskripsi?: StringWithAggregatesFilter<"Tahun"> | string
  }

  export type TargetDbWhereInput = {
    AND?: TargetDbWhereInput | TargetDbWhereInput[]
    OR?: TargetDbWhereInput[]
    NOT?: TargetDbWhereInput | TargetDbWhereInput[]
    targetDbId?: StringFilter<"TargetDb"> | string
    tahunId?: StringFilter<"TargetDb"> | string
    jenisMasukId?: StringFilter<"TargetDb"> | string
    target?: IntFilter<"TargetDb"> | number
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
  }

  export type TargetDbOrderByWithRelationInput = {
    targetDbId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    Tahun?: TahunOrderByWithRelationInput
    JenisMasuk?: JenisMasukOrderByWithRelationInput
  }

  export type TargetDbWhereUniqueInput = Prisma.AtLeast<{
    targetDbId?: string
    AND?: TargetDbWhereInput | TargetDbWhereInput[]
    OR?: TargetDbWhereInput[]
    NOT?: TargetDbWhereInput | TargetDbWhereInput[]
    tahunId?: StringFilter<"TargetDb"> | string
    jenisMasukId?: StringFilter<"TargetDb"> | string
    target?: IntFilter<"TargetDb"> | number
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
  }, "targetDbId">

  export type TargetDbOrderByWithAggregationInput = {
    targetDbId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    _count?: TargetDbCountOrderByAggregateInput
    _avg?: TargetDbAvgOrderByAggregateInput
    _max?: TargetDbMaxOrderByAggregateInput
    _min?: TargetDbMinOrderByAggregateInput
    _sum?: TargetDbSumOrderByAggregateInput
  }

  export type TargetDbScalarWhereWithAggregatesInput = {
    AND?: TargetDbScalarWhereWithAggregatesInput | TargetDbScalarWhereWithAggregatesInput[]
    OR?: TargetDbScalarWhereWithAggregatesInput[]
    NOT?: TargetDbScalarWhereWithAggregatesInput | TargetDbScalarWhereWithAggregatesInput[]
    targetDbId?: StringWithAggregatesFilter<"TargetDb"> | string
    tahunId?: StringWithAggregatesFilter<"TargetDb"> | string
    jenisMasukId?: StringWithAggregatesFilter<"TargetDb"> | string
    target?: IntWithAggregatesFilter<"TargetDb"> | number
  }

  export type StatusIntakeWhereInput = {
    AND?: StatusIntakeWhereInput | StatusIntakeWhereInput[]
    OR?: StatusIntakeWhereInput[]
    NOT?: StatusIntakeWhereInput | StatusIntakeWhereInput[]
    statusIntakeId?: StringFilter<"StatusIntake"> | string
    namaStatus?: StringFilter<"StatusIntake"> | string
    persentase?: IntFilter<"StatusIntake"> | number
    deskripsi?: StringFilter<"StatusIntake"> | string
    CapaianRincian?: CapaianRincianListRelationFilter
  }

  export type StatusIntakeOrderByWithRelationInput = {
    statusIntakeId?: SortOrder
    namaStatus?: SortOrder
    persentase?: SortOrder
    deskripsi?: SortOrder
    CapaianRincian?: CapaianRincianOrderByRelationAggregateInput
  }

  export type StatusIntakeWhereUniqueInput = Prisma.AtLeast<{
    statusIntakeId?: string
    AND?: StatusIntakeWhereInput | StatusIntakeWhereInput[]
    OR?: StatusIntakeWhereInput[]
    NOT?: StatusIntakeWhereInput | StatusIntakeWhereInput[]
    namaStatus?: StringFilter<"StatusIntake"> | string
    persentase?: IntFilter<"StatusIntake"> | number
    deskripsi?: StringFilter<"StatusIntake"> | string
    CapaianRincian?: CapaianRincianListRelationFilter
  }, "statusIntakeId">

  export type StatusIntakeOrderByWithAggregationInput = {
    statusIntakeId?: SortOrder
    namaStatus?: SortOrder
    persentase?: SortOrder
    deskripsi?: SortOrder
    _count?: StatusIntakeCountOrderByAggregateInput
    _avg?: StatusIntakeAvgOrderByAggregateInput
    _max?: StatusIntakeMaxOrderByAggregateInput
    _min?: StatusIntakeMinOrderByAggregateInput
    _sum?: StatusIntakeSumOrderByAggregateInput
  }

  export type StatusIntakeScalarWhereWithAggregatesInput = {
    AND?: StatusIntakeScalarWhereWithAggregatesInput | StatusIntakeScalarWhereWithAggregatesInput[]
    OR?: StatusIntakeScalarWhereWithAggregatesInput[]
    NOT?: StatusIntakeScalarWhereWithAggregatesInput | StatusIntakeScalarWhereWithAggregatesInput[]
    statusIntakeId?: StringWithAggregatesFilter<"StatusIntake"> | string
    namaStatus?: StringWithAggregatesFilter<"StatusIntake"> | string
    persentase?: IntWithAggregatesFilter<"StatusIntake"> | number
    deskripsi?: StringWithAggregatesFilter<"StatusIntake"> | string
  }

  export type TargetIntakeWhereInput = {
    AND?: TargetIntakeWhereInput | TargetIntakeWhereInput[]
    OR?: TargetIntakeWhereInput[]
    NOT?: TargetIntakeWhereInput | TargetIntakeWhereInput[]
    targetIntakeId?: StringFilter<"TargetIntake"> | string
    tahunId?: StringFilter<"TargetIntake"> | string
    prodiId?: StringNullableFilter<"TargetIntake"> | string | null
    jenisMasukId?: StringFilter<"TargetIntake"> | string
    target?: IntFilter<"TargetIntake"> | number
    createdAt?: DateTimeFilter<"TargetIntake"> | Date | string
    updatedAt?: DateTimeFilter<"TargetIntake"> | Date | string
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    Prodi?: XOR<ProdiNullableScalarRelationFilter, ProdiWhereInput> | null
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
    Capaian?: CapaianListRelationFilter
  }

  export type TargetIntakeOrderByWithRelationInput = {
    targetIntakeId?: SortOrder
    tahunId?: SortOrder
    prodiId?: SortOrderInput | SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tahun?: TahunOrderByWithRelationInput
    Prodi?: ProdiOrderByWithRelationInput
    JenisMasuk?: JenisMasukOrderByWithRelationInput
    Capaian?: CapaianOrderByRelationAggregateInput
  }

  export type TargetIntakeWhereUniqueInput = Prisma.AtLeast<{
    targetIntakeId?: string
    AND?: TargetIntakeWhereInput | TargetIntakeWhereInput[]
    OR?: TargetIntakeWhereInput[]
    NOT?: TargetIntakeWhereInput | TargetIntakeWhereInput[]
    tahunId?: StringFilter<"TargetIntake"> | string
    prodiId?: StringNullableFilter<"TargetIntake"> | string | null
    jenisMasukId?: StringFilter<"TargetIntake"> | string
    target?: IntFilter<"TargetIntake"> | number
    createdAt?: DateTimeFilter<"TargetIntake"> | Date | string
    updatedAt?: DateTimeFilter<"TargetIntake"> | Date | string
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    Prodi?: XOR<ProdiNullableScalarRelationFilter, ProdiWhereInput> | null
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
    Capaian?: CapaianListRelationFilter
  }, "targetIntakeId">

  export type TargetIntakeOrderByWithAggregationInput = {
    targetIntakeId?: SortOrder
    tahunId?: SortOrder
    prodiId?: SortOrderInput | SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TargetIntakeCountOrderByAggregateInput
    _avg?: TargetIntakeAvgOrderByAggregateInput
    _max?: TargetIntakeMaxOrderByAggregateInput
    _min?: TargetIntakeMinOrderByAggregateInput
    _sum?: TargetIntakeSumOrderByAggregateInput
  }

  export type TargetIntakeScalarWhereWithAggregatesInput = {
    AND?: TargetIntakeScalarWhereWithAggregatesInput | TargetIntakeScalarWhereWithAggregatesInput[]
    OR?: TargetIntakeScalarWhereWithAggregatesInput[]
    NOT?: TargetIntakeScalarWhereWithAggregatesInput | TargetIntakeScalarWhereWithAggregatesInput[]
    targetIntakeId?: StringWithAggregatesFilter<"TargetIntake"> | string
    tahunId?: StringWithAggregatesFilter<"TargetIntake"> | string
    prodiId?: StringNullableWithAggregatesFilter<"TargetIntake"> | string | null
    jenisMasukId?: StringWithAggregatesFilter<"TargetIntake"> | string
    target?: IntWithAggregatesFilter<"TargetIntake"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TargetIntake"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TargetIntake"> | Date | string
  }

  export type CapaianWhereInput = {
    AND?: CapaianWhereInput | CapaianWhereInput[]
    OR?: CapaianWhereInput[]
    NOT?: CapaianWhereInput | CapaianWhereInput[]
    capaianId?: StringFilter<"Capaian"> | string
    targetIntakeId?: StringFilter<"Capaian"> | string
    weekday?: IntFilter<"Capaian"> | number
    weekend?: IntFilter<"Capaian"> | number
    TargetIntake?: XOR<TargetIntakeScalarRelationFilter, TargetIntakeWhereInput>
  }

  export type CapaianOrderByWithRelationInput = {
    capaianId?: SortOrder
    targetIntakeId?: SortOrder
    weekday?: SortOrder
    weekend?: SortOrder
    TargetIntake?: TargetIntakeOrderByWithRelationInput
  }

  export type CapaianWhereUniqueInput = Prisma.AtLeast<{
    capaianId?: string
    AND?: CapaianWhereInput | CapaianWhereInput[]
    OR?: CapaianWhereInput[]
    NOT?: CapaianWhereInput | CapaianWhereInput[]
    targetIntakeId?: StringFilter<"Capaian"> | string
    weekday?: IntFilter<"Capaian"> | number
    weekend?: IntFilter<"Capaian"> | number
    TargetIntake?: XOR<TargetIntakeScalarRelationFilter, TargetIntakeWhereInput>
  }, "capaianId">

  export type CapaianOrderByWithAggregationInput = {
    capaianId?: SortOrder
    targetIntakeId?: SortOrder
    weekday?: SortOrder
    weekend?: SortOrder
    _count?: CapaianCountOrderByAggregateInput
    _avg?: CapaianAvgOrderByAggregateInput
    _max?: CapaianMaxOrderByAggregateInput
    _min?: CapaianMinOrderByAggregateInput
    _sum?: CapaianSumOrderByAggregateInput
  }

  export type CapaianScalarWhereWithAggregatesInput = {
    AND?: CapaianScalarWhereWithAggregatesInput | CapaianScalarWhereWithAggregatesInput[]
    OR?: CapaianScalarWhereWithAggregatesInput[]
    NOT?: CapaianScalarWhereWithAggregatesInput | CapaianScalarWhereWithAggregatesInput[]
    capaianId?: StringWithAggregatesFilter<"Capaian"> | string
    targetIntakeId?: StringWithAggregatesFilter<"Capaian"> | string
    weekday?: IntWithAggregatesFilter<"Capaian"> | number
    weekend?: IntWithAggregatesFilter<"Capaian"> | number
  }

  export type CapaianRincianWhereInput = {
    AND?: CapaianRincianWhereInput | CapaianRincianWhereInput[]
    OR?: CapaianRincianWhereInput[]
    NOT?: CapaianRincianWhereInput | CapaianRincianWhereInput[]
    capaianRincianId?: StringFilter<"CapaianRincian"> | string
    statusIntakeId?: StringFilter<"CapaianRincian"> | string
    tahunId?: StringFilter<"CapaianRincian"> | string
    jenisMasukId?: StringFilter<"CapaianRincian"> | string
    capaian?: IntFilter<"CapaianRincian"> | number
    StatusIntake?: XOR<StatusIntakeScalarRelationFilter, StatusIntakeWhereInput>
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
  }

  export type CapaianRincianOrderByWithRelationInput = {
    capaianRincianId?: SortOrder
    statusIntakeId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    capaian?: SortOrder
    StatusIntake?: StatusIntakeOrderByWithRelationInput
    Tahun?: TahunOrderByWithRelationInput
    JenisMasuk?: JenisMasukOrderByWithRelationInput
  }

  export type CapaianRincianWhereUniqueInput = Prisma.AtLeast<{
    capaianRincianId?: string
    AND?: CapaianRincianWhereInput | CapaianRincianWhereInput[]
    OR?: CapaianRincianWhereInput[]
    NOT?: CapaianRincianWhereInput | CapaianRincianWhereInput[]
    statusIntakeId?: StringFilter<"CapaianRincian"> | string
    tahunId?: StringFilter<"CapaianRincian"> | string
    jenisMasukId?: StringFilter<"CapaianRincian"> | string
    capaian?: IntFilter<"CapaianRincian"> | number
    StatusIntake?: XOR<StatusIntakeScalarRelationFilter, StatusIntakeWhereInput>
    Tahun?: XOR<TahunScalarRelationFilter, TahunWhereInput>
    JenisMasuk?: XOR<JenisMasukScalarRelationFilter, JenisMasukWhereInput>
  }, "capaianRincianId">

  export type CapaianRincianOrderByWithAggregationInput = {
    capaianRincianId?: SortOrder
    statusIntakeId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    capaian?: SortOrder
    _count?: CapaianRincianCountOrderByAggregateInput
    _avg?: CapaianRincianAvgOrderByAggregateInput
    _max?: CapaianRincianMaxOrderByAggregateInput
    _min?: CapaianRincianMinOrderByAggregateInput
    _sum?: CapaianRincianSumOrderByAggregateInput
  }

  export type CapaianRincianScalarWhereWithAggregatesInput = {
    AND?: CapaianRincianScalarWhereWithAggregatesInput | CapaianRincianScalarWhereWithAggregatesInput[]
    OR?: CapaianRincianScalarWhereWithAggregatesInput[]
    NOT?: CapaianRincianScalarWhereWithAggregatesInput | CapaianRincianScalarWhereWithAggregatesInput[]
    capaianRincianId?: StringWithAggregatesFilter<"CapaianRincian"> | string
    statusIntakeId?: StringWithAggregatesFilter<"CapaianRincian"> | string
    tahunId?: StringWithAggregatesFilter<"CapaianRincian"> | string
    jenisMasukId?: StringWithAggregatesFilter<"CapaianRincian"> | string
    capaian?: IntWithAggregatesFilter<"CapaianRincian"> | number
  }

  export type UserCreateInput = {
    userId?: string
    nama: string
    nomorHp: string
    nomorWa?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    nama: string
    nomorHp: string
    nomorWa?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomorHp?: StringFieldUpdateOperationsInput | string
    nomorWa?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomorHp?: StringFieldUpdateOperationsInput | string
    nomorWa?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    userId?: string
    nama: string
    nomorHp: string
    nomorWa?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomorHp?: StringFieldUpdateOperationsInput | string
    nomorWa?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomorHp?: StringFieldUpdateOperationsInput | string
    nomorWa?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JenisPilihanCreateInput = {
    jenisPilihanId?: string
    namaJenisPilihan: string
    deskripsi: string
    JenisMasuk?: JenisMasukCreateNestedManyWithoutJenisPilihanInput
  }

  export type JenisPilihanUncheckedCreateInput = {
    jenisPilihanId?: string
    namaJenisPilihan: string
    deskripsi: string
    JenisMasuk?: JenisMasukUncheckedCreateNestedManyWithoutJenisPilihanInput
  }

  export type JenisPilihanUpdateInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisMasuk?: JenisMasukUpdateManyWithoutJenisPilihanNestedInput
  }

  export type JenisPilihanUncheckedUpdateInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisMasuk?: JenisMasukUncheckedUpdateManyWithoutJenisPilihanNestedInput
  }

  export type JenisPilihanCreateManyInput = {
    jenisPilihanId?: string
    namaJenisPilihan: string
    deskripsi: string
  }

  export type JenisPilihanUpdateManyMutationInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type JenisPilihanUncheckedUpdateManyInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type JenisMasukCreateInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    JenisPilihan: JenisPilihanCreateNestedOneWithoutJenisMasukInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUncheckedCreateInput = {
    jenisMasukId?: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUpdateInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisPilihan?: JenisPilihanUpdateOneRequiredWithoutJenisMasukNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukCreateManyInput = {
    jenisMasukId?: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
  }

  export type JenisMasukUpdateManyMutationInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type JenisMasukUncheckedUpdateManyInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type ProdiCreateInput = {
    prodiId?: string
    namaProdi: string
    deskripsi: string
    TargetIntake?: TargetIntakeCreateNestedManyWithoutProdiInput
  }

  export type ProdiUncheckedCreateInput = {
    prodiId?: string
    namaProdi: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutProdiInput
  }

  export type ProdiUpdateInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUpdateManyWithoutProdiNestedInput
  }

  export type ProdiUncheckedUpdateInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutProdiNestedInput
  }

  export type ProdiCreateManyInput = {
    prodiId?: string
    namaProdi: string
    deskripsi: string
  }

  export type ProdiUpdateManyMutationInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type ProdiUncheckedUpdateManyInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterCreateInput = {
    semesterId?: string
    namaSemester: string
    deskripsi: string
    Tahun?: TahunCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    semesterId?: string
    namaSemester: string
    deskripsi: string
    Tahun?: TahunUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Tahun?: TahunUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Tahun?: TahunUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    semesterId?: string
    namaSemester: string
    deskripsi: string
  }

  export type SemesterUpdateManyMutationInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUncheckedUpdateManyInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TahunCreateInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    Semester: SemesterCreateNestedOneWithoutTahunInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutTahunInput
  }

  export type TahunUncheckedCreateInput = {
    tahunId?: string
    semesterId: string
    namaTahun: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutTahunInput
  }

  export type TahunUpdateInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Semester?: SemesterUpdateOneRequiredWithoutTahunNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutTahunNestedInput
  }

  export type TahunCreateManyInput = {
    tahunId?: string
    semesterId: string
    namaTahun: string
    deskripsi: string
  }

  export type TahunUpdateManyMutationInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TahunUncheckedUpdateManyInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetDbCreateInput = {
    targetDbId?: string
    target: number
    Tahun: TahunCreateNestedOneWithoutTargetDbInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetDbInput
  }

  export type TargetDbUncheckedCreateInput = {
    targetDbId?: string
    tahunId: string
    jenisMasukId: string
    target: number
  }

  export type TargetDbUpdateInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    Tahun?: TahunUpdateOneRequiredWithoutTargetDbNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetDbNestedInput
  }

  export type TargetDbUncheckedUpdateInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type TargetDbCreateManyInput = {
    targetDbId?: string
    tahunId: string
    jenisMasukId: string
    target: number
  }

  export type TargetDbUpdateManyMutationInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type TargetDbUncheckedUpdateManyInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StatusIntakeCreateInput = {
    statusIntakeId?: string
    namaStatus: string
    persentase: number
    deskripsi: string
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutStatusIntakeInput
  }

  export type StatusIntakeUncheckedCreateInput = {
    statusIntakeId?: string
    namaStatus: string
    persentase: number
    deskripsi: string
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutStatusIntakeInput
  }

  export type StatusIntakeUpdateInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    CapaianRincian?: CapaianRincianUpdateManyWithoutStatusIntakeNestedInput
  }

  export type StatusIntakeUncheckedUpdateInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutStatusIntakeNestedInput
  }

  export type StatusIntakeCreateManyInput = {
    statusIntakeId?: string
    namaStatus: string
    persentase: number
    deskripsi: string
  }

  export type StatusIntakeUpdateManyMutationInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type StatusIntakeUncheckedUpdateManyInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetIntakeCreateInput = {
    targetIntakeId?: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tahun: TahunCreateNestedOneWithoutTargetIntakeInput
    Prodi?: ProdiCreateNestedOneWithoutTargetIntakeInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetIntakeInput
    Capaian?: CapaianCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeUncheckedCreateInput = {
    targetIntakeId?: string
    tahunId: string
    prodiId?: string | null
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Capaian?: CapaianUncheckedCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeUpdateInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tahun?: TahunUpdateOneRequiredWithoutTargetIntakeNestedInput
    Prodi?: ProdiUpdateOneWithoutTargetIntakeNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetIntakeNestedInput
    Capaian?: CapaianUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Capaian?: CapaianUncheckedUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeCreateManyInput = {
    targetIntakeId?: string
    tahunId: string
    prodiId?: string | null
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIntakeUpdateManyMutationInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetIntakeUncheckedUpdateManyInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapaianCreateInput = {
    capaianId?: string
    weekday: number
    weekend: number
    TargetIntake: TargetIntakeCreateNestedOneWithoutCapaianInput
  }

  export type CapaianUncheckedCreateInput = {
    capaianId?: string
    targetIntakeId: string
    weekday: number
    weekend: number
  }

  export type CapaianUpdateInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
    TargetIntake?: TargetIntakeUpdateOneRequiredWithoutCapaianNestedInput
  }

  export type CapaianUncheckedUpdateInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianCreateManyInput = {
    capaianId?: string
    targetIntakeId: string
    weekday: number
    weekend: number
  }

  export type CapaianUpdateManyMutationInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianUncheckedUpdateManyInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianCreateInput = {
    capaianRincianId?: string
    capaian: number
    StatusIntake: StatusIntakeCreateNestedOneWithoutCapaianRincianInput
    Tahun: TahunCreateNestedOneWithoutCapaianRincianInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutCapaianRincianInput
  }

  export type CapaianRincianUncheckedCreateInput = {
    capaianRincianId?: string
    statusIntakeId: string
    tahunId: string
    jenisMasukId: string
    capaian: number
  }

  export type CapaianRincianUpdateInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
    StatusIntake?: StatusIntakeUpdateOneRequiredWithoutCapaianRincianNestedInput
    Tahun?: TahunUpdateOneRequiredWithoutCapaianRincianNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutCapaianRincianNestedInput
  }

  export type CapaianRincianUncheckedUpdateInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianCreateManyInput = {
    capaianRincianId?: string
    statusIntakeId: string
    tahunId: string
    jenisMasukId: string
    capaian: number
  }

  export type CapaianRincianUpdateManyMutationInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUncheckedUpdateManyInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    nama?: SortOrder
    nomorHp?: SortOrder
    nomorWa?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    nama?: SortOrder
    nomorHp?: SortOrder
    nomorWa?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    nama?: SortOrder
    nomorHp?: SortOrder
    nomorWa?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JenisMasukListRelationFilter = {
    every?: JenisMasukWhereInput
    some?: JenisMasukWhereInput
    none?: JenisMasukWhereInput
  }

  export type JenisMasukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JenisPilihanCountOrderByAggregateInput = {
    jenisPilihanId?: SortOrder
    namaJenisPilihan?: SortOrder
    deskripsi?: SortOrder
  }

  export type JenisPilihanMaxOrderByAggregateInput = {
    jenisPilihanId?: SortOrder
    namaJenisPilihan?: SortOrder
    deskripsi?: SortOrder
  }

  export type JenisPilihanMinOrderByAggregateInput = {
    jenisPilihanId?: SortOrder
    namaJenisPilihan?: SortOrder
    deskripsi?: SortOrder
  }

  export type JenisPilihanScalarRelationFilter = {
    is?: JenisPilihanWhereInput
    isNot?: JenisPilihanWhereInput
  }

  export type TargetIntakeListRelationFilter = {
    every?: TargetIntakeWhereInput
    some?: TargetIntakeWhereInput
    none?: TargetIntakeWhereInput
  }

  export type TargetDbListRelationFilter = {
    every?: TargetDbWhereInput
    some?: TargetDbWhereInput
    none?: TargetDbWhereInput
  }

  export type CapaianRincianListRelationFilter = {
    every?: CapaianRincianWhereInput
    some?: CapaianRincianWhereInput
    none?: CapaianRincianWhereInput
  }

  export type TargetIntakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TargetDbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapaianRincianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JenisMasukCountOrderByAggregateInput = {
    jenisMasukId?: SortOrder
    jenisPilihanId?: SortOrder
    namaJenisMasuk?: SortOrder
    deskripsi?: SortOrder
  }

  export type JenisMasukMaxOrderByAggregateInput = {
    jenisMasukId?: SortOrder
    jenisPilihanId?: SortOrder
    namaJenisMasuk?: SortOrder
    deskripsi?: SortOrder
  }

  export type JenisMasukMinOrderByAggregateInput = {
    jenisMasukId?: SortOrder
    jenisPilihanId?: SortOrder
    namaJenisMasuk?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdiCountOrderByAggregateInput = {
    prodiId?: SortOrder
    namaProdi?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdiMaxOrderByAggregateInput = {
    prodiId?: SortOrder
    namaProdi?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdiMinOrderByAggregateInput = {
    prodiId?: SortOrder
    namaProdi?: SortOrder
    deskripsi?: SortOrder
  }

  export type TahunListRelationFilter = {
    every?: TahunWhereInput
    some?: TahunWhereInput
    none?: TahunWhereInput
  }

  export type TahunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SemesterCountOrderByAggregateInput = {
    semesterId?: SortOrder
    namaSemester?: SortOrder
    deskripsi?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    semesterId?: SortOrder
    namaSemester?: SortOrder
    deskripsi?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    semesterId?: SortOrder
    namaSemester?: SortOrder
    deskripsi?: SortOrder
  }

  export type SemesterScalarRelationFilter = {
    is?: SemesterWhereInput
    isNot?: SemesterWhereInput
  }

  export type TahunCountOrderByAggregateInput = {
    tahunId?: SortOrder
    semesterId?: SortOrder
    namaTahun?: SortOrder
    deskripsi?: SortOrder
  }

  export type TahunMaxOrderByAggregateInput = {
    tahunId?: SortOrder
    semesterId?: SortOrder
    namaTahun?: SortOrder
    deskripsi?: SortOrder
  }

  export type TahunMinOrderByAggregateInput = {
    tahunId?: SortOrder
    semesterId?: SortOrder
    namaTahun?: SortOrder
    deskripsi?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TahunScalarRelationFilter = {
    is?: TahunWhereInput
    isNot?: TahunWhereInput
  }

  export type JenisMasukScalarRelationFilter = {
    is?: JenisMasukWhereInput
    isNot?: JenisMasukWhereInput
  }

  export type TargetDbCountOrderByAggregateInput = {
    targetDbId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
  }

  export type TargetDbAvgOrderByAggregateInput = {
    target?: SortOrder
  }

  export type TargetDbMaxOrderByAggregateInput = {
    targetDbId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
  }

  export type TargetDbMinOrderByAggregateInput = {
    targetDbId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
  }

  export type TargetDbSumOrderByAggregateInput = {
    target?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StatusIntakeCountOrderByAggregateInput = {
    statusIntakeId?: SortOrder
    namaStatus?: SortOrder
    persentase?: SortOrder
    deskripsi?: SortOrder
  }

  export type StatusIntakeAvgOrderByAggregateInput = {
    persentase?: SortOrder
  }

  export type StatusIntakeMaxOrderByAggregateInput = {
    statusIntakeId?: SortOrder
    namaStatus?: SortOrder
    persentase?: SortOrder
    deskripsi?: SortOrder
  }

  export type StatusIntakeMinOrderByAggregateInput = {
    statusIntakeId?: SortOrder
    namaStatus?: SortOrder
    persentase?: SortOrder
    deskripsi?: SortOrder
  }

  export type StatusIntakeSumOrderByAggregateInput = {
    persentase?: SortOrder
  }

  export type ProdiNullableScalarRelationFilter = {
    is?: ProdiWhereInput | null
    isNot?: ProdiWhereInput | null
  }

  export type CapaianListRelationFilter = {
    every?: CapaianWhereInput
    some?: CapaianWhereInput
    none?: CapaianWhereInput
  }

  export type CapaianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TargetIntakeCountOrderByAggregateInput = {
    targetIntakeId?: SortOrder
    tahunId?: SortOrder
    prodiId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIntakeAvgOrderByAggregateInput = {
    target?: SortOrder
  }

  export type TargetIntakeMaxOrderByAggregateInput = {
    targetIntakeId?: SortOrder
    tahunId?: SortOrder
    prodiId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIntakeMinOrderByAggregateInput = {
    targetIntakeId?: SortOrder
    tahunId?: SortOrder
    prodiId?: SortOrder
    jenisMasukId?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIntakeSumOrderByAggregateInput = {
    target?: SortOrder
  }

  export type TargetIntakeScalarRelationFilter = {
    is?: TargetIntakeWhereInput
    isNot?: TargetIntakeWhereInput
  }

  export type CapaianCountOrderByAggregateInput = {
    capaianId?: SortOrder
    targetIntakeId?: SortOrder
    weekday?: SortOrder
    weekend?: SortOrder
  }

  export type CapaianAvgOrderByAggregateInput = {
    weekday?: SortOrder
    weekend?: SortOrder
  }

  export type CapaianMaxOrderByAggregateInput = {
    capaianId?: SortOrder
    targetIntakeId?: SortOrder
    weekday?: SortOrder
    weekend?: SortOrder
  }

  export type CapaianMinOrderByAggregateInput = {
    capaianId?: SortOrder
    targetIntakeId?: SortOrder
    weekday?: SortOrder
    weekend?: SortOrder
  }

  export type CapaianSumOrderByAggregateInput = {
    weekday?: SortOrder
    weekend?: SortOrder
  }

  export type StatusIntakeScalarRelationFilter = {
    is?: StatusIntakeWhereInput
    isNot?: StatusIntakeWhereInput
  }

  export type CapaianRincianCountOrderByAggregateInput = {
    capaianRincianId?: SortOrder
    statusIntakeId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    capaian?: SortOrder
  }

  export type CapaianRincianAvgOrderByAggregateInput = {
    capaian?: SortOrder
  }

  export type CapaianRincianMaxOrderByAggregateInput = {
    capaianRincianId?: SortOrder
    statusIntakeId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    capaian?: SortOrder
  }

  export type CapaianRincianMinOrderByAggregateInput = {
    capaianRincianId?: SortOrder
    statusIntakeId?: SortOrder
    tahunId?: SortOrder
    jenisMasukId?: SortOrder
    capaian?: SortOrder
  }

  export type CapaianRincianSumOrderByAggregateInput = {
    capaian?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JenisMasukCreateNestedManyWithoutJenisPilihanInput = {
    create?: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput> | JenisMasukCreateWithoutJenisPilihanInput[] | JenisMasukUncheckedCreateWithoutJenisPilihanInput[]
    connectOrCreate?: JenisMasukCreateOrConnectWithoutJenisPilihanInput | JenisMasukCreateOrConnectWithoutJenisPilihanInput[]
    createMany?: JenisMasukCreateManyJenisPilihanInputEnvelope
    connect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
  }

  export type JenisMasukUncheckedCreateNestedManyWithoutJenisPilihanInput = {
    create?: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput> | JenisMasukCreateWithoutJenisPilihanInput[] | JenisMasukUncheckedCreateWithoutJenisPilihanInput[]
    connectOrCreate?: JenisMasukCreateOrConnectWithoutJenisPilihanInput | JenisMasukCreateOrConnectWithoutJenisPilihanInput[]
    createMany?: JenisMasukCreateManyJenisPilihanInputEnvelope
    connect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
  }

  export type JenisMasukUpdateManyWithoutJenisPilihanNestedInput = {
    create?: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput> | JenisMasukCreateWithoutJenisPilihanInput[] | JenisMasukUncheckedCreateWithoutJenisPilihanInput[]
    connectOrCreate?: JenisMasukCreateOrConnectWithoutJenisPilihanInput | JenisMasukCreateOrConnectWithoutJenisPilihanInput[]
    upsert?: JenisMasukUpsertWithWhereUniqueWithoutJenisPilihanInput | JenisMasukUpsertWithWhereUniqueWithoutJenisPilihanInput[]
    createMany?: JenisMasukCreateManyJenisPilihanInputEnvelope
    set?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    disconnect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    delete?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    connect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    update?: JenisMasukUpdateWithWhereUniqueWithoutJenisPilihanInput | JenisMasukUpdateWithWhereUniqueWithoutJenisPilihanInput[]
    updateMany?: JenisMasukUpdateManyWithWhereWithoutJenisPilihanInput | JenisMasukUpdateManyWithWhereWithoutJenisPilihanInput[]
    deleteMany?: JenisMasukScalarWhereInput | JenisMasukScalarWhereInput[]
  }

  export type JenisMasukUncheckedUpdateManyWithoutJenisPilihanNestedInput = {
    create?: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput> | JenisMasukCreateWithoutJenisPilihanInput[] | JenisMasukUncheckedCreateWithoutJenisPilihanInput[]
    connectOrCreate?: JenisMasukCreateOrConnectWithoutJenisPilihanInput | JenisMasukCreateOrConnectWithoutJenisPilihanInput[]
    upsert?: JenisMasukUpsertWithWhereUniqueWithoutJenisPilihanInput | JenisMasukUpsertWithWhereUniqueWithoutJenisPilihanInput[]
    createMany?: JenisMasukCreateManyJenisPilihanInputEnvelope
    set?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    disconnect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    delete?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    connect?: JenisMasukWhereUniqueInput | JenisMasukWhereUniqueInput[]
    update?: JenisMasukUpdateWithWhereUniqueWithoutJenisPilihanInput | JenisMasukUpdateWithWhereUniqueWithoutJenisPilihanInput[]
    updateMany?: JenisMasukUpdateManyWithWhereWithoutJenisPilihanInput | JenisMasukUpdateManyWithWhereWithoutJenisPilihanInput[]
    deleteMany?: JenisMasukScalarWhereInput | JenisMasukScalarWhereInput[]
  }

  export type JenisPilihanCreateNestedOneWithoutJenisMasukInput = {
    create?: XOR<JenisPilihanCreateWithoutJenisMasukInput, JenisPilihanUncheckedCreateWithoutJenisMasukInput>
    connectOrCreate?: JenisPilihanCreateOrConnectWithoutJenisMasukInput
    connect?: JenisPilihanWhereUniqueInput
  }

  export type TargetIntakeCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput> | TargetIntakeCreateWithoutJenisMasukInput[] | TargetIntakeUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutJenisMasukInput | TargetIntakeCreateOrConnectWithoutJenisMasukInput[]
    createMany?: TargetIntakeCreateManyJenisMasukInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetDbCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput> | TargetDbCreateWithoutJenisMasukInput[] | TargetDbUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutJenisMasukInput | TargetDbCreateOrConnectWithoutJenisMasukInput[]
    createMany?: TargetDbCreateManyJenisMasukInputEnvelope
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
  }

  export type CapaianRincianCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput> | CapaianRincianCreateWithoutJenisMasukInput[] | CapaianRincianUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutJenisMasukInput | CapaianRincianCreateOrConnectWithoutJenisMasukInput[]
    createMany?: CapaianRincianCreateManyJenisMasukInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type TargetIntakeUncheckedCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput> | TargetIntakeCreateWithoutJenisMasukInput[] | TargetIntakeUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutJenisMasukInput | TargetIntakeCreateOrConnectWithoutJenisMasukInput[]
    createMany?: TargetIntakeCreateManyJenisMasukInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetDbUncheckedCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput> | TargetDbCreateWithoutJenisMasukInput[] | TargetDbUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutJenisMasukInput | TargetDbCreateOrConnectWithoutJenisMasukInput[]
    createMany?: TargetDbCreateManyJenisMasukInputEnvelope
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
  }

  export type CapaianRincianUncheckedCreateNestedManyWithoutJenisMasukInput = {
    create?: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput> | CapaianRincianCreateWithoutJenisMasukInput[] | CapaianRincianUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutJenisMasukInput | CapaianRincianCreateOrConnectWithoutJenisMasukInput[]
    createMany?: CapaianRincianCreateManyJenisMasukInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type JenisPilihanUpdateOneRequiredWithoutJenisMasukNestedInput = {
    create?: XOR<JenisPilihanCreateWithoutJenisMasukInput, JenisPilihanUncheckedCreateWithoutJenisMasukInput>
    connectOrCreate?: JenisPilihanCreateOrConnectWithoutJenisMasukInput
    upsert?: JenisPilihanUpsertWithoutJenisMasukInput
    connect?: JenisPilihanWhereUniqueInput
    update?: XOR<XOR<JenisPilihanUpdateToOneWithWhereWithoutJenisMasukInput, JenisPilihanUpdateWithoutJenisMasukInput>, JenisPilihanUncheckedUpdateWithoutJenisMasukInput>
  }

  export type TargetIntakeUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput> | TargetIntakeCreateWithoutJenisMasukInput[] | TargetIntakeUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutJenisMasukInput | TargetIntakeCreateOrConnectWithoutJenisMasukInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutJenisMasukInput | TargetIntakeUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: TargetIntakeCreateManyJenisMasukInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutJenisMasukInput | TargetIntakeUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutJenisMasukInput | TargetIntakeUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TargetDbUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput> | TargetDbCreateWithoutJenisMasukInput[] | TargetDbUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutJenisMasukInput | TargetDbCreateOrConnectWithoutJenisMasukInput[]
    upsert?: TargetDbUpsertWithWhereUniqueWithoutJenisMasukInput | TargetDbUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: TargetDbCreateManyJenisMasukInputEnvelope
    set?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    disconnect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    delete?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    update?: TargetDbUpdateWithWhereUniqueWithoutJenisMasukInput | TargetDbUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: TargetDbUpdateManyWithWhereWithoutJenisMasukInput | TargetDbUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
  }

  export type CapaianRincianUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput> | CapaianRincianCreateWithoutJenisMasukInput[] | CapaianRincianUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutJenisMasukInput | CapaianRincianCreateOrConnectWithoutJenisMasukInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutJenisMasukInput | CapaianRincianUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: CapaianRincianCreateManyJenisMasukInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutJenisMasukInput | CapaianRincianUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutJenisMasukInput | CapaianRincianUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type TargetIntakeUncheckedUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput> | TargetIntakeCreateWithoutJenisMasukInput[] | TargetIntakeUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutJenisMasukInput | TargetIntakeCreateOrConnectWithoutJenisMasukInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutJenisMasukInput | TargetIntakeUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: TargetIntakeCreateManyJenisMasukInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutJenisMasukInput | TargetIntakeUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutJenisMasukInput | TargetIntakeUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TargetDbUncheckedUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput> | TargetDbCreateWithoutJenisMasukInput[] | TargetDbUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutJenisMasukInput | TargetDbCreateOrConnectWithoutJenisMasukInput[]
    upsert?: TargetDbUpsertWithWhereUniqueWithoutJenisMasukInput | TargetDbUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: TargetDbCreateManyJenisMasukInputEnvelope
    set?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    disconnect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    delete?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    update?: TargetDbUpdateWithWhereUniqueWithoutJenisMasukInput | TargetDbUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: TargetDbUpdateManyWithWhereWithoutJenisMasukInput | TargetDbUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
  }

  export type CapaianRincianUncheckedUpdateManyWithoutJenisMasukNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput> | CapaianRincianCreateWithoutJenisMasukInput[] | CapaianRincianUncheckedCreateWithoutJenisMasukInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutJenisMasukInput | CapaianRincianCreateOrConnectWithoutJenisMasukInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutJenisMasukInput | CapaianRincianUpsertWithWhereUniqueWithoutJenisMasukInput[]
    createMany?: CapaianRincianCreateManyJenisMasukInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutJenisMasukInput | CapaianRincianUpdateWithWhereUniqueWithoutJenisMasukInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutJenisMasukInput | CapaianRincianUpdateManyWithWhereWithoutJenisMasukInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type TargetIntakeCreateNestedManyWithoutProdiInput = {
    create?: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput> | TargetIntakeCreateWithoutProdiInput[] | TargetIntakeUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutProdiInput | TargetIntakeCreateOrConnectWithoutProdiInput[]
    createMany?: TargetIntakeCreateManyProdiInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetIntakeUncheckedCreateNestedManyWithoutProdiInput = {
    create?: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput> | TargetIntakeCreateWithoutProdiInput[] | TargetIntakeUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutProdiInput | TargetIntakeCreateOrConnectWithoutProdiInput[]
    createMany?: TargetIntakeCreateManyProdiInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetIntakeUpdateManyWithoutProdiNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput> | TargetIntakeCreateWithoutProdiInput[] | TargetIntakeUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutProdiInput | TargetIntakeCreateOrConnectWithoutProdiInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutProdiInput | TargetIntakeUpsertWithWhereUniqueWithoutProdiInput[]
    createMany?: TargetIntakeCreateManyProdiInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutProdiInput | TargetIntakeUpdateWithWhereUniqueWithoutProdiInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutProdiInput | TargetIntakeUpdateManyWithWhereWithoutProdiInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TargetIntakeUncheckedUpdateManyWithoutProdiNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput> | TargetIntakeCreateWithoutProdiInput[] | TargetIntakeUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutProdiInput | TargetIntakeCreateOrConnectWithoutProdiInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutProdiInput | TargetIntakeUpsertWithWhereUniqueWithoutProdiInput[]
    createMany?: TargetIntakeCreateManyProdiInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutProdiInput | TargetIntakeUpdateWithWhereUniqueWithoutProdiInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutProdiInput | TargetIntakeUpdateManyWithWhereWithoutProdiInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TahunCreateNestedManyWithoutSemesterInput = {
    create?: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput> | TahunCreateWithoutSemesterInput[] | TahunUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TahunCreateOrConnectWithoutSemesterInput | TahunCreateOrConnectWithoutSemesterInput[]
    createMany?: TahunCreateManySemesterInputEnvelope
    connect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
  }

  export type TahunUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput> | TahunCreateWithoutSemesterInput[] | TahunUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TahunCreateOrConnectWithoutSemesterInput | TahunCreateOrConnectWithoutSemesterInput[]
    createMany?: TahunCreateManySemesterInputEnvelope
    connect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
  }

  export type TahunUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput> | TahunCreateWithoutSemesterInput[] | TahunUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TahunCreateOrConnectWithoutSemesterInput | TahunCreateOrConnectWithoutSemesterInput[]
    upsert?: TahunUpsertWithWhereUniqueWithoutSemesterInput | TahunUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: TahunCreateManySemesterInputEnvelope
    set?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    disconnect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    delete?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    connect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    update?: TahunUpdateWithWhereUniqueWithoutSemesterInput | TahunUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: TahunUpdateManyWithWhereWithoutSemesterInput | TahunUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: TahunScalarWhereInput | TahunScalarWhereInput[]
  }

  export type TahunUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput> | TahunCreateWithoutSemesterInput[] | TahunUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TahunCreateOrConnectWithoutSemesterInput | TahunCreateOrConnectWithoutSemesterInput[]
    upsert?: TahunUpsertWithWhereUniqueWithoutSemesterInput | TahunUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: TahunCreateManySemesterInputEnvelope
    set?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    disconnect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    delete?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    connect?: TahunWhereUniqueInput | TahunWhereUniqueInput[]
    update?: TahunUpdateWithWhereUniqueWithoutSemesterInput | TahunUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: TahunUpdateManyWithWhereWithoutSemesterInput | TahunUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: TahunScalarWhereInput | TahunScalarWhereInput[]
  }

  export type SemesterCreateNestedOneWithoutTahunInput = {
    create?: XOR<SemesterCreateWithoutTahunInput, SemesterUncheckedCreateWithoutTahunInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutTahunInput
    connect?: SemesterWhereUniqueInput
  }

  export type TargetIntakeCreateNestedManyWithoutTahunInput = {
    create?: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput> | TargetIntakeCreateWithoutTahunInput[] | TargetIntakeUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutTahunInput | TargetIntakeCreateOrConnectWithoutTahunInput[]
    createMany?: TargetIntakeCreateManyTahunInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetDbCreateNestedManyWithoutTahunInput = {
    create?: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput> | TargetDbCreateWithoutTahunInput[] | TargetDbUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutTahunInput | TargetDbCreateOrConnectWithoutTahunInput[]
    createMany?: TargetDbCreateManyTahunInputEnvelope
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
  }

  export type CapaianRincianCreateNestedManyWithoutTahunInput = {
    create?: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput> | CapaianRincianCreateWithoutTahunInput[] | CapaianRincianUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutTahunInput | CapaianRincianCreateOrConnectWithoutTahunInput[]
    createMany?: CapaianRincianCreateManyTahunInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type TargetIntakeUncheckedCreateNestedManyWithoutTahunInput = {
    create?: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput> | TargetIntakeCreateWithoutTahunInput[] | TargetIntakeUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutTahunInput | TargetIntakeCreateOrConnectWithoutTahunInput[]
    createMany?: TargetIntakeCreateManyTahunInputEnvelope
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
  }

  export type TargetDbUncheckedCreateNestedManyWithoutTahunInput = {
    create?: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput> | TargetDbCreateWithoutTahunInput[] | TargetDbUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutTahunInput | TargetDbCreateOrConnectWithoutTahunInput[]
    createMany?: TargetDbCreateManyTahunInputEnvelope
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
  }

  export type CapaianRincianUncheckedCreateNestedManyWithoutTahunInput = {
    create?: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput> | CapaianRincianCreateWithoutTahunInput[] | CapaianRincianUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutTahunInput | CapaianRincianCreateOrConnectWithoutTahunInput[]
    createMany?: CapaianRincianCreateManyTahunInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type SemesterUpdateOneRequiredWithoutTahunNestedInput = {
    create?: XOR<SemesterCreateWithoutTahunInput, SemesterUncheckedCreateWithoutTahunInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutTahunInput
    upsert?: SemesterUpsertWithoutTahunInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutTahunInput, SemesterUpdateWithoutTahunInput>, SemesterUncheckedUpdateWithoutTahunInput>
  }

  export type TargetIntakeUpdateManyWithoutTahunNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput> | TargetIntakeCreateWithoutTahunInput[] | TargetIntakeUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutTahunInput | TargetIntakeCreateOrConnectWithoutTahunInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutTahunInput | TargetIntakeUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: TargetIntakeCreateManyTahunInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutTahunInput | TargetIntakeUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutTahunInput | TargetIntakeUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TargetDbUpdateManyWithoutTahunNestedInput = {
    create?: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput> | TargetDbCreateWithoutTahunInput[] | TargetDbUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutTahunInput | TargetDbCreateOrConnectWithoutTahunInput[]
    upsert?: TargetDbUpsertWithWhereUniqueWithoutTahunInput | TargetDbUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: TargetDbCreateManyTahunInputEnvelope
    set?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    disconnect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    delete?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    update?: TargetDbUpdateWithWhereUniqueWithoutTahunInput | TargetDbUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: TargetDbUpdateManyWithWhereWithoutTahunInput | TargetDbUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
  }

  export type CapaianRincianUpdateManyWithoutTahunNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput> | CapaianRincianCreateWithoutTahunInput[] | CapaianRincianUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutTahunInput | CapaianRincianCreateOrConnectWithoutTahunInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutTahunInput | CapaianRincianUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: CapaianRincianCreateManyTahunInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutTahunInput | CapaianRincianUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutTahunInput | CapaianRincianUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type TargetIntakeUncheckedUpdateManyWithoutTahunNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput> | TargetIntakeCreateWithoutTahunInput[] | TargetIntakeUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutTahunInput | TargetIntakeCreateOrConnectWithoutTahunInput[]
    upsert?: TargetIntakeUpsertWithWhereUniqueWithoutTahunInput | TargetIntakeUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: TargetIntakeCreateManyTahunInputEnvelope
    set?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    disconnect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    delete?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    connect?: TargetIntakeWhereUniqueInput | TargetIntakeWhereUniqueInput[]
    update?: TargetIntakeUpdateWithWhereUniqueWithoutTahunInput | TargetIntakeUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: TargetIntakeUpdateManyWithWhereWithoutTahunInput | TargetIntakeUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
  }

  export type TargetDbUncheckedUpdateManyWithoutTahunNestedInput = {
    create?: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput> | TargetDbCreateWithoutTahunInput[] | TargetDbUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: TargetDbCreateOrConnectWithoutTahunInput | TargetDbCreateOrConnectWithoutTahunInput[]
    upsert?: TargetDbUpsertWithWhereUniqueWithoutTahunInput | TargetDbUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: TargetDbCreateManyTahunInputEnvelope
    set?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    disconnect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    delete?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    connect?: TargetDbWhereUniqueInput | TargetDbWhereUniqueInput[]
    update?: TargetDbUpdateWithWhereUniqueWithoutTahunInput | TargetDbUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: TargetDbUpdateManyWithWhereWithoutTahunInput | TargetDbUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
  }

  export type CapaianRincianUncheckedUpdateManyWithoutTahunNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput> | CapaianRincianCreateWithoutTahunInput[] | CapaianRincianUncheckedCreateWithoutTahunInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutTahunInput | CapaianRincianCreateOrConnectWithoutTahunInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutTahunInput | CapaianRincianUpsertWithWhereUniqueWithoutTahunInput[]
    createMany?: CapaianRincianCreateManyTahunInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutTahunInput | CapaianRincianUpdateWithWhereUniqueWithoutTahunInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutTahunInput | CapaianRincianUpdateManyWithWhereWithoutTahunInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type TahunCreateNestedOneWithoutTargetDbInput = {
    create?: XOR<TahunCreateWithoutTargetDbInput, TahunUncheckedCreateWithoutTargetDbInput>
    connectOrCreate?: TahunCreateOrConnectWithoutTargetDbInput
    connect?: TahunWhereUniqueInput
  }

  export type JenisMasukCreateNestedOneWithoutTargetDbInput = {
    create?: XOR<JenisMasukCreateWithoutTargetDbInput, JenisMasukUncheckedCreateWithoutTargetDbInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutTargetDbInput
    connect?: JenisMasukWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TahunUpdateOneRequiredWithoutTargetDbNestedInput = {
    create?: XOR<TahunCreateWithoutTargetDbInput, TahunUncheckedCreateWithoutTargetDbInput>
    connectOrCreate?: TahunCreateOrConnectWithoutTargetDbInput
    upsert?: TahunUpsertWithoutTargetDbInput
    connect?: TahunWhereUniqueInput
    update?: XOR<XOR<TahunUpdateToOneWithWhereWithoutTargetDbInput, TahunUpdateWithoutTargetDbInput>, TahunUncheckedUpdateWithoutTargetDbInput>
  }

  export type JenisMasukUpdateOneRequiredWithoutTargetDbNestedInput = {
    create?: XOR<JenisMasukCreateWithoutTargetDbInput, JenisMasukUncheckedCreateWithoutTargetDbInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutTargetDbInput
    upsert?: JenisMasukUpsertWithoutTargetDbInput
    connect?: JenisMasukWhereUniqueInput
    update?: XOR<XOR<JenisMasukUpdateToOneWithWhereWithoutTargetDbInput, JenisMasukUpdateWithoutTargetDbInput>, JenisMasukUncheckedUpdateWithoutTargetDbInput>
  }

  export type CapaianRincianCreateNestedManyWithoutStatusIntakeInput = {
    create?: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput> | CapaianRincianCreateWithoutStatusIntakeInput[] | CapaianRincianUncheckedCreateWithoutStatusIntakeInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutStatusIntakeInput | CapaianRincianCreateOrConnectWithoutStatusIntakeInput[]
    createMany?: CapaianRincianCreateManyStatusIntakeInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type CapaianRincianUncheckedCreateNestedManyWithoutStatusIntakeInput = {
    create?: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput> | CapaianRincianCreateWithoutStatusIntakeInput[] | CapaianRincianUncheckedCreateWithoutStatusIntakeInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutStatusIntakeInput | CapaianRincianCreateOrConnectWithoutStatusIntakeInput[]
    createMany?: CapaianRincianCreateManyStatusIntakeInputEnvelope
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
  }

  export type CapaianRincianUpdateManyWithoutStatusIntakeNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput> | CapaianRincianCreateWithoutStatusIntakeInput[] | CapaianRincianUncheckedCreateWithoutStatusIntakeInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutStatusIntakeInput | CapaianRincianCreateOrConnectWithoutStatusIntakeInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutStatusIntakeInput | CapaianRincianUpsertWithWhereUniqueWithoutStatusIntakeInput[]
    createMany?: CapaianRincianCreateManyStatusIntakeInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutStatusIntakeInput | CapaianRincianUpdateWithWhereUniqueWithoutStatusIntakeInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutStatusIntakeInput | CapaianRincianUpdateManyWithWhereWithoutStatusIntakeInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type CapaianRincianUncheckedUpdateManyWithoutStatusIntakeNestedInput = {
    create?: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput> | CapaianRincianCreateWithoutStatusIntakeInput[] | CapaianRincianUncheckedCreateWithoutStatusIntakeInput[]
    connectOrCreate?: CapaianRincianCreateOrConnectWithoutStatusIntakeInput | CapaianRincianCreateOrConnectWithoutStatusIntakeInput[]
    upsert?: CapaianRincianUpsertWithWhereUniqueWithoutStatusIntakeInput | CapaianRincianUpsertWithWhereUniqueWithoutStatusIntakeInput[]
    createMany?: CapaianRincianCreateManyStatusIntakeInputEnvelope
    set?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    disconnect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    delete?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    connect?: CapaianRincianWhereUniqueInput | CapaianRincianWhereUniqueInput[]
    update?: CapaianRincianUpdateWithWhereUniqueWithoutStatusIntakeInput | CapaianRincianUpdateWithWhereUniqueWithoutStatusIntakeInput[]
    updateMany?: CapaianRincianUpdateManyWithWhereWithoutStatusIntakeInput | CapaianRincianUpdateManyWithWhereWithoutStatusIntakeInput[]
    deleteMany?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
  }

  export type TahunCreateNestedOneWithoutTargetIntakeInput = {
    create?: XOR<TahunCreateWithoutTargetIntakeInput, TahunUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: TahunCreateOrConnectWithoutTargetIntakeInput
    connect?: TahunWhereUniqueInput
  }

  export type ProdiCreateNestedOneWithoutTargetIntakeInput = {
    create?: XOR<ProdiCreateWithoutTargetIntakeInput, ProdiUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: ProdiCreateOrConnectWithoutTargetIntakeInput
    connect?: ProdiWhereUniqueInput
  }

  export type JenisMasukCreateNestedOneWithoutTargetIntakeInput = {
    create?: XOR<JenisMasukCreateWithoutTargetIntakeInput, JenisMasukUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutTargetIntakeInput
    connect?: JenisMasukWhereUniqueInput
  }

  export type CapaianCreateNestedManyWithoutTargetIntakeInput = {
    create?: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput> | CapaianCreateWithoutTargetIntakeInput[] | CapaianUncheckedCreateWithoutTargetIntakeInput[]
    connectOrCreate?: CapaianCreateOrConnectWithoutTargetIntakeInput | CapaianCreateOrConnectWithoutTargetIntakeInput[]
    createMany?: CapaianCreateManyTargetIntakeInputEnvelope
    connect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
  }

  export type CapaianUncheckedCreateNestedManyWithoutTargetIntakeInput = {
    create?: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput> | CapaianCreateWithoutTargetIntakeInput[] | CapaianUncheckedCreateWithoutTargetIntakeInput[]
    connectOrCreate?: CapaianCreateOrConnectWithoutTargetIntakeInput | CapaianCreateOrConnectWithoutTargetIntakeInput[]
    createMany?: CapaianCreateManyTargetIntakeInputEnvelope
    connect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
  }

  export type TahunUpdateOneRequiredWithoutTargetIntakeNestedInput = {
    create?: XOR<TahunCreateWithoutTargetIntakeInput, TahunUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: TahunCreateOrConnectWithoutTargetIntakeInput
    upsert?: TahunUpsertWithoutTargetIntakeInput
    connect?: TahunWhereUniqueInput
    update?: XOR<XOR<TahunUpdateToOneWithWhereWithoutTargetIntakeInput, TahunUpdateWithoutTargetIntakeInput>, TahunUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type ProdiUpdateOneWithoutTargetIntakeNestedInput = {
    create?: XOR<ProdiCreateWithoutTargetIntakeInput, ProdiUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: ProdiCreateOrConnectWithoutTargetIntakeInput
    upsert?: ProdiUpsertWithoutTargetIntakeInput
    disconnect?: ProdiWhereInput | boolean
    delete?: ProdiWhereInput | boolean
    connect?: ProdiWhereUniqueInput
    update?: XOR<XOR<ProdiUpdateToOneWithWhereWithoutTargetIntakeInput, ProdiUpdateWithoutTargetIntakeInput>, ProdiUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type JenisMasukUpdateOneRequiredWithoutTargetIntakeNestedInput = {
    create?: XOR<JenisMasukCreateWithoutTargetIntakeInput, JenisMasukUncheckedCreateWithoutTargetIntakeInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutTargetIntakeInput
    upsert?: JenisMasukUpsertWithoutTargetIntakeInput
    connect?: JenisMasukWhereUniqueInput
    update?: XOR<XOR<JenisMasukUpdateToOneWithWhereWithoutTargetIntakeInput, JenisMasukUpdateWithoutTargetIntakeInput>, JenisMasukUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type CapaianUpdateManyWithoutTargetIntakeNestedInput = {
    create?: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput> | CapaianCreateWithoutTargetIntakeInput[] | CapaianUncheckedCreateWithoutTargetIntakeInput[]
    connectOrCreate?: CapaianCreateOrConnectWithoutTargetIntakeInput | CapaianCreateOrConnectWithoutTargetIntakeInput[]
    upsert?: CapaianUpsertWithWhereUniqueWithoutTargetIntakeInput | CapaianUpsertWithWhereUniqueWithoutTargetIntakeInput[]
    createMany?: CapaianCreateManyTargetIntakeInputEnvelope
    set?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    disconnect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    delete?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    connect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    update?: CapaianUpdateWithWhereUniqueWithoutTargetIntakeInput | CapaianUpdateWithWhereUniqueWithoutTargetIntakeInput[]
    updateMany?: CapaianUpdateManyWithWhereWithoutTargetIntakeInput | CapaianUpdateManyWithWhereWithoutTargetIntakeInput[]
    deleteMany?: CapaianScalarWhereInput | CapaianScalarWhereInput[]
  }

  export type CapaianUncheckedUpdateManyWithoutTargetIntakeNestedInput = {
    create?: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput> | CapaianCreateWithoutTargetIntakeInput[] | CapaianUncheckedCreateWithoutTargetIntakeInput[]
    connectOrCreate?: CapaianCreateOrConnectWithoutTargetIntakeInput | CapaianCreateOrConnectWithoutTargetIntakeInput[]
    upsert?: CapaianUpsertWithWhereUniqueWithoutTargetIntakeInput | CapaianUpsertWithWhereUniqueWithoutTargetIntakeInput[]
    createMany?: CapaianCreateManyTargetIntakeInputEnvelope
    set?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    disconnect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    delete?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    connect?: CapaianWhereUniqueInput | CapaianWhereUniqueInput[]
    update?: CapaianUpdateWithWhereUniqueWithoutTargetIntakeInput | CapaianUpdateWithWhereUniqueWithoutTargetIntakeInput[]
    updateMany?: CapaianUpdateManyWithWhereWithoutTargetIntakeInput | CapaianUpdateManyWithWhereWithoutTargetIntakeInput[]
    deleteMany?: CapaianScalarWhereInput | CapaianScalarWhereInput[]
  }

  export type TargetIntakeCreateNestedOneWithoutCapaianInput = {
    create?: XOR<TargetIntakeCreateWithoutCapaianInput, TargetIntakeUncheckedCreateWithoutCapaianInput>
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutCapaianInput
    connect?: TargetIntakeWhereUniqueInput
  }

  export type TargetIntakeUpdateOneRequiredWithoutCapaianNestedInput = {
    create?: XOR<TargetIntakeCreateWithoutCapaianInput, TargetIntakeUncheckedCreateWithoutCapaianInput>
    connectOrCreate?: TargetIntakeCreateOrConnectWithoutCapaianInput
    upsert?: TargetIntakeUpsertWithoutCapaianInput
    connect?: TargetIntakeWhereUniqueInput
    update?: XOR<XOR<TargetIntakeUpdateToOneWithWhereWithoutCapaianInput, TargetIntakeUpdateWithoutCapaianInput>, TargetIntakeUncheckedUpdateWithoutCapaianInput>
  }

  export type StatusIntakeCreateNestedOneWithoutCapaianRincianInput = {
    create?: XOR<StatusIntakeCreateWithoutCapaianRincianInput, StatusIntakeUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: StatusIntakeCreateOrConnectWithoutCapaianRincianInput
    connect?: StatusIntakeWhereUniqueInput
  }

  export type TahunCreateNestedOneWithoutCapaianRincianInput = {
    create?: XOR<TahunCreateWithoutCapaianRincianInput, TahunUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: TahunCreateOrConnectWithoutCapaianRincianInput
    connect?: TahunWhereUniqueInput
  }

  export type JenisMasukCreateNestedOneWithoutCapaianRincianInput = {
    create?: XOR<JenisMasukCreateWithoutCapaianRincianInput, JenisMasukUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutCapaianRincianInput
    connect?: JenisMasukWhereUniqueInput
  }

  export type StatusIntakeUpdateOneRequiredWithoutCapaianRincianNestedInput = {
    create?: XOR<StatusIntakeCreateWithoutCapaianRincianInput, StatusIntakeUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: StatusIntakeCreateOrConnectWithoutCapaianRincianInput
    upsert?: StatusIntakeUpsertWithoutCapaianRincianInput
    connect?: StatusIntakeWhereUniqueInput
    update?: XOR<XOR<StatusIntakeUpdateToOneWithWhereWithoutCapaianRincianInput, StatusIntakeUpdateWithoutCapaianRincianInput>, StatusIntakeUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type TahunUpdateOneRequiredWithoutCapaianRincianNestedInput = {
    create?: XOR<TahunCreateWithoutCapaianRincianInput, TahunUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: TahunCreateOrConnectWithoutCapaianRincianInput
    upsert?: TahunUpsertWithoutCapaianRincianInput
    connect?: TahunWhereUniqueInput
    update?: XOR<XOR<TahunUpdateToOneWithWhereWithoutCapaianRincianInput, TahunUpdateWithoutCapaianRincianInput>, TahunUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type JenisMasukUpdateOneRequiredWithoutCapaianRincianNestedInput = {
    create?: XOR<JenisMasukCreateWithoutCapaianRincianInput, JenisMasukUncheckedCreateWithoutCapaianRincianInput>
    connectOrCreate?: JenisMasukCreateOrConnectWithoutCapaianRincianInput
    upsert?: JenisMasukUpsertWithoutCapaianRincianInput
    connect?: JenisMasukWhereUniqueInput
    update?: XOR<XOR<JenisMasukUpdateToOneWithWhereWithoutCapaianRincianInput, JenisMasukUpdateWithoutCapaianRincianInput>, JenisMasukUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type JenisMasukCreateWithoutJenisPilihanInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    TargetIntake?: TargetIntakeCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUncheckedCreateWithoutJenisPilihanInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukCreateOrConnectWithoutJenisPilihanInput = {
    where: JenisMasukWhereUniqueInput
    create: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput>
  }

  export type JenisMasukCreateManyJenisPilihanInputEnvelope = {
    data: JenisMasukCreateManyJenisPilihanInput | JenisMasukCreateManyJenisPilihanInput[]
    skipDuplicates?: boolean
  }

  export type JenisMasukUpsertWithWhereUniqueWithoutJenisPilihanInput = {
    where: JenisMasukWhereUniqueInput
    update: XOR<JenisMasukUpdateWithoutJenisPilihanInput, JenisMasukUncheckedUpdateWithoutJenisPilihanInput>
    create: XOR<JenisMasukCreateWithoutJenisPilihanInput, JenisMasukUncheckedCreateWithoutJenisPilihanInput>
  }

  export type JenisMasukUpdateWithWhereUniqueWithoutJenisPilihanInput = {
    where: JenisMasukWhereUniqueInput
    data: XOR<JenisMasukUpdateWithoutJenisPilihanInput, JenisMasukUncheckedUpdateWithoutJenisPilihanInput>
  }

  export type JenisMasukUpdateManyWithWhereWithoutJenisPilihanInput = {
    where: JenisMasukScalarWhereInput
    data: XOR<JenisMasukUpdateManyMutationInput, JenisMasukUncheckedUpdateManyWithoutJenisPilihanInput>
  }

  export type JenisMasukScalarWhereInput = {
    AND?: JenisMasukScalarWhereInput | JenisMasukScalarWhereInput[]
    OR?: JenisMasukScalarWhereInput[]
    NOT?: JenisMasukScalarWhereInput | JenisMasukScalarWhereInput[]
    jenisMasukId?: StringFilter<"JenisMasuk"> | string
    jenisPilihanId?: StringFilter<"JenisMasuk"> | string
    namaJenisMasuk?: StringFilter<"JenisMasuk"> | string
    deskripsi?: StringFilter<"JenisMasuk"> | string
  }

  export type JenisPilihanCreateWithoutJenisMasukInput = {
    jenisPilihanId?: string
    namaJenisPilihan: string
    deskripsi: string
  }

  export type JenisPilihanUncheckedCreateWithoutJenisMasukInput = {
    jenisPilihanId?: string
    namaJenisPilihan: string
    deskripsi: string
  }

  export type JenisPilihanCreateOrConnectWithoutJenisMasukInput = {
    where: JenisPilihanWhereUniqueInput
    create: XOR<JenisPilihanCreateWithoutJenisMasukInput, JenisPilihanUncheckedCreateWithoutJenisMasukInput>
  }

  export type TargetIntakeCreateWithoutJenisMasukInput = {
    targetIntakeId?: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tahun: TahunCreateNestedOneWithoutTargetIntakeInput
    Prodi?: ProdiCreateNestedOneWithoutTargetIntakeInput
    Capaian?: CapaianCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeUncheckedCreateWithoutJenisMasukInput = {
    targetIntakeId?: string
    tahunId: string
    prodiId?: string | null
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Capaian?: CapaianUncheckedCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeCreateOrConnectWithoutJenisMasukInput = {
    where: TargetIntakeWhereUniqueInput
    create: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput>
  }

  export type TargetIntakeCreateManyJenisMasukInputEnvelope = {
    data: TargetIntakeCreateManyJenisMasukInput | TargetIntakeCreateManyJenisMasukInput[]
    skipDuplicates?: boolean
  }

  export type TargetDbCreateWithoutJenisMasukInput = {
    targetDbId?: string
    target: number
    Tahun: TahunCreateNestedOneWithoutTargetDbInput
  }

  export type TargetDbUncheckedCreateWithoutJenisMasukInput = {
    targetDbId?: string
    tahunId: string
    target: number
  }

  export type TargetDbCreateOrConnectWithoutJenisMasukInput = {
    where: TargetDbWhereUniqueInput
    create: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput>
  }

  export type TargetDbCreateManyJenisMasukInputEnvelope = {
    data: TargetDbCreateManyJenisMasukInput | TargetDbCreateManyJenisMasukInput[]
    skipDuplicates?: boolean
  }

  export type CapaianRincianCreateWithoutJenisMasukInput = {
    capaianRincianId?: string
    capaian: number
    StatusIntake: StatusIntakeCreateNestedOneWithoutCapaianRincianInput
    Tahun: TahunCreateNestedOneWithoutCapaianRincianInput
  }

  export type CapaianRincianUncheckedCreateWithoutJenisMasukInput = {
    capaianRincianId?: string
    statusIntakeId: string
    tahunId: string
    capaian: number
  }

  export type CapaianRincianCreateOrConnectWithoutJenisMasukInput = {
    where: CapaianRincianWhereUniqueInput
    create: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput>
  }

  export type CapaianRincianCreateManyJenisMasukInputEnvelope = {
    data: CapaianRincianCreateManyJenisMasukInput | CapaianRincianCreateManyJenisMasukInput[]
    skipDuplicates?: boolean
  }

  export type JenisPilihanUpsertWithoutJenisMasukInput = {
    update: XOR<JenisPilihanUpdateWithoutJenisMasukInput, JenisPilihanUncheckedUpdateWithoutJenisMasukInput>
    create: XOR<JenisPilihanCreateWithoutJenisMasukInput, JenisPilihanUncheckedCreateWithoutJenisMasukInput>
    where?: JenisPilihanWhereInput
  }

  export type JenisPilihanUpdateToOneWithWhereWithoutJenisMasukInput = {
    where?: JenisPilihanWhereInput
    data: XOR<JenisPilihanUpdateWithoutJenisMasukInput, JenisPilihanUncheckedUpdateWithoutJenisMasukInput>
  }

  export type JenisPilihanUpdateWithoutJenisMasukInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type JenisPilihanUncheckedUpdateWithoutJenisMasukInput = {
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisPilihan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetIntakeUpsertWithWhereUniqueWithoutJenisMasukInput = {
    where: TargetIntakeWhereUniqueInput
    update: XOR<TargetIntakeUpdateWithoutJenisMasukInput, TargetIntakeUncheckedUpdateWithoutJenisMasukInput>
    create: XOR<TargetIntakeCreateWithoutJenisMasukInput, TargetIntakeUncheckedCreateWithoutJenisMasukInput>
  }

  export type TargetIntakeUpdateWithWhereUniqueWithoutJenisMasukInput = {
    where: TargetIntakeWhereUniqueInput
    data: XOR<TargetIntakeUpdateWithoutJenisMasukInput, TargetIntakeUncheckedUpdateWithoutJenisMasukInput>
  }

  export type TargetIntakeUpdateManyWithWhereWithoutJenisMasukInput = {
    where: TargetIntakeScalarWhereInput
    data: XOR<TargetIntakeUpdateManyMutationInput, TargetIntakeUncheckedUpdateManyWithoutJenisMasukInput>
  }

  export type TargetIntakeScalarWhereInput = {
    AND?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
    OR?: TargetIntakeScalarWhereInput[]
    NOT?: TargetIntakeScalarWhereInput | TargetIntakeScalarWhereInput[]
    targetIntakeId?: StringFilter<"TargetIntake"> | string
    tahunId?: StringFilter<"TargetIntake"> | string
    prodiId?: StringNullableFilter<"TargetIntake"> | string | null
    jenisMasukId?: StringFilter<"TargetIntake"> | string
    target?: IntFilter<"TargetIntake"> | number
    createdAt?: DateTimeFilter<"TargetIntake"> | Date | string
    updatedAt?: DateTimeFilter<"TargetIntake"> | Date | string
  }

  export type TargetDbUpsertWithWhereUniqueWithoutJenisMasukInput = {
    where: TargetDbWhereUniqueInput
    update: XOR<TargetDbUpdateWithoutJenisMasukInput, TargetDbUncheckedUpdateWithoutJenisMasukInput>
    create: XOR<TargetDbCreateWithoutJenisMasukInput, TargetDbUncheckedCreateWithoutJenisMasukInput>
  }

  export type TargetDbUpdateWithWhereUniqueWithoutJenisMasukInput = {
    where: TargetDbWhereUniqueInput
    data: XOR<TargetDbUpdateWithoutJenisMasukInput, TargetDbUncheckedUpdateWithoutJenisMasukInput>
  }

  export type TargetDbUpdateManyWithWhereWithoutJenisMasukInput = {
    where: TargetDbScalarWhereInput
    data: XOR<TargetDbUpdateManyMutationInput, TargetDbUncheckedUpdateManyWithoutJenisMasukInput>
  }

  export type TargetDbScalarWhereInput = {
    AND?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
    OR?: TargetDbScalarWhereInput[]
    NOT?: TargetDbScalarWhereInput | TargetDbScalarWhereInput[]
    targetDbId?: StringFilter<"TargetDb"> | string
    tahunId?: StringFilter<"TargetDb"> | string
    jenisMasukId?: StringFilter<"TargetDb"> | string
    target?: IntFilter<"TargetDb"> | number
  }

  export type CapaianRincianUpsertWithWhereUniqueWithoutJenisMasukInput = {
    where: CapaianRincianWhereUniqueInput
    update: XOR<CapaianRincianUpdateWithoutJenisMasukInput, CapaianRincianUncheckedUpdateWithoutJenisMasukInput>
    create: XOR<CapaianRincianCreateWithoutJenisMasukInput, CapaianRincianUncheckedCreateWithoutJenisMasukInput>
  }

  export type CapaianRincianUpdateWithWhereUniqueWithoutJenisMasukInput = {
    where: CapaianRincianWhereUniqueInput
    data: XOR<CapaianRincianUpdateWithoutJenisMasukInput, CapaianRincianUncheckedUpdateWithoutJenisMasukInput>
  }

  export type CapaianRincianUpdateManyWithWhereWithoutJenisMasukInput = {
    where: CapaianRincianScalarWhereInput
    data: XOR<CapaianRincianUpdateManyMutationInput, CapaianRincianUncheckedUpdateManyWithoutJenisMasukInput>
  }

  export type CapaianRincianScalarWhereInput = {
    AND?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
    OR?: CapaianRincianScalarWhereInput[]
    NOT?: CapaianRincianScalarWhereInput | CapaianRincianScalarWhereInput[]
    capaianRincianId?: StringFilter<"CapaianRincian"> | string
    statusIntakeId?: StringFilter<"CapaianRincian"> | string
    tahunId?: StringFilter<"CapaianRincian"> | string
    jenisMasukId?: StringFilter<"CapaianRincian"> | string
    capaian?: IntFilter<"CapaianRincian"> | number
  }

  export type TargetIntakeCreateWithoutProdiInput = {
    targetIntakeId?: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tahun: TahunCreateNestedOneWithoutTargetIntakeInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetIntakeInput
    Capaian?: CapaianCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeUncheckedCreateWithoutProdiInput = {
    targetIntakeId?: string
    tahunId: string
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Capaian?: CapaianUncheckedCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeCreateOrConnectWithoutProdiInput = {
    where: TargetIntakeWhereUniqueInput
    create: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput>
  }

  export type TargetIntakeCreateManyProdiInputEnvelope = {
    data: TargetIntakeCreateManyProdiInput | TargetIntakeCreateManyProdiInput[]
    skipDuplicates?: boolean
  }

  export type TargetIntakeUpsertWithWhereUniqueWithoutProdiInput = {
    where: TargetIntakeWhereUniqueInput
    update: XOR<TargetIntakeUpdateWithoutProdiInput, TargetIntakeUncheckedUpdateWithoutProdiInput>
    create: XOR<TargetIntakeCreateWithoutProdiInput, TargetIntakeUncheckedCreateWithoutProdiInput>
  }

  export type TargetIntakeUpdateWithWhereUniqueWithoutProdiInput = {
    where: TargetIntakeWhereUniqueInput
    data: XOR<TargetIntakeUpdateWithoutProdiInput, TargetIntakeUncheckedUpdateWithoutProdiInput>
  }

  export type TargetIntakeUpdateManyWithWhereWithoutProdiInput = {
    where: TargetIntakeScalarWhereInput
    data: XOR<TargetIntakeUpdateManyMutationInput, TargetIntakeUncheckedUpdateManyWithoutProdiInput>
  }

  export type TahunCreateWithoutSemesterInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    TargetIntake?: TargetIntakeCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutTahunInput
  }

  export type TahunUncheckedCreateWithoutSemesterInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutTahunInput
  }

  export type TahunCreateOrConnectWithoutSemesterInput = {
    where: TahunWhereUniqueInput
    create: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput>
  }

  export type TahunCreateManySemesterInputEnvelope = {
    data: TahunCreateManySemesterInput | TahunCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type TahunUpsertWithWhereUniqueWithoutSemesterInput = {
    where: TahunWhereUniqueInput
    update: XOR<TahunUpdateWithoutSemesterInput, TahunUncheckedUpdateWithoutSemesterInput>
    create: XOR<TahunCreateWithoutSemesterInput, TahunUncheckedCreateWithoutSemesterInput>
  }

  export type TahunUpdateWithWhereUniqueWithoutSemesterInput = {
    where: TahunWhereUniqueInput
    data: XOR<TahunUpdateWithoutSemesterInput, TahunUncheckedUpdateWithoutSemesterInput>
  }

  export type TahunUpdateManyWithWhereWithoutSemesterInput = {
    where: TahunScalarWhereInput
    data: XOR<TahunUpdateManyMutationInput, TahunUncheckedUpdateManyWithoutSemesterInput>
  }

  export type TahunScalarWhereInput = {
    AND?: TahunScalarWhereInput | TahunScalarWhereInput[]
    OR?: TahunScalarWhereInput[]
    NOT?: TahunScalarWhereInput | TahunScalarWhereInput[]
    tahunId?: StringFilter<"Tahun"> | string
    semesterId?: StringFilter<"Tahun"> | string
    namaTahun?: StringFilter<"Tahun"> | string
    deskripsi?: StringFilter<"Tahun"> | string
  }

  export type SemesterCreateWithoutTahunInput = {
    semesterId?: string
    namaSemester: string
    deskripsi: string
  }

  export type SemesterUncheckedCreateWithoutTahunInput = {
    semesterId?: string
    namaSemester: string
    deskripsi: string
  }

  export type SemesterCreateOrConnectWithoutTahunInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutTahunInput, SemesterUncheckedCreateWithoutTahunInput>
  }

  export type TargetIntakeCreateWithoutTahunInput = {
    targetIntakeId?: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Prodi?: ProdiCreateNestedOneWithoutTargetIntakeInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetIntakeInput
    Capaian?: CapaianCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeUncheckedCreateWithoutTahunInput = {
    targetIntakeId?: string
    prodiId?: string | null
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Capaian?: CapaianUncheckedCreateNestedManyWithoutTargetIntakeInput
  }

  export type TargetIntakeCreateOrConnectWithoutTahunInput = {
    where: TargetIntakeWhereUniqueInput
    create: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput>
  }

  export type TargetIntakeCreateManyTahunInputEnvelope = {
    data: TargetIntakeCreateManyTahunInput | TargetIntakeCreateManyTahunInput[]
    skipDuplicates?: boolean
  }

  export type TargetDbCreateWithoutTahunInput = {
    targetDbId?: string
    target: number
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetDbInput
  }

  export type TargetDbUncheckedCreateWithoutTahunInput = {
    targetDbId?: string
    jenisMasukId: string
    target: number
  }

  export type TargetDbCreateOrConnectWithoutTahunInput = {
    where: TargetDbWhereUniqueInput
    create: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput>
  }

  export type TargetDbCreateManyTahunInputEnvelope = {
    data: TargetDbCreateManyTahunInput | TargetDbCreateManyTahunInput[]
    skipDuplicates?: boolean
  }

  export type CapaianRincianCreateWithoutTahunInput = {
    capaianRincianId?: string
    capaian: number
    StatusIntake: StatusIntakeCreateNestedOneWithoutCapaianRincianInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutCapaianRincianInput
  }

  export type CapaianRincianUncheckedCreateWithoutTahunInput = {
    capaianRincianId?: string
    statusIntakeId: string
    jenisMasukId: string
    capaian: number
  }

  export type CapaianRincianCreateOrConnectWithoutTahunInput = {
    where: CapaianRincianWhereUniqueInput
    create: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput>
  }

  export type CapaianRincianCreateManyTahunInputEnvelope = {
    data: CapaianRincianCreateManyTahunInput | CapaianRincianCreateManyTahunInput[]
    skipDuplicates?: boolean
  }

  export type SemesterUpsertWithoutTahunInput = {
    update: XOR<SemesterUpdateWithoutTahunInput, SemesterUncheckedUpdateWithoutTahunInput>
    create: XOR<SemesterCreateWithoutTahunInput, SemesterUncheckedCreateWithoutTahunInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutTahunInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutTahunInput, SemesterUncheckedUpdateWithoutTahunInput>
  }

  export type SemesterUpdateWithoutTahunInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUncheckedUpdateWithoutTahunInput = {
    semesterId?: StringFieldUpdateOperationsInput | string
    namaSemester?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetIntakeUpsertWithWhereUniqueWithoutTahunInput = {
    where: TargetIntakeWhereUniqueInput
    update: XOR<TargetIntakeUpdateWithoutTahunInput, TargetIntakeUncheckedUpdateWithoutTahunInput>
    create: XOR<TargetIntakeCreateWithoutTahunInput, TargetIntakeUncheckedCreateWithoutTahunInput>
  }

  export type TargetIntakeUpdateWithWhereUniqueWithoutTahunInput = {
    where: TargetIntakeWhereUniqueInput
    data: XOR<TargetIntakeUpdateWithoutTahunInput, TargetIntakeUncheckedUpdateWithoutTahunInput>
  }

  export type TargetIntakeUpdateManyWithWhereWithoutTahunInput = {
    where: TargetIntakeScalarWhereInput
    data: XOR<TargetIntakeUpdateManyMutationInput, TargetIntakeUncheckedUpdateManyWithoutTahunInput>
  }

  export type TargetDbUpsertWithWhereUniqueWithoutTahunInput = {
    where: TargetDbWhereUniqueInput
    update: XOR<TargetDbUpdateWithoutTahunInput, TargetDbUncheckedUpdateWithoutTahunInput>
    create: XOR<TargetDbCreateWithoutTahunInput, TargetDbUncheckedCreateWithoutTahunInput>
  }

  export type TargetDbUpdateWithWhereUniqueWithoutTahunInput = {
    where: TargetDbWhereUniqueInput
    data: XOR<TargetDbUpdateWithoutTahunInput, TargetDbUncheckedUpdateWithoutTahunInput>
  }

  export type TargetDbUpdateManyWithWhereWithoutTahunInput = {
    where: TargetDbScalarWhereInput
    data: XOR<TargetDbUpdateManyMutationInput, TargetDbUncheckedUpdateManyWithoutTahunInput>
  }

  export type CapaianRincianUpsertWithWhereUniqueWithoutTahunInput = {
    where: CapaianRincianWhereUniqueInput
    update: XOR<CapaianRincianUpdateWithoutTahunInput, CapaianRincianUncheckedUpdateWithoutTahunInput>
    create: XOR<CapaianRincianCreateWithoutTahunInput, CapaianRincianUncheckedCreateWithoutTahunInput>
  }

  export type CapaianRincianUpdateWithWhereUniqueWithoutTahunInput = {
    where: CapaianRincianWhereUniqueInput
    data: XOR<CapaianRincianUpdateWithoutTahunInput, CapaianRincianUncheckedUpdateWithoutTahunInput>
  }

  export type CapaianRincianUpdateManyWithWhereWithoutTahunInput = {
    where: CapaianRincianScalarWhereInput
    data: XOR<CapaianRincianUpdateManyMutationInput, CapaianRincianUncheckedUpdateManyWithoutTahunInput>
  }

  export type TahunCreateWithoutTargetDbInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    Semester: SemesterCreateNestedOneWithoutTahunInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutTahunInput
  }

  export type TahunUncheckedCreateWithoutTargetDbInput = {
    tahunId?: string
    semesterId: string
    namaTahun: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutTahunInput
  }

  export type TahunCreateOrConnectWithoutTargetDbInput = {
    where: TahunWhereUniqueInput
    create: XOR<TahunCreateWithoutTargetDbInput, TahunUncheckedCreateWithoutTargetDbInput>
  }

  export type JenisMasukCreateWithoutTargetDbInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    JenisPilihan: JenisPilihanCreateNestedOneWithoutJenisMasukInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUncheckedCreateWithoutTargetDbInput = {
    jenisMasukId?: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukCreateOrConnectWithoutTargetDbInput = {
    where: JenisMasukWhereUniqueInput
    create: XOR<JenisMasukCreateWithoutTargetDbInput, JenisMasukUncheckedCreateWithoutTargetDbInput>
  }

  export type TahunUpsertWithoutTargetDbInput = {
    update: XOR<TahunUpdateWithoutTargetDbInput, TahunUncheckedUpdateWithoutTargetDbInput>
    create: XOR<TahunCreateWithoutTargetDbInput, TahunUncheckedCreateWithoutTargetDbInput>
    where?: TahunWhereInput
  }

  export type TahunUpdateToOneWithWhereWithoutTargetDbInput = {
    where?: TahunWhereInput
    data: XOR<TahunUpdateWithoutTargetDbInput, TahunUncheckedUpdateWithoutTargetDbInput>
  }

  export type TahunUpdateWithoutTargetDbInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Semester?: SemesterUpdateOneRequiredWithoutTahunNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateWithoutTargetDbInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutTahunNestedInput
  }

  export type JenisMasukUpsertWithoutTargetDbInput = {
    update: XOR<JenisMasukUpdateWithoutTargetDbInput, JenisMasukUncheckedUpdateWithoutTargetDbInput>
    create: XOR<JenisMasukCreateWithoutTargetDbInput, JenisMasukUncheckedCreateWithoutTargetDbInput>
    where?: JenisMasukWhereInput
  }

  export type JenisMasukUpdateToOneWithWhereWithoutTargetDbInput = {
    where?: JenisMasukWhereInput
    data: XOR<JenisMasukUpdateWithoutTargetDbInput, JenisMasukUncheckedUpdateWithoutTargetDbInput>
  }

  export type JenisMasukUpdateWithoutTargetDbInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisPilihan?: JenisPilihanUpdateOneRequiredWithoutJenisMasukNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateWithoutTargetDbInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutJenisMasukNestedInput
  }

  export type CapaianRincianCreateWithoutStatusIntakeInput = {
    capaianRincianId?: string
    capaian: number
    Tahun: TahunCreateNestedOneWithoutCapaianRincianInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutCapaianRincianInput
  }

  export type CapaianRincianUncheckedCreateWithoutStatusIntakeInput = {
    capaianRincianId?: string
    tahunId: string
    jenisMasukId: string
    capaian: number
  }

  export type CapaianRincianCreateOrConnectWithoutStatusIntakeInput = {
    where: CapaianRincianWhereUniqueInput
    create: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput>
  }

  export type CapaianRincianCreateManyStatusIntakeInputEnvelope = {
    data: CapaianRincianCreateManyStatusIntakeInput | CapaianRincianCreateManyStatusIntakeInput[]
    skipDuplicates?: boolean
  }

  export type CapaianRincianUpsertWithWhereUniqueWithoutStatusIntakeInput = {
    where: CapaianRincianWhereUniqueInput
    update: XOR<CapaianRincianUpdateWithoutStatusIntakeInput, CapaianRincianUncheckedUpdateWithoutStatusIntakeInput>
    create: XOR<CapaianRincianCreateWithoutStatusIntakeInput, CapaianRincianUncheckedCreateWithoutStatusIntakeInput>
  }

  export type CapaianRincianUpdateWithWhereUniqueWithoutStatusIntakeInput = {
    where: CapaianRincianWhereUniqueInput
    data: XOR<CapaianRincianUpdateWithoutStatusIntakeInput, CapaianRincianUncheckedUpdateWithoutStatusIntakeInput>
  }

  export type CapaianRincianUpdateManyWithWhereWithoutStatusIntakeInput = {
    where: CapaianRincianScalarWhereInput
    data: XOR<CapaianRincianUpdateManyMutationInput, CapaianRincianUncheckedUpdateManyWithoutStatusIntakeInput>
  }

  export type TahunCreateWithoutTargetIntakeInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    Semester: SemesterCreateNestedOneWithoutTahunInput
    TargetDb?: TargetDbCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutTahunInput
  }

  export type TahunUncheckedCreateWithoutTargetIntakeInput = {
    tahunId?: string
    semesterId: string
    namaTahun: string
    deskripsi: string
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutTahunInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutTahunInput
  }

  export type TahunCreateOrConnectWithoutTargetIntakeInput = {
    where: TahunWhereUniqueInput
    create: XOR<TahunCreateWithoutTargetIntakeInput, TahunUncheckedCreateWithoutTargetIntakeInput>
  }

  export type ProdiCreateWithoutTargetIntakeInput = {
    prodiId?: string
    namaProdi: string
    deskripsi: string
  }

  export type ProdiUncheckedCreateWithoutTargetIntakeInput = {
    prodiId?: string
    namaProdi: string
    deskripsi: string
  }

  export type ProdiCreateOrConnectWithoutTargetIntakeInput = {
    where: ProdiWhereUniqueInput
    create: XOR<ProdiCreateWithoutTargetIntakeInput, ProdiUncheckedCreateWithoutTargetIntakeInput>
  }

  export type JenisMasukCreateWithoutTargetIntakeInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    JenisPilihan: JenisPilihanCreateNestedOneWithoutJenisMasukInput
    TargetDb?: TargetDbCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUncheckedCreateWithoutTargetIntakeInput = {
    jenisMasukId?: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutJenisMasukInput
    CapaianRincian?: CapaianRincianUncheckedCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukCreateOrConnectWithoutTargetIntakeInput = {
    where: JenisMasukWhereUniqueInput
    create: XOR<JenisMasukCreateWithoutTargetIntakeInput, JenisMasukUncheckedCreateWithoutTargetIntakeInput>
  }

  export type CapaianCreateWithoutTargetIntakeInput = {
    capaianId?: string
    weekday: number
    weekend: number
  }

  export type CapaianUncheckedCreateWithoutTargetIntakeInput = {
    capaianId?: string
    weekday: number
    weekend: number
  }

  export type CapaianCreateOrConnectWithoutTargetIntakeInput = {
    where: CapaianWhereUniqueInput
    create: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput>
  }

  export type CapaianCreateManyTargetIntakeInputEnvelope = {
    data: CapaianCreateManyTargetIntakeInput | CapaianCreateManyTargetIntakeInput[]
    skipDuplicates?: boolean
  }

  export type TahunUpsertWithoutTargetIntakeInput = {
    update: XOR<TahunUpdateWithoutTargetIntakeInput, TahunUncheckedUpdateWithoutTargetIntakeInput>
    create: XOR<TahunCreateWithoutTargetIntakeInput, TahunUncheckedCreateWithoutTargetIntakeInput>
    where?: TahunWhereInput
  }

  export type TahunUpdateToOneWithWhereWithoutTargetIntakeInput = {
    where?: TahunWhereInput
    data: XOR<TahunUpdateWithoutTargetIntakeInput, TahunUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type TahunUpdateWithoutTargetIntakeInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Semester?: SemesterUpdateOneRequiredWithoutTahunNestedInput
    TargetDb?: TargetDbUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateWithoutTargetIntakeInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetDb?: TargetDbUncheckedUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutTahunNestedInput
  }

  export type ProdiUpsertWithoutTargetIntakeInput = {
    update: XOR<ProdiUpdateWithoutTargetIntakeInput, ProdiUncheckedUpdateWithoutTargetIntakeInput>
    create: XOR<ProdiCreateWithoutTargetIntakeInput, ProdiUncheckedCreateWithoutTargetIntakeInput>
    where?: ProdiWhereInput
  }

  export type ProdiUpdateToOneWithWhereWithoutTargetIntakeInput = {
    where?: ProdiWhereInput
    data: XOR<ProdiUpdateWithoutTargetIntakeInput, ProdiUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type ProdiUpdateWithoutTargetIntakeInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type ProdiUncheckedUpdateWithoutTargetIntakeInput = {
    prodiId?: StringFieldUpdateOperationsInput | string
    namaProdi?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type JenisMasukUpsertWithoutTargetIntakeInput = {
    update: XOR<JenisMasukUpdateWithoutTargetIntakeInput, JenisMasukUncheckedUpdateWithoutTargetIntakeInput>
    create: XOR<JenisMasukCreateWithoutTargetIntakeInput, JenisMasukUncheckedCreateWithoutTargetIntakeInput>
    where?: JenisMasukWhereInput
  }

  export type JenisMasukUpdateToOneWithWhereWithoutTargetIntakeInput = {
    where?: JenisMasukWhereInput
    data: XOR<JenisMasukUpdateWithoutTargetIntakeInput, JenisMasukUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type JenisMasukUpdateWithoutTargetIntakeInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisPilihan?: JenisPilihanUpdateOneRequiredWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateWithoutTargetIntakeInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetDb?: TargetDbUncheckedUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutJenisMasukNestedInput
  }

  export type CapaianUpsertWithWhereUniqueWithoutTargetIntakeInput = {
    where: CapaianWhereUniqueInput
    update: XOR<CapaianUpdateWithoutTargetIntakeInput, CapaianUncheckedUpdateWithoutTargetIntakeInput>
    create: XOR<CapaianCreateWithoutTargetIntakeInput, CapaianUncheckedCreateWithoutTargetIntakeInput>
  }

  export type CapaianUpdateWithWhereUniqueWithoutTargetIntakeInput = {
    where: CapaianWhereUniqueInput
    data: XOR<CapaianUpdateWithoutTargetIntakeInput, CapaianUncheckedUpdateWithoutTargetIntakeInput>
  }

  export type CapaianUpdateManyWithWhereWithoutTargetIntakeInput = {
    where: CapaianScalarWhereInput
    data: XOR<CapaianUpdateManyMutationInput, CapaianUncheckedUpdateManyWithoutTargetIntakeInput>
  }

  export type CapaianScalarWhereInput = {
    AND?: CapaianScalarWhereInput | CapaianScalarWhereInput[]
    OR?: CapaianScalarWhereInput[]
    NOT?: CapaianScalarWhereInput | CapaianScalarWhereInput[]
    capaianId?: StringFilter<"Capaian"> | string
    targetIntakeId?: StringFilter<"Capaian"> | string
    weekday?: IntFilter<"Capaian"> | number
    weekend?: IntFilter<"Capaian"> | number
  }

  export type TargetIntakeCreateWithoutCapaianInput = {
    targetIntakeId?: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tahun: TahunCreateNestedOneWithoutTargetIntakeInput
    Prodi?: ProdiCreateNestedOneWithoutTargetIntakeInput
    JenisMasuk: JenisMasukCreateNestedOneWithoutTargetIntakeInput
  }

  export type TargetIntakeUncheckedCreateWithoutCapaianInput = {
    targetIntakeId?: string
    tahunId: string
    prodiId?: string | null
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIntakeCreateOrConnectWithoutCapaianInput = {
    where: TargetIntakeWhereUniqueInput
    create: XOR<TargetIntakeCreateWithoutCapaianInput, TargetIntakeUncheckedCreateWithoutCapaianInput>
  }

  export type TargetIntakeUpsertWithoutCapaianInput = {
    update: XOR<TargetIntakeUpdateWithoutCapaianInput, TargetIntakeUncheckedUpdateWithoutCapaianInput>
    create: XOR<TargetIntakeCreateWithoutCapaianInput, TargetIntakeUncheckedCreateWithoutCapaianInput>
    where?: TargetIntakeWhereInput
  }

  export type TargetIntakeUpdateToOneWithWhereWithoutCapaianInput = {
    where?: TargetIntakeWhereInput
    data: XOR<TargetIntakeUpdateWithoutCapaianInput, TargetIntakeUncheckedUpdateWithoutCapaianInput>
  }

  export type TargetIntakeUpdateWithoutCapaianInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tahun?: TahunUpdateOneRequiredWithoutTargetIntakeNestedInput
    Prodi?: ProdiUpdateOneWithoutTargetIntakeNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateWithoutCapaianInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusIntakeCreateWithoutCapaianRincianInput = {
    statusIntakeId?: string
    namaStatus: string
    persentase: number
    deskripsi: string
  }

  export type StatusIntakeUncheckedCreateWithoutCapaianRincianInput = {
    statusIntakeId?: string
    namaStatus: string
    persentase: number
    deskripsi: string
  }

  export type StatusIntakeCreateOrConnectWithoutCapaianRincianInput = {
    where: StatusIntakeWhereUniqueInput
    create: XOR<StatusIntakeCreateWithoutCapaianRincianInput, StatusIntakeUncheckedCreateWithoutCapaianRincianInput>
  }

  export type TahunCreateWithoutCapaianRincianInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
    Semester: SemesterCreateNestedOneWithoutTahunInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbCreateNestedManyWithoutTahunInput
  }

  export type TahunUncheckedCreateWithoutCapaianRincianInput = {
    tahunId?: string
    semesterId: string
    namaTahun: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutTahunInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutTahunInput
  }

  export type TahunCreateOrConnectWithoutCapaianRincianInput = {
    where: TahunWhereUniqueInput
    create: XOR<TahunCreateWithoutCapaianRincianInput, TahunUncheckedCreateWithoutCapaianRincianInput>
  }

  export type JenisMasukCreateWithoutCapaianRincianInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
    JenisPilihan: JenisPilihanCreateNestedOneWithoutJenisMasukInput
    TargetIntake?: TargetIntakeCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukUncheckedCreateWithoutCapaianRincianInput = {
    jenisMasukId?: string
    jenisPilihanId: string
    namaJenisMasuk: string
    deskripsi: string
    TargetIntake?: TargetIntakeUncheckedCreateNestedManyWithoutJenisMasukInput
    TargetDb?: TargetDbUncheckedCreateNestedManyWithoutJenisMasukInput
  }

  export type JenisMasukCreateOrConnectWithoutCapaianRincianInput = {
    where: JenisMasukWhereUniqueInput
    create: XOR<JenisMasukCreateWithoutCapaianRincianInput, JenisMasukUncheckedCreateWithoutCapaianRincianInput>
  }

  export type StatusIntakeUpsertWithoutCapaianRincianInput = {
    update: XOR<StatusIntakeUpdateWithoutCapaianRincianInput, StatusIntakeUncheckedUpdateWithoutCapaianRincianInput>
    create: XOR<StatusIntakeCreateWithoutCapaianRincianInput, StatusIntakeUncheckedCreateWithoutCapaianRincianInput>
    where?: StatusIntakeWhereInput
  }

  export type StatusIntakeUpdateToOneWithWhereWithoutCapaianRincianInput = {
    where?: StatusIntakeWhereInput
    data: XOR<StatusIntakeUpdateWithoutCapaianRincianInput, StatusIntakeUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type StatusIntakeUpdateWithoutCapaianRincianInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type StatusIntakeUncheckedUpdateWithoutCapaianRincianInput = {
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    namaStatus?: StringFieldUpdateOperationsInput | string
    persentase?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TahunUpsertWithoutCapaianRincianInput = {
    update: XOR<TahunUpdateWithoutCapaianRincianInput, TahunUncheckedUpdateWithoutCapaianRincianInput>
    create: XOR<TahunCreateWithoutCapaianRincianInput, TahunUncheckedCreateWithoutCapaianRincianInput>
    where?: TahunWhereInput
  }

  export type TahunUpdateToOneWithWhereWithoutCapaianRincianInput = {
    where?: TahunWhereInput
    data: XOR<TahunUpdateWithoutCapaianRincianInput, TahunUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type TahunUpdateWithoutCapaianRincianInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    Semester?: SemesterUpdateOneRequiredWithoutTahunNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateWithoutCapaianRincianInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutTahunNestedInput
  }

  export type JenisMasukUpsertWithoutCapaianRincianInput = {
    update: XOR<JenisMasukUpdateWithoutCapaianRincianInput, JenisMasukUncheckedUpdateWithoutCapaianRincianInput>
    create: XOR<JenisMasukCreateWithoutCapaianRincianInput, JenisMasukUncheckedCreateWithoutCapaianRincianInput>
    where?: JenisMasukWhereInput
  }

  export type JenisMasukUpdateToOneWithWhereWithoutCapaianRincianInput = {
    where?: JenisMasukWhereInput
    data: XOR<JenisMasukUpdateWithoutCapaianRincianInput, JenisMasukUncheckedUpdateWithoutCapaianRincianInput>
  }

  export type JenisMasukUpdateWithoutCapaianRincianInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    JenisPilihan?: JenisPilihanUpdateOneRequiredWithoutJenisMasukNestedInput
    TargetIntake?: TargetIntakeUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateWithoutCapaianRincianInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    jenisPilihanId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukCreateManyJenisPilihanInput = {
    jenisMasukId?: string
    namaJenisMasuk: string
    deskripsi: string
  }

  export type JenisMasukUpdateWithoutJenisPilihanInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateWithoutJenisPilihanInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutJenisMasukNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutJenisMasukNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutJenisMasukNestedInput
  }

  export type JenisMasukUncheckedUpdateManyWithoutJenisPilihanInput = {
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    namaJenisMasuk?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetIntakeCreateManyJenisMasukInput = {
    targetIntakeId?: string
    tahunId: string
    prodiId?: string | null
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetDbCreateManyJenisMasukInput = {
    targetDbId?: string
    tahunId: string
    target: number
  }

  export type CapaianRincianCreateManyJenisMasukInput = {
    capaianRincianId?: string
    statusIntakeId: string
    tahunId: string
    capaian: number
  }

  export type TargetIntakeUpdateWithoutJenisMasukInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tahun?: TahunUpdateOneRequiredWithoutTargetIntakeNestedInput
    Prodi?: ProdiUpdateOneWithoutTargetIntakeNestedInput
    Capaian?: CapaianUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateWithoutJenisMasukInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Capaian?: CapaianUncheckedUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateManyWithoutJenisMasukInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetDbUpdateWithoutJenisMasukInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    Tahun?: TahunUpdateOneRequiredWithoutTargetDbNestedInput
  }

  export type TargetDbUncheckedUpdateWithoutJenisMasukInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type TargetDbUncheckedUpdateManyWithoutJenisMasukInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUpdateWithoutJenisMasukInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
    StatusIntake?: StatusIntakeUpdateOneRequiredWithoutCapaianRincianNestedInput
    Tahun?: TahunUpdateOneRequiredWithoutCapaianRincianNestedInput
  }

  export type CapaianRincianUncheckedUpdateWithoutJenisMasukInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUncheckedUpdateManyWithoutJenisMasukInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type TargetIntakeCreateManyProdiInput = {
    targetIntakeId?: string
    tahunId: string
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIntakeUpdateWithoutProdiInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tahun?: TahunUpdateOneRequiredWithoutTargetIntakeNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetIntakeNestedInput
    Capaian?: CapaianUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateWithoutProdiInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Capaian?: CapaianUncheckedUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateManyWithoutProdiInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TahunCreateManySemesterInput = {
    tahunId?: string
    namaTahun: string
    deskripsi: string
  }

  export type TahunUpdateWithoutSemesterInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateWithoutSemesterInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    TargetIntake?: TargetIntakeUncheckedUpdateManyWithoutTahunNestedInput
    TargetDb?: TargetDbUncheckedUpdateManyWithoutTahunNestedInput
    CapaianRincian?: CapaianRincianUncheckedUpdateManyWithoutTahunNestedInput
  }

  export type TahunUncheckedUpdateManyWithoutSemesterInput = {
    tahunId?: StringFieldUpdateOperationsInput | string
    namaTahun?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TargetIntakeCreateManyTahunInput = {
    targetIntakeId?: string
    prodiId?: string | null
    jenisMasukId: string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetDbCreateManyTahunInput = {
    targetDbId?: string
    jenisMasukId: string
    target: number
  }

  export type CapaianRincianCreateManyTahunInput = {
    capaianRincianId?: string
    statusIntakeId: string
    jenisMasukId: string
    capaian: number
  }

  export type TargetIntakeUpdateWithoutTahunInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Prodi?: ProdiUpdateOneWithoutTargetIntakeNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetIntakeNestedInput
    Capaian?: CapaianUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateWithoutTahunInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Capaian?: CapaianUncheckedUpdateManyWithoutTargetIntakeNestedInput
  }

  export type TargetIntakeUncheckedUpdateManyWithoutTahunInput = {
    targetIntakeId?: StringFieldUpdateOperationsInput | string
    prodiId?: NullableStringFieldUpdateOperationsInput | string | null
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetDbUpdateWithoutTahunInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutTargetDbNestedInput
  }

  export type TargetDbUncheckedUpdateWithoutTahunInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type TargetDbUncheckedUpdateManyWithoutTahunInput = {
    targetDbId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUpdateWithoutTahunInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
    StatusIntake?: StatusIntakeUpdateOneRequiredWithoutCapaianRincianNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutCapaianRincianNestedInput
  }

  export type CapaianRincianUncheckedUpdateWithoutTahunInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUncheckedUpdateManyWithoutTahunInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    statusIntakeId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianCreateManyStatusIntakeInput = {
    capaianRincianId?: string
    tahunId: string
    jenisMasukId: string
    capaian: number
  }

  export type CapaianRincianUpdateWithoutStatusIntakeInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
    Tahun?: TahunUpdateOneRequiredWithoutCapaianRincianNestedInput
    JenisMasuk?: JenisMasukUpdateOneRequiredWithoutCapaianRincianNestedInput
  }

  export type CapaianRincianUncheckedUpdateWithoutStatusIntakeInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianRincianUncheckedUpdateManyWithoutStatusIntakeInput = {
    capaianRincianId?: StringFieldUpdateOperationsInput | string
    tahunId?: StringFieldUpdateOperationsInput | string
    jenisMasukId?: StringFieldUpdateOperationsInput | string
    capaian?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianCreateManyTargetIntakeInput = {
    capaianId?: string
    weekday: number
    weekend: number
  }

  export type CapaianUpdateWithoutTargetIntakeInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianUncheckedUpdateWithoutTargetIntakeInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }

  export type CapaianUncheckedUpdateManyWithoutTargetIntakeInput = {
    capaianId?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    weekend?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}