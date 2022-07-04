"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SongPart = void 0;
var song_entity_1 = require("./song.entity");
var typeorm_1 = require("typeorm");
var SongPart = /** @class */ (function () {
    function SongPart() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], SongPart.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SongPart.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], SongPart.prototype, "desc");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return song_entity_1.Song; }, function (song) { return song.songParts; }, {
            nullable: false
        })
    ], SongPart.prototype, "song");
    SongPart = __decorate([
        (0, typeorm_1.Entity)("songPart")
    ], SongPart);
    return SongPart;
}());
exports.SongPart = SongPart;
