(()=>{"use strict";class e{constructor(e,t,s,o,n,r,p){this.id=e,this.name=t,this.city=s,this.country=o,this.tagline=n,this.price=r,this.portrait=p}photographerBlock(){return`\n            <article id="${this.id}">\n                <a href="">\n                <img src="img/index/${this.portrait}" height="200px" width="200px" alt="">\n                <h2>${this.name}</h2>\n            </a>\n\n            <span class="location">${this.city}, ${this.country}</span>\n            <span>${this.tagline}</span>\n            <span class="price">${this.price}€/jour</span>\n            </article>\n        `}}let t=document.getElementById("Portrait"),s=document.getElementById("art"),o=document.getElementById("fashion"),n=document.getElementById("architecture"),r=document.getElementById("travel"),p=document.getElementById("sport"),a=document.getElementById("animals"),l=document.getElementById("events");t.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("portrait")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("portrait")||(document.getElementById(response.photographers[i].id).style.display="none")})),s.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("art")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("art")||(document.getElementById(response.photographers[i].id).style.display="none")})),o.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("fashion")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("fashion")||(document.getElementById(response.photographers[i].id).style.display="none")})),n.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("architecture")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("architecture")||(document.getElementById(response.photographers[i].id).style.display="none")})),r.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("travel")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("travel")||(document.getElementById(response.photographers[i].id).style.display="none")})),p.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("sport")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("sport")||(document.getElementById(response.photographers[i].id).style.display="none")})),a.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("animals")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("animals")||(document.getElementById(response.photographers[i].id).style.display="none")})),l.addEventListener("click",(function(e){e.preventDefault(),response.photographers[i].tags.includes("events")?document.getElementById(response.photographers[i].id).style.display="flex":response.photographers[i].tags.includes("events")||(document.getElementById(response.photographers[i].id).style.display="none")})),fetch("data.json").then((e=>e.json())).then((t=>{for(let s=0;s<t.photographers.length;s++){let o=new e(t.photographers[s].id,t.photographers[s].name,t.photographers[s].city,t.photographers[s].country,t.photographers[s].tagline,t.photographers[s].price,t.photographers[s].portrait);document.getElementById("photographers-list").innerHTML+=o.photographerBlock();let n=document.getElementById(t.photographers[s].id),r=document.createElement("div");r.classList.add("tag-list"),n.appendChild(r);for(let e=0;e<t.photographers[s].tags.length;e++){let o=document.createElement("a");o.setAttribute("href",""),r.appendChild(o),o.innerText=" #"+t.photographers[s].tags[e]+" ",o.classList.add("tags",t.photographers[s].tags[e])}fetch("data.json").then((e=>{if(e.ok)return e.json()})).then((e=>{for(let t=0;t<e.photographers.length;t++){let s=s=>{s.preventDefault(),e.photographers[t].tags.includes("portrait")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("portrait")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".portrait").forEach((e=>{e.addEventListener("click",s)}));let o=s=>{s.preventDefault(),e.photographers[t].tags.includes("art")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("art")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".art").forEach((e=>{e.addEventListener("click",o)}));let n=s=>{s.preventDefault(),e.photographers[t].tags.includes("fashion")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("fashion")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".fashion").forEach((e=>{e.addEventListener("click",n)}));let r=s=>{s.preventDefault(),e.photographers[t].tags.includes("architecture")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("architecture")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".architecture").forEach((e=>{e.addEventListener("click",r)}));let p=s=>{s.preventDefault(),e.photographers[t].tags.includes("travel")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("travel")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".travel").forEach((e=>{e.addEventListener("click",p)}));let a=s=>{s.preventDefault(),e.photographers[t].tags.includes("sports")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("sports")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".sports").forEach((e=>{e.addEventListener("click",a)}));let l=s=>{s.preventDefault(),e.photographers[t].tags.includes("animals")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("animals")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".animals").forEach((e=>{e.addEventListener("click",l)}));let i=s=>{s.preventDefault(),e.photographers[t].tags.includes("events")?document.getElementById(e.photographers[t].id).style.display="flex":e.photographers[t].tags.includes("events")||(document.getElementById(e.photographers[t].id).style.display="none")};document.querySelectorAll(".events").forEach((e=>{e.addEventListener("click",i)}))}}))}})).catch((e=>{console.log(e)}))})();