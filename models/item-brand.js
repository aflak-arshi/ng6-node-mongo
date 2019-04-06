const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemBrandSchema = new Schema({
    brandTitle: {
        type: String,
        required: true
    },
    brandDescription: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Brands', itemBrandSchema);

