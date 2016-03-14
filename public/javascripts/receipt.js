$(document).ready(function(){
	$.get("/removeCart",function(){});

	var timestamp = new Date().getTime();
	$("#brand").text(timestamp);

	$.getJSON("/getReceiptItems",function(receiptItems){
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
			$.get("/removeReceiptItems");
	});
});

function addToReceiptList(receipt){
	$.post("/writeReceipt",{'data':JSON.stringify(receipt)});
}

function jumpToHome(){
	location.href='index.html';
}

function jumpToReceiptList(){
	location.href='receiptList.html';
}
