var mongoose = require('mongoose');
var Schema = mongoose.Schema;

bookingSchema = new Schema( {
   
    crop:String,
    village: String,
    seller:String,
    name: String,
    mobile: String,
    address: String
}),

Book = mongoose.model('Book', bookingSchema);



module.exports = Book;