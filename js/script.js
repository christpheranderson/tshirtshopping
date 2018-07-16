var cart = [];
var Shirts = function(name, price, stock, image)  {
	this.name = name
	this.price = price
	this.count = stock
	this.image = image
};

function addShirtToBakset(name, price, stock, image) {
	for (var i in cart) {
		if(cart[i].name === name) {
			cart[i].count += count;
			return;
		}
	}
	var tshirts = new Shirts(name, price, stock, image)
	cart.push(tshirts);
}
 
addShirtToBakset("shirtOne", 5.00, 3);
addShirtToBakset("shirtTwo", 5.00, 4);
addShirtToBakset("shirtThree", 5.00, 5);
addShirtToBakset("shirtFour", 5.00, 1);
addShirtToBakset("shirtFive", 5.00, 3);
addShirtToBakset("shirtSix", 5.00, 2);
addShirtToBakset("shirtSeven", 5.00, 6);
addShirtToBakset("shirtEight", 5.00, 1);
addShirtToBakset("shirtNine", 5.00, 8);

console.log(cart);
console.log( cart[5] );
console.log( cart[5].name )




function removeShirtFromCart(name) {
	for (var i in cart) {
		if(cart[i].name === name) {
			cart[i].stock --;
			break;


		}
	}
}



// emptybasket()

// dumpShirts()

// collectAllShirts()

// countevertyhingInCart()

// listShirts()

// saveMyCart()

// rememberCart()


   















