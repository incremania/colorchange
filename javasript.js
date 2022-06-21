let container = document.querySelector("div");
let btn = document.querySelector("button")
let randomHexaNum = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
let hexa = "#"



for(let i = 0; i < 6; i++) {
    
  
   
    let hexaCode = Math.floor(Math.random() * randomHexaNum.length)
    hexa += randomHexaNum[hexaCode]
    btn.addEventListener("click", function(){
        container.style.backgroundColor = hexa
        
       
    })
    
}

console.log(hexa)

// document.querySelector("h1").onclick = "red"