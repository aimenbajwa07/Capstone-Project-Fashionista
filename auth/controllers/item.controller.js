var ItemModel = require("../models/item.js");
//var BrandModel = require("../models/brand.model.js");


var GetItemFromDb = (req,res)=>{
    ItemModel.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var GetItemByName = (req,res)=> {
    var itemName = req.params.name;
    ItemModel.find({name:itemName}, (err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var GetItemsByBrand = (req,res)=> {
    var brandId = req.params.brand;
    ItemModel.find({brand:brandId}, (err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var GetItemById = (req,res)=> {
    var itemId = req.params.id;
    ItemModel.find({_id:itemId}, (err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}


var StoreItemInfo = (req,res)=> {      //data must be in json format {pid:106, pname:"Computer. proce:56000"}
    let item = new ItemModel({
        code:req.body.code,
        name:req.body.name,
        details:req.body.details,
        image:req.body.image,
        price:req.body.price,
        brand:req.body.brand,
    });

    item.save((err,result)=> {
        if(err) {
            res.json({"msg":"ID must be unique"})
        };
       // res.send("Record stored successfully in Db ");
       res.json({"msg":"Record stored successfully!"})
    });
}

/*
var UpdateItemInfo = (req,res)=> {
    var updateId = req.body._id;
    var updateCode = req.body.code;
    var updateName = req.body.name;
    var updateDetails = req.body.details;
    var updateImage = req.body.image;
    var updatePrice = req.body.price;
    var updateBrand = req.body.brand;
    
  
    ItemModel.update({_id:updateId}, {$set:{code:updateCode,name:updateName,details:updateDetails,image:updateImage,price:updatePrice,brand:updateBrand}}, (err,result)=> {
        if(err) throw err;
        console.log(result);
       // res.send("Record updated...." + result);
       if(result.nModified>0){
           res.json({"msg":"Record updated successfully"});
       }else{
        res.json({"msg":"Record didn't update successfully"});
       }
    });

}
*/

/**
 * exports.updateById = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, company) => {
        if (err) throw err;
        res.send(company);
    })
}

 */

var UpdateItemInfo = (req, res) => {
    ItemModel.findByIdAndUpdate(req.params.id, req.body, (err, company) => {
        if (err) throw err;
        res.send(company);
    })
}

var DeleteItemInfo = (req,res)=> {
    var deleteId = req.params.id;
    ItemModel.deleteOne({_id:deleteId},(err,result)=> {
        if(err) throw err;
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted successfully!"});
        }else{
            res.json({"msg":"Record not present"});
        }
    })
}


module.exports = {StoreItemInfo,GetItemFromDb,GetItemByName,GetItemsByBrand,GetItemById,UpdateItemInfo,DeleteItemInfo};