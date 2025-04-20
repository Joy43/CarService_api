import { Router } from "express";
import { BikeController } from "./bike.controller";

const router=Router();
router.post('/',BikeController.CreateBike);
router.get('/:id',BikeController.getSinglebikeId);
router.get('/',BikeController.getAllBike);

export const bikeRoute=router;