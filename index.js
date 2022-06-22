// ===================================

// creating a responsive navbar component

// =================================


const mobile_nav= document.querySelector(".mobile-navbar-btn")
const headerElem= document.querySelector(".header");
mobile_nav.addEventListener("click" , ()=>{
    headerElem.classList.toggle('active')
})


// ===================================

// creating a portfolio component

// =================================

const p_btns= document.querySelector(".p-btns");
const p_btn= document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked); 

p_btn.forEach ((curElem) => curElem.classList.remove("p-btn-active"));
    
p_btn_clicked.classList.add("p-btn-active");


// to find the number in data atribute
const btn_num= p_btn_clicked.dataset.btnNum;
console.log(btn_num);

const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)

p_img_elem.forEach((curElem)=> curElem.classList.add("p-image-not-active"));
img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));


//p_img_elem
//p-btn--1
});

 
//scroll to top button
const heroSection=document.querySelector(".section-hero")
const footerElem= document.querySelector(".section-footer");
const scrollElement= document.createElement("div");
scrollElement.classList.add("scrollTop-style");


scrollElement.innerHTML=`<i class="fa-solid fa-arrow-up scroll-top"> </i>`

footerElem.after(scrollElement);


const scrollTop=()=>{
    heroSection.scrollIntoView({behavior:"smooth"})
}
scrollElement.addEventListener("click" , scrollTop)





