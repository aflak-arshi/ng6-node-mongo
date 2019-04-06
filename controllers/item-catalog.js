const mogoose = require('mongoose');
const ItemCatalog = require('../models/item-catalog');

exports.add_item_catalog = (req, res, next) => {
    const itemCatalogObject = new ItemCatalog({
        
    })
};

exports.edit_item_catalog = (req, res, next) => {
    const itemCatalogID = req.params._id;

};

exports.get_item_catalog = (req, res, next) => {

};

exports.get_single_item_catalog = (req, res, next) => {
    const itemCatalogID = req.params._id;

};

exports.delete_item_catalog = (req, res, next) => {
    const itemCatalogID = req.params._id;

};