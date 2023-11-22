import mongoose from "mongoose"; 

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@FLIPCART.cdjpagn.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  } 
};

export default Connection;
