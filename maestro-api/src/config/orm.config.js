"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
var like_entity_1 = require("../likes/like.entity");
var song_entity_1 = require("../songs/song.entity");
var songPart_entity_1 = require("../songs/songPart.entity");
var track_entity_1 = require("../tracks/track.entity");
var trackRequest_entity_1 = require("../tracks/trackRequest.entity");
var user_entity_1 = require("../users/user.entity");
exports["default"] = (0, config_1.registerAs)('orm.config', function () { return ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // Contains all entities from the project
    entities: [song_entity_1.Song, songPart_entity_1.SongPart, user_entity_1.User, track_entity_1.Track, like_entity_1.Like, trackRequest_entity_1.TrackRequest],
    // Synchronize automatically updates the DB schema when changing entities.
    // ! Should not be true in prod
    synchronize: true
}); });
