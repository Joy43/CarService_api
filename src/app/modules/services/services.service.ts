import { Service } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import { subDays } from "date-fns";


// -----------create service------------
const CreateService=async(payload:Service)=>{

    const createservice=await prisma.service.create({
        data:payload
    });
    return createservice;
    
}
 /* 
  get allservice  
 */                                                                                           
const GetallService=async()=>{
    const allservice=await prisma.service.findMany();
    return allservice;

}
  
// ------getsingle service-------

const GetsingleService=async(serviceId:string)=>{
    const singleservice=await prisma.service.findUnique({
        where:{serviceId}
    });
    return singleservice;

};
// --------put service update-------

const UpdateComplete=async(serviceId:string,payload:Partial<Service>)=>{
    const updateservice=await prisma.service.update({
        where:{serviceId},
        data:payload
    });
    return updateservice;


};

// --------------Overdue Services------------
const OverdueServices=async()=>{
    const sevenDays=subDays(new Date(),7)
    const dueservice=await prisma.service.findMany({
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


