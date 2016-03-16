$(document).ready(function(){
	$.getJSON("/getItems",function(items){
		for(var i = 0 ; i < items.length ;i++){
			var li = '<li class="item" data-barcode='+items[i].barcode +' onclick="addToCart(this);" >' + 
				'<span class="col-xs-8"><strong>' + items[i].name + '</strong></span>' +
				'<span class="col-xs-2"><strong>' + items[i].unit + '</strong></span>' +
				'<span class="col-xs-2"><strong>' + items[i].price + '</strong></span>' + '</li>';
				$("ul").append(li);
		}
	});
  //init cartNumbers
	updateCartNumber();
});

function addToCart( e ){
 var b = e.dataset.barcode;
	var url = "/addToCart";
	$.post(url,{barcode : b});
	
 //update cartNumber
	updateCartNumber();
}

function updateCartNumber(){
	$.getJSON("/getCarts",function(carts){
	$("[name='Cart']").text("Cart("+carts.length+")");
	});
}

function jumpToCart(){
    location.href='cart.html';
}
function jumpToHome(){
    location.href='index.html';
}
