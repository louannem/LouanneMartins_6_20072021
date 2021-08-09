class Lightbox {
    constructor(object) {
        if(object.type === "image") {
            return new ImageLightbox(object);
        } else if(object.type === "video") {
            return new VideoLightbox(object);
        }
        return object;
    }
}


class ImageLightbox {
    constructor(object) {
        this.type = "image";
        this.image = object.image;
        this.photographerId = object.photographerId;
        this.title = object.title;
        this.alt = object.alt; 
    }

    createSlide() {
        return `
        <div class="slide">
            <img src="img/${this.photographerId}/${this.image}" alt="${this.alt}" width="100%"></img>
            <span>${this.title}</span>
        </div>
    `
    }
}


class VideoLightbox {
    constructor(object) {
        this.type = "video";
        this.video = object.video;
        this.photographerId = object.photographerId;
        this.title = object.title;
        this.alt = object.alt; 
    }

    createSlide() {
        return `
        <div class="slide">
            <video src="img/${this.photographerId}/${this.video}" alt="${this.alt}"></video>
            <span>${this.title}</span>
        </div>
    `
    }
}

export {Lightbox, ImageLightbox, VideoLightbox}