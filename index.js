function orderpizza(callback) {
  console.log("me waiting");
  setTimeout(() => {
    const pizza = "me";
    callback(pizza)
  }, 2000);
  console.log("me waiting2");
}
function pizzaready(pizza) {
  console.log(`eat ${pizza}`);
}
orderpizza(pizzaready);
