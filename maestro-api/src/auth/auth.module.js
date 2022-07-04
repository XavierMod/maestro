"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("../users/user.entity");
var auth_controller_1 = require("./auth.controller");
var local_strategy_1 = require("./local.strategy");
var jwt_strategy_1 = require("./jwt.strategy");
var auth_service_1 = require("./auth.service");
var users_controller_1 = require("../users/users.controller");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                jwt_1.JwtModule.registerAsync({
                    useFactory: function () { return ({
                        secret: process.env.AUTH_SECRET,
                        signOptions: {
                            expiresIn: "60m"
                        }
                    }); }
                }),
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            ],
            providers: [local_strategy_1.LocalStrategy, auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            controllers: [auth_controller_1.AuthController, users_controller_1.UsersController]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
