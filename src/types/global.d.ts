declare type Nullable<T> = T | null

declare type Recordable<T = any> = Record<string, T>

type ObjToKeyValUnion<T> = {
  [K in keyof T]: { key: K; value: T[K] }
}[keyof T]
