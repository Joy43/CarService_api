import { Bike } from "@prisma/client";
import prisma from "../../utils/prismaClient"

const CreateBikes=async(payload:Bike)=>{


    const createbike=await prisma.bike.create({
        data:payload
        
    })
    return createbike;
}
// --------get bike by id-------
const getSinglebikeId=async(bikeId:string)=>{

  try{
    const result=await prisma.bike.findUnique({
        where:{bikeId:bikeId}
    })
return result;

  }catch (error:any)
  {
console.error(error);
  }
}

export const BikeService={
    CreateBikes,
    getSinglebikeId,
}