import fetchData from "./fetchData";

export default function likeFunction() {
    let likesNumbers = document.querySelectorAll('.likes__numbers');
    let likeArray = [];
    let storeLike = [];

    //Si localStorage pre-existant ou non
    let likesSum = 0;
    
    if(localStorage.getItem('Likes total') != null) {
        console.log("Fetch likes");
    } else {
        console.log("Use 0")
    }

    likesNumbers.forEach(element => { likeArray.push(element.textContent); })
    for(let i= 0; i < likeArray.length; i++) {  likesSum += Number(likeArray[i]);   }
    document.getElementById('likes__total').innerText = likesSum; 


    //Récupère le paramètre
    const queryString  = window.location.search;
    //Réucpère l'id
    const urlParam = new URLSearchParams(queryString);
    const urlID = urlParam.get('id');

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
 
                    storeLike.push(likeNumber);

                    let likeTotal = 0;
                    let newSum = 0;
                    let likeHolder = 0;
                    for(let j= 0; j < storeLike.length; j++) {  likeTotal += storeLike[j];    }


                    let addLike = () => {
                        //Condition pour toggle les likes
                        if(likeHolder >= 1) { likeNumber -= 1; likeHolder -= 1; newSum = -1; }
                        else if(likeHolder == 0) { likeNumber += 1; likeHolder += 1; newSum = 1; }
                        document.getElementById(response.media[i].id).innerText = likeNumber;

                        likesSum += newSum;
                        document.getElementById('likes__total').innerText = likesSum; 

                    }
                    iconBtn.addEventListener('click', addLike)
                }
            }
        }
    })
}