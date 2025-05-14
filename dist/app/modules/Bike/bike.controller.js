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
exports.BikeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const bike_service_1 = require("./bike.service");
// --------create bike------------
const CreateBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const createbike = yield bike_service_1.BikeService.CreateBikes(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "bike create sucessfully",
        data: createbike
    });
});
// ------------------getbike id-------------
const getSinglebikeId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singlebikeresult = yield bike_service_1.BikeService.getSinglebikeId(id);
    if (!singlebikeresult) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.CREATED,
            message: " not sucessfully",
            data: null
        });
    }
    ;
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Bikes fetched successfully",
        data: singlebikeresult
    });
});
// --------get all bike
const getAllBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const allbikes = yield bike_service_1.BikeService.getAllBikes();
    if (!allbikes) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'bike not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Bikes fetched successfully',
        data: allbikes
    });
});
// ------------update customer--------
const UpdateBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const updatebike = yield bike_service_1.BikeService.UpdateBike(customerId, req.body);
    if (!updatebike) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'BIKE not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'update BIKE  successfully',
        data: updatebike
    });
});
// ----------delete customer----------
const DeleteBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.BikeService.Deletebike(bikeId);
    if (!result) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'Bike not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'bike delete successfully',
        data: result
    });
});
exports.BikeController = {
    CreateBike,
    getSinglebikeId,
    DeleteBike,
    UpdateBikes,
    getAllBike
};
