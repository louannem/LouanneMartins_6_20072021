/* Factory pattern pour les photos & lightbox */

class mediasFactory {
    constructor(title, type, tags, likes, date, price, alt) {
        let media;

        this.title = title;
        this.type = type;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
        this.alt = alt;

        if(type === "image") {
            media = new image();
        } else if(type === "video") {
            media = new video()
        }

        return media;
    }
}


class image {
    constructor(){
        this.type = "image";
    }
}

class video {
    constructor() {
        this.type= "video";
    }
}