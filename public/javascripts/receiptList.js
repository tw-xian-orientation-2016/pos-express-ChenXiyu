$(document).ready(function(){
    var receiptList = JSON.parse(window.localStorage.getItem("receiptList"));
    for(var i=0;i<receiptList.length;i++){
        var receipt ='<li class="tableTitle item box">'+
            '<span class="col-xs-12 text-center" data-timestamp='+receiptList[i].timestamp+' onclick="openReceipt(this)"><strong>'+receiptList[i].timestamp +'</strong></span></li>';
        $("ul").append(receipt);
    }
});

function jumpToHome(){
    location.href='index.html';
}

function openReceipt(e){
    var timestamp = e.dataset.timestamp;
    var receiptList = JSON.parse(window.localStorage.getItem("receiptList"));
    var receipt = "";
    for(var i=0;i<receiptList.length;i++){
        if(receiptList[i].timestamp == timestamp){
            receipt = receiptList[i].receiptContent;
            document.write(head+receipt+mid+receiptList[i].total+tail);
            break;
        }
    }
}

var head = '<!DOCTYPE html> <html lang="zh-CN"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>RECEIPT</title> <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css"> <link rel="stylesheet" href="stylesheets/main.css"> </head> <body> <div class="container"> <div class="row"> <button type="buttom" class="btn btn-primary btn-lg col-xs-3" name="Home" onclick="jumpToHome()">HOME</button> <p class="col-xs-6 text-center" id="brand" ><strong>RECEIPT</strong></p> <button type="buttom" class="btn btn-danger btn-lg col-xs-3" name="Cart" onclick="jumpToReceiptList()">ReceiptList</button> </div> <div class="row text-center "> <strong> <p>********************************<没钱赚商店>收据********************************</p><br/><ul id="partOne">';

var mid='</ul> <p  >--------------------------------------------------------------------------------------</p>    <ul id="partTwo"> ';

var tail=' </ul> <p >**************************************************************************************</p>    </strong> </div> </div> <script src="http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script> <script src="http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> <script src="javascripts/receipt.js"></script> </body> </html> ';
