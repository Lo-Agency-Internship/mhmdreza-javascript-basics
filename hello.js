// part 1
// var Message = prompt("Enter your name : ");
// alert("Hello " + Message);

// part 2
// let fullname=prompt("Enter your name :");
// let age=prompt("Enter your age :");
// let gender=prompt("Enter your gender :");

// alert("I am "+ fullname + " and  i'm "+ age + " years old and "+ gender);

// let num1,num2;
// num1= prompt(" enter number one :");
// num2= prompt(" enter number two :");
// alert("number one is : "+num1  + "    and number two is : " +num2 +" i want to swap this number:) ");

// let num3=num1;
// num1=num2;
// num2=num3;
// alert("number one is : "+num1+ "        and number two is : "+num2);




// part 3

let firstname , lastname, age, gender;

firstname = prompt("what is your firstname :");
lastname = prompt("what is your lastname :");
gender = prompt("gender:");
age = prompt("how old are you :");
let information= `name = ${firstname} ${lastname} <br> gender = ${gender} <br> age = ${age}`;
alert(`hello "${firstname} ${lastname}" you are "${gender}" and "${age}" years old`);

document.getElementById("info").innerHTML=information;
