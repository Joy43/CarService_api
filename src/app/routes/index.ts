import express from 'express';
import { customerRoute } from '../modules/customer/customer.routes';
import { bikeRoute } from '../modules/Bike/bike.routes';


const router=express.Router();
const moduleRoutes=[
    {
        path:'/customer',
        route:customerRoute
    },
    {
        path:'/bikes',
        route:bikeRoute
    }
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))
export default router;