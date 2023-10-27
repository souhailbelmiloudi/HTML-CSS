//============toggele icon navbar============
const menuIcon =document.querySelector("#menu-icon")
const navBar =document.querySelector(".navbar")

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')

})