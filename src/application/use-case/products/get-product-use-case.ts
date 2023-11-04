import { injectable } from "tsyringe";

@injectable()
export class GetProductUseCase {
    constructor(
    ) { }

    execute() {
        return { todo: 'listProducts ' }
    }
}