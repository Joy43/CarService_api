import { Router } from "express";
import { customerController } from "./customer.controller";

const router=Router();
router.post('/',customerController.createCoustomer);
router.get('/:customerId',customerController.getSingleCustomerId);
router.get('/',customerController.getAllCustomer);
router.put('/:customerId',customerController.UpdateCustomers);
router.delete('/:customerId',customerController.deleteCustomer);

export const customerRoute=router;