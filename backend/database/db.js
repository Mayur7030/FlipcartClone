import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@flipcartclone.lgtph.mongodb.net/?retryWrites=true&w=majority&appName=FlipcartClone`
  try {
    await mongoose.connect(URL, {
         //useUnifiedTopology: true,
         useNewUrlParser: true
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
