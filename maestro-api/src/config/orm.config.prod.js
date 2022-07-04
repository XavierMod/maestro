"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('orm.config', function () { return ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // Contains all entities from the project
    entities: [],
    // Synchronize automatically updates the DB schema when changing entities.
    // ! Should not be true in prod
    synchronize: false
}); });
