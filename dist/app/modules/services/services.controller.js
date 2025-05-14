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
exports.ServiceController = void 0;
const services_service_1 = require("./services.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
// -------create service-------------
const CreateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicFunctions.CreateService(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Service record created successfully",
        data: result
    });
});
// -----------get all service-----------
const GetallService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allservice = yield services_service_1.ServicFunctions.GetallService();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service records fetched successfully",
        data: allservice
    });
});
// ---------get single-------
const GetSingleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const singleservice = yield services_service_1.ServicFunctions.GetsingleService(serviceId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service record fetched successfully",
        data: singleservice
    });
});
// --------UpdateComplete----------
const UpdateComplete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const updatecomplete = yield services_service_1.ServicFunctions.UpdateComplete(serviceId, req.body);
    if (!updatecomplete) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "not found error",
            data: null
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service marked as completed",
        data: updatecomplete
    });
});
// ------------OverdueServices=--------------
const OverdueServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dueservice = yield services_service_1.ServicFunctions.OverdueServices();
    if (!dueservice) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "data not found",
            data: null
        });
    }
    ;
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Overdue or pending services fetched successfully",
        data: dueservice
    });
});
exports.ServiceController = {
    CreateService,
    GetallService,
    GetSingleService,
    UpdateComplete,
    OverdueServices
};
