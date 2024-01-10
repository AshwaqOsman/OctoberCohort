
//Using string concatenation add two different strings together and print this off.**
/*var a = "name"
var b = "number"
console.log(a +" " +b)

//Using variables create a variable for a number, a string. Then print each of these variables.
//var a = "name"
var b = 2
console.log(a+" "+b)

3.//Using string concatenation in javascript combine 3 different variables and prints it off. I.e variable for name age and date of 
var a = "name"
var b = 2

console.log(`what is your ${a} and ${number}: my name is ${name}  )*/
//4. **Create a variable that is printed off then changed further down the script and printed
//Print off the datatypes for a number variable & string variable.**
/*let name = "Ashwaq"
console.log(name)
 name = "MO"
console.log(name)
//Print off the datatypes for a number variable & string variable.**
var a = "name"
console.log(typeof a)
//Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).**
 /*var hero = "spiderman"
if (hero=== "spiderman"){
    console.log("hero is a dc")
}else if (hero=== "batman") {
    console.log("hero is a marvel")
}else{
    console.log("i don't recognise that person")
}
var name= "jhon"
console.log(name.toUpperCase())
if ( typeof name === "string" && (name.length >=3)){
    if (name.toLowerCase === "Jhon"){
        console.log("welcome back Jhon" )
    }else{
        console.log("who are you")
    }
}else{
    console.log("Error, only accept string")
}
var  dayOfTheWeek= "Monday"
var time= "10:00"

switch(dayOfTheWeek.toLowerCase()){
    case "monday":
        if (time==="09:00"){
        console.log("Work day")
        }else{console.log("what time")
        }
        break;
    case "tuesday":
        console.log("Work")
        break;
    case "wednesday":
        console.log("Work")
        break;
    case "thuresday":
        console.log("Thuresday")
        break;
    default:
        console.log(`${dayOfTheWeek} is not a week day`)
    
    }
    */

   //Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on. (if this does not make sense please refer back to the recording)

  /* var name = "ashwaq"
   if(name.toUpperCase() === "Ashwaq"){
     console.log("hi Ashaq")
   }else{
     console.log("who are you")
   }

   //Write a conditional statement that prints whether the phone being used is an Iphone or an android**
   var deviceSystem = "android"
   if(deviceSystem.toUpperCase() === "Iphone"){
     console.log("you are using an iphone")
   }else if(deviceSystem.toUpperCase() === "android"){
     console.log("you are using an android")
   }else{
    console.log(`what ${deviceSystem} are you using´´``*')
   }
*/
var array = ["bred", "milk", "water","ceral","butter"]
array[2]= "yughort"
array.push("pop corn")
array.push("ice creem")
array.push("pasta")
array.pop("pasta")
console.log(array)
console.log(array.indexOf("nodols"))

