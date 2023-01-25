let elForm = document.querySelector(".form")
let elH2 = document.querySelector(".hh")
let elInput = document.querySelector(".input")
let elButton = document.querySelector(".btn")
let str = ' '
let strr = str.split(' ')
elForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    function toUpper(str) {
        return str
           .toLowerCase()
           .split(' ')
           .map(function(word) {
               return word[0].toUpperCase() + word.substr(1);
           })
           .join(' ');
        }
        strr.push(toUpper(elInput.value))
        elH2.textContent = strr.join(' ');
})