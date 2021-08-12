import fetchData from "./fetchData";

export default function likeFunction() {
    let likesNumbers = document.querySelectorAll('.likes__numbers');
    let numberArray = [];
    let likesSum = 0;

    fetchData()
    .then(response => {
        for(let i=0; i < response.media.length; i++) {
            let likeID = document.getElementById(response.media[i].id);
            console.log(likeID) 
        }
    })
    
    let addLike = () => {
        let likeNumber;
        for(let i = 0; i < likesNumbers.length; i++) {
            likeNumber = Number(likesNumbers[i].textContent);
        }
    }
    let iconBtn = document.getElementsByClassName('likes__icon');

    for(let i = 0; i < iconBtn.length; i++) {
        iconBtn[i].addEventListener('click', addLike)
    }

    likesNumbers.forEach(element => { numberArray.push(element.textContent); })

    for(let i= 0; i < numberArray.length; i++) {  likesSum += Number(numberArray[i]);   }
    document.getElementById('likes__total').innerText = likesSum; 
}