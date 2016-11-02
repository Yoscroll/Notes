//other: objects and arrays

//this is a string
var myName = "Ian";

//this is an interger
var myAge = 15;

//boolen type
var boy = true;

//unassigned cariable
undefined

//not a number
NaN

var camelCase = "yay";

/*
!== not equals
> greater than 
< less than 
>= greater than or equal to 
<= less than or equal to 

&& - and 
|| - or
! - not; put in front of expressions to negate them
Combine with Boolean operators to create more complex expressions 
You can also nest conditional statements within each other
*/

//fuction-executed block
function () {
}

function nameOfFunction (){
  console.log("hello i am a new function");
}

//invoking a function
nameOfFunction();

//parameters
function hello(a, b) {
  console.log(a+b);
}
hello(10,11);

function bai(c,d){
  console.log(c-b);
  return c+d;
}

bai(20,10);

var subtract = bai(30,12);
console.log(subtract);

function createGreeting(name,age){
  if (age<32){
    console.log("hello " + name);
    return "hello " + name;
  }
  else{
    console.log("hello Mr."+name);
    return "hello Mr." + name;
  }
}
createGreeting("Ian",15);

