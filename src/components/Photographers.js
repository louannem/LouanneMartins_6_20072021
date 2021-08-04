//Class pour un photographe
export class Photographer {
    constructor(id, name,city, country, tagline, price, portrait) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;

    }

    //Fonction pour implémenter les données dans le HTML
    photographerBlock() {
        return `
            <article id="${this.id}" class="photographer__block">
                <a href="photographer.html?id=${this.id}">
                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">
                <h2>${this.name}</h2>
            </a>

            <span class="location">${this.city}, ${this.country}</span>
            <span>${this.tagline}</span>
            <span class="price">${this.price}€/jour</span>
            </article>
        `
    }

    photographerPage() {
        return `
        <aside id="photographer__block">
            <div class="block__col" id="photographer__info">
                <h1 id="photographer__name">${this.name}</h1>

                <div id="location-tagline">
                    <span class="location">${this.city}, ${this.country}</span>
                    <span class="tagline">${this.tagline}</span>
                </div>
            </div>

            <div class="block__col" id="photographer__contact"><button href="" onclick="" id="contact-btn">Contactez-moi</button></div>

            <div class="block__col" id="block__img"><img src="img/index/${this.portrait}" height="200px" width="200px" alt="${this.name}"></div>
            
        </aside>
        `
    }
}
