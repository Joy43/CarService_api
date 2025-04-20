import { Bike } from "@prisma/client";
import prisma from "../../utils/prismaClient";


// ------------create bike

const CreateBikes=async(payload:Bike)=>{


    const createbike=await prisma.bike.create({
        data:payload
        
    })
    return createbike;
}
// --------get bike by id-------
const getSinglebikeId = async (id: string) => {
    try {
      const singlebikeresult = await prisma.bike.findUnique({
        where: {bikeId:id}
      });
      return singlebikeresult;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
// ------------------getAll ----------------------
const getAllBikes=async()=>{
    try{
  const result=await prisma.bike.findMany();
  return result;
  
    }catch (err){
      console.log(err)
  
    }
    
    
  };
  
  
  // ----------update --------------
  const UpdateBike=async(customerId:string,payload:Partial<Bike>)=>{
   try{
    const updatebike=await prisma.customer.update({
      where:{customerId:customerId},
        data:payload
    });
    return updatebike;
   
   }catch (error:any){
  throw  console.error
   }
  };
  // --------delete bike-----------
  const Deletebike=async(bikeId:string)=>{
    const result=await prisma.customer.delete({
      where:{customerId:bikeId}
    });
    return result;
  
  }

export const BikeService={
    CreateBikes,
    getSinglebikeId,
    getAllBikes,
    UpdateBike,
    Deletebike

}