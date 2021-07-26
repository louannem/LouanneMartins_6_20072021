/*fetch('data.json')
    .then(function(response){
        if(response.ok) {
            return response.json();
        }
    })
    .then((response) => {

        const wrapper = document.getElementById('photographers-list');
        
        //Affiche les noms des photographes
        for(i=0; i<response.photographers.length; i++) {
            let article = document.createElement('article');
            wrapper.appendChild(article);

            //Creates block for name & picture
            let linkBlock = document.createElement('a');
            linkBlock.setAttribute('href', '');
            article.appendChild(linkBlock);

            //Creates & insert the image
            let photographeImg = document.createElement('img');
            let ImgURL = 'img/ellierose/Architecture_Horseshoe.jpg';
            photographeImg.setAttribute('src', ImgURL);
            photographeImg.setAttribute('height', '200px');
            photographeImg.setAttribute('width', '200px');
            photographeImg.setAttribute('alt', '');
            linkBlock.appendChild(photographeImg);

            //Creates and inserts an h2 title and adds the variable
            let photographerName = document.createElement('h2');
            linkBlock.appendChild(photographerName);
            photographerName.innerText = response.photographers[i].name;
            
            //Creates and inserts the locations and adds the variables
            let photographerCity = document.createElement('span');
            photographerCity.classList.add('location');
            article.appendChild(photographerCity);
            photographerCity.innerText = response.photographers[i].city + ", " + response.photographers[i].country;

            //Creates and inserts the tagline and adds the variables
            let photographerLine = document.createElement('span');
            article.appendChild(photographerLine);
            photographerLine.innerText = response.photographers[i].tagline;

            //Creates and inserts the price and adds the variables
            let photographerPrice = document.createElement('span');
            article.appendChild(photographerPrice);
            photographerPrice.classList.add('price');
            photographerPrice.innerText = response.photographers[i].price + "€/jour";

            //Creates and inserts the tags and adds the variables
            let photographerTags = document.createElement('div');
            photographerTags.classList.add('tag-list');
            article.appendChild(photographerTags);

            for(j=0; j<response.photographers[i].tags.length; j++) {
                console.log(response.photographers[i].tags[j]);
                let tags = document.createElement('span');
                photographerTags.appendChild(tags);
                tags.innerText = " #" + response.photographers[i].tags[j] + " ";
            }


            
        }
    })
    .catch((error) => {
        console.log(error);
    })

    */