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
    const {id}=req.params;
    const singlebikeresult=await BikeService.getSinglebikeId(id);
    if(!singlebikeresult){
         sendResponse(res,{
            success:false,
            statusCode:status.CREATED,
            message:" not sucessfully",
            data:null
        })};
        
        sendResponse(res,{
            success:true,
            statusCode:status.CREATED,
            message:"bike retrives sucessfully",
            data:singlebikeresult
        });

    
};
// --------get all bike
const getAllBike=async(req:Request,res:Response)=>{
    console.log(req.body)
    const allbikes=await BikeService.getAllBikes()
    if(!allbikes){
        return sendResponse(res,{
            success: false,
            statusCode: status.NOT_FOUND,
            message: 'bike not found',
            data: null,
        });
        
            }
        
            sendResponse(res, {
                success: true,
                statusCode: status.OK,
                message: 'bikes retrivals successfully',
                data: allbikes
              });
};
// ------------update customer--------

const UpdateBikes=async(req:Request,res:Response)=>{
    const {customerId}=req.params;
    const updatebike=await BikeService.UpdateBike(customerId,req.body);
    
    if(!updatebike){
        return sendResponse(res,{
            success: false,
            statusCode: status.NOT_FOUND,
            message: 'BIKE not found',
            data: null,
        });
        
            }
        
            sendResponse(res, {
                success: true,
                statusCode: status.OK,
                message: 'update BIKE  successfully',
                data: updatebike
              });

    
};

// ----------delete customer----------
const DeleteBike=async(req:Request,res:Response)=>{
    const{bikeId}=req.params;
    const result=await BikeService.Deletebike(bikeId);
    if(!result){
        return sendResponse(res,{
            success: false,
            statusCode: status.NOT_FOUND,
            message: 'Bike not found',
            data: null,
        });
        
            }
        
            sendResponse(res, {
                success: true,
                statusCode: status.OK,
                message: 'bike delete successfully',
                data: result
              });
} 

export const BikeController ={
    CreateBike,
    getSinglebikeId,
    DeleteBike,
    UpdateBikes,
    getAllBike
}