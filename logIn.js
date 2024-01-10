const body = document.body
const form = document.querySelector("form")
const fNameEl = document.getElementById("fname")
const lNameEl = document.getElementById("Lname")
const emailEl = document.getElementById("email")

form.addEventListener("submit",function(e){
    e.preventDefault()

    var checkFirstName = checkName(fNameEl, fNameEl)
    var checklasttName = checkName(lNameEl, lNameEl)
    var checkEmailInput= checkEmail(emailEl, emailEl)

    if (checkFirstName === true && checklasttName === true && checkEmailInput === true) {
        alert ("successful Log in")
        form.classList.add("dontDisplay")
        const h1 = document.querySelector("h1")
        h1.innerText = `Welcome back ${fNameEl.value}`

    }
}) 
function checkEmail(input, element){
    

    let passess = false
    let condition= false
    

    if (input.value.length>0){
        console.log("meets the name requirment")
        condition = true
        successMessage(element)
    }else{
        errorMessage("Does not meets the length requirment", element)
    }

    const reEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const checkEmail = reEx.test(input.value)
    if (condition==true && checkEmail === true){
        passess = true
        successMessage(element)
    }
    return passess

}
function checkName(input,element){

    let passess = false
    let condition= false

    if (input.value.length>0 && input.value.length<15){
        console.log("meets the name requirment")
        condition = true
        successMessage(element)
    }else{
        errorMessage("Does not meets the length requirment", element)
    }

    const reEx = /[a-zA-Z]/
    const CheckString = reEx.test(input.value)
    if (condition==true && CheckString === true){
        passess = true
        successMessage(element)
        
    }
    return passess

  
}
function errorMessage(text,element){
    element.style.borderColor = "red"
    console.log(`${element}: ${text}`)
   
}


function successMessage(element){
    element.style.borderColor="green"
}
   