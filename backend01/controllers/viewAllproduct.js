const Product = require("../model/productModel")

let viewAllproduct =async(req,res)=>{
   let data = await Product.find()

   res.send(data)
}

module.exports = viewAllproduct

