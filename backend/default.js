import { products } from "./constant/data.js";
import Product from "./model/product-schema.js"; 

const Defaultdata = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
   
    console.log("Data imported Successful");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

export default Defaultdata;
