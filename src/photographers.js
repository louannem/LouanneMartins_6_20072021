//Class pour un photographe
export class Photographer {
    constructor(id, name,city, country, tagline, price, tags = [], portrait) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tags = tags; 
        this.portrait = portrait;

    }

    //Fonction pour implémenter les données dans le HTML
    photographerBlock() {
        return `
            <article id="${this.id}">
                <a href="">
                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">
                <h2>${this.name}</h2>
            </a>

            <span class="location">${this.city}, ${this.country}</span>
            <span>${this.tagline}</span>
            <span class="price">${this.price}€/jour</span>

            <div class="tag-list">${this.tags}</div>
            </article>
        `
    }
}
