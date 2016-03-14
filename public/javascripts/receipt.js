$(document).ready(function(){
    window.localStorage.setItem("cart",null);
    var timestamp = new Date().getTime();
    $("#brand").text(timestamp);
    
    var receiptItems =JSON.parse(window.localStorage.getItem("receiptItems"));
    var sum = 0;
    var content = "";
    var receiptContent = "";
    for(var i=0;i<receiptItems.length;i++){
         content = '<li>'+
            '<span class="col-xs-3 text-left">名称：'+receiptItems[i].name+'</span>'+
            '<span class="col-xs-3 text-left">数量：'+ receiptItems[i].count + receiptItems[i].unit + '</span>'+
            '<span class="col-xs-3 text-left">单价：'+ receiptItems[i].price +'(元)'+'</span>'+
            '<span class="col-xs-3 text-left">小计：'+(receiptItems[i].price * receiptItems[i].count) + '</span>' + '</li>';
         receiptContent += content;
        $("#partOne").append(content);
    sum += receiptItems[i].price * receiptItems[i].count;
    }
    var total ='<li>'+
        '<span class="col-xs-3 text-left">总计：'+ sum +'</span>';
    $("#partTwo").append(total);

    var receipt = {
        receiptContent:receiptContent,
        total:total,
        timestamp:timestamp
    };
    addToReceiptList(receipt);
});

function addToReceiptList(receipt){
    var receiptList = [];
    receiptList = JSON.parse(window.localStorage.getItem("receiptList"));
    if (receiptList == null){
        receiptList = [];
    }
    receiptList.push(receipt);
    window.localStorage.setItem("receiptList",JSON.stringify(receiptList));
}

function jumpToHome(){
    location.href='index.html';
}

function jumpToReceiptList(){
    location.href='receiptList.html';
}
