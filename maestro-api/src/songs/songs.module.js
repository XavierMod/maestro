"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SongsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var like_entity_1 = require("../likes/like.entity");
var user_entity_1 = require("../users/user.entity");
var song_entity_1 = require("./song.entity");
var songPart_entity_1 = require("./songPart.entity");
var songs_controller_1 = require("./songs.controller");
var songs_service_1 = require("./songs.service");
var SongsModule = /** @class */ (function () {
    function SongsModule() {
    }
    SongsModule = __decorate([
        (0, common_1.Module)({
            // Makes a repository for the Event entity
            // * Needs to be do it every time
            // The TypeOrmModule will only be available on the EventsController
            imports: [typeorm_1.TypeOrmModule.forFeature([song_entity_1.Song, like_entity_1.Like, user_entity_1.User, songPart_entity_1.SongPart])],
            controllers: [songs_controller_1.SongsController],
            providers: [songs_service_1.SongsService]
        })
    ], SongsModule);
    return SongsModule;
}());
exports.SongsModule = SongsModule;
