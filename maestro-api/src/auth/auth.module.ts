import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule {

}