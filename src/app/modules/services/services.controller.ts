import { Request, Response } from "express";
import { ServicFunctions } from "./services.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
// -------create service-------------
const CreateService=async(req:Request,res:Response)=>{
    const result=await ServicFunctions.CreateService(req.body);
    sendResponse(res,{
    success: true,
    statusCode: status.CREATED,
    message:"Service record created successfully",
    data: result
    })
};

// -----------get all service-----------
const GetallService=async(req:Request,res:Response)=>{
    const allservice=await ServicFunctions.GetallService();
    sendResponse(res,{
        success:true,
        statusCode:status.OK,
        message:"Service records fetched successfully",
        data:allservice
        
    });
};
// ---------get single-------
const GetSingleService=async(req:Request,res:Response)=>{
    const {serviceId}=req.params;
    const singleservice=await ServicFunctions.GetsingleService(serviceId);
    sendResponse(res,{
        success:true,
        statusCode:status.OK,
        message:"Service record fetched successfully",
        data:singleservice
        
    })
};
// --------UpdateComplete----------
const UpdateComplete=async(req:Request,res:Response)=>{
    const {serviceId}=req.params;
    const updatecomplete=await ServicFunctions.UpdateComplete(serviceId,req.body);
   if(!updatecomplete){
    sendResponse(res,{
        success:false,
        statusCode:status.NOT_FOUND,
        message:"not found error",
        data:null
        
    });
   }
   sendResponse(res,{
    success:true,
    statusCode:status.OK,
    message:"Service marked as completed",
    data:updatecomplete
    
});


};

// ------------OverdueServices=--------------
const OverdueServices=async(req:Request,res:Response)=>{

    const dueservice=await ServicFunctions.OverdueServices();
    if(!dueservice){
        sendResponse(res,{
            success:false,
            statusCode:status.NOT_FOUND,
            message:"data not found",
            data:null
            
        });
       };
 
        sendResponse(res,{
            success:true,
            statusCode:status.OK,
            message:"Overdue or pending services fetched successfully",
            data:dueservice
            
        });
       
      
};

export const ServiceController={
    CreateService,
    GetallService,
    GetSingleService,
    UpdateComplete,
    OverdueServices

};