"use strict";
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
var db_1 = require("../db");
var faker_1 = require("@faker-js/faker");
var bcrypt_1 = require("bcrypt");
function loadFakeData(numUsers) {
    if (numUsers === void 0) { numUsers = 10; }
    return __awaiter(this, void 0, void 0, function () {
        var client, saltRounds, i, hashedPassword, res_1, _i, _a, row, i, _b, _c, row1, _d, _e, row2, err_1, res;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.log("executing load fake data. generating ".concat(numUsers, " users."));
                    return [4 /*yield*/, (0, db_1.getClient)()];
                case 1:
                    client = _f.sent();
                    return [4 /*yield*/, client.connect()];
                case 2:
                    _f.sent();
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 24, 26, 28]);
                    return [4 /*yield*/, client.query('begin')];
                case 4:
                    _f.sent();
                    saltRounds = 10;
                    i = 0;
                    _f.label = 5;
                case 5:
                    if (!(i < numUsers)) return [3 /*break*/, 9];
                    return [4 /*yield*/, (0, bcrypt_1.hash)("flux".concat(i), saltRounds)];
                case 6:
                    hashedPassword = _f.sent();
                    return [4 /*yield*/, client.query('insert into public.users (username, password, avatar) values ($1, $2, $3)', [faker_1.faker.internet.userName(), hashedPassword, faker_1.faker.image.avatar()])];
                case 7:
                    _f.sent();
                    _f.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 5];
                case 9: return [4 /*yield*/, client.query('select id from public.users order by created_at desc limit $1', [numUsers])];
                case 10:
                    res_1 = _f.sent();
                    _i = 0, _a = res_1.rows;
                    _f.label = 11;
                case 11:
                    if (!(_i < _a.length)) return [3 /*break*/, 16];
                    row = _a[_i];
                    i = 0;
                    _f.label = 12;
                case 12:
                    if (!(i < Math.ceil(Math.random() * 10))) return [3 /*break*/, 15];
                    return [4 /*yield*/, client.query('insert into public.posts (user_id, content) values ($1, $2)', [
                            row.id,
                            faker_1.faker.lorem.sentence(),
                        ])];
                case 13:
                    _f.sent();
                    _f.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 12];
                case 15:
                    _i++;
                    return [3 /*break*/, 11];
                case 16:
                    _b = 0, _c = res_1.rows;
                    _f.label = 17;
                case 17:
                    if (!(_b < _c.length)) return [3 /*break*/, 22];
                    row1 = _c[_b];
                    _d = 0, _e = res_1.rows;
                    _f.label = 18;
                case 18:
                    if (!(_d < _e.length)) return [3 /*break*/, 21];
                    row2 = _e[_d];
                    if (!(row1.id != row2.id)) return [3 /*break*/, 20];
                    if (!(Math.random() > 0.5)) return [3 /*break*/, 20];
                    return [4 /*yield*/, client.query('insert into follows (user_id, follower_id) values ($1, $2)', [
                            row1.id,
                            row2.id,
                        ])];
                case 19:
                    _f.sent();
                    _f.label = 20;
                case 20:
                    _d++;
                    return [3 /*break*/, 18];
                case 21:
                    _b++;
                    return [3 /*break*/, 17];
                case 22: return [4 /*yield*/, client.query('commit')];
                case 23:
                    _f.sent();
                    return [3 /*break*/, 28];
                case 24:
                    err_1 = _f.sent();
                    return [4 /*yield*/, client.query('rollback')];
                case 25:
                    _f.sent();
                    throw err_1;
                case 26: return [4 /*yield*/, client.end()];
                case 27:
                    _f.sent();
                    return [7 /*endfinally*/];
                case 28: return [4 /*yield*/, client.query('select 1')];
                case 29:
                    res = _f.sent();
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, loadFakeData(10)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
