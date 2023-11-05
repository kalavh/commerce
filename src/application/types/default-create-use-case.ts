import { Transaction } from "objection";

export type DefaultCreateUseCaseType<D> = { data: Omit<D, 'id' | 'createdAt' | 'deletedAt'>, trx?: Transaction } 
