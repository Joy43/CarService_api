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
exports.customerService = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
// --------------create Customer--------------
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        name: payload.name,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
    };
    try {
        const result = yield prismaClient_1.default.customer.create({
            data: customerData,
        });
        return result;
    }
    catch (err) {
        console.error("Error creating customer:", err);
        throw err;
    }
});
// --------------------getSingle id----------------
const getSingleCustomerId = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.customer.findUnique({
            where: { customerId: customerId }
        });
        return result;
    }
    catch (err) {
        throw new err;
    }
});
// ------------------getAll ----------------------
const getAllCustomers = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.customer.findMany({
            where: {
                customerId: customerId
            }
        });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// ----------update --------------
const UpdateCustomers = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatecustomer = yield prismaClient_1.default.customer.update({
            where: { customerId: customerId },
            data: payload
        });
        return updatecustomer;
    }
    catch (error) {
        throw console.error;
    }
});
// --------delete customer-----------
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.customer.delete({
        where: { customerId: customerId }
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getSingleCustomerId,
    getAllCustomers,
    UpdateCustomers,
    deleteCustomer
};
