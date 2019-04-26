
var visited = sessionStorage['visited'];
if (!visited) {
    init();
    sessionStorage['visited'] = true;
}


function init() {
}

sessionStorage.setItem("count", 0);
sessionStorage.setItem("total_cost", 0);

sessionStorage.setItem("gta5_Quantity", 0);
sessionStorage.setItem("gta5_Price", 3000);

sessionStorage.setItem("gta4_Quantity", 0);
sessionStorage.setItem("gta4_Price", 2500);

sessionStorage.setItem("rl_Quantity", 0);
sessionStorage.setItem("rl_Price", 700);

sessionStorage.setItem("ets2_Quantity", 0);
sessionStorage.setItem("ets2_Price", 1300);


function addItem(id)
{
	var quantity = parseInt(sessionStorage.getItem(id + '_Quantity'));
	
	if (quantity >= 3)
		alert("Maximum you can order 3 copies");
	else
	{
		sessionStorage.setItem(id + '_Quantity', ++quantity);
		document.getElementById(id).value = quantity;

		var cart_quantity = parseInt(sessionStorage.getItem('count'));
		sessionStorage.setItem('count', ++cart_quantity);
		document.getElementById("cart_quantity").innerText = cart_quantity;
	}

}

function subItem(id)
{
	var quantity = parseInt(sessionStorage.getItem(id + '_Quantity'));

	if (quantity > 0)
	{
		sessionStorage.setItem(id + '_Quantity', --quantity);
		document.getElementById(id).value = quantity;

		var cart_quantity = parseInt(sessionStorage.getItem('count'));
		sessionStorage.setItem('count', --cart_quantity);
		document.getElementById('cart_quantity').innerText = cart_quantity;
	}
}
