import express from 'express';
import { customerRoute } from '../modules/customer/customer.routes';

const router=express.Router();
const moduleRoutes=[
    {
        path:'/customer',
        route:customerRoute
    }
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))
export default router;