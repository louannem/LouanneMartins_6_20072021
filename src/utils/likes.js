import fetchData from "./fetchData";

export default function likeFunction() {
    //Récupère le paramètre
    const queryString  = window.location.search;
    //Réucpère l'id
    const urlParam = new URLSearchParams(queryString);
    const urlID = urlParam.get('id');


    let likesNumbers = document.querySelectorAll('.likes__numbers');
    let likeArray = [];
    let storeLike = [];
    let likesSum;

    //Nombre de likes par défaut
    likesSum = 0;
    
    /**
     * Adds each like in the array
     */
    likesNumbers.forEach(element => { likeArray.push(element.textContent); })
    for(let i= 0; i < likeArray.length; i++) {  likesSum += Number(likeArray[i]);   }
    if(document.getElementById('likes__total')) { document.getElementById('likes__total').innerText = likesSum;  }

    fetchData()
    .then(response => {
        for(let i=0; i < response.media.length; i++) {
            if(response.media[i].photographerId == urlID) {

                //Identifie les bloc de like
                let likeID = document.getElementById(response.media[i].id);
                let iconBtn = likeID.nextElementSibling;

                //Fonction pour incrémenter le like
                // eslint-disable-next-line no-cond-assign
                if(likeID = response.media[i].id) { 
                    //Récupère la valeur des likes
                    let likeNumber = document.getElementById(response.media[i].id).textContent;
                    likeNumber = Number(likeNumber);
 
                    storeLike.push(likeNumber);

                    let likeTotal = 0;
                    let addedLike = 0;
                    let likeHolder = 0;

                    // eslint-disable-next-line no-unused-vars
                    for(let j= 0; j < storeLike.length; j++) {  likeTotal += storeLike[j];    }

                    /**
                     * Increment likes number
                     */
                    let addLike = () => {
                        //Condition pour toggle les likes
                        if(likeHolder >= 1) { likeNumber -= 1; likeHolder -= 1; addedLike = -1; }
                        else if(likeHolder == 0) { likeNumber += 1; likeHolder += 1; addedLike = 1; }
                        document.getElementById(response.media[i].id).innerText = likeNumber;

                        likesSum += addedLike;
                        document.getElementById('likes__total').innerText = likesSum; 
                    }

                    if(iconBtn) {iconBtn.addEventListener('click', addLike);}
                }

                
            }
        }
    })

    
}