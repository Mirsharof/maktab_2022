// alert("Xush kelibsiz!!!");
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0);
})


// show answer for question
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==="bx bx-plus"){
            icon.className= "bx bx-minus";
        }else{
            icon.className= "bx bx-plus";
        }
    })
})