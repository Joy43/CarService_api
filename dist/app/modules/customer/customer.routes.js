"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const router = (0, express_1.Router)();
router.post('/', customer_controller_1.customerController.createCoustomer);
exports.customerRoute = router;
