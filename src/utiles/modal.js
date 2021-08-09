import fetchData from '../utiles/fetchData'

let articles = document.getElementsByClassName('image__block');
console.log(articles)


export default function lightboxFunction() {
    let slideIndex = 1;
    showSlide(slideIndex);

    let openLightbox = (e) => { e.preventDefault(); document.getElementById('lightbox').style.display = 'block';}
    for (let j = 0; j < articles.length; j++) { articles[j].addEventListener('click', openLightbox); }

    let closeLightbox = () => {  document.getElementById('lightbox').style.display = 'none'; }
    document.getElementById('close').addEventListener('click', closeLightbox);

    function switchSlide(n) {
        showSlide(slideIndex += n);
    };

    function toSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName('slide');
        let i;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    window.addEventListener('keydown', function(e) {
        switch (e.key) {
            case "Escape":
                closeLightbox();
                break;

                case "ArrowRight":
                   switchSlide(1)
                    break;
                case "ArrowLeft":
                    switchSlide(-1)
                    break;
        }
        e.preventDefault();
    })
 
    /*
    fetchData()
    .then(response => {        
    })
    */
}


