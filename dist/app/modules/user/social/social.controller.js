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
exports.socialControllers = void 0;
const social_service_1 = require("./social.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
// Controller function to handle the creation of a single Social.
const createSocial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new social and get the result
    const result = yield social_service_1.socialServices.createSocial(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Social created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single social by ID.
const getSingleSocial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the social by ID and get the result
    const result = yield social_service_1.socialServices.getSocialById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Social Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple social.
const getAllSocial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple social based on query parameters and get the result
    const result = yield social_service_1.socialServices.getAllSocial(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Socials Retrieved Successfully',
        data: result,
    });
}));
const editSocial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to update the social by ID and get the result
    const result = yield social_service_1.socialServices.editSocial(req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: `${req.body.name} Url Updated Successfully`,
        data: result,
    });
}));
const deleteSocial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the social by ID and get the result
    const result = yield social_service_1.socialServices.deleteSocial(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Social Deleted Successfully',
        data: result,
    });
}));
exports.socialControllers = {
    createSocial,
    getSingleSocial,
    getAllSocial,
    editSocial,
    deleteSocial
};