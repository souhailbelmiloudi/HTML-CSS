//=============toggele icon navbar============= 
const menuIcon =document.querySelector("#menu-icon")
const navBar =document.querySelector(".navbar")

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')

})
/**=============scroll section active link============= */
let sections =document.querySelectorAll("section")
let navlinks =document.querySelectorAll("header nav a")
window.addEventListener("scroll" ,()=>{
   
   
    sections.forEach(section=>{
        let top =window.scrollY;
        let offset=section.offsetTop-150
        let height =section.offsetHeight
        let id= section.getAttribute("id")
        if(top >= offset && top < offset + height){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector("header nav a[href*="  +id+ "]").classList.add('active');
            })
        }
    })

/**============= sticky navbar =============  */

    let header =document.querySelector("header")

    header.classList.toggle('sticky' ,window.scrollY >100)

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
})





//=============dawnload cv=============
const download =document.getElementById("download")
download.addEventListener("click", ()=>{
    window.open("https://drive.google.com/file/d/1ZGcGGqYrDUHknu9L9VbbgsYNJ3TiCtvT/view?usp=drive_link")
})

