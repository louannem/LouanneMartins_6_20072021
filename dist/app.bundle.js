(()=>{"use strict";var e={96:(e,t,n)=>{n.d(t,{ey:()=>i});class i{constructor(e){return"image"===e.type?new l(e):"video"===e.type?new s(e):e}}class l{constructor(e){this.type="image",this.image=e.image,this.photographerId=e.photographerId,this.title=e.title,this.alt=e.alt,this.likes=e.likes,this.date=e.date}createSlide(){return`\n        <div class="slide">\n            <div class="media__block"><img class="slide__media" src="img/${this.photographerId}/${this.image}" alt="${this.alt}" width="100%"></img></div>\n            <span>${this.title}</span>\n        </div>\n    `}}class s{constructor(e){this.type="video",this.video=e.video,this.photographerId=e.photographerId,this.title=e.title,this.alt=e.alt,this.likes=e.likes,this.date=e.date}createSlide(){return`\n        <div class="slide">\n            <video controls class="slide__media" src="img/${this.photographerId}/${this.video}" alt="${this.alt}"></video>\n            <span>${this.title}</span>\n        </div>\n    `}}},289:(e,t,n)=>{n.d(t,{xR:()=>i});class i{constructor(e){return"image"===e.type?new l(e):"video"===e.type?new s(e):e}}class l{constructor(e){this.title=e.title,this.type="image",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.id=e.id,this.alt=e.alt,this.image=e.image,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="" class="media__link">\n            <img alt="${this.alt}" src="img/${this.photographerId}/${this.image}" width="350px" height="300px"></img>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon"></i>\n                </div>\n            </div>\n        </article>  \n        `}}class s{constructor(e){this.title=e.title,this.type="video",this.tags=e.tags,this.likes=e.likes,this.date=e.date,this.id=e.id,this.video=e.video,this.alt=e.alt,this.photographerId=e.photographerId}display(){return`\n        <article class="image__block">\n            <a href="" class="media__link">\n            <video src="img/${this.photographerId}/${this.video}" width="350px" height="300px" autoplay=false></video>\n            </a>\n            <div class="image__meta">\n                <span class="image__title">${this.title}</span>\n                <div class="likes__block"> \n                    <span class="likes__numbers" id="${this.id}">${this.likes}</span>\n                    <i class="fas fa-heart likes__icon" aria-label ="likes"></i>\n                </div>\n            </div>\n        </article> \n               `}}},547:(e,t,n)=>{n.d(t,{e:()=>i});class i{constructor(e,t,n,i,l,s,a){this.id=e,this.name=t,this.city=n,this.country=i,this.tagline=l,this.price=s,this.portrait=a}photographerBlock(){return`\n            <article id="${this.id}" class="photographer__block">\n                <a href="photographer.html?id=${this.id}">\n                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">\n                <h2>${this.name}</h2>\n            </a>\n\n            <span class="location">${this.city}, ${this.country}</span>\n            <span>${this.tagline}</span>\n            <span class="price">${this.price}€/jour</span>\n            </article>\n        `}photographerPage(){return`\n        <div id="photographer__block">\n            <div class="block__col" id="photographer__info">\n                <h1 id="photographer__name">${this.name}</h1>\n\n                <div id="location-tagline">\n                    <span class="location">${this.city}, ${this.country}</span>\n                    <span class="tagline">${this.tagline}</span>\n                </div>\n            </div>\n\n            <div class="block__col" id="photographer__contact"><button href="" onclick="" id="contact-btn">Contactez-moi</button></div>\n\n            <div class="block__col" id="block__img"><img src="img/index/${this.portrait}" height="200px" width="200px" alt="${this.name}"></div>\n            \n        </div>\n        `}photographerMeta(){return`\n        <aside>\n            <div id="likes__info"><span id="likes__total"></span><i class="fas fa-heart likes__icon"></i></div>\n            <div id="price__info">${this.price}€/jour</div>\n        </aside>\n        `}}},134:(e,t,n)=>{async function i(){return(await fetch("data.json")).json()}n.d(t,{Z:()=>i})},464:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(289),l=n(136),s=n(96),a=n(621);function o(){fetch("data.json").then((e=>{if(e.ok)return e.json()})).then((e=>{for(let t=0;t<e.photographers.length;t++){let n=n=>{n.preventDefault(),e.photographers[t].tags.includes("portrait")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("portrait")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".portrait").forEach((e=>{e.addEventListener("click",n)}));let i=n=>{n.preventDefault(),e.photographers[t].tags.includes("art")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("art")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".art").forEach((e=>{e.addEventListener("click",i)}));let l=n=>{n.preventDefault(),e.photographers[t].tags.includes("fashion")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("fashion")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".fashion").forEach((e=>{e.addEventListener("click",l)}));let s=n=>{n.preventDefault(),e.photographers[t].tags.includes("architecture")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("architecture")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".architecture").forEach((e=>{e.addEventListener("click",s)}));let a=n=>{n.preventDefault(),e.photographers[t].tags.includes("travel")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("travel")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".travel").forEach((e=>{e.addEventListener("click",a)}));let o=n=>{n.preventDefault(),e.photographers[t].tags.includes("sports")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("sports")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".sports").forEach((e=>{e.addEventListener("click",o)}));let r=n=>{n.preventDefault(),e.photographers[t].tags.includes("animals")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("animals")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".animals").forEach((e=>{e.addEventListener("click",r)}));let d=n=>{n.preventDefault(),e.photographers[t].tags.includes("events")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("events")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".events").forEach((e=>{e.addEventListener("click",d)}))}let t=()=>{let e=document.getElementsByTagName("article");for(let t=e.length-1;t>=0;--t)e[t].remove()},n=()=>{let e=document.getElementsByClassName("slide");for(let t=e.length-1;t>=0;--t)e[t].remove()};const o=window.location.search,r=new URLSearchParams(o).get("id");document.getElementById("toggle__filters").addEventListener("change",(()=>{if("titre"===document.getElementById("toggle__filters").value){let o,d,h=[],c=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==r&&(o=new i.xR(e.media[t]),h.push(o),h.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})),d=new s.ey(e.media[t]),c.push(d),c.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})));t(),n();for(let e=0;e<h.length;e++)document.getElementById("medias__list").innerHTML+=h[e].display(),document.getElementById("modal__content").innerHTML+=c[e].createSlide();(0,l.Z)(),(0,a.Z)()}})),document.getElementById("toggle__filters").addEventListener("change",(()=>{if("popularite"===document.getElementById("toggle__filters").value){let o,d,h=[],c=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==r&&(o=new i.xR(e.media[t]),h.push(o),h.sort(((e,t)=>t.likes-e.likes)),d=new s.ey(e.media[t]),c.push(d),c.sort(((e,t)=>t.likes-e.likes)));t(),n();for(let e=0;e<h.length;e++)document.getElementById("medias__list").innerHTML+=h[e].display(),document.getElementById("modal__content").innerHTML+=c[e].createSlide();(0,l.Z)(),(0,a.Z)()}})),document.getElementById("toggle__filters").addEventListener("change",(()=>{if("date"===document.getElementById("toggle__filters").value){let o,d,h=[],c=[];for(let t=0;t<e.media.length;t++)e.media[t].photographerId==r&&(o=new i.xR(e.media[t]),h.push(o),h.sort(((e,t)=>t.date-e.date)),d=new s.ey(e.media[t]),c.push(d),c.sort(((e,t)=>t.date-e.date)));t(),n();for(let e=0;e<h.length;e++)document.getElementById("medias__list").innerHTML+=h[e].display(),document.getElementById("modal__content").innerHTML+=c[e].createSlide();(0,l.Z)(),(0,a.Z)()}}))}))}},621:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(134);function l(){let e=document.querySelectorAll(".likes__numbers"),t=[],n=0,l=[];e.forEach((e=>{t.push(e.textContent)}));for(let e=0;e<t.length;e++)n+=Number(t[e]);document.getElementById("likes__total").innerText=n;const s=window.location.search,a=new URLSearchParams(s).get("id");(0,i.Z)().then((e=>{for(let t=0;t<e.media.length;t++)if(e.media[t].photographerId==a){let i=document.getElementById(e.media[t].id),s=i.nextElementSibling;if(i=e.media[t].id){let i=document.getElementById(e.media[t].id).textContent;i=Number(i),l.push(i);let a=0,o=0,r=0;for(let e=0;e<l.length;e++)a+=l[e];console.log(a);let d=()=>{r>=1?(i-=1,r-=1,o=-1):0==r&&(i+=1,r+=1,o=1),document.getElementById(e.media[t].id).innerText=i,n+=o,document.getElementById("likes__total").innerText=n};s.addEventListener("click",d)}}}))}},136:(e,t,n)=>{n.d(t,{Z:()=>l});let i=document.getElementsByClassName("media__link");function l(){let e=1;o(e);let t=e=>{e.preventDefault(),document.getElementById("lightbox").style.display="flex"};for(let e=0;e<i.length;e++)i[e].addEventListener("click",t);let n=()=>{document.getElementById("lightbox").style.display="none"};document.getElementById("close").addEventListener("click",n);let l=t=>{o(e+=t)},s=document.getElementsByClassName("next");for(let e=0;e<s.length;e++)s[e].addEventListener("click",(function(){l(1)}));let a=document.getElementsByClassName("previous");for(let e=0;e<a.length;e++)a[e].addEventListener("click",(function(){l(-1)}));for(let t=0;t<i.length;t++)i[t].addEventListener("click",(function(){o(e=t+1)}));function o(t){let n=document.getElementsByClassName("slide");t>n.length&&(e=1),t<1&&(e=n.length);for(let e=0;e<n.length;e++)n[e].style.display="none";n[e-1].style.display="block"}window.addEventListener("keydown",(function(e){switch(e.key){case"Escape":n();break;case"ArrowRight":l(1);break;case"ArrowLeft":l(-1)}}))}}},t={};function n(i){var l=t[i];if(void 0!==l)return l.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(547),t=n(464);function i(){let e=window.scrollY,t=document.getElementById("scroll-btn");e>0?(t.style.height="30px",t.style.opacity="1"):e<10&&(t.style.height="0px",t.style.opacity="0"),window.addEventListener("scroll",i)}fetch("data.json").then((e=>e.json())).then((n=>{for(let l=0;l<n.photographers.length;l++){let s=new e.e(n.photographers[l].id,n.photographers[l].name,n.photographers[l].city,n.photographers[l].country,n.photographers[l].tagline,n.photographers[l].price,n.photographers[l].portrait);document.getElementById("photographers-list").innerHTML+=s.photographerBlock();let a=document.getElementById(n.photographers[l].id),o=document.createElement("div");o.classList.add("tag-list"),a.appendChild(o);for(let e=0;e<n.photographers[l].tags.length;e++){let t=document.createElement("a");t.setAttribute("href",""),o.appendChild(t),t.innerText=" #"+n.photographers[l].tags[e]+" ",t.classList.add("tags",n.photographers[l].tags[e])}(0,t.Z)(),i()}})).catch((e=>{console.log(e)}))})(),(()=>{var e=n(547),t=n(134),i=n(289),l=n(464),s=n(96),a=n(136),o=n(621);const r=window.location.search,d=new URLSearchParams(r).get("id");(0,t.Z)().then((t=>{for(let n=0;n<t.photographers.length;n++)if(t.photographers[n].id==d){let i=new e.e("",t.photographers[n].name,t.photographers[n].city,t.photographers[n].country,t.photographers[n].tagline,t.photographers[n].price,t.photographers[n].portrait);document.getElementById("photographer-block").innerHTML=i.photographerPage(),document.getElementById("photographer__meta").innerHTML=i.photographerMeta();let l=document.getElementById("photographer__info"),s=document.createElement("div");s.classList.add("tag-list"),l.appendChild(s);for(let e=0;e<t.photographers[n].tags.length;e++){let i=document.createElement("a");i.setAttribute("href","index.html"),s.appendChild(i),i.innerText=" #"+t.photographers[n].tags[e]+" ",i.classList.add("tags")}}for(let e=0;e<t.media.length;e++)if(t.media[e].photographerId==d){let n=new i.xR(t.media[e]);document.getElementById("medias__list").innerHTML+=n.display();let l=new s.ey(t.media[e]);document.getElementById("modal__content").innerHTML+=l.createSlide()}(0,l.Z)(),(0,a.Z)(),function(){let e=()=>{document.getElementById("form__background").style.display="flex"};document.getElementById("contact-btn").addEventListener("click",e),document.getElementById("contact-btn-mobile").addEventListener("click",e);let t=()=>{document.getElementById("form__background").style.display="none"};document.getElementById("close-form").addEventListener("click",t),document.getElementById("submit-btn").addEventListener("click",(e=>{let t=document.getElementById("nom").value,n=document.getElementById("prenom").value,i=document.getElementById("email").value,l=document.getElementById("message").value;e.preventDefault(),document.getElementById("form__background").style.display="none",console.log("Nom:",t,"Prénom: ",n,"Email: ",i,"Message: ",l)})),window.addEventListener("keydown",(function(e){switch(e.key){case"Escape":t()}}))}(),(0,o.Z)()}))})()})();