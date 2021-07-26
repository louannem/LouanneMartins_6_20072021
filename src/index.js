import {photographers} from './photographers';
import photographerBlock from './photographers';



    fetch('data.json')
    .then((response)=> {
        if(response.ok) {
            return response.json();
        }
    })
    .then((response)=> {
        
       //Créée un nouveau photographe & l'affiche dans la console
       for(let i=0; i<response.photographers.length;i++){
            let photograph = new photographers(response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline, response.photographers[i].price, response.photographers[i].tags, response.photographers[i].portrait)
            photograph.photographerBlock();
       }
        
    })
    .catch((error) => {
        console.log(error);
    })

