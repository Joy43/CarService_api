
import { ServiceRecord } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import { subDays } from "date-fns";


// -----------create service------------
const CreateService=async(payload:ServiceRecord)=>{

    const createservice=await prisma.serviceRecord.create({
        data:payload
    });
    return createservice;
    
}
 /* 
  get allservice  
 */                                                                                           
const GetallService=async()=>{
    const allservice=await prisma.serviceRecord.findMany();
    return allservice;

}
  
// ------getsingle service-------

const GetsingleService=async(serviceId:string)=>{
    const singleservice=await prisma.serviceRecord.findUnique({
        where:{serviceId}
    });
    return singleservice;

};
// --------put service update-------

const UpdateComplete=async(serviceId:string,payload:Partial<ServiceRecord>)=>{
    const updateservice=await prisma.serviceRecord.update({
        where:{serviceId},
        data:{...payload,status:"done"}
    });
    return updateservice;


};

// --------------Overdue Services------------
const OverdueServices=async()=>{
    const sevenDays=subDays(new Date(),7)
    const dueservice=await prisma.serviceRecord.findMany({
  where:{
    status:{
        in:['pending', 'in_progress']
    },
    serviceDate:{
        lt:sevenDays
    },
  },

    });
    return dueservice;
};

export const ServicFunctions={
    CreateService,
    GetallService,
    GetsingleService,
    UpdateComplete,
    OverdueServices
}


