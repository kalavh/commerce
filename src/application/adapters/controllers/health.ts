import { Get, JsonController } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";

@JsonController('/health')
export class Health {
  constructor() { }

  @OpenAPI({
    summary: 'Server Health',
    description: 'This Is to check if server is running'
  })
  @Get('/')
  teste() {
    return 'Server is running'
  }

}