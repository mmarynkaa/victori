console.clear()
const q = [
  "Зовнішній відступ в CSS",
  "Внутрішній відступ в CSS"

]
const a = [
  "margin",
  "padding"

]
const qq = document.querySelector(".q")
const aa = document.querySelector(".a")
console.log(qq)


const letters = document.querySelectorAll(".letter")
const rwl = 0; 
      
function round(){
  const random = Math.trunc(Math.random()*3)
qq.textContent = q[random]


 for(let i = 0; i < a[random].length; i++){
   const el = document.createElement("p")
   aa.appendChild(el)
   for(let j = 0; j < letters.length; j++){
letters[j].addEventListener("click", press)
}
 }
  
function press(){
  console.log(this.textContent)

const box = document.querySelectorAll("p")
if(box.length > rwl){
  for(let i = 0; box.length-rwl.length; i--){
  box[k].style.display = "none"
}
}
for(let k = 0; k < a[random].length; k++){
  rwl = a[random].length
  if(a[random][k] === this.textContent){
    box[k].style.backgroundColor="grey"
    box[k].textContent = this.textContent
    if(Array.from(box).every(item => item.textContent != "")){
      round()
      
    }
  }
}
}
}
round()