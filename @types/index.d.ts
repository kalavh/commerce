import '@total-typescript/ts-reset'


declare global {
  type RequiredFieldsOnly<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
  }
}



