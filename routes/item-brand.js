const express = require('express');
const router = express.Router();
const ItemBrandController = require('../controllers/item-brand');
const checkAuth = require('../middleware/check-auth');

const itemBrand = database => {

    router.get("/get-brands", ItemBrandController.get_item_brand);

    router.post("/add-brand", ItemBrandController.add_item_brand);
    
    router.get("/get-single-brand/:_id", ItemBrandController.get_single_item_brand);
    
    router.put("/edit-brand/:_id", ItemBrandController.edit_item_brand);
    
    router.delete("/delete-brand/:_id", ItemBrandController.delete_item_brand);
    
    return router;
};

module.exports = itemBrand;