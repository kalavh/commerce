import { ClassConstructor } from "class-transformer";
import { IocAdapter } from "routing-controllers";
import { DependencyContainer } from "tsyringe";

export class TsyringeAdapter implements IocAdapter {
    constructor(private readonly TsyringeContainer: DependencyContainer) { }

    get<T>(anyClass: ClassConstructor<T>) {
        const container = this.TsyringeContainer.createChildContainer()
        return container.resolve<T>(anyClass)
    }
}