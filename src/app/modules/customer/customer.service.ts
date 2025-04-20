
import prisma from "../../utils/prismaClient";
import { Customer } from "@prisma/client";

// --------------create Customer--------------

const createCustomer = async (payload:any) => {
  const customerData = {
    name: payload.name,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
   
  };

  try {
    const result = await prisma.customer.create({
      data: customerData,
    });
    return result;
  } catch (err) {
    console.error("Error creating customer:", err);
    throw err; 
  }
};

// --------------------getSingle id----------------
const getSingleCustomerId=async(customerId:string)=>{
    try{
 const result =await prisma.customer.findUnique({
    where: { customerId :customerId}

 });
 return result;
    }catch(err:any){
        throw new err

    }
};

// ------------------getAll ----------------------
const getAllCustomers=async(customerId:string)=>{
  try{
const result=await prisma.customer.findMany({
  where:{
    customerId:customerId
  }
})
return result;

  }catch (err){
    console.log(err)

  };
  
  
};


// ----------update --------------
const UpdateCustomers=async(customerId:string,payload:Partial<Customer>)=>{
 try{
  const updatecustomer=await prisma.customer.update({
    where:{customerId:customerId},
      data:payload
  });
  return updatecustomer;
 
 }catch (error:any){
throw  console.error
 }
};
// --------delete customer-----------
const deleteCustomer=async(customerId:string)=>{
  const result=await prisma.customer.delete({
    where:{customerId:customerId}
  });
  return result;

}

export const customerService = {
  createCustomer,
  getSingleCustomerId,
  getAllCustomers,
  UpdateCustomers,
  deleteCustomer
};
