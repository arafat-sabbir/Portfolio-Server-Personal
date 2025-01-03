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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const admin_model_1 = __importDefault(require("../modules/admin/admin.model"));
/**
 * Middleware to authorize requests.
 * Checks if the request has a valid authorization token.
 * If not, it throws an unauthorized error.
 */
const AuthorizeRequest = (...roles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Get the authorization token from the request headers
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        // If no token is provided, throw an unauthorized error
        if (!token) {
            throw new AppError_1.default(401, 'Unauthorized Access');
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            req.user = decoded;
            const { id, role, iat } = decoded;
            if (roles.length > 0 && !roles.includes(decoded === null || decoded === void 0 ? void 0 : decoded.role)) {
                throw new AppError_1.default(401, 'Unauthorized Access2');
            }
            const admin = yield admin_model_1.default.findById(id);
            if (!admin) {
                throw new Error('Admin not found');
            }
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.default(401, 'Unauthorized Access3');
        }
        next();
    }));
};
exports.default = AuthorizeRequest;
