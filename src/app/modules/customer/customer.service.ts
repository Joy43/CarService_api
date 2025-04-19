import prisma from "../../utils/prismaClient";



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

const getSingleCustomerId=async(customerId:string)=>{
    try{
 const result =await prisma.customer.findUnique({
    where: { customerId :customerId}

 });
 return result;
    }catch(err:any){
        throw new err

    }
}
export const customerService = {
  createCustomer,
  getSingleCustomerId,
};
