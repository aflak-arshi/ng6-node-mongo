const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemCatalogSchema = new Schema({
    itemName: {
        type: string,
        required: true
    },
    itemDescription: {
        type: string
    },
    itemQuantity: {
        type: string,
        required: true
    },
    itemType: {
        type: string,
        required: true
    },
    itemReview: {
        type: string
    },
    itemBrand: {
        type: string,
        required: true
    },
    itemCategory: {
        type: string,
        required: true
    },
    itemImage: {
        type: string,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ItemCatalog', itemCatalogSchema);