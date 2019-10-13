var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Crop = require('../models/crop');
var Book=require('../models/bookings')
var Seller=require('../models/seller')
var Cart=require('../models/cart')
var url="mongodb+srv://hb:2505@cluster0-hzdje.mongodb.net/test?retryWrites=true&w=majority";

router.post('/savecrop', function(req, res, next) {
	console.log(req.body);
	var newCrop = new Crop({
		seller:req.body.seller,
		village:req.body.village,
		pincode: req.body.pincode,
		crop: req.body.crop,
		cropDesc: req.body.cropDesc
	});

	newCrop.save(function(err, Crop){
		if(err)
			console.log(err);
		else
			var data={
				"status":"Successfully saved",
				"data":Crop
			}
			res.json(data);
			res.status(200);
	});

	});
	
router.post('/book', function(req, res, next) {

	var newBook = new Book({
		crop:req.body.crop,
		village:req.body.village,
		seller:req.body.seller,
		name: req.body.name,
		mobile: req.body.mobile,
		address: req.body.address
	});

	newBook.save(function(err, result){
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "successfully booked",
				"data": result
			}
			res.json(data);
			res.status(200)
		}

	});

	});
	router.post('/cart', function(req, res, next) {

		var newitem = new Cart({
			crop:req.body.crop,
			cropDesc:req.body.cropDesc,
			seller:req.body.seller,
			village:req.body.village
		});
	
		newitem.save(function(err, result){
			if (err) {
				var data = {
					"status": "something went wrong",
					"data": err
				}
				res.json(data);
				res.status(500)
			} else {
				var data = {
					"status": "successfully added",
					"data": result
				}
				res.json(result);
				res.status(200)
			}
	
		});
	
		});
	
router.post('/register', function(req, res, next) {

	var newSeller = new Seller({
		name:req.body.name,
		email: req.body.email,
		village:req.body.village,
		mobile: req.body.mobile,
		password:req.body.password,
		passwordConf:req.body.passwordConf,
		role:req.body.role
		
	});

	newSeller.save(function(err, result){
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "successfully registered",
				"data": result
			}
			res.json(data);
			res.status(200)
		}

	});

	});
	

	router.post('/login', function (req, res, next) {
		//console.log(req.body);
		var name = req.body.name;
		mongoose.connect(url, function (err, db) {
			if (err) throw err;
			var query = Seller.findOne({ name }).select('name email village mobile password role');
			query.exec(function (err, data) {
	
				if (data) {
					if (data.password == req.body.password) {
						console.log("Done Login");
						res.send({ "Status": "Success!", 'data': data });
					} else {
						res.send({ "Status": "Wrong password!", 'data': data });
					}
				} else {
					res.send({ "Status": "This user Is not regestered!", 'data': data });
				}
				console.log(data);
			});
		});
	});
	router.post('/getCrop', function (req, res, next) {
		console.log(req.body)
			mongoose.connect(url, function (err, db) {
				if (err) throw err;
				var query = Crop.find({ village:req.body.village }).select('village seller pincode crop cropDesc');
				query.exec(function (err, data) {
		
					console.log(data);
					res.send(data);
					
				});
			});
		});
		
	router.post('/cropname', function (req, res, next) {
		console.log(req.body)
			mongoose.connect(url, function (err, db) {
				if (err) throw err;
				var query = Crop.find({ crop:req.body.crop }).select('village seller pincode crop cropDesc');
				query.exec(function (err, data) {
		
					console.log(data);
					res.send(data);
					
				});
			});
		});

	
		router.post('/vieworders', function (req, res, next) {
			console.log(req.body)
				mongoose.connect(url, function (err, db) {
					if (err) throw err;
					var query = Book.find({ seller:req.body.seller }).select('crop name mobile address');
					query.exec(function (err, data) {
			
						console.log(data);
						res.send(data);
						
					});
				});
			});
			
module.exports = router;