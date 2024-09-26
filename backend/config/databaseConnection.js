import mongoose from "mongoose";

const databaseConnection = async () => {
    try{
     const connectedDb = await mongoose.connect(process.env.MONGODB)
      console.log('database connected...');
    }
    catch(error){
       console.error(error);
    }
}
export default databaseConnection;