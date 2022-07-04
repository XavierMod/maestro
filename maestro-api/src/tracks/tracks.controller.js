"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TracksController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var typeorm_1 = require("@nestjs/typeorm");
var auth_guard_jwt_1 = require("../auth/auth.guard.jwt");
var current_user_decorator_1 = require("../auth/current-user.decorator");
var song_entity_1 = require("../songs/song.entity");
var songPart_entity_1 = require("../songs/songPart.entity");
var track_entity_1 = require("./track.entity");
var trackRequest_entity_1 = require("./trackRequest.entity");
var TracksController = /** @class */ (function () {
    function TracksController(tracksRepository, trackRequestsRepository, songsRepository, songPartRepository, tracksService) {
        this.tracksRepository = tracksRepository;
        this.trackRequestsRepository = trackRequestsRepository;
        this.songsRepository = songsRepository;
        this.songPartRepository = songPartRepository;
        this.tracksService = tracksService;
    }
    TracksController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tracks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tracksRepository.find()];
                    case 1:
                        tracks = _a.sent();
                        return [2 /*return*/, tracks];
                }
            });
        });
    };
    TracksController.prototype.findAllTrackRequests = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tracks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.trackRequestsRepository.find()];
                    case 1:
                        tracks = _a.sent();
                        return [2 /*return*/, tracks];
                }
            });
        });
    };
    TracksController.prototype.create = function (files, input, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tracksService.createTrack(input, user, files)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TracksController.prototype.createTrackRequest = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findTrack, findSong, songPart, createTrackRequest, trackRequest, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tracksRepository.findOne({
                            where: { id: input.trackId }
                        })];
                    case 1:
                        findTrack = _a.sent();
                        return [4 /*yield*/, this.songsRepository.findOne({
                                where: { id: input.songId }
                            })];
                    case 2:
                        findSong = _a.sent();
                        return [4 /*yield*/, this.songPartRepository.findOne({
                                where: { id: input.songPartId }
                            })];
                    case 3:
                        songPart = _a.sent();
                        if (!findSong || !findTrack || !songPart) {
                            throw new common_1.BadRequestException(["Can't find track, song or song part"]);
                        }
                        if (!findSong.songParts.find(function (el) { return el.id === input.songPartId; })) {
                            throw new common_1.BadRequestException(["Song part doesn't exist in song"]);
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, this.trackRequestsRepository.save({
                                song: findSong,
                                track: findTrack,
                                added: new Date(),
                                isChosen: false,
                                hasBeenListened: false,
                                isDiscarded: false,
                                songPart: songPart
                            })];
                    case 5:
                        createTrackRequest = _a.sent();
                        return [4 /*yield*/, this.trackRequestsRepository.findOne({
                                where: { id: createTrackRequest.id }
                            })];
                    case 6:
                        trackRequest = _a.sent();
                        findSong.trackRequests.push(trackRequest);
                        findTrack.trackRequest = trackRequest;
                        return [2 /*return*/, findSong];
                    case 7:
                        e_1 = _a.sent();
                        throw new common_1.BadRequestException(["Request already exists"]);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Get)("")
    ], TracksController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)("requests")
    ], TracksController.prototype, "findAllTrackRequests");
    __decorate([
        (0, common_1.Post)("upload"),
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("files")),
        (0, common_1.UseGuards)(auth_guard_jwt_1.AuthGuardJwt),
        __param(0, (0, common_1.UploadedFiles)()),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, current_user_decorator_1.CurrentUser)())
    ], TracksController.prototype, "create");
    __decorate([
        (0, common_1.Patch)("link"),
        (0, common_1.UseGuards)(auth_guard_jwt_1.AuthGuardJwt),
        __param(0, (0, common_1.Body)())
    ], TracksController.prototype, "createTrackRequest");
    TracksController = __decorate([
        (0, common_1.Controller)("tracks"),
        __param(0, (0, typeorm_1.InjectRepository)(track_entity_1.Track)),
        __param(1, (0, typeorm_1.InjectRepository)(trackRequest_entity_1.TrackRequest)),
        __param(2, (0, typeorm_1.InjectRepository)(song_entity_1.Song)),
        __param(3, (0, typeorm_1.InjectRepository)(songPart_entity_1.SongPart))
    ], TracksController);
    return TracksController;
}());
exports.TracksController = TracksController;
