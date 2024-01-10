/*var age =66
if(age === 60){
    console.log(" onley 7 years to go")
} else if (age ===67){
    console.log("time to retire")
} else{
    console.log("need to woek")
}*/
//this is a comment
/*hej
camelCase
typeof 
*/
//const myName= true
//console.log(myName)
//console.log(typeof myN ame)
//conditional statement 
/*if (){

}else{

}
*/


//const firstNAme="Ashwaq"
//const lastName ="LO"
//var welcomeMessage = "hello welcome to lesson 2"
//let age = 19
//const dob ="02/09/2023"
//console.log(`welcomeMessage ${myName}`)
//console.log(`${welcomeMessage} ${firstNAme} give us an intro: my name is ${firstNAme} and i am ${age} born on ${dob}`)
//console.log(firstNAme==lastName)
//console.log(typeof lastName)
// || stands for OR, && stands for AND
//onsole.log(firstNAme && lastName)
//if ( firstNAme === "Ashwaq" || firstNAme ==="ashwaq" ){
   // console.log("Welcome back " + firstNAme)
//} else{
  //  console.log("who are u")
//}
//Using string concatenation add two different strings together and print this off.
//var name = "Ashwaq"
//var addresss = "Whitechaple"
//console.log(` may name is ${name} my address is  ${addresss}`)
//Using variables create a variable for a number, a string. Then print each of these variables.

/*function errorMessage(){
    console.log("This is an error message")
    
}


function errorMessage(){
    var myName = "Ashwaq"
    return errorMessage

    
}
function addition(num1,num2){
    console.log(num1+num2)
}
addition(1,2)*/


//write a function that console logs “hello world”
/*function hello(){
    console.log("hello World")
}
hello()
// write a function that combines multiple arrays together as 1 big array (you can use the .concat method for this )
function combineArrays (arr1,arr2){
    var combined = arr1.concat(arr2)
    console.log(combined)
}
combineArrays(["1","2","3"], ["4","5"])
// write a function that check if the number is an odd or even number
function checkOddOrEven(num){
    var checked = checkStringOrNum(num)
    if (checked === true){
        if (num%2 === 0){
            console.log(`${num} is an odd number`)
        }else{
            console.log(`${num} is an even number`)
        }
    }else{
        console.log("can only accept number")
    }
}
checkOddOrEven("2")
// write a function that checks for a string and a function that checks for a number
function checkStringOrNum (item){
    let ans = false
    if (typeof item === "string"){
        ans = false
    } else if (typeof item ==="number"){
        ans = true
    }else{
        ans = false
    }
    return ans 
}
// write a function that reverses the order of an array e.g 54326 = 62345 ( this uses several different methods to obtain search them and try figure out the answer. First you need to use split method to make the string into an array then reverse method to reverse the order of the array followed by join to join the array into 1 string resources found above)
function reverse(param){
    console.log (param.reverse().join(""))
}
reverse([1,2,3,4,5,6])*/
//write a function to check if a string is a palindrome. (palindrome is if the word spells the same opposite, e.g madam is true as its madam backwards, sight is false because it is this backwards.
/*function checkPalindrome (world){
    console.log(world)
    var reverse = (world.split("").reverse().join(""))
    console.log(reverse)
    if (world === reverse){
        console.log ("this is a palindrome world")
    }else{
        console.log("this is not a plindrome world")
    }

     
}
checkPalindrome("madam")*/
/*var array = ["apple", "orange", "banana", "2","3","3"]
console.log(array)
array.pop()
console.log(array)
array.push("grape")
console.log(array)
array.shift()
console.log(array)
rray.unshift("water")
console.log(array)*/
//pop and push ass to add and remove items at end of an array
//shift and unshift is to remove and add items on the beginning of an array
/*array[0]= "sweets"
array[2]= "icecream"
array[array.length-1]="juice"
console.log(array)*/
/*var array =[1,2,3,4,5,6,7,8,9]
for (let i=0; i<array.length; i++){
    if (array[i]%2 === 0){
        console.log(`${array[i]} is an odd number`)
    }else{
        console.log(`${array[i]} is an even number`)

    }
}*/
/*var array = [1,2,3,4,5,678,32]
target= 9
let ans = false
var postion;
for (let i=0; i<array.length; i++){
    if(array[i]=== target){
        ans=true
        postion=[i]
    }
}
if (ans){
    console.log(" target is in the array at postion "+postion)
}else{
    console.log("item not in the array")
}
*/
function Car(name,model,type,colour,enginSize,drive){
    this.name = name
    this.model =model
    this.type = type
    this.colour= colour
    this.enginSize= enginSize
    this.drive= drive
}
let audiCar = new Car("Audi","Q1","sloine","Grey",2.1,"4wheel")
let bmw = new Car("Audi","Q1","sloine","Grey",2.1,"4wheel")
 var array =[audiCar]
 console.log(array)

    

