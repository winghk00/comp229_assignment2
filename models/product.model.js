var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    // other fields
    });
module.exports = mongoose.model('Product', ProductSchema);
