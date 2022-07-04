"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Song = void 0;
var like_entity_1 = require("../likes/like.entity");
var trackRequest_entity_1 = require("../tracks/trackRequest.entity");
var user_entity_1 = require("../users/user.entity");
var typeorm_1 = require("typeorm");
var songPart_entity_1 = require("./songPart.entity");
var Song = /** @class */ (function () {
    function Song() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Song.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 100 })
    ], Song.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Song.prototype, "description");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.songs; }, {
            // This entity won't be able to exist without an Event id
            nullable: false,
            eager: true
        })
    ], Song.prototype, "creator");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return like_entity_1.Like; }, function (likes) { return likes.song; }, {
            eager: false
        })
    ], Song.prototype, "likes");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return songPart_entity_1.SongPart; }, function (part) { return part.song; }, {
            eager: true,
            cascade: true
        })
    ], Song.prototype, "songParts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return trackRequest_entity_1.TrackRequest; }, function (req) { return req.song; }, {
            eager: true,
            cascade: true
        })
    ], Song.prototype, "trackRequests");
    Song = __decorate([
        (0, typeorm_1.Entity)('song')
    ], Song);
    return Song;
}());
exports.Song = Song;
