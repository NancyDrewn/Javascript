function myfunction(){
    console.log("Hello from  a javascript")
}
// call the function 
myfunction();
//arrow function
const myfunction2=()=> console.log("hello from arrow function")
//calling the arrow function
myfunction2()
//functions with parameters
function greeting(name){
  console.log("hello " +name)
}
greeting("Nellie")
//arrow function with one parameter
let greetings= (name)=>console.log('hello '+name)
//calling the arrow function
greetings("Naomi")
//functions that adds two numbers
function addNumbers(a ,b){
    return a+b
}
//calling the function
console.log(addNumbers(5 ,6))
let summation=(a ,b)=>a+b;
//calling the arrow function
console.log(summation(3,4));
//
function example(){
    alert("this is an alert")
}
let example2=()=>alert("this is a pop up")
example2()