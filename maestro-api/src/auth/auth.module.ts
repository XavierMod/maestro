import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";
import { UsersController } from "src/users/users.controller";

@Module({
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
  providers: [LocalStrategy, AuthService, JwtStrategy],
  controllers: [AuthController, UsersController],
})
export class AuthModule {}
