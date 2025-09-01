// Variable example
let age = 22;
const name = "Maaria";

// Array with 2 items and .push()
let colors = ["red", "green"];
colors.push("blue");
console.log("Colors array:", colors);

// Object with 2 properties
let person = {
    fName: "Maaria",
    country: "India"
};
console.log("Person object:", person);

// Regular function
function regAdd(a, b) 
{
    return a + b;
}
console.log("Sum:", regAdd(5, 3));

// Arrow function
const arrAdd = (a, b) => 
{
    return a + b;
};
console.log("Sum:", arrAdd(5, 3));

// map
const names = ["mary", "susan", "maria"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Map:", upperNames);

// filter
const nums1 = [10, 55, 32, 79, 63];
const bigNums = nums1.filter(num => num > 50);
console.log("Filter:", bigNums);

// find
const nums2 = [15, 8, 22, 3, 18];
const smallNums = nums2.find(num => num < 10);
console.log("Find:", smallNums);

// Object
let user = { 
  name2: "Maaria", 
  age2: 22, 
  greet() { console.log("Hi, I’m " + this.name2); }
};
user.greet(); 

// Destructuring
let { name2, age2 } = user;
console.log(name2, age2);

// Promise and Async/Await
function getGreeting() 
{
  return new Promise(res => res(`Hello, ${user.name2}!`));
}
async function showGreeting() 
{
  let msg = await getGreeting();
  console.log(msg);
}
showGreeting();