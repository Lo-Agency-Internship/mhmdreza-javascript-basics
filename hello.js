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





//////////////////////////// part 6


function logicalGateBuffer(part1) 
{
    return part1;
}

function logicalGateNot(part1)
{
    return !part1;
}

function logicalGateAnd(part1,part2) 
{
    if (part1===true && part2===true) {
        return true;
    }
    else{
        return false
    }
}
function logicalGateOr(part1,part2) 
{
    if (part1===false || part2===false) {
        return false;
    }
    else{
        return true
    }
}
function logicalGateNand(part1,part2) 
{
    if (!(part1===true && part2===true)) {
        return true;
    }
    else{
        return false
    }
}

function logicalGateNor(part1 ,part2) 
{
    if (!(part1===false || part2===false)) {
        return true;
    }
    else{
        return false
    }
}

function logicalGateXor(part1,part2) 
{
    if (part1===part2) {
        return false;
    }
    else{
        return true
    }
}

function logicalGateXnor(part1,part2)
{
    if (!(part1===part2)) {
        return false;
    }
    else{
        return true
    }
}


//////////////////////////////part7
////Iterative
let awnser1=1;
function factorialIterative(x) {
    for (let index = 1; index <= x; index++) {
        awnser1=awnser1*index;
    }
    return awnser1;
}
console.log(factorialIterative(6));

///Recursive
let x1=10;
function fuctorialRecursive(x1) {
    if (x1===0) {
        return 1;
    }
    return x1 * fuctorialRecursive(x1-1);
}
console.log(fuctorialRecursive(x1));


//////////////////////////////part8

const arr1 = []
for (let index = 0; index < 10; index++) {
   let randnumber=rand(15,50);
   arr1.push(randnumber);
}
// Map
const res =[];
function costumMap(arr1,func) {
    for (let index = 0; index < arr1.length; index++) {
         res.push(func(arr1[index]));
    }
    return res;
}
console.log(arr1);
costumMap(arr1,number => number*2)
console.log(res);

// Filter
const res1 =[];
function costomFilter(arr,func)
{
    for (let index = 0; index < arr1.length; index++) {
      
        if (func(arr1[index])) {
            res1.push(arr1[index])
        }
    }
    return res1;
}
console.log(arr1);
costomFilter(arr1,number1 => (number1>30))
console.log(res1);

// Reduce


function costomReduce(arr1,func)
{
    let accu=1;
    for (let index = 1; index < arr1.length; index++) {
      accu=func(arr1[index],accu)
    }
    return accu;
}
console.log(arr1);
console.log(costomReduce(arr1,(current,accumulator)=>current+accumulator));