const body = document.body
const list = document.querySelector("ul")
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
   const input = document.getElementById("newCar")
   console.log(input)


const array = []

for(let i=0; i<list.children.length; i++){
    console.log(list.children[i].innerHTML)
    array.push(list.children[i].innerHTML.toLowerCase())
}
console.log(array)


if( input.value.length > 0) {
    console.log(input.value)
    if(array.includes(input.value.toLowerCase())){
        alert("item is in the list")

      }else{
        const newItem = document.createElement("li")
        newItem.innerHTML= input.value
        list.append(newItem)
      }
    }

})