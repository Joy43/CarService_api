import { Router } from "express";
import { ServiceController } from "./services.controller";

const router=Router();
router.post('/',ServiceController.CreateService);
router.get('/status',ServiceController.OverdueServices);
router.get('/',ServiceController.GetallService);
router.get('/:serviceId',ServiceController.GetSingleService);
router.put('/:serviceId/complete',ServiceController.UpdateComplete);


export const ServiceRoute=router;