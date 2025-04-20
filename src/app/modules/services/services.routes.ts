import { Router } from "express";
import { ServiceController } from "./services.controller";

const router=Router();
router.get('/status',ServiceController.OverdueServices);
router.post('/',ServiceController.CreateService);
router.get('/',ServiceController.GetallService);
router.get('/:serviceId',ServiceController.GetSingleService);
router.put('/:serviceId/complete',ServiceController.UpdateComplete);


export const ServiceRoute=router;