"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var class_validator_1 = require("class-validator");
var like_entity_1 = require("../likes/like.entity");
var song_entity_1 = require("../songs/song.entity");
var track_entity_1 = require("../tracks/track.entity");
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], User.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        (0, class_validator_1.IsEmail)()
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ "default": "" })
    ], User.prototype, "bio");
    __decorate([
        (0, typeorm_1.Column)({ "default": "" })
    ], User.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return song_entity_1.Song; }, function (song) { return song.creator; }, {
            eager: false,
            cascade: true
        })
    ], User.prototype, "songs");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return track_entity_1.Track; }, function (track) { return track.creator; }, {
            // eager: false,
            cascade: true
        })
    ], User.prototype, "tracks");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return like_entity_1.Like; }, function (like) { return like.user; }, { eager: true })
    ], User.prototype, "likes");
    User = __decorate([
        (0, typeorm_1.Entity)("user")
    ], User);
    return User;
}());
exports.User = User;
