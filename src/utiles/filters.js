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
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("portrait")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("portrait")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.portrait').forEach(btn => {
            btn.addEventListener('click', filterPortrait);
        });


            //Art
            let filterArt = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("art")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("art")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.art').forEach(btn => {
            btn.addEventListener('click',filterArt);
            });



            //Fashion
            let filterFashion = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("fashion")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("fashion")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.fashion').forEach(btn => {
            btn.addEventListener('click',filterFashion);
            });


            //Fashion
            let filterArchitecture = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("architecture")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("architecture")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.architecture').forEach(btn => {
            btn.addEventListener('click',filterArchitecture);
            });



            //Travel
            let filterTravel = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("travel")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("travel")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.travel').forEach(btn => {
            btn.addEventListener('click',filterTravel);
            });



            //Sport
            let filterSport = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("sports")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("sports")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.sports').forEach(btn => {
            btn.addEventListener('click',filterSport);
            });



            //Animals
            let filterAnimals = (e) => {
                //Fonction ici
                e.preventDefault();
                response.photographers[i].tags.includes('animals') ? document.getElementById(response.photographers[i].id).style.display = 'flex' : response.photographers[i].tags.includes('animals') || (document.getElementById(response.photographers[i].id).style.display = 'none')   
            } 

            //Event listener
            document.querySelectorAll('.animals').forEach(btn => {
            btn.addEventListener('click',filterAnimals);
            });



            //Events
            let filterEvents = (e) => {
                //Fonction ici
                e.preventDefault();
                if(response.photographers[i].tags.includes("events")) {
                    document.getElementById(response.photographers[i].id).style.display = "flex";
                } else if (!response.photographers[i].tags.includes("events")){
                    document.getElementById(response.photographers[i].id).style.display = "none";
                }     
            } 

            //Event listener
            document.querySelectorAll('.events').forEach(btn => {
            btn.addEventListener('click',filterEvents);
            });

        }
    });

}

