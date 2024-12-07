let obj = {
  name: "izzatillo",
  surname: {
    byfather: "akbarov",
    bymother: "sobirov",
  },
  age: 18,
};
// console.log(obj.surname.bymother);
// console.log(obj["age"]);
let car = {
  model: "gentra",
  motor: 1.5,
  airbag: true,
  color: "black",
};
// let car2 = Object.keys(car);
// let car2 = Object.values(car);
// let car2 = Object.entries(car);
// let car2 = Object.freeze(car);
let car2 = Object.seal(car);
let object = { key1: "value1" };
// console.log(car2);
Object.defineProperty(object, "key1", {
  writable: true,
  configurable: true,
  enumerable: true,
});

object.key1 = "value2";

console.log(object);
let bino = {
  height: 50,
  width: 100,
  count: 12,
};
for (let x in object) {
  console.log();
}
