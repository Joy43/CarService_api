import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
// -----------create -------------
const createCoustomer=async(req:Request,res:Response)=>{
    const result=await customerService.createCustomer(req.body);
    console.log(req.body);
    sendResponse(res,{
        success:true,
        statusCode:status.CREATED,
        message:"account create",
        data:result

    })
};

const getSingleCustomerId=async(req:Request,res:Response)=>{
    const { customerId}=req.params;
    const customerresult=await customerService.getSingleCustomerId(customerId);
    if(!customerresult){
return sendResponse(res,{
    success: false,
    statusCode: status.NOT_FOUND,
    message: 'Book not found',
    data: null,
});

    }

    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: 'user retrieved successfully',
        data: customerresult
      });
};

export const customerController ={
    createCoustomer,
    getSingleCustomerId
}