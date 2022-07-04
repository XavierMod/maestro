"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Like = void 0;
var song_entity_1 = require("../songs/song.entity");
var user_entity_1 = require("../users/user.entity");
var typeorm_1 = require("typeorm");
var Like = /** @class */ (function () {
    function Like() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Like.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Like.prototype, "date");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return song_entity_1.Song; }, function (song) { return song.likes; }),
        (0, typeorm_1.JoinColumn)({ name: "songId" })
    ], Like.prototype, "song");
    __decorate([
        (0, typeorm_1.Column)()
    ], Like.prototype, "songId");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.likes; }),
        (0, typeorm_1.JoinColumn)({ name: "userId" })
    ], Like.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)()
    ], Like.prototype, "userId");
    Like = __decorate([
        (0, typeorm_1.Entity)("like")
    ], Like);
    return Like;
}());
exports.Like = Like;
