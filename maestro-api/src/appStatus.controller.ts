import { Controller, Get } from "@nestjs/common";

@Controller("status")
export class AppStatusController {
  @Get()
  async findAll() {
    return {
      status: "OK",
      serverTime: new Date(),
    };
  }
}
