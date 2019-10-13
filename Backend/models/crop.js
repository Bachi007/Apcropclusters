 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 cropSchema = new Schema( {
	
	 seller:String,
	 village: String,
	 pincode: String,
	 crop: String,
	 cropDesc: String
 }),

Crop = mongoose.model('Crop', cropSchema);



module.exports = Crop;