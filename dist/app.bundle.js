(()=>{"use strict";var e={96:(e,t,n)=>{n.d(t,{ey:()=>i});class i{constructor(e){return"image"===e.type?new s(e):"video"===e.type?new l(e):e}}class s{constructor(e){this.type="image",this.image=e.image,this.photographerId=e.photographerId,this.title=e.title,this.alt=e.alt,this.likes=e.likes,this.date=e.date}createSlide(){return`\n        <div class="slide">\n            <div class="media__block"><img class="slide__media" src="img/${this.photographerId}/${this.image}" alt="${this.alt}" width="100%"></img></div>\n            <span>${this.title}</span>\n        </div>\n    `}}class l{constructor(e){this.type="video",this.video=e.video,this.photographerId=e.photographerId,this.title=e.title,this.alt=e.alt,this.likes=e.likes,this.date=e.date}createSlide(){return`\n        <div class="slide">\n            <video controls class="slide__media" src="img/${this.photographerId}/${this.video}" alt="${this.alt}"></video>\n            <span>${this.title}</span>\n        </div>\n    `}}},289:(e,t,n)=>{n.d(t,{xR:()=>i});class i{constructor(e){return"image"===e.type?new s(e):"video"===e.type?new l(e):e}}class s{constructor(e){this.title=e.title,this.type="image",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.id=e.id,this.alt=e.alt,this.image=e.image,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="" class="media__link">\n            <img alt="${this.alt}" src="img/${this.photographerId}/${this.image}" width="350px" height="300px"></img>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon"></i>\n                </div>\n            </div>\n        </article>  \n        `}}class l{constructor(e){this.title=e.title,this.type="video",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.id=e.id,this.video=e.video,this.alt=e.alt,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="" class="media__link">\n            <video src="img/${this.photographerId}/${this.video}" width="350px" height="300px" autoplay=false></video>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon" aria-label ="likes"></i>\n                </div>\n            </div>\n        </article> \n               `}}},547:(e,t,n)=>{n.d(t,{e:()=>i});class i{constructor(e,t,n,i,s,l,a){this.id=e,this.name=t,this.city=n,this.country=i,this.tagline=s,this.price=l,this.portrait=a}photographerBlock(){return`\n            <article id="${this.id}" class="photographer__block">\n                <a href="photographer.html?id=${this.id}">\n                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">\n                <h2>${this.name}</h2>\n            </a>\n\n            <span class="location">${this.city}, ${this.country}</span>\n            <span>${this.tagline}</span>\n            <span class="price">${this.price}€/jour</span>\n            </article>\n        `}photographerPage(){return`\n        <div id="photographer__block">\n            <div class="block__col" id="photographer__info">\n                <h1 id="photographer__name">${this.name}</h1>\n\n                <div id="location-tagline">\n                    <span class="location">${this.city}, ${this.country}</span>\n                    <span class="tagline">${this.tagline}</span>\n                </div>\n            </div>\n\n            <div class="block__col" id="photographer__contact"><button href="" onclick="" id="contact-btn">Contactez-moi</button></div>\n\n            <div class="block__col" id="block__img"><img src="img/index/${this.portrait}" height="200px" width="200px" alt="${this.name}"></div>\n            \n        </div>\n        `}photographerMeta(){return`\n        <aside>\n            <div id="likes__info"><span id="likes__total"></span><i class="fas fa-heart likes__icon"></i></div>\n            <div id="price__info">${this.price}€/jour</div>\n        </aside>\n        `}}},464:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(289),s=n(136),l=n(96);function a(){fetch("data.json").then((e=>{if(e.ok)return e.json()})).then((e=>{for(let t=0;t<e.photographers.length;t++){let n=n=>{n.preventDefault(),e.photographers[t].tags.includes("portrait")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("portrait")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".portrait").forEach((e=>{e.addEventListener("click",n)}));let i=n=>{n.preventDefault(),e.photographers[t].tags.includes("art")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("art")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".art").forEach((e=>{e.addEventListener("click",i)}));let s=n=>{n.preventDefault(),e.photographers[t].tags.includes("fashion")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("fashion")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".fashion").forEach((e=>{e.addEventListener("click",s)}));let l=n=>{n.preventDefault(),e.photographers[t].tags.includes("architecture")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("architecture")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".architecture").forEach((e=>{e.addEventListener("click",l)}));let a=n=>{n.preventDefault(),e.photographers[t].tags.includes("travel")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("travel")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".travel").forEach((e=>{e.addEventListener("click",a)}));let o=n=>{n.preventDefault(),e.photographers[t].tags.includes("sports")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("sports")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".sports").forEach((e=>{e.addEventListener("click",o)}));let r=n=>{n.preventDefault(),e.photographers[t].tags.includes("animals")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("animals")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".animals").forEach((e=>{e.addEventListener("click",r)}));let d=n=>{n.preventDefault(),e.photographers[t].tags.includes("events")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("events")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".events").forEach((e=>{e.addEventListener("click",d)}))}let t=()=>{let e=document.getElementsByTagName("article");for(let t=e.length-1;t>=0;--t)e[t].remove()},n=()=>{let e=document.getElementsByClassName("slide");for(let t=e.length-1;t>=0;--t)e[t].remove()};const a=window.location.search,o=new URLSearchParams(a).get("id");document.getElementById("toggle__filters").addEventListener("change",(()=>{if("titre"===document.getElementById("toggle__filters").value){let a,r,d=[],h=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==o&&(a=new i.xR(e.media[t]),d.push(a),d.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})),r=new l.ey(e.media[t]),h.push(r),h.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})));t(),n();for(let e=0;e<d.length;e++)document.getElementById("medias__list").innerHTML+=d[e].display(),document.getElementById("modal__content").innerHTML+=h[e].createSlide();(0,s.Z)()}})),document.getElementById("toggle__filters").addEventListener("change",(()=>{if("popularite"===document.getElementById("toggle__filters").value){let a,r,d=[],h=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==o&&(a=new i.xR(e.media[t]),d.push(a),d.sort(((e,t)=>t.likes-e.likes)),r=new l.ey(e.media[t]),h.push(r),h.sort(((e,t)=>t.likes-e.likes)));t(),n();for(let e=0;e<d.length;e++)document.getElementById("medias__list").innerHTML+=d[e].display(),document.getElementById("modal__content").innerHTML+=h[e].createSlide();(0,s.Z)()}})),document.getElementById("toggle__filters").addEventListener("change",(()=>{if("date"===document.getElementById("toggle__filters").value){let a,r,d=[],h=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==o&&(a=new i.xR(e.media[t]),d.push(a),d.sort(((e,t)=>t.date-e.date)),r=new l.ey(e.media[t]),h.push(r),h.sort(((e,t)=>t.date-e.date)));t(),n();for(let e=0;e<d.length;e++)document.getElementById("medias__list").innerHTML+=d[e].display(),document.getElementById("modal__content").innerHTML+=h[e].createSlide();(0,s.Z)()}}))}))}},136:(e,t,n)=>{n.d(t,{Z:()=>s});let i=document.getElementsByClassName("media__link");function s(){let e=1;o(e);let t=e=>{e.preventDefault(),document.getElementById("lightbox").style.display="block"};for(let e=0;e<i.length;e++)i[e].addEventListener("click",t);let n=()=>{document.getElementById("lightbox").style.display="none"};document.getElementById("close").addEventListener("click",n);let s=t=>{o(e+=t)},l=document.getElementsByClassName("next");for(let e=0;e<l.length;e++)l[e].addEventListener("click",(function(){s(1)}));let a=document.getElementsByClassName("previous");for(let e=0;e<a.length;e++)a[e].addEventListener("click",(function(){s(-1)}));for(let t=0;t<i.length;t++)i[t].addEventListener("click",(function(){o(e=t+1)}));function o(t){let n=document.getElementsByClassName("slide");t>n.length&&(e=1),t<1&&(e=n.length);for(let e=0;e<n.length;e++)n[e].style.display="none";n[e-1].style.display="block"}window.addEventListener("keydown",(function(e){switch(e.key){case"Escape":n();break;case"ArrowRight":s(1);break;case"ArrowLeft":s(-1)}}))}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(547),t=n(464);function i(){let e=window.scrollY,t=document.getElementById("scroll-btn");e>0?(t.style.height="30px",t.style.opacity="1"):e<10&&(t.style.height="0px",t.style.opacity="0"),window.addEventListener("scroll",i)}fetch("data.json").then((e=>e.json())).then((n=>{for(let s=0;s<n.photographers.length;s++){let l=new e.e(n.photographers[s].id,n.photographers[s].name,n.photographers[s].city,n.photographers[s].country,n.photographers[s].tagline,n.photographers[s].price,n.photographers[s].portrait);document.getElementById("photographers-list").innerHTML+=l.photographerBlock();let a=document.getElementById(n.photographers[s].id),o=document.createElement("div");o.classList.add("tag-list"),a.appendChild(o);for(let e=0;e<n.photographers[s].tags.length;e++){let t=document.createElement("a");t.setAttribute("href",""),o.appendChild(t),t.innerText=" #"+n.photographers[s].tags[e]+" ",t.classList.add("tags",n.photographers[s].tags[e])}(0,t.Z)(),i()}})).catch((e=>{console.log(e)}))})(),(()=>{var e=n(547);async function t(){return(await fetch("data.json")).json()}var i=n(289),s=n(464),l=n(96),a=n(136);const o=window.location.search,r=new URLSearchParams(o).get("id");t().then((n=>{for(let t=0;t<n.photographers.length;t++)if(n.photographers[t].id==r){let i=new e.e("",n.photographers[t].name,n.photographers[t].city,n.photographers[t].country,n.photographers[t].tagline,n.photographers[t].price,n.photographers[t].portrait);document.getElementById("photographer-block").innerHTML=i.photographerPage(),document.getElementById("photographer__meta").innerHTML=i.photographerMeta();let s=document.getElementById("photographer__info"),l=document.createElement("div");l.classList.add("tag-list"),s.appendChild(l);for(let e=0;e<n.photographers[t].tags.length;e++){let i=document.createElement("a");i.setAttribute("href","index.html"),l.appendChild(i),i.innerText=" #"+n.photographers[t].tags[e]+" ",i.classList.add("tags")}}for(let e=0;e<n.media.length;e++)if(n.media[e].photographerId==r){let t=new i.xR(n.media[e]);document.getElementById("medias__list").innerHTML+=t.display();let s=new l.ey(n.media[e]);document.getElementById("modal__content").innerHTML+=s.createSlide()}(0,s.Z)(),(0,a.Z)(),function(){document.getElementById("contact-btn").addEventListener("click",(()=>{document.getElementById("form__background").style.display="flex"}));let e=()=>{document.getElementById("form__background").style.display="none"};document.getElementById("close-form").addEventListener("click",e),document.getElementById("submit-btn").addEventListener("click",(e=>{let t=document.getElementById("nom").value,n=document.getElementById("prenom").value,i=document.getElementById("email").value,s=document.getElementById("message").value;e.preventDefault(),document.getElementById("form__background").style.display="none",console.log("Nom:",t,"Prénom: ",n,"Email: ",i,"Message: ",s)})),window.addEventListener("keydown",(function(t){switch(t.key){case"Escape":e()}}))}(),function(){let e=document.querySelectorAll(".likes__numbers"),n=[],i=0;t().then((e=>{for(let t=0;t<e.media.length;t++){let n=document.getElementById(e.media[t].id);console.log(n)}}));let s=()=>{let t;for(let n=0;n<e.length;n++)t=Number(e[n].textContent)},l=document.getElementsByClassName("likes__icon");for(let e=0;e<l.length;e++)l[e].addEventListener("click",s);e.forEach((e=>{n.push(e.textContent)}));for(let e=0;e<n.length;e++)i+=Number(n[e]);document.getElementById("likes__total").innerText=i}()}))})()})();