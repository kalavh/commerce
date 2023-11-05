import { Transaction } from "objection";
import { PaginationType } from "./pagination-filters";

export type DefaultCreateUseCaseType<D> = { data: Omit<D, 'id' | 'createdAt' | 'deletedAt'>, trx?: Transaction }

export type DefaultFilterUseCaseType<D> = { filters: D, trx?: Transaction }

export type DefaultListUseCaseType<F> = DefaultFilterUseCaseType<F> & { pagination: PaginationType }

