import { products } from "./constant/data.js";
import Product from "./model/product-schema.js"; 

const Defaultdata = async () => {
  try {
    for (const product of products) {
      const existingProduct = await Product.findOne({ id: product.id });
      if (!existingProduct) {
        await Product.create(product);
        console.log(`Product with id ${product.id} inserted`);
      } else {
        console.log(`Product with id ${product.id} already exists, skipping`);
      }
    }
  } catch (error) {
    console.log("Error while inserting default data:", error.message);
  }
};


export default Defaultdata;
