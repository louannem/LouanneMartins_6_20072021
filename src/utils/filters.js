import { MediasFactory } from "../components/Medias";
import lightboxFunction from '../utils/modal'
import { Lightbox } from "../components/Lightbox";

export default function filterTags() {
    fetch('data.json')
    .then((response)=> {
        if(response.ok) {
            return response.json();
        }
    })
    .then((response)=> {
        for(let i=0; i<response.photographers.length;i++){
            //Portrait
            let filterPortrait = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('portrait') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('portrait') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.portrait').forEach(btn => { btn.addEventListener('click', filterPortrait);});


            //Art
            let filterArt = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('art') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('art') || (document.getElementById(response.photographers[i].id).style.display = 'none')       
            } 
            document.querySelectorAll('.art').forEach(btn => { btn.addEventListener('click',filterArt);});



            //Fashion
            let filterFashion = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('fashion') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('fashion') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.fashion').forEach(btn => { btn.addEventListener('click',filterFashion); });



            //Architecture
            let filterArchitecture = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('architecture') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('architecture') || (document.getElementById(response.photographers[i].id).style.display = 'none')         
            } 
            document.querySelectorAll('.architecture').forEach(btn => { btn.addEventListener('click',filterArchitecture);});



            //Travel
            let filterTravel = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('travel') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('travel') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.travel').forEach(btn => { btn.addEventListener('click',filterTravel);});



            //Sport
            let filterSport = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('sports') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('sports') || (document.getElementById(response.photographers[i].id).style.display = 'none')          
            } 
            document.querySelectorAll('.sports').forEach(btn => { btn.addEventListener('click',filterSport);});



            //Animals
            let filterAnimals = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('animals') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('animals') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.animals').forEach(btn => { btn.addEventListener('click',filterAnimals); });



            //Events
            let filterEvents = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('events') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('events') || (document.getElementById(response.photographers[i].id).style.display = 'none')        
            } 
            document.querySelectorAll('.events').forEach(btn => { btn.addEventListener('click',filterEvents); });

        }  


        //Retire les articles présents
        let clearPage = () => {
            let toDelete = document.getElementsByTagName('article'); 
            for (let i = toDelete.length - 1; i >= 0; --i) {toDelete[i].remove();}
        }

        let clearLightbox = () => {
            let deleteLightbox = document.getElementsByClassName('slide');
            for (let i = deleteLightbox.length - 1; i >= 0; --i) { deleteLightbox[i].remove();}
        }
        
        
        //Récupère le paramètre
        const queryString  = window.location.search;
        //Réucpère l'id
        const urlParam = new URLSearchParams(queryString);
        const urlID = urlParam.get('id');

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
            }     
        }
        document.getElementById('toggle__filters').addEventListener('change', filterAlphabet)



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
            }     
        }
        document.getElementById('toggle__filters').addEventListener('change', filterPop)


        
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
            }  
        }     
    document.getElementById('toggle__filters').addEventListener('change', filterDate)
        
    });
}