var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

mongoose.connect("mongodb://localhost/test1/");

var item = mongoose.model("item",{
	barcode:String,
	name: String,
	unit: String,
	price : Number
});

var cart = mongoose.model("cart",{
	barcode:String
});

var receiptItem = mongoose.model("receiptItem",{
	barcode:String,
	name:String,
	unit:String,
	price:Number,
	count:Number
});

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendfile('public/index.html')
});

//get Items
router.get('/getItems', function(req,res,next){
	res.contentType('json');
	item.find({},function(err,items){
		if (item == undefined || items == "" || items == null){
			initDB()
		}
		res.json(items);
	});
});

// get carts
router.get('/getCarts',function(req, res, next){
	res.contentType('json');
	cart.find({},function(err,carts){
		res.json(carts);
	})
});

// add To Cart
router.post("/addToCart",function(req,res,next){
	var cartItem = new cart;
	cartItem.barcode = req.body['barcode'];
	cartItem.save(function(err){
		if(err){
			console.log("insert error");
		}
		console.log("insert ok");
	});

})

// write receiptItems
router.post("/writeReceiptItems",function(req,res,next){
	var receiptItems = JSON.parse(req.body['data']);
	var r;
	for(var i = 0 ; i< receiptItems.length ; i++){
		r = new receiptItem({
			name : receiptItems[i].name,
			barcode : receiptItems[i].barcode,
			price : receiptItems[i].price,
			count : receiptItems[i].count,
			unit : receiptItems[i].unit
		});
		r.save(function(err){
			if(err){
				console.log("this is an error "  + err);
			}
		});
	}
});

function initDB(){
	// init database
	var i = new item({
		barcode:'ITEM000000',
		name:'可口可乐',
		unit:'瓶',
		price: 3.00
	});
	i.save(function(){
		console.log("insert");
	});
	
	i = new item({
		barcode: 'ITEM000001',
		name: '雪碧',
		unit: '瓶',
		price: 3.00
	});
	i.save(function(){
		console.log("insert" + i);
	});
 
	i = new item({
		barcode: 'ITEM000002',
		name: '苹果',
		unit: '斤',
		price: 5.50
	});
	i.save(function(){
		console.log("insert" + i);
	});
 
	i = new item({
		barcode: 'ITEM000003',
		name: '荔枝',
		unit: '斤',
		price: 15.00
	});
	i.save(function(){
		console.log("insert" + i);
	});
 
	i = new item({
		barcode: 'ITEM000004',
		name: '电池',
		unit: '个',
		price: 2.00
	});
	i.save(function(){
		console.log("insert" + i);
	});
 
	i = new item(	{
		barcode: 'ITEM000005',
		name: '方便面',
		unit: '袋',
		price: 4.50
	});
	i.save(function(){
		console.log("insert" + i);
	});
}

module.exports = router;
