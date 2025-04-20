import express from 'express';
import { customerRoute } from '../modules/customer/customer.routes';
import { bikeRoute } from '../modules/Bike/bike.routes';
import { ServiceRoute } from '../modules/services/services.routes';


const router=express.Router();
const moduleRoutes=[
    {
        path:'/customers',
        route:customerRoute
    },
    {
        path:'/bikes',
        route:bikeRoute
    },
    {
        path:"/services",
        route:ServiceRoute
    }
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))
export default router;