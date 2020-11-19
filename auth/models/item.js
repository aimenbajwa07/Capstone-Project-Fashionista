var Brand = require('../models/brand.js');
//create scehma for the collection brand
var mongoose = require("mongoose");
mongoose.pluralize(null);  //avoid s post fix for collection

var ItemSchema = mongoose.Schema;

var ItemSchemaRef = new ItemSchema({
    code:String,
    name:String,
    details:String,
    image: String,
    price: Number,
    brand: {type: ItemSchema.Types.ObjectId, ref: 'Brand'}
  
});

var ItemModel = mongoose.model("Item",ItemSchemaRef);
module.exports = ItemModel;