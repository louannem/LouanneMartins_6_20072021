let articles = document.getElementsByClassName('media__link');

export default function lightboxFunction() {
    let slideIndex = 1;
    showSlide(slideIndex);

    /**
     * Opens the lightbox
     * @param {*} e Event parameter
     */
    let openLightbox = (e) => { 
        e.preventDefault(); 
        document.getElementById('next').focus();
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
        document.getElementById('main__wrapper').setAttribute('aria-hidden', 'true');
        document.getElementById('main__wrapper').classList.add('hide');
    }
    for (let j = 0; j < articles.length; j++) { articles[j].addEventListener('click', openLightbox); }


    /**
     * Close the lightbox
     */
    let closeLightbox = () => {  
        document.getElementById('lightbox').style.display = 'none'; 
        document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
        document.getElementById('main__wrapper').setAttribute('aria-hidden', 'false');
        document.getElementById('main__wrapper').classList.remove('hide');
    }
    document.getElementById('close').addEventListener('click', closeLightbox);


    /**
     * Switch to previous or next slide
     * @param {*} n New slide index
     */
    let switchSlide = (n) => { showSlide(slideIndex += n); }

    //Switch to next slide
    let nextBtn =  document.getElementsByClassName('next');
    for(let i=0; i<nextBtn.length;i++) { nextBtn[i].addEventListener('click', function() {
        switchSlide(1)
    });}

    //Switch to previous slide
    let previousBtn =  document.getElementsByClassName('previous');
    for(let i=0; i<previousBtn.length;i++) { previousBtn[i].addEventListener('click', function() {
        switchSlide(-1)
    });}


    /**
     * Open clicked on media
     * @param {*} n Media index
     */
    function toSlide(n) { showSlide(slideIndex = n); }
    for(let i=0; i<articles.length;i++) { articles[i].addEventListener('click', function() {
        toSlide(i+1)
    });}

    /**
     * Determines slide index 
     * @param {*} n new slide index
     */
    function showSlide(n) {
        let slides = document.getElementsByClassName('slide');
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
        slides[slideIndex-1].style.display = "block";
    }

    //Keyboard controlers for the lightbox
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
    })
}