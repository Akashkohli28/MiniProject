const decrease=document.getElementById("decrease")
const reset=document.getElementById("reset")
const increase=document.getElementById("increase")

let count=0

const counter=document.getElementById("counter")

decrease.addEventListener("click",function (){
    count--
    counter.textContent=count
})

increase.addEventListener("click",function (){
    count++
    counter.textContent=count
})

reset.addEventListener("click",function (){
    count=0
    counter.textContent=count
})