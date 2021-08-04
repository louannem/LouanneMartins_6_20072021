(()=>{"use strict";var e={547:(e,t,s)=>{s.d(t,{e:()=>a});class a{constructor(e,t,s,a,r,o,i){this.id=e,this.name=t,this.city=s,this.country=a,this.tagline=r,this.price=o,this.portrait=i}photographerBlock(){return`\n            <article id="${this.id}" class="photographer__block">\n                <a href="photographer.html?id=${this.id}">\n                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">\n                <h2>${this.name}</h2>\n            </a>\n\n            <span class="location">${this.city}, ${this.country}</span>\n            <span>${this.tagline}</span>\n            <span class="price">${this.price}€/jour</span>\n            </article>\n        `}photographerPage(){return`\n        <aside id="photographer__block">\n            <div class="block__col" id="photographer__info">\n                <h1 id="photographer__name">${this.name}</h1>\n\n                <div id="location-tagline">\n                    <span class="location">${this.city}, ${this.country}</span>\n                    <span class="tagline">${this.tagline}</span>\n                </div>\n            </div>\n\n            <div class="block__col" id="photographer__contact"><button href="" onclick="" id="contact-btn">Contactez-moi</button></div>\n\n            <div class="block__col" id="block__img"><img src="img/index/${this.portrait}" height="200px" width="200px" alt="${this.name}"></div>\n            \n        </aside>\n        `}}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=s(547);function t(){let e=window.scrollY,s=document.getElementById("scroll-btn");e>0?(console.log(e),s.style.height="30px",s.style.opacity="1"):e<10&&(s.style.height="0px",s.style.opacity="0"),window.addEventListener("scroll",t)}fetch("data.json").then((e=>e.json())).then((s=>{for(let a=0;a<s.photographers.length;a++){let r=new e.e(s.photographers[a].id,s.photographers[a].name,s.photographers[a].city,s.photographers[a].country,s.photographers[a].tagline,s.photographers[a].price,s.photographers[a].portrait);document.getElementById("photographers-list").innerHTML+=r.photographerBlock();let o=document.getElementById(s.photographers[a].id),i=document.createElement("div");i.classList.add("tag-list"),o.appendChild(i);for(let e=0;e<s.photographers[a].tags.length;e++){let t=document.createElement("a");t.setAttribute("href",""),i.appendChild(t),t.innerText=" #"+s.photographers[a].tags[e]+" ",t.classList.add("tags",s.photographers[a].tags[e])}fetch("data.json").then((e=>{if(e.ok)return e.json()})).then((e=>{for(let t=0;t<e.photographers.length;t++){let s=s=>{s.preventDefault(),e.photographers[t].tags.includes("portrait")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("portrait")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".portrait").forEach((e=>{e.addEventListener("click",s)}));let a=s=>{s.preventDefault(),e.photographers[t].tags.includes("art")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("art")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".art").forEach((e=>{e.addEventListener("click",a)}));let r=s=>{s.preventDefault(),e.photographers[t].tags.includes("fashion")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("fashion")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".fashion").forEach((e=>{e.addEventListener("click",r)}));let o=s=>{s.preventDefault(),e.photographers[t].tags.includes("architecture")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("architecture")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".architecture").forEach((e=>{e.addEventListener("click",o)}));let i=s=>{s.preventDefault(),e.photographers[t].tags.includes("travel")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("travel")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".travel").forEach((e=>{e.addEventListener("click",i)}));let n=s=>{s.preventDefault(),e.photographers[t].tags.includes("sports")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("sports")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".sports").forEach((e=>{e.addEventListener("click",n)}));let l=s=>{s.preventDefault(),e.photographers[t].tags.includes("animals")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("animals")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".animals").forEach((e=>{e.addEventListener("click",l)}));let h=s=>{s.preventDefault(),e.photographers[t].tags.includes("events")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("events")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".events").forEach((e=>{e.addEventListener("click",h)}))}})),t()}})).catch((e=>{console.log(e)}))})(),(()=>{var e=s(547);class t{constructor(e){return"image"===e.type?new a(e):"video"===e.type?new r(e):e}}class a{constructor(e){this.title=e.title,this.type="image",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.price=e.price,this.alt=e.alt,this.image=e.image,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="">\n            <img alt="${this.alt}" src="img/${this.photographerId}/${this.image}" width="350px" height="300px"></img>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon"></i>\n                </div>\n            </div>\n        </article>  \n        `}}class r{constructor(e){this.title=e.title,this.type="video",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.price=e.price,this.video=e.video,this.alt=e.alt,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="">\n            <video src="img/${this.photographerId}/${this.video}" width="350px" height="300px" autoplay=false></video>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon" aria-label ="likes"></i>\n                </div>\n            </div>\n        </article> \n               `}}const o=window.location.search,i=new URLSearchParams(o).get("id");(async function(){return(await fetch("data.json")).json()})().then((s=>{for(let t=0;t<s.photographers.length;t++)if(s.photographers[t].id==i){let a=new e.e("",s.photographers[t].name,s.photographers[t].city,s.photographers[t].country,s.photographers[t].tagline,s.photographers[t].price,s.photographers[t].portrait);document.getElementById("photographer-block").innerHTML=a.photographerPage();let r=document.getElementById("photographer__info"),o=document.createElement("div");o.classList.add("tag-list"),r.appendChild(o);for(let e=0;e<s.photographers[t].tags.length;e++){let a=document.createElement("a");a.setAttribute("href","index.html"),o.appendChild(a),a.innerText=" #"+s.photographers[t].tags[e]+" ",a.classList.add("tags")}}for(let e=0;e<s.media.length;e++)if(s.media[e].photographerId==i){let a=new t(s.media[e]);document.getElementById("medias__list").innerHTML+=a.display()}}))})()})();