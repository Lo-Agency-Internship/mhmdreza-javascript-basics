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




////////////////////////// part 3

// let firstname , lastname, age, gender;

// firstname = prompt("what is your firstname :");
// lastname = prompt("what is your lastname :");
// gender = prompt("gender:");
// age = prompt("how old are you :");
// let information= `name = ${firstname} ${lastname} <br> gender = ${gender} <br> age = ${age}`;
// alert(`hello "${firstname} ${lastname}" you are "${gender}" and "${age}" years old`);

// document.getElementById("info").innerHTML=information;



////////////////////////// part 4 
// random number 
let randomNum;
let min , max;
function rand(min,max) {
    randomNum=Math.floor(Math.random()*(max-min)+min);
    return randomNum;
}
console.log(rand(10 ,100));



// convert binary number to decimal
let stringnum = "1011001001111";
let tedad = stringnum.length
let decnum = 0;
function bin2dec(stringnum) {
    binnum = Number(stringnum);
    for (let i = 0; i < tedad; i++) 
    {
        let convert = binnum % 10;
        convert = Math.floor(convert);
        if (convert === 1)
        {
            decnum += convert * (2 ** i);
        }
        binnum /= 10;
    }
    return decnum;
}
console.log(bin2dec(stringnum));




////////////////////////// part 5
// number1
let Sum;
function sum(num1,num2) {
    Sum=num1+num2;
    if(num1===num2)
    {
        return Sum*3;
    }
    else
    {
        return Sum;
    }
}
console.log(sum(3,03));

// number2
let awnser;
function difference(num1) 
{
    awnser= Math.abs(num1-19);
    if (awnser>19)
    {
       return awnser*3
    }
    else
    {
        return awnser
    }
}
console.log(difference(2));

// number3
function checkstring(example,checkword) 
{
    if (example.includes(checkword,0)) 
    {
        return example;
    }
    else
    {
        return checkword.concat(example);
    }
}
console.log(checkstring("Organisation","Lo"));




////////////////////////////// 7
////Iterative
let x=5;
function factorialIterative(x) {
 
    for (let index = 1; index <= x; index++) {
        awnser=awnser*index;
    }
    return awnser;
}
console.log(factorialIterative(5));

///Recursive
let x1=10;
function fuctorialRecursive(x1) {
    if (x1===0) {
        return 1;
    }
    return x1 * fuctorialRecursive(x1-1);
}
console.log(fuctorialRecursive(x1));




