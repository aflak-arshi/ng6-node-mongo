const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	product_name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now, 
		required: true
	}
});

module.exports = mongoose.model('Products', productSchema);