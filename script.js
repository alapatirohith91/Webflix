const movies=[
["Interstellar",2014,8.7,"Sci-Fi","https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"],
["Inception",2010,8.8,"Thriller","https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"],
["The Dark Knight",2008,9.0,"Action","https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"],
["Avatar",2009,7.9,"Fantasy","https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"],
["Oppenheimer",2023,8.6,"Drama","https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"],
["Dune: Part Two",2024,8.6,"Sci-Fi","https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"],
["Spider-Man: Across the Spider-Verse",2023,8.6,"Animation","https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"],
["Avengers: Endgame",2019,8.2,"Action","https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"],
["Joker",2019,8.1,"Drama","https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"],
["The Matrix",1999,8.7,"Sci-Fi","https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"],
["Top Gun: Maverick",2022,8.2,"Action","https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"],
["Guardians of the Galaxy Vol. 3",2023,7.9,"Adventure","https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"],
["Everything Everywhere All at Once",2022,7.8,"Comedy","https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"],
["John Wick: Chapter 4",2023,7.6,"Action","https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"],
["The Batman",2022,7.8,"Crime","https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"],
["Toy Story",1995,8.3,"Animation","https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"]
].map((x,i)=>({id:i+1,title:x[0],year:x[1],rating:x[2],genre:x[3],poster:x[4]}));

let list=JSON.parse(localStorage.getItem("webflix-list")||"[]");
const $=s=>document.querySelector(s);
function card(m){return '<article class="card" data-id="'+m.id+'"><img src="'+m.poster+'" alt="'+m.title+' poster" loading="lazy"><button class="add" data-add="'+m.id+'">'+(list.includes(m.id)?"✓":"+")+'</button><div class="card-info"><div class="card-title">'+m.title+'</div><div class="card-meta">★ '+m.rating+' • '+m.year+'</div></div></article>'}
function render(id,arr){$("#"+id).innerHTML=arr.map(card).join("")}
render("trending",movies.slice(0,8));
render("popular",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,10));
render("acclaimed",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,8));
const genres=[...new Set(movies.map(m=>m.genre))];
$("#genreButtons").innerHTML=genres.map(g=>'<button class="genre" data-genre="'+g+'">'+g+'</button>').join("");
function renderList(){const a=movies.filter(m=>list.includes(m.id));render("myList",a);$("#listCount").textContent=a.length+" title"+(a.length===1?"":"s")}
renderList();

function openMovie(id){
 const m=movies.find(x=>x.id===id); if(!m)return;
 $("#modalPoster").src=m.poster; $("#modalTitle").textContent=m.title;
 $("#modalGenre").textContent=m.genre.toUpperCase();
 $("#modalMeta").innerHTML="<span>★ "+m.rating+"</span><span>"+m.year+"</span><span class='pill'>HD</span>";
 $("#modalDescription").textContent="Explore "+m.title+" — a "+m.genre.toLowerCase()+" title from "+m.year+". This demo focuses on discovery and interface interactions.";
 $("#modalList").dataset.id=id; $("#modalList").textContent=list.includes(id)?"✓ In My List":"＋ My List";
 $("#modal").classList.add("open");
}
document.addEventListener("click",e=>{
 const c=e.target.closest(".card"); if(c&&!e.target.closest(".add"))openMovie(+c.dataset.id);
 const a=e.target.closest("[data-add]"); if(a){const id=+a.dataset.add;list=list.includes(id)?list.filter(x=>x!==id):[...list,id];localStorage.setItem("webflix-list",JSON.stringify(list));a.textContent=list.includes(id)?"✓":"+";renderList()}
 const g=e.target.closest("[data-genre]"); if(g){const hits=movies.filter(m=>m.genre===g.dataset.genre);$("#resultsSection").style.display="block";$("#resultsTitle").textContent=g.dataset.genre+" Movies";render("results",hits);$("#resultsSection").scrollIntoView({behavior:"smooth"})}
});
$("#modalClose").onclick=()=>$("#modal").classList.remove("open");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("open")};
$("#modalList").onclick=e=>{const id=+e.currentTarget.dataset.id;list=list.includes(id)?list.filter(x=>x!==id):[...list,id];localStorage.setItem("webflix-list",JSON.stringify(list));renderList();e.currentTarget.textContent=list.includes(id)?"✓ In My List":"＋ My List"};
$("#playHero").onclick=()=>alert("Demo mode: connect your licensed video source to enable playback.");
$("#infoHero").onclick=()=>openMovie(1);
$("#modalPlay").onclick=()=>alert("Demo mode: connect your licensed video source to enable playback.");
$("#searchToggle").onclick=()=>{$("#searchPanel").classList.add("open");$("#searchInput").focus()};
$("#closeSearch").onclick=()=>{$("#searchPanel").classList.remove("open")};
$("#searchInput").oninput=e=>{const q=e.target.value.trim().toLowerCase();if(!q){$("#resultsSection").style.display="none";return}const hits=movies.filter(m=>(m.title+" "+m.genre+" "+m.year).toLowerCase().includes(q));$("#resultsSection").style.display="block";$("#resultsTitle").textContent='Results for "'+q+'" • '+hits.length;render("results",hits)};
window.addEventListener("scroll",()=>$(".nav").classList.toggle("scrolled",scrollY>30));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#modal").classList.remove("open");$("#searchPanel").classList.remove("open")}});
