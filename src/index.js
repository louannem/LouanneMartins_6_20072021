import {Photographer} from './components/Photographers.js';
import filterTags from './utils/filters'
import scrollBtn from './utils/scrollBtn'

    fetch('data.json')
    .then((response)=> { return response.json();  })
    .then((response)=> {        

       //Créée un nouveau photographe & l'affiche
       for(let i=0; i<response.photographers.length;i++){
            let photographers = new Photographer(response.photographers[i].id, response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline, response.photographers[i].price,  response.photographers[i].portrait);
            document.getElementById('photographers-list').innerHTML += photographers.photographerBlock();


            let photographer = document.getElementById(response.photographers[i].id);
            let tagBlock = document.createElement('div');
            tagBlock.classList.add('tag-list');
            photographer.appendChild(tagBlock);

            for(let j=0; j<response.photographers[i].tags.length; j++) {
                let tags = document.createElement('a');
                tags.setAttribute('href', '');
                tagBlock.appendChild(tags);
                tags.innerText = " #" + response.photographers[i].tags[j] + " ";
                tags.classList.add('tags', response.photographers[i].tags[j]);
            }
            
            filterTags(); 
            scrollBtn();

       }
        
    })
    .catch((error) => {
        console.log(error);
    })

