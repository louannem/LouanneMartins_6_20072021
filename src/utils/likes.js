import fetchData from "./fetchData";

export default function likeFunction() {
    let likesNumbers = document.querySelectorAll('.likes__numbers');
    let numberArray = [];
    let likesSum = 0;


    //Récupère le paramètre
    const queryString  = window.location.search;
    //Réucpère l'id
    const urlParam = new URLSearchParams(queryString);
    const urlID = urlParam.get('id')

    fetchData()
    .then(response => {
        for(let i=0; i < response.media.length; i++) {
            if(response.media[i].photographerId == urlID) {

                //Identifie les bloc de like
                let likeID = document.getElementById(response.media[i].id);
                let iconBtn = likeID.nextElementSibling;

                //Fonction pour incrémenter le like
                if(likeID = response.media[i].id) { 
                    //Récupère la valeur des likes
                    let likeNumber = document.getElementById(response.media[i].id).textContent;
                    likeNumber = Number(likeNumber);
 
                    let addLike = () => {
                        likeNumber += 1;
                        document.getElementById(response.media[i].id).innerText = likeNumber;
                    }
                    iconBtn.addEventListener('click', addLike) 
                }
            }
        }
    })


    //for(let i = 0; i < iconBtn.length; i++) {  iconBtn[i].addEventListener('click', addLike)   }
    likesNumbers.forEach(element => { numberArray.push(element.textContent); })
    for(let i= 0; i < numberArray.length; i++) {  likesSum += Number(numberArray[i]);   }
    document.getElementById('likes__total').innerText = likesSum; 
}