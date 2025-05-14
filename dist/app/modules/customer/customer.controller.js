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
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
// -----------create -------------
const createCoustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.createCustomer(req.body);
    console.log(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Customer created successfully",
        data: result
    });
});
// --------getsingle with id----------
const getSingleCustomerId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const customerresult = yield customer_service_1.customerService.getSingleCustomerId(customerId);
    if (!customerresult) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'car not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer fetched successfully',
        data: customerresult
    });
});
// -------------get all user------------
const getAllCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Allcutomer = yield customer_service_1.customerService.getAllCustomers(req.body);
    if (!Allcutomer) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'Book not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customers fetched successfully',
        data: Allcutomer
    });
});
// ------------update customer--------
const UpdateCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const updatecustomer = yield customer_service_1.customerService.UpdateCustomers(customerId, req.body);
    if (!updatecustomer) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'customer not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer update successfully',
        data: updatecustomer
    });
});
// ----------delete customer----------
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.customerService.deleteCustomer(customerId);
    if (!result) {
        return (0, sendResponse_1.sendResponse)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'customer not found',
            data: null,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer deleted successfully',
        data: result
    });
});
exports.customerController = {
    createCoustomer,
    getSingleCustomerId,
    getAllCustomer,
    UpdateCustomers,
    deleteCustomer
};
