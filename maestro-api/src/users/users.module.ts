import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "src/auth/auth.controller";
import { AuthModule } from "src/auth/auth.module";
import { AuthService } from "src/auth/auth.service";
import { JwtStrategy } from "src/auth/jwt.strategy";
import { LocalStrategy } from "src/auth/local.strategy";
import { User } from "./user.entity";
import { UsersController } from "./users.controller";

@Module({
  // Makes a repository for the Event entity
  // * Needs to be do it every time
  // The TypeOrmModule will only be available on the EventsController
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AUTH_SECRET,
        signOptions: {
          expiresIn: "60m",
        },
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [JwtStrategy, AuthService, LocalStrategy],
  controllers: [AuthController, UsersController],
})
export class UsersModule {}
