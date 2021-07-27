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
        
       //Créée un nouveau photographe & l'affiche dans la console
       for(let i=0; i<response.photographers.length;i++){
            let photographers = new Photographer(response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline, response.photographers[i].price, response.photographers[i].tags, response.photographers[i].portrait);
            document.getElementById('photographers-list').innerHTML += photographers.photographerBlock();
       }
        
    })
    .catch((error) => {
        console.log(error);
    })

