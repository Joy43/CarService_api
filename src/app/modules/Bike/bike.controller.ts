import status from "http-status";
import { sendResponse } from '../../utils/sendResponse';
import { BikeService } from "./bike.service"
import { Request, Response } from "express";
// --------create bike------------
const CreateBike=async(req:Request,res:Response)=>{
    console.log(req.body);
    const createbike=await BikeService.CreateBikes(req.body);
        sendResponse(res,{
        success:true,
        statusCode:status.CREATED,
        message:"bike create sucessfully",
        data:createbike
    })
}
// ------------------getbike id-------------

const getSinglebikeId=async(req:Request,res:Response)=>{
    const {bikeId}=req.params;
    const result=await BikeService.getSinglebikeId(bikeId);
    if(!result){
         sendResponse(res,{
            success:false,
            statusCode:status.CREATED,
            message:"bike create sucessfully",
            data:null
        });
        sendResponse(res,{
            success:true,
            statusCode:status.CREATED,
            message:"bike create sucessfully",
            data:result
        })

    }
}

export const BikeController ={
    CreateBike,
    getSinglebikeId,
}