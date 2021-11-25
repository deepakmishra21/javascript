var car = function (model, price) {
  this.model = model;
  this.price = price;
  return model + "_" + price
}
var car1 = new car("maruti", 1000);
var car2 = car("tata", 2000);