import {Photographer} from '../components/Photographers'
import fetchData from '../utils/fetchData'
import {MediasFactory} from '../components/Medias'
import filterTags from '../utils/filters'
import {Lightbox} from '../components/Lightbox'
import lightboxFunction from '../utils/modal'
import formFunction from '../components/form'
import likeFunction from '../utils/likes'



//Récupère le paramètre
const queryString  = window.location.search;
//Réucpère l'id
const urlParam = new URLSearchParams(queryString);
const urlID = urlParam.get('id')

fetchData()
.then(response => {

    for (let i = 0; i < response.photographers.length; i++) {
        if(response.photographers[i].id == urlID) {
            let photographer = new Photographer(response.photographers[i]);
            document.getElementById('photographer-block').innerHTML = photographer.photographerPage();

            document.getElementById('photographer__meta').innerHTML = photographer.photographerMeta();

            let photographerBlock = document.getElementById("photographer__info");
            let tagBlock = document.createElement('div');
            tagBlock.classList.add('tag-list');
            photographerBlock.appendChild(tagBlock);

            for(let j=0; j<response.photographers[i].tags.length; j++) {
                let tags = document.createElement('a');
                tags.setAttribute('href', 'index.html');
                tagBlock.appendChild(tags);
                
                let spanTag = document.createElement('span');
                spanTag.setAttribute('aria-hidden', 'true');
                spanTag.innerText = "#";
                tags.appendChild(spanTag);

                let spanText = document.createElement('span');
                spanText.innerText = response.photographers[i].tags[j] + " ";
                tags.appendChild(spanText);
                tags.classList.add('tags');
            }


            //Change the page title
            document.title =  response.photographers[i].name;

            //Change the form title
            document.getElementById('modal-title').innerText = "Contactez-moi " + response.photographers[i].name;
        }
    }

    for(let i=0; i < response.media.length; i++) {
        if(response.media[i].photographerId == urlID) {
            //Créer les médias ici
            let newMedias = new MediasFactory(response.media[i])
            document.getElementById('medias__list').innerHTML += newMedias.display();

            let lightbox = new Lightbox(response.media[i]);
            document.getElementById('modal__content').innerHTML += lightbox.createSlide();

            lightboxFunction(); 
             
        }
    }
    filterTags();     
    formFunction();
    likeFunction();
})
