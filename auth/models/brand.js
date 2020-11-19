//var Item = require('../model/item.model.js');
//create scehma for the collection brand
var mongoose = require("mongoose");
mongoose.pluralize(null);  //avoid s post fix for collection

var BrandSchema = mongoose.Schema;

var BrandSchemaRef = new BrandSchema({
    bid:Number,
    bname:String,
  
});

var BrandModel = mongoose.model("Brand",BrandSchemaRef);
module.exports = BrandModel;