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
        this.id = object.id;
        this.alt = object.alt;
        this.image = object.image;
        this.photographerId = object.photographerId;
    }

    display(){
        return `
        <article class="image__block">
            <a href="" class="media__link" aria-label="${this.alt}, close up view">
            <img alt="${this.alt}" src="../img/${this.photographerId}/${this.image}"></img>
            </a>
            <div class="image__meta">
                <span class="image__title">${this.title}</span>
                <div class="likes__block"> 
                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>
                    <i class="fas fa-heart likes__icon" title="likes"></i>
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
        this.id = object.id;
        this.video = object.video;
        this.alt = object.alt;
        this.photographerId = object.photographerId;
    }

    display(){
        return `
        <article class="image__block">
            <a href="" class="media__link" aria-label="${this.alt}, close up view">
            <video src="../img/${this.photographerId}/${this.video}" autoplay=false></video>
            </a>
            <div class="image__meta">
                <span class="image__title">${this.title}</span>
                <div class="likes__block"> 
                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>
                    <i class="fas fa-heart likes__icon" title="likes"></i>
                </div>
            </div>
        </article> 
               `
    }
}


export { MediasFactory, Image, Video}

