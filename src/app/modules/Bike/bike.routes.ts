import { Router } from "express";
import { BikeController } from "./bike.controller";

const router=Router();
router.post('/',BikeController.CreateBike);

export const bikeRoute=router;