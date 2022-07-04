"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var typeorm_1 = require("@nestjs/typeorm");
var auth_controller_1 = require("../auth/auth.controller");
var auth_service_1 = require("../auth/auth.service");
var jwt_strategy_1 = require("../auth/jwt.strategy");
var local_strategy_1 = require("../auth/local.strategy");
var user_entity_1 = require("./user.entity");
var users_controller_1 = require("./users.controller");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            // Makes a repository for the Event entity
            // * Needs to be do it every time
            // The TypeOrmModule will only be available on the EventsController
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
            providers: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService, local_strategy_1.LocalStrategy],
            controllers: [auth_controller_1.AuthController, users_controller_1.UsersController]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
