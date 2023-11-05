import { Transaction } from "objection";
import { PaginationType } from "./pagination-filters";

export type DefaultListUseCaseType<F> = { filters: F, pagination: PaginationType, trx?: Transaction } 
