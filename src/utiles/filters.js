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

