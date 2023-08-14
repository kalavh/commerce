import { injectable } from 'tsyringe'


@injectable()
export class Teste {
  constructor(
  ) {}

  execute() {
    return 'ok'
  }
}