$(document).ready(function(){
    var cart = JSON.parse(window.localStorage.getItem("cart"));
    var items = JSON.parse(window.localStorage.getItem("items"));
    var receiptItems = [];
    var cartWithCount = {};
    for(var i=0;i<cart.length;i++){
        if(cartWithCount[cart[i]] == undefined){
            cartWithCount[cart[i]] = 1;
        }else{
            cartWithCount[cart[i]] ++;
        }
    }
    for( barcode in cartWithCount){
        for(var i=0;i<items.length ;i++){
            if (items[i].barcode == barcode){
                var tmp = { "barcode" : barcode,
                "name":items[i].name,
                "unit":items[i].unit,
                "price":items[i].price,
                "count":cartWithCount[barcode],
                };
                receiptItems.push(tmp);
            }
        }
    }
    var sum = 0;
    for(var i=0;i<receiptItems.length;i++){
          $("ul").append(
                '<li class="tableTitle item box">'+
                '<span class="col-xs-3"><strong>'+receiptItems[i].name+'</strong></span>'+
                '<span class="col-xs-2"><strong>'+receiptItems[i].unit +'</strong></span>'+
                '<span class="col-xs-2"><strong>'+receiptItems[i].price +'</strong></span>'+
                '<span class="col-xs-3"><strong>'+receiptItems[i].count + '</strong></span>'+
                '<span class="col-xs-2"><strong>'+receiptItems[i].count *receiptItems[i].price + '</strong></span>'+
            '</li>'
            );
          sum += (receiptItems[i].count * receiptItems[i].price )
    }
    
    $("ul").append(
            '<li class="tableTitle item box">'+
           '<span class="col-xs-3"><strong>'+'总计:'+'</strong></span>'+
           '<span class="col-xs-3"><strong>'+sum+'</strong></span>'+
           '<span class="col-xs-6"><strong>'+'</strong></span>' +
            '</li>'
            );
    window.localStorage.setItem("receiptItems",JSON.stringify(receiptItems));
});

function jumpToHome(){
    location.href = 'index.html';
}

function jumpToReceipt(){
    location.href = 'receipt.html';
}
