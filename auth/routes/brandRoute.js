/*var express = require("express");
var router = express.Router();

var BrandController = require("../controller/brand.controller.js");

router.get("/brandFromDb",BrandController.GetBrandFromDb); 
router.get("/brandInfoById/:id",BrandController.GetBrandById);
router.post("/storeBrand",BrandController.StoreBrandInfo);
router.put("/updateBrand",BrandController.UpdateBrandInfo);
router.delete("/deleteBrand/:id",BrandController.DeleteBrandInfo);


module.exports = router;
*/


module.exports = function (app) {

    var BrandController = require('../controllers/brand.controller.js')

    app.get("/api/brands",BrandController.GetBrandFromDb); 
    app.get("/api/brands/:id",BrandController.GetBrandById);
    app.post("/api/brands",BrandController.StoreBrandInfo);
    app.put("/api/brands/:id",BrandController.UpdateBrandInfo);
    app.delete("/api/brands/:id",BrandController.DeleteBrandInfo);

}