import { Router } from "express";
import { customerController } from "./customer.controller";

const router=Router();
router.post('/',customerController.createCoustomer);

router.get('/:customerId',customerController.getSingleCustomerId);

export const customerRoute=router;