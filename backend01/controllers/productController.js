const Product = require("../model/productModel")


let productController = async (req , res) => {
  
   const { name , description } = req.body;
   
   console.log(name.toLowerCase() , description );

   let existingProduct = await Product.find({ name: name.toLowerCase().trim() , description : description });
   console.log(existingProduct );

   if(existingProduct .length > 0){
   res.send({error:"category already exists"});
   }else{
    let pro = new Product(
        {
         name: name.toLowerCase(),
         description : description,
        }
    )
    pro.save();
    res.send({success:"product created"})
   }

 
};

module.exports = productController ;