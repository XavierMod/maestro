"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@nestjs/config");
var orm_config_1 = require("./config/orm.config");
var orm_config_prod_1 = require("./config/orm.config.prod");
var songs_module_1 = require("./songs/songs.module");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var tracks_module_1 = require("./tracks/tracks.module");
// Modules are boxes with specific tools. They divide app in several pieces.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                // Allows using env variables
                config_1.ConfigModule.forRoot({
                    // env vars can now be accessed anywhere
                    isGlobal: true,
                    // envFilePath: '',
                    // ignoreEnvFile: true,
                    load: [orm_config_1["default"]]
                }),
                // Using the TypeORM module
                /**
                 * Object–relational mapping in computer science is a programming technique for converting data between type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.
                 * For integrating with SQL and NoSQL databases, Nest provides the @nestjs/typeorm package. Nest uses TypeORM because it's the most mature Object Relational Mapper (ORM) available for TypeScript. Since it's written in TypeScript, it integrates well with the Nest framework.
                 */
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: process.env.NODE_ENV !== 'production' ? orm_config_1["default"] : orm_config_prod_1["default"]
                }),
                songs_module_1.SongsModule,
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                tracks_module_1.TracksModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
