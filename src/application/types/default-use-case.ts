import { Transaction } from "objection";
import { PaginationType } from "./pagination-filters";
import { DefaultModelOmit } from "./default-model-omit";

export type DefaultCreateUseCaseType<D> = { data: DefaultModelOmit<D>, trx?: Transaction }

export type DefaultFilterUseCaseType<D> = { filters: D, trx?: Transaction }

export type DefaultListUseCaseType<F> = DefaultFilterUseCaseType<F> & { pagination: PaginationType }

