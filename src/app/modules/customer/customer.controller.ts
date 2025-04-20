import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import prisma from '../../utils/prismaClient';
// -----------create -------------
const createCoustomer=async(req:Request,res:Response)=>{
    const result=await customerService.createCustomer(req.body);
    console.log(req.body);
    sendResponse(res,{
        success:true,
        statusCode:status.CREATED,
        message:"Customer created successfully",
        data:result

    })
};
// --------getsingle with id----------
const getSingleCustomerId=async(req:Request,res:Response)=>{
    const { customerId}=req.params;
    const customerresult=await customerService.getSingleCustomerId(customerId);
    if(!customerresult){
return sendResponse(res,{
    success: false,
    statusCode: status.NOT_FOUND,
    message: 'car not found',
    data: null,
});

    }

    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: 'Customer fetched successfully',
        data: customerresult
      });
};

// -------------get all user------------

const getAllCustomer=async(req:Request,res:Response)=>{
    const Allcutomer=await customerService.getAllCustomers(req.body);
    if(!Allcutomer){
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
                message: 'Customers fetched successfully',
                data: Allcutomer
              });
};
// ------------update customer--------

const UpdateCustomers=async(req:Request,res:Response)=>{
    const {customerId}=req.params;
    const updatecustomer=await customerService.UpdateCustomers(customerId,req.body);
   
    if(!updatecustomer){
        return sendResponse(res,{
            success: false,
            statusCode: status.NOT_FOUND,
            message: 'customer not found',
            data: null,
        });
        
            }
        
            sendResponse(res, {
                success: true,
                statusCode: status.OK,
                message: 'Customer update successfully',
                data: updatecustomer
              });

    
};

// ----------delete customer----------
const deleteCustomer=async(req:Request,res:Response)=>{
    const{customerId}=req.params;
    const result=await customerService.deleteCustomer(customerId);
    if(!result){
        return sendResponse(res,{
            success: false,
            statusCode: status.NOT_FOUND,
            message: 'customer not found',
            data: null,
        });
        
            }
        
            sendResponse(res, {
                success: true,
                statusCode: status.OK,
                message: 'Customer deleted successfully',
                data: result
              });
} 

export const customerController ={
    createCoustomer,
    getSingleCustomerId,
    getAllCustomer,
    UpdateCustomers,
    deleteCustomer
}