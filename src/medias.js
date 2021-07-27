/* Factory pattern pour les photos & lightbox */

class MediasFactory {
    constructor(object) {

        if(object.type === "image") {
            return new image(object)
        } else if(object.type === "video") {
            return new video(object)
        }
        return media;
    }
}


class Image {
    constructor(object){
        this.title = object.title;
        this.type = object.type;
        this.tags = object.tags;
        this.likes = object.likes;
        this.date = object.date;
        this.price = object.price;
        this.alt = object.alt;
    }
}

class Video {
    constructor(object) {
        this.title = object.title;
        this.type = object.type;
        this.tags = object.tags;
        this.likes = object.likes;
        this.date = object.date;
        this.price = object.price;
        this.alt = object.alt;
    }
}