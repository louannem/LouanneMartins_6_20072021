export default function scrollBtn() {
    let scroll = window.scrollY;
    let btn = document.getElementById('scroll-btn');
    if(scroll > 0) { 
        console.log(scroll);  
        btn.style.height = "30px"
        btn.style.opacity = "1";

    }  else if (scroll < 10) {
        btn.style.height = "0px";
        btn.style.opacity = "0";
    }
    window.addEventListener('scroll', scrollBtn)
}