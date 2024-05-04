const SelectProduct = require("../model/selectproductModel")

let selectController =async(req,res)=>{

   const { name , description , categoryId} = req.body;

   let selectedProduct = await SelectProduct.find({ name: name.toLowerCase().trim() , description : description });
   console.log(selectedProduct );

   if(selectedProduct.length > 0){
    res.send({error:"this is already exist"});
    }else{
     let selectpro = new SelectProduct(
         {
          name: name.toLowerCase(),
          description : description,
          categoryId : categoryId
         }
     )
     selectpro.save();
     res.send({success:"product created"})
    }
}

module.exports = selectController;

