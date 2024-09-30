let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let typ = document.querySelector(".wrapper .thankYouPage")
let btns = document.querySelectorAll("section button")
let formBtn = document.querySelector(".form button")
let username = document.getElementsByName("username")[0];
let userphone = document.getElementsByName("userphone")[0];
btns.forEach(btn =>{
    btn.addEventListener('click', showpopUp)
})

wrapper.addEventListener('click', hidepopUp)

function showpopUp(){
    wrapper.style.display = "flex"
    popUp.style.display = "flex"
    typ.style.display = "none"
}
function hidepopUp(){
    let elem = event.target



}
formBtn.addEventListener("click", sendForm)

function sendForm(){
 event.preventDefault()
 if(username.value.length > 1){
    if(userphone.value.length == 13){
        showTYP()
    }else{
        console.log("Неверный номер")
    }
 }else{
    console.log("Короткое имя")
 }
} 
function showTYP(){
    popUp.style.display = "none"
    typ.style.display = "flex"
}


