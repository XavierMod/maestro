"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Track = void 0;
var common_1 = require("@nestjs/common");
var user_entity_1 = require("../users/user.entity");
var typeorm_1 = require("typeorm");
var trackRequest_entity_1 = require("./trackRequest.entity");
var Track = /** @class */ (function () {
    function Track() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Track.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { length: 100 })
    ], Track.prototype, "name");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.tracks; }, {
            nullable: false,
            eager: true
        })
    ], Track.prototype, "creator");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return trackRequest_entity_1.TrackRequest; }),
        (0, typeorm_1.JoinColumn)()
    ], Track.prototype, "trackRequest");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, common_1.Optional)()
    ], Track.prototype, "uploadId");
    __decorate([
        (0, typeorm_1.Column)()
    ], Track.prototype, "duration");
    Track = __decorate([
        (0, typeorm_1.Entity)("track")
    ], Track);
    return Track;
}());
exports.Track = Track;
