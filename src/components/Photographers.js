//Class pour un photographe
export class Photographer {
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.city = object.city;
        this.country = object.country;
        this.tagline = object.tagline;
        this.price = object.price;
        this.portrait = object.portrait;

    }

    //Fonction pour implémenter les données dans le HTML
    photographerBlock() {
        return `
            <article id="${this.id}" class="photographer__block">
                <a href="photographer.html?id=${this.id}">
                <img src="../img/index/${this.portrait}" alt="">
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
        <div id="photographer__block">
            <div class="block__col" id="photographer__info">
                <h1 id="photographer__name">${this.name}</h1>

                <div id="location-tagline">
                    <span id="location">${this.city}, ${this.country}</span>
                    <span class="tagline">${this.tagline}</span>
                </div>
            </div>

            <div class="block__col" id="photographer__contact"><button href="" onclick="" id="contact-btn">Contactez-moi</button></div>

            <div class="block__col" id="block__img"><img src="../img/PhotographersIDPhotos/${this.portrait}" height="200px" width="200px" alt="${this.name}"></div>
            
        </div>
        `
    }

    photographerMeta() {
        return `
        <aside>
            <div id="likes__info"><span id="likes__total"></span><i class="fas fa-heart likes__icon"></i></div>
            <div id="price__info">${this.price}€/jour</div>
        </aside>
        `
    }
}
