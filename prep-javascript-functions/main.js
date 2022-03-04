function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}

var result1 = convertHoursToMinutes(2);
console.log('2 hours changed to minutes:', result1);

function getGreeting(name) {
  return ('Hello ' + name + '!');
}

var result2 = getGreeting('Bob');
console.log('Greeting result:', result2);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result3 = addAndMultiplyBy5(8, 2);
console.log('Add and multiply result:', result3);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var result4 = subtractTwoNumbers(10, 2);
console.log('Subtract result:', result4);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var result5 = getCircleCircumference(6);
console.log('Circle circumference:', result5);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

var result6 = getFullName('Steve', 'Jobbes');
console.log('A full name:', result6);

function cube(number) {
  return number * number * number;
}

var result7 = cube(5);
console.log('Cubed result:', result7);
