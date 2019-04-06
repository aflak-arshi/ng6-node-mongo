const ItemBrand = require('../models/item-brand');

exports.add_item_brand = (req, res, next) => {
    const itemBrandObject = new ItemBrand({
        brandTitle: req.body.brandTitle,
        brandDescription: req.body.brandDescription
    });
    itemBrandObject.save()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Brand addedd successfully!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

exports.get_item_brand = (req, res, next) => {
    ItemBrand.find()
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

exports.edit_item_brand = (req, res, next) => {
    const itemBrandID = req.params._id;
    ItemBrand.update({ _id: itemBrandID }, req.body)
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Brand updated successfully!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

exports.get_single_item_brand = (req, res, next) => {
    const itemBrandID = req.params._id;
    ItemBrand.findById(itemBrandID)
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

exports.delete_item_brand = (req, res, next) => {
    const itemBrandID = req.params._id;
    ItemBrand.remove(itemBrandID)
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "Brand deleted successfully!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
};