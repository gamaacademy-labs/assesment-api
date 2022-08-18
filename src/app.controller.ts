import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/status')
  public async status() {
    return `Ok, ${new Date()}`
  }

}
