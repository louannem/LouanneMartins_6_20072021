import fetchData from '../utiles/fetchData'

let articles = document.getElementsByClassName('image__block');

export default function lightboxFunction() {
    fetchData()
    .then(response => {
        for(let i = 0; i < response.media.length; i++) {

            let openLightbox = (e) => { e.preventDefault(); document.getElementById('lightbox').style.display = 'block';}
            for (let j = 0; j < articles.length; j++) { articles[j].addEventListener('click', openLightbox); }

            let closeLightbox = () => {  document.getElementById('lightbox').style.display = 'none'; }
            document.getElementById('close').addEventListener('click', closeLightbox);


        }

        let slideIndex = 1;
        modalSlide(slideIndex);
        
        function changeSlide(j) {
            modalSlide(slideIndex += j);
        };

        function toSlide(j) {
            modalSlide(slideIndex = j);
        }

        //for (let i = 0; i < articles.length; i++) {articles[i].addEventListener('click', toSlide(i));}


        function modalSlide(j) {
            const slides = document.getElementsByClassName('slide');

            if (j > slides.length) { slideIndex = 1;};                  
            if (j < 1) {slideIndex = slides.length;};                
            for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none";};
            slides[slideIndex - 1].style.display = 'block';
        }
        
    })
}


