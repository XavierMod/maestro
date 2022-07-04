"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TracksModule = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var typeorm_1 = require("@nestjs/typeorm");
var song_entity_1 = require("../songs/song.entity");
var songPart_entity_1 = require("../songs/songPart.entity");
var track_entity_1 = require("./track.entity");
var trackRequest_entity_1 = require("./trackRequest.entity");
var tracks_controller_1 = require("./tracks.controller");
var tracks_service_1 = require("./tracks.service");
var TracksModule = /** @class */ (function () {
    function TracksModule() {
    }
    TracksModule = __decorate([
        (0, common_1.Module)({
            imports: [
                platform_express_1.MulterModule.registerAsync({
                    useFactory: function () { return ({
                        dest: "./uploads"
                    }); }
                }),
                typeorm_1.TypeOrmModule.forFeature([track_entity_1.Track, song_entity_1.Song, songPart_entity_1.SongPart, trackRequest_entity_1.TrackRequest]),
            ],
            controllers: [tracks_controller_1.TracksController],
            providers: [tracks_service_1.TracksService]
        })
    ], TracksModule);
    return TracksModule;
}());
exports.TracksModule = TracksModule;
