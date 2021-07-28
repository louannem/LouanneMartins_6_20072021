import {Photographer} from './Photographers';
import photographerBlock from './Photographers';
import dataCard from './Photographers'



    fetch('data.json')
    .then((response)=> {
        if(response.ok) {
            return response.json();
        }
    })
    .then((response)=> {

        let portraitBtn = document.getElementById('portrait');
        let artBtn = document.getElementById('art');
        let fashionBtn= document.getElementById('fashion');
        let architectureBtn = document.getElementById('architecture');
        let travelBtn = document.getElementById('travel');
        let sportsBtn = document.getElementById('sport');
        let animalsBtn = document.getElementById('animals');
        let eventsBtn = document.getElementById('events');
        
       //Créée un nouveau photographe & l'affiche dans la console
       for(let i=0; i<response.photographers.length;i++){
            let photographers = new Photographer(response.photographers[i].id, response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline, response.photographers[i].price, response.photographers[i].tags, response.photographers[i].portrait);
            document.getElementById('photographers-list').innerHTML += photographers.photographerBlock();

            
            //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
            portraitBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("portrait")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("portrait")){
                    document.getElementById(response.photographers[i]).style.display = "none";
                }            
            });

             //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
             artBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("art")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("art")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });


            //Add event listener + fonction pour cacher les photographes n'ayant pas 'fashion' dans leurs tags
            fashionBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("fashion")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("fashion")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });


            //Add event listener + fonction pour cacher les photographes n'ayant pas 'architecture' dans leurs tags
            architectureBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("architecture")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("architecture")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });


            //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
            travelBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("travel")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("travel")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });


            //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
            sportsBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("sport")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("sport")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });

            //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
            animalsBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("animals")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("animals")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });

            //Add event listener + fonction pour cacher les photographes n'ayant pas 'portrait' dans leurs tags
            eventsBtn.addEventListener('click', function(e) {
                //Condition pour cacher les photographe si un élément n'est pas dans leurs tags
                e.preventDefault();
                if(response.photographers[i].tags.includes("events")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                }  else if (!response.photographers[i].tags.includes("events")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }        
            });

       }
        
    })
    .catch((error) => {
        console.log(error);
    })

