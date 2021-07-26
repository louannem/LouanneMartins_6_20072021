//Class pour un photographe
export class photographers {
    constructor(name,city, country, tagline, price, tags = [], portrait) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tags = tags; 
        this.portrait = portrait;

    }

    //Fonction pour implémenter les données dans le HTML
    photographerBlock(){
    
        //Gets the photograph list wrapper, create and insert a new object
        const wrapper = document.getElementById('photographers-list');
        let article = document.createElement('article');
        wrapper.appendChild(article);

         //Creates block for name & picture
         let linkBlock = document.createElement('a');
         linkBlock.setAttribute('href', '');
         article.appendChild(linkBlock);

        //Creates & insert the image
        let photographeImg = document.createElement('img');
        let ImgURL = 'img/index/' + this.portrait;
        photographeImg.setAttribute('src', ImgURL);
        photographeImg.setAttribute('height', '200px');
        photographeImg.setAttribute('width', '200px');
        photographeImg.setAttribute('alt', '');
        linkBlock.appendChild(photographeImg);

        //Creates and inserts an h2 title and adds the variable
        let photographerName = document.createElement('h2');
        linkBlock.appendChild(photographerName);
        photographerName.innerText = this.name;


        //Creates and inserts the locations and adds the variables
       let photographerCity = document.createElement('span');
        photographerCity.classList.add('location');
        article.appendChild(photographerCity);
        photographerCity.innerText = this.city + ", " + this.country;

        //Creates and inserts the tagline and adds the variables
        let photographerLine = document.createElement('span');
        article.appendChild(photographerLine);
        photographerLine.innerText = this.tagline;

        //Creates and inserts the price and adds the variables
        let photographerPrice = document.createElement('span');
        article.appendChild(photographerPrice);
        photographerPrice.classList.add('price');
        photographerPrice.innerText = this.price + "€/jour";


        //Creates and inserts the tags and adds the variables
        let photographerTags = document.createElement('div');
        photographerTags.classList.add('tag-list');
        article.appendChild(photographerTags);
        photographerTags.innerText = this.tags;

    }
}
