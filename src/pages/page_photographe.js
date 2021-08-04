import {Photographer} from '../components/Photographers'
import fetchData from '../utiles/fetchData'
import { MediasFactory} from '../components/Medias'
import {Image} from '../components/Medias'
import '../components/Medias'


//Récupère le paramètre
const queryString  = window.location.search;
//Réucpère l'id
const urlParam = new URLSearchParams(queryString);
const urlID = urlParam.get('id')

fetchData()
.then(response => {

    for (let i = 0; i < response.photographers.length; i++) {
        if(response.photographers[i].id == urlID) {
            let photographer = new Photographer("", response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline, response.photographers[i].price,  response.photographers[i].portrait );
            document.getElementById('photographer-block').innerHTML = photographer.photographerPage();

            let photographerBlock = document.getElementById("photographer__info");
            let tagBlock = document.createElement('div');
            tagBlock.classList.add('tag-list');
            photographerBlock.appendChild(tagBlock);

            for(let j=0; j<response.photographers[i].tags.length; j++) {
                let tags = document.createElement('a');
                tags.setAttribute('href', 'index.html');
                tagBlock.appendChild(tags);
                tags.innerText = " #" + response.photographers[i].tags[j] + " ";
                tags.classList.add('tags');
            }
        }
    }

    for(let i=0; i < response.media.length; i++) {
        if(response.media[i].photographerId == urlID) {
            //Créer les médias ici
            let test = new MediasFactory(response.media[i])
            document.getElementById('medias__list').innerHTML += test.display();
        }
    }
})
