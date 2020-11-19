/*
var express = require("express");
var router = express.Router();

var ItemController = require("../controller/item.controller.js");

router.get("/items",ItemController.GetItemFromDb);
router.get("/findItem/:name",ItemController.GetItemByName);
router.get("/findItemsByBrand/:brand",ItemController.GetItemsByBrand);
router.get("/findItemById/:id",ItemController.GetItemById);
router.post("/storeItem",ItemController.StoreItemInfo);
router.put("/updateItem",ItemController.UpdateItemInfo);
router.delete("/deleteItem/:id",ItemController.DeleteItemInfo);




module.exports = router;
*/


module.exports = function (app) {

    var ItemController = require('../controllers/item.controller.js')

    app.get("/api/items",ItemController.GetItemFromDb);
    app.get("/api/items/:id",ItemController.GetItemById);
    app.get("/api/items/n/:name",ItemController.GetItemByName);
    app.get("/api/items/b/:brand",ItemController.GetItemsByBrand);
    app.post("/api/items",ItemController.StoreItemInfo);
    app.put("/api/items/:id",ItemController.UpdateItemInfo);
    app.delete("/api/items/:id",ItemController.DeleteItemInfo);


}