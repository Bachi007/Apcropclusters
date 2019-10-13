var mongoose = require('mongoose');
var Schema = mongoose.Schema;

sellerSchema = new Schema( {
   
    name:String,
    email: String,
    village: String,
    mobile: String,
    password:String,
    passwordConf:String,
    role:String

}),

Seller = mongoose.model('Seller', sellerSchema);



module.exports = Seller;