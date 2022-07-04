"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrackRequest = void 0;
var song_entity_1 = require("../songs/song.entity");
var songPart_entity_1 = require("../songs/songPart.entity");
var typeorm_1 = require("typeorm");
var track_entity_1 = require("./track.entity");
var TrackRequest = /** @class */ (function () {
    function TrackRequest() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TrackRequest.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return song_entity_1.Song; }, function (song) { return song.trackRequests; }, {
            // This entity won't be able to exist without an Event id
            nullable: false
        }),
        (0, typeorm_1.JoinColumn)({ name: "songId" })
    ], TrackRequest.prototype, "song");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], TrackRequest.prototype, "songId");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return track_entity_1.Track; }, function (track) { return track.trackRequest; }, { eager: true }),
        (0, typeorm_1.JoinColumn)()
    ], TrackRequest.prototype, "track");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return songPart_entity_1.SongPart; }, { eager: true, cascade: true, onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)()
    ], TrackRequest.prototype, "songPart");
    __decorate([
        (0, typeorm_1.Column)()
    ], TrackRequest.prototype, "added");
    __decorate([
        (0, typeorm_1.Column)()
    ], TrackRequest.prototype, "isChosen");
    __decorate([
        (0, typeorm_1.Column)()
    ], TrackRequest.prototype, "hasBeenListened");
    __decorate([
        (0, typeorm_1.Column)()
    ], TrackRequest.prototype, "isDiscarded");
    TrackRequest = __decorate([
        (0, typeorm_1.Entity)("trackRequest")
    ], TrackRequest);
    return TrackRequest;
}());
exports.TrackRequest = TrackRequest;
