'use strict';
const products = require('./products.interface');
const cart = require('./cart.interface');

class Test {
	constructor() {
		displayProducts(); // You can comment this if you want
		displayCart(); // You can comment this if you want
	}
}

const displayProducts = () => {
	console.log('products', products);
};

const displayCart = () => {
	console.log('cart', cart);
};

//======Step 1 start======
const makeProductNamePriceArray = (products) => {
	let arr = products.map((obj) => ({ productName: obj.productName, productPrice: obj.productPrice }));
	return arr;
};

const productNamePrice = makeProductNamePriceArray(products);
console.log("STEP 1 RESULT:");
console.log(productNamePrice);
console.log();
//======Step 1 end======

//======Step 2 start======
const leastPriceWithThisName = (name) => {

	//make function's own productPrice array to keep it pure
	let productNamePriceArray = makeProductNamePriceArray(products);

	//filter and get array of the provided name
	let filterArray = productNamePriceArray.filter(obj => {
		return obj.productName = name;
	});

	//reduce the filtered array to find the product with least price
	let result = filterArray.reduce((previous, current) => previous.productPrice < current.productPrice ? previous : current);

	return result;
};

const leastProduct = leastPriceWithThisName("Stamps and Flower - Sage");
console.log("STEP 2 RESULT:");
console.log(leastProduct);
console.log();
//======Step 2 end======


//======Step 3 start======
const extractTotalQuantity = (cart) => {
	let quantityCount = 0;
	if (cart) {
		cart.map(obj => (quantityCount = quantityCount + obj.quantity));
	}
	return quantityCount;
};

let cartQuantity = extractTotalQuantity(cart);
console.log("STEP 3 RESULT:");
console.log(cartQuantity);
console.log();

//======Step 3 end======


//======Step 4 start======
//to extract least price
const extractCartLeast = (cart) => {
	let least = cart.reduce((previous, current) => previous.basePrice < current.basePrice ? previous : current);

	return least;
};

//to extract max price
const extractCartMax = (cart) => {
	let max = cart.reduce((previous, current) => previous.basePrice > current.basePrice ? previous : current);

	return max;
};

let leastPrice = extractCartLeast(cart);
let maxPrice = extractCartMax(cart);

console.log("STEP 4 RESULT:");
console.log("Least Price Cart Item:\n", leastPrice);
console.log();
console.log("Max Price Cart Item:\n", maxPrice);
console.log();

//======Step 4 end======


//======Step 5 start======
const totalCartPrice = (cart) => {

	let totalPrice = 0;
	cart.map(obj => {
		if (obj.discountedPrice !== 0) {
			totalPrice = totalPrice + obj.discountedPrice;
		} else {
			totalPrice = totalPrice + obj.price;
		}
	});
	return totalPrice;

};

let total = totalCartPrice(cart);
console.log("STEP 5 RESULT:");
console.log(total);
console.log();
//======Step 5 end======



// Do not edit below this line
const test = new Test();
