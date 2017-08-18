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

var SamsungGalaxyS6 = new Phone( 'Samsung', 'Galaxy', 150, 'black' );
var iPhone6S = new Phone('iPhone', '6S',  200, 'white');
var HuaweiP43 = new Phone('Huawei', 'P43', 180, 'gray');

SamsungGalaxyS6.printinfo();SamsungGalaxyS6.bargainfinder();
iPhone6S.printinfo();iPhone6S.bargainfinder();
HuaweiP43.printinfo();HuaweiP43.bargainfinder();


