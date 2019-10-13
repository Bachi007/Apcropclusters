var mongoose = require('mongoose');
var Schema = mongoose.Schema;

cartSchema = new Schema( {
    crop:String,
    cropDesc:String,
    seller:String,
    village: String,

}),

Cart = mongoose.model('Cart', cartSchema);



module.exports = Cart;