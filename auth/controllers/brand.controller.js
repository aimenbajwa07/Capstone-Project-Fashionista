var BrandModel = require("../models/brand.js");

var GetBrandFromDb = (req,res)=>{
    BrandModel.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var GetBrandById = (req,res)=> {
    var bidInfo = req.params.id;
    BrandModel.find({_id:bidInfo}, (err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var StoreBrandInfo = (req,res)=> {      //data must be in json format {pid:106, pname:"Computer. proce:56000"}
    let brand = new BrandModel({
        bid:req.body.bid,
        bname:req.body.bname
    });

    brand.save((err,result)=> {
        if(err) {
            res.json({"msg":"ID must be unique"})
        };
       // res.send("Record stored successfully in Db ");
       res.json({"msg":"Record stored successfully!"})
    });
}

/*
var UpdateBrandInfo = (req,res)=> {
    var updateId = req.body.bid;
    var updateName = req.body.bname;
  
    BrandModel.update({bid:updateId}, {$set:{bname:updateName}}, (err,result)=> {
        if(err) throw err;
        console.log(result);
       // res.send("Record updated...." + result);
       if(result.nModified>0){
           res.json({"msg":"Record updated successfully"});
       }else{
        res.json({"msg":"Record didnt updated successfully"});
       }
    });
}
*/

 var UpdateBrandInfo = (req, res) => {
    BrandModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

var DeleteBrandInfo = (req,res)=> {
    var deleteId = req.params.id;
    BrandModel.deleteOne({_id:deleteId},(err,result)=> {
        if(err) throw err;
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted successfully!"});
        }else{
            res.json({"msg":"Record not present"});
        }
    })
}

module.exports = {GetBrandFromDb,GetBrandById,StoreBrandInfo,UpdateBrandInfo,DeleteBrandInfo};