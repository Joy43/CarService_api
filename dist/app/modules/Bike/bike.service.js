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
exports.BikeService = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
// ------------create bike
const CreateBikes = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createbike = yield prismaClient_1.default.bike.create({
        data: payload
    });
    return createbike;
});
// --------get bike by id-------
const getSinglebikeId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singlebikeresult = yield prismaClient_1.default.bike.findUnique({
            where: { bikeId: id }
        });
        return singlebikeresult;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
// ------------------getAll ----------------------
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.bike.findMany();
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// ----------update --------------
const UpdateBike = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatebike = yield prismaClient_1.default.customer.update({
            where: { customerId: customerId },
            data: payload
        });
        return updatebike;
    }
    catch (error) {
        throw console.error;
    }
});
// --------delete bike-----------
const Deletebike = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.customer.delete({
        where: { customerId: bikeId }
    });
    return result;
});
exports.BikeService = {
    CreateBikes,
    getSinglebikeId,
    getAllBikes,
    UpdateBike,
    Deletebike
};
