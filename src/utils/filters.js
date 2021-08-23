import { MediasFactory } from "../components/Medias";
import lightboxFunction from '../utils/modal'
import { Lightbox } from "../components/Lightbox";
import likeFunction from "./likes";
import fetchData from "./fetchData";

export default function filterTags() {
    fetchData()
    .then((response)=> {
        for(let i=0; i<response.photographers.length;i++){
            /**
             * Filter photographers with 'Portrait' tag
             * @param {*} e Event parameter
             */
            let filterPortrait = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('portrait') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('portrait') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.portrait').forEach(btn => { btn.addEventListener('click', filterPortrait);});


            /**
             * Filter photographers with 'Art' tag
             * @param {*} e Event parameter
             */
            let filterArt = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('art') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('art') || (document.getElementById(response.photographers[i].id).style.display = 'none')       
            } 
            document.querySelectorAll('.art').forEach(btn => { btn.addEventListener('click',filterArt);});



            /**
             * Filter photographers with 'Fashion' tag
             * @param {*} e Event parameter
             */
            let filterFashion = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('fashion') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('fashion') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.fashion').forEach(btn => { btn.addEventListener('click',filterFashion); });



            /**
             * Filter photographers with 'Architecture' tag
             * @param {*} e Event parameter
             */
            let filterArchitecture = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('architecture') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('architecture') || (document.getElementById(response.photographers[i].id).style.display = 'none')         
            } 
            document.querySelectorAll('.architecture').forEach(btn => { btn.addEventListener('click',filterArchitecture);});



            /**
             * Filter photographers with 'Travel' tag
             * @param {*} e Event parameter
             */
            let filterTravel = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('travel') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('travel') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.travel').forEach(btn => { btn.addEventListener('click',filterTravel);});



            /**
             * Filter photographers with 'Sport' tag
             * @param {*} e Event parameter
             */
            let filterSport = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('sports') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('sports') || (document.getElementById(response.photographers[i].id).style.display = 'none')          
            } 
            document.querySelectorAll('.sports').forEach(btn => { btn.addEventListener('click',filterSport);});



            /**
             * Filter photographers with 'Animals' tag
             * @param {*} e Event parameter
             */
            let filterAnimals = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('animals') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('animals') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.animals').forEach(btn => { btn.addEventListener('click',filterAnimals); });



            /**
             * Filter photographers with 'Events' tag
             * @param {*} e Event parameter
             */
            let filterEvents = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('events') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('events') || (document.getElementById(response.photographers[i].id).style.display = 'none')        
            } 
            document.querySelectorAll('.events').forEach(btn => { btn.addEventListener('click',filterEvents); });

        }  


        /**
         * Deletes pre-existing medias on the page
         */
        let clearPage = () => {
            let toDelete = document.getElementsByTagName('article'); 
            for (let i = toDelete.length - 1; i >= 0; --i) {toDelete[i].remove();}
        }

        /**
         * Deletes pre-existing lightbox slides
         */
        let clearLightbox = () => {
            let deleteLightbox = document.getElementsByClassName('slide');
            for (let i = deleteLightbox.length - 1; i >= 0; --i) { deleteLightbox[i].remove();}
        }
        
        
        //Récupère le paramètre
        const queryString  = window.location.search;
        //Réucpère l'id
        const urlParam = new URLSearchParams(queryString);
        const urlID = urlParam.get('id');


        /**
         * Filter medias by title
         */
        let filterAlphabet = () => {
                let value = document.getElementById('toggle__filters').value;
                if(value === "titre"){
                    let objectArray = [];
                    let lightboxArray = [];
                    let newMedias;
                    let newSlides;
                    for(let i=0; i < response.media.length; i++) {
                        if(response.media[i].photographerId == urlID) {
                            //Créer les médias ici et les ajoute dans la liste objectArray    
                            newMedias = new MediasFactory(response.media[i])
                            objectArray.push(newMedias);     
                            objectArray.sort(function(a, b){
                                if(a.title < b.title) { return -1; }
                                if(a.title > b.title) { return 1; }
                                return 0;
                            }) 
                            
                            newSlides = new Lightbox(response.media[i]);
                            lightboxArray.push(newSlides);
                            lightboxArray.sort(function(a, b){
                                if(a.title < b.title) { return -1; }
                                if(a.title > b.title) { return 1; }
                                return 0;
                            })
                        }
                    }
                    clearPage();
                    clearLightbox();

                    for(let i = 0; i < objectArray.length; i++) { 
                        document.getElementById('medias__list').innerHTML += objectArray[i].display();
                        document.getElementById('modal__content').innerHTML += lightboxArray[i].createSlide();  
                    }
                    lightboxFunction(); 
                    likeFunction();
                }     
            }

        if(document.getElementById('toggle__filters')) {document.getElementById('toggle__filters').addEventListener('change', filterAlphabet)}


        /**
         * Filter medias by popularity
         */
        let filterPop = () => {
            let value = document.getElementById('toggle__filters').value;
            if(value === "popularite"){
                let objectArray = [];
                let lightboxArray = [];
                let newMedias;
                let newSlides;
                for(let i=0; i < response.media.length; i++) {
                    if(response.media[i].photographerId == urlID) {
                        //Créer les médias ici et les ajoute dans la liste objectArray    
                        newMedias = new MediasFactory(response.media[i])
                        objectArray.push(newMedias);     
                        objectArray.sort((a, b) => b.likes - a.likes); 
                        
                        newSlides = new Lightbox(response.media[i]);
                        lightboxArray.push(newSlides);
                        lightboxArray.sort((a, b) => b.likes - a.likes)
                    }
                }
                clearPage();
                clearLightbox();

                for(let i = 0; i < objectArray.length; i++) { 
                    document.getElementById('medias__list').innerHTML += objectArray[i].display();
                    document.getElementById('modal__content').innerHTML += lightboxArray[i].createSlide();  
                }
                lightboxFunction();
                likeFunction(); 
            }     
        }
        if(document.getElementById('toggle__filters')) {document.getElementById('toggle__filters').addEventListener('change', filterPop)}



        /**
         * Filter medias by date
         */
        
        let filterDate = () => {
            let value = document.getElementById('toggle__filters').value;
                if(value === "date"){
                    let objectArray = [];
                    let lightboxArray = [];
                    let newMedias;
                    let newSlides;
                    for(let i=0; i < response.media.length; i++) {
                        if(response.media[i].photographerId == urlID) {
                            //Créer les médias ici et les ajoute dans la liste objectArray    
                            newMedias = new MediasFactory(response.media[i])
                            objectArray.push(newMedias);     
                            objectArray.sort((a, b) => b.date - a.date); 
                            
                            newSlides = new Lightbox(response.media[i]);
                            lightboxArray.push(newSlides);
                            lightboxArray.sort((a, b) => b.date - a.date)
                        }
                    }
                    clearPage();
                    clearLightbox();

                    for(let i = 0; i < objectArray.length; i++) { 
                        document.getElementById('medias__list').innerHTML += objectArray[i].display();
                        document.getElementById('modal__content').innerHTML += lightboxArray[i].createSlide();  
                    }
                    lightboxFunction();  
                    likeFunction();
                }  
            }     
            if(document.getElementById('toggle__filters')) {document.getElementById('toggle__filters').addEventListener('change', filterDate)}
            
    });
}