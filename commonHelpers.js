import{S as h,i as a}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return fetch(`https://pixabay.com/api?key=44809751-3b2ccf197f9e8e95d68b14f11&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const y=new h(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh();function p(s){const i=document.querySelector(".gallery"),r=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:c,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${o}" alt="${t}" loading="lazy" class="gallery-image"/>
          </a>
          <ul class="info">
            <li class="info-item"> <h2 class="info-text">Likes</h2> <p class="info-value">${n}</p> </li>
            <li class="info-item"> <h2 class="info-text">Views</h2> <p class="info-value">${c}</p> </li>
            <li class="info-item"> <h2 class="info-text">Comments</h2> <p class="info-value">${u}</p> </li>
            <li class="info-item"> <h2 class="info-text">Downloads</h2> <p class="info-value">${f}</p> </li>
          </ul>
        </li>
    `).join("");i.innerHTML=r,y.refresh()}const g=document.querySelector(".gallery"),d=document.querySelector(".search-form"),l=document.querySelector(".loading");d.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.currentTarget.elements.query.value.toLowerCase();if(r===""){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}l.style.display="flex",g.innerHTML="",m(r).then(o=>{o.hits.length===0?a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):p(o.hits)}).catch(o=>{a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{l.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
