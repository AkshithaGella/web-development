// const change=() => {
//     let display = document.getElementById("display")
//     display.innerHTML = "bye"
//     display.style.color = "red"
//     display.style.backgroundColor= "yellow"
// }


let display = document.getElementById('display')
let count=0

const inc=() =>{
    count++
    display.innerHTML=count
}
inc()

