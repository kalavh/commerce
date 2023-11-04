export class GetHealthUseCase {
  constructor(
  ) { }

  execute() {
    return { status: 'Server is running' }
  }
}