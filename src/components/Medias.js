/* Factory pattern pour les photos & lightbox */

 class MediasFactory {
    constructor(object) {
        if(object.type === "image") {
            return new Image(object);
        } else if(object.type === "video") {
            return new Video(object);
        }
        return object;
    }
}


class Image {
    constructor(object){
        this.title = object.title;
        this.type = "image";
        this.tags = object.tags;
        this.likes = object.likes;
        this.date = object.date;
        this.price = object.price;
        this.alt = object.alt;
        this.image = object.image;
        this.photographerId = object.photographerId;
    }

    display(){
        return `
        <article class="image__block">
            <a href="">
            <img alt="${this.alt}" src="img/${this.photographerId}/${this.image}" width="350px" height="300px"></img>
            </a>
            <div class="image__meta">
                <span class="image__title">${this.title}</span>
                <div class="likes__block"> 
                    <span class="likes__numbers">${this.likes}</span>
                    <i class="fas fa-heart likes__icon"></i>
                </div>
            </div>
        </article>  
        `   
    }
}

class Video {
    constructor(object) {
        this.title = object.title;
        this.type = "video";
        this.tags = object.tags;
        this.likes = object.likes;
        this.date = object.date;
        this.price = object.price;
        this.alt = object.alt;
    }

    display(){
        return `
        <p>${this.title}</p>        `
    }
}


export { MediasFactory, Image, Video}

