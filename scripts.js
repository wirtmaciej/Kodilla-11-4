function Phone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printinfo = function() {
	console.log('The phone brand is ' + this.brand + ', model is ' + this.model + ', color is ' + this.color + ', and the price is ' + this.price + ' dolars.')
}

Phone.prototype.bargainfinder = function() {
	if (this.price <= 150) {
		console.log('Bargain! Consider buying.');
	} else {
		console.log('Watch Out! You can overpay!')
	}

}

var samsungGalaxyS6 = new Phone( 'Samsung', 'Galaxy', 150, 'black' );
var iphone6S = new Phone('iPhone', '6S',  200, 'white');
var huaweiP43 = new Phone('Huawei', 'P43', 180, 'gray');

samsungGalaxyS6.printinfo();samsungGalaxyS6.bargainfinder();
iphone6S.printinfo();iphone6S.bargainfinder();
huaweiP43.printinfo();huaweiP43.bargainfinder();


