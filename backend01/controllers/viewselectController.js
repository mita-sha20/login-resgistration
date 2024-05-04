// const SubCategory = require("../model/subcategoryModel")
// const Category = require("../model/categoryModel")

// let viewsubcatController = async(req,res)=>{
//    let data = await SubCategory.find().populate("categoryId");

//    res.send(data);
// }

// module.exports = viewsubcatController;

const SelectProduct = require("../model/selectproductModel")
const Product = require("../model/productModel")

let viewselectController = async(req,res)=>{
    let data = await SelectProduct.find().populate('categoryId');

    res.send(data);
}

module.exports = viewselectController;