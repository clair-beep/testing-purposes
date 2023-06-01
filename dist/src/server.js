"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var db_1 = require("./config/db");
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
function createServer() {
    dotenv_1.default.config();
    var app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    (0, db_1.connectDB)();
    app.get('/', function (_req, res) {
        res.send('Rest API is working');
    });
    app.use('/', index_1.default);
    return app; // Return the app instance
}
exports.default = createServer;
