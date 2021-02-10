//variables (string and number)
var a = "manasvini";
console.log(a.toUpperCase());

var b = 4;
console.log(b);

console.log(parseInt("5"));

//ARITHMETIC OPERATIONS (+,=,/,*,%)
console.log(2+4);
console.log(9-8);
console.log(25/5);
console.log(17*8);
console.log(19%2);

//COMPARISON OPERATORS(<,<=,>,>=,==,!==)
console.log(9<10);
console.log(9>10);
console.log(5<=4);
console.log(5>=5);
console.log(2==2);
console.log(9!=8);

//CONDITIONAL PROGRAM
if(3>2){
  console.log("3 is greater");
}
else{
  console.log("2 is greater");
}

//SWITCH STATEMENTS
switch(a){
  case "manasvini":
    console.log("correct");
    break;

    case "Manasvini":
      console.log("incorrect");
      break;

      default:
        console.log("none of the conditions are correct");
}

//LOOP
//for(start? ; stop?(comparitive); how to repeat?)

for(var i = 1; i<=5; i++){
  console.log(i);
}

for(var j = 32; j <= 38; j++){
  console.log(j);
}


/*while loop

initialisation 
while(comparison){
    print;
    increment
}
*/

var k = 11;
while(k<=20){
  console.log(k);
  k++;
}

var colors = ["green" , "blue" , "yellow" , "pink" , "violet"];
colors.push("red");
colors.push("orange");
colors.push("brown");
console.log(colors.length);

function addition(x,y){
    var add = x+y;
    return add;
}

console.log(addition(5,9));

function multiplication(m,n){
  var multiply = m*n;
  return multiply;
}

console.log(multiplication(25,4));