let ren=document.querySelector(".notes")
if(localStorage.getItem("a")){
    ren.innerHTML=localStorage.getItem("a")
}
function render(){
    ren.innerHTML+=`<div contenteditable="true" class="note" spellcheck="false"></div>
    `
}
function save(){
    localStorage.setItem("a",ren.innerHTML)
    console.log(localStorage.getItem("a"))
}
function dlt(){
    localStorage.clear()
    ren.innerHTML=""
}