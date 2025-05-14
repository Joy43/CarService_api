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
exports.ServicFunctions = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
const date_fns_1 = require("date-fns");
// -----------create service------------
const CreateService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createservice = yield prismaClient_1.default.serviceRecord.create({
        data: payload
    });
    return createservice;
});
/*
 get allservice
*/
const GetallService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allservice = yield prismaClient_1.default.serviceRecord.findMany();
    return allservice;
});
// ------getsingle service-------
const GetsingleService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const singleservice = yield prismaClient_1.default.serviceRecord.findUnique({
        where: { serviceId }
    });
    return singleservice;
});
// --------put service update-------
const UpdateComplete = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateservice = yield prismaClient_1.default.serviceRecord.update({
        where: { serviceId },
        data: Object.assign(Object.assign({}, payload), { status: "done" })
    });
    return updateservice;
});
// --------------Overdue Services------------
const OverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDays = (0, date_fns_1.subDays)(new Date(), 7);
    const dueservice = yield prismaClient_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress']
            },
            serviceDate: {
                lt: sevenDays
            },
        },
    });
    return dueservice;
});
exports.ServicFunctions = {
    CreateService,
    GetallService,
    GetsingleService,
    UpdateComplete,
    OverdueServices
};
