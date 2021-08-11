export default function likeFunction() {
    let likesNumbers = document.querySelectorAll('.likes__numbers');
    let numberArray = [];
    let likesSum = 0;
    likesNumbers.forEach(element => { numberArray.push(element.textContent); })

    for(let i= 0; i < numberArray.length; i++) {  likesSum += Number(numberArray[i]);   }
    document.getElementById('likes__total').innerText = likesSum; 
}