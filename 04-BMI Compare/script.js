
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

const markBMI = mark.bmi.toFixed(2);
const johnBMI = john.bmi.toFixed(2)


console.log(markBMI, johnBMI);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s BMI (${johnBMI})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s BMI (${markBMI})`)
}
