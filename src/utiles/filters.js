export default function filterTags() {
    fetch('data.json')
    .then((response)=> {
        if(response.ok) {
            return response.json();
        }
    })
    .then((response)=> {
        for(let i=0; i<response.photographers.length;i++){
            //Portrait
            let filterPortrait = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('portrait') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('portrait') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.portrait').forEach(btn => { btn.addEventListener('click', filterPortrait);});


            //Art
            let filterArt = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('art') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('art') || (document.getElementById(response.photographers[i].id).style.display = 'none')       
            } 
            document.querySelectorAll('.art').forEach(btn => { btn.addEventListener('click',filterArt);});



            //Fashion
            let filterFashion = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('fashion') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('fashion') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.fashion').forEach(btn => { btn.addEventListener('click',filterFashion); });



            //Architecture
            let filterArchitecture = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('architecture') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('architecture') || (document.getElementById(response.photographers[i].id).style.display = 'none')         
            } 
            document.querySelectorAll('.architecture').forEach(btn => { btn.addEventListener('click',filterArchitecture);});



            //Travel
            let filterTravel = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('travel') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('travel') || (document.getElementById(response.photographers[i].id).style.display = 'none')           
            } 
            document.querySelectorAll('.travel').forEach(btn => { btn.addEventListener('click',filterTravel);});



            //Sport
            let filterSport = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('sports') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('sports') || (document.getElementById(response.photographers[i].id).style.display = 'none')          
            } 
            document.querySelectorAll('.sports').forEach(btn => { btn.addEventListener('click',filterSport);});



            //Animals
            let filterAnimals = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('animals') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('animals') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 
            document.querySelectorAll('.animals').forEach(btn => { btn.addEventListener('click',filterAnimals); });



            //Events
            let filterEvents = (e) => {
                e.preventDefault();
                response.photographers[i].tags.includes('events') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('events') || (document.getElementById(response.photographers[i].id).style.display = 'none')        
            } 
            document.querySelectorAll('.events').forEach(btn => { btn.addEventListener('click',filterEvents); });
        }

    });

}


 //Filtres pour la page photographes   
export function filterAlphabet(){
    let objectArray = [];
    for(let i=0; i < response.media.length; i++) {
        if(response.media[i].photographerId == urlID) {
            //Créer les médias ici
            let test = new MediasFactory(response.media[i])
            objectArray.push(test.display());
            //console.log(objectArray);
        }
    }
    let mediasPrnt = objectArray.sort();
    document.getElementById('medias__list').innerHTML += mediasPrnt.join("");
}

