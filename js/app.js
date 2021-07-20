fetch('data.json')
    .then(function(response){
        if(response.ok) {
            return response.json();
        }
    })
    .then((response) => {
        //Affiche les noms des photographes
        for(i=0; i<response.photographers.length; i++) {
            console.log(response.photographers[i].name, response.photographers[i].city, response.photographers[i].country, response.photographers[i].tagline);
            
        }
    })
    .catch((error) => {
        console.log(error);
    })