import { Get, JsonController } from "routing-controllers";
import { injectable } from "tsyringe";

@JsonController()
@injectable() 
export class Teste {
  constructor() {}
  
  @Get('/')
  getTeste() {
    return 'oi'
  }

}