var input = [
{ x: 3, y: 4 },
{ x: 12, y: 5 },
{ x: 8, y: 15 }
];

var result = input.map(function(index, value) {
  //return the square root of (the x value squared) + (the y value squared)
  return Math.sqrt(index.x**2 + index.y**2);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

//The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

//Expected output
//result = [ 5, 13, 17 ]