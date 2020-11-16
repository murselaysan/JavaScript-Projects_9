
// create object
let shapess = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  // create function with a parameter
  function selectShapes(num) {
    console.log(`You entered ${num} for number of side and the shape is ${shapess[num]}`);
  }
  selectShapes(5); // call function



// or //
function nSidedShaper(n) {
  let shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  //return shapes[n];
  return `the key is ${n} and the value is ${shapes[n]}`;
}
console.log(nSidedShaper(1)); // the key is 1 and the value is circle



// or //
let num = 7;
const shapesObject = {
  n: num,
  getShape: function () {
    return this.n === 1 ? "circle"
      : this.n === 2 ? "semi-circle"
      : this.n === 3 ? "triangle"
      : this.n === 4 ? "square"
      : this.n === 5 ? "pentagon"
      : this.n === 6 ? "hexagon"
      : this.n === 7 ? "heptagon"
      : this.n === 8 ? "octagon"
      : this.n === 9 ? "nonagon"
      : this.n === 10 ? "decagon"
      : "enter a valid number";
  },
};
console.log(shapesObject.getShape(num));
