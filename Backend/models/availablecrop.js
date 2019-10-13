var mongoose = require('mongoose');
var Schema = mongoose.Schema;

availablecropSchema = new Schema( {
   
    seller:String,
    village: String,
    pincode: String,
    crop: String,
    cropDesc: String
}),

availableCrop = mongoose.model('availableCrop', availablecropSchema);



module.exports = availableCrop;