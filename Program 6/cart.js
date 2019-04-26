var itemNo = 0;
total_cost = 0;
sessionStorage.setItem('0', 'gta5');
sessionStorage.setItem('1', 'gta4');
sessionStorage.setItem('2', 'rl');
sessionStorage.setItem('3', 'ets2');

while (itemNo < 4)
{
	id = sessionStorage.getItem(itemNo);
	price = parseInt(sessionStorage.getItem(id + '_Price'));
	quantity =  parseInt(sessionStorage.getItem(id + '_Quantity'));
	document.getElementById(id + '_Price').innerHTML = price;
	document.getElementById(id + '_Quantity').innerHTML = quantity;
	document.getElementById(id + '_TPrice').innerHTML = price * quantity;	
	total_cost = total_cost + (price * quantity);
	itemNo = itemNo + 1;
}
8789
document.getElementById('total_cost').innerHTML = total_cost;