const baseMovies=[["Interstellar",2014,8.7,"Sci-Fi","https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"],["Inception",2010,8.8,"Thriller","https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"],["The Dark Knight",2008,9,"Action","https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"],["Avatar",2009,7.9,"Fantasy","https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"],["Oppenheimer",2023,8.6,"Drama","https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"],["Dune: Part Two",2024,8.6,"Sci-Fi","https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"],["Spider-Man: Across the Spider-Verse",2023,8.6,"Animation","https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"],["Avengers: Endgame",2019,8.2,"Action","https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"],["Joker",2019,8.1,"Drama","https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"],["The Matrix",1999,8.7,"Sci-Fi","https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"],["Top Gun: Maverick",2022,8.2,"Action","https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"],["Guardians of the Galaxy Vol. 3",2023,7.9,"Adventure","https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"],["Everything Everywhere All at Once",2022,7.8,"Comedy","https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"],["John Wick: Chapter 4",2023,7.6,"Action","https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"],["The Batman",2022,7.8,"Crime","https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"],["Toy Story",1995,8.3,"Animation","https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"]];
const ntrPhoto="https://ntrpics.netlify.app/Images/NinnuChoodalani.jpg";
const ntrFilms=[
["Ninnu Choodalani",2001,4.1,"Romance","https://ntrpics.netlify.app/Images/NinnuChoodalani.jpg"],
["Student No. 1",2001,6.6,"Drama","https://ntrpics.netlify.app/Images/StudentNo1.jpg"],
["Subbu",2001,4.2,"Romance","https://ntrpics.netlify.app/Images/Subbu.jpg"],
["Aadi",2002,7.2,"Action","https://ntrpics.netlify.app/Images/Aadi.jpg"],
["Allari Ramudu",2002,5.8,"Comedy","https://ntrpics.netlify.app/Images/AllariRamudu.jpg"],
["Naaga",2003,4.8,"Action","https://ntrpics.netlify.app/Images/Naaga.jpg"],
["Simhadri",2003,7.5,"Action","https://ntrpics.netlify.app/Images/Simhadri.jpg"],
["Andhrawala",2004,3.4,"Action","https://ntrpics.netlify.app/Images/Andhrawala.jpg"],
["Samba",2004,5.1,"Action","https://ntrpics.netlify.app/Images/Samba.jpg"],
["Naa Alludu",2005,4.8,"Comedy","https://ntrpics.netlify.app/Images/NaaAlludu.jpg"],
["Narasimhudu",2005,4.3,"Action","https://ntrpics.netlify.app/Images/Narasimhudu.jpg"],
["Ashok",2006,5.0,"Romance","https://ntrpics.netlify.app/Images/Ashok.jpg"],
["Rakhi",2006,7.0,"Drama","https://ntrpics.netlify.app/Images/Rakhi.jpg"],
["Yamadonga",2007,7.2,"Fantasy","https://ntrpics.netlify.app/Images/Yamadonga.jpg"],
["Kantri",2008,4.7,"Action","https://ntrpics.netlify.app/Images/Kantri.jpg"],
["Adhurs",2010,6.8,"Comedy","https://ntrpics.netlify.app/Images/Adhurs.jpg"],
["Brindavanam",2010,7.1,"Romance","https://ntrpics.netlify.app/Images/Brindavanam.jpg"],
["Shakti",2011,3.6,"Action","https://ntrpics.netlify.app/Images/Sakthi.jpg"],
["Oosaravelli",2011,6.5,"Thriller","https://ntrpics.netlify.app/Images/Oosaravelli.jpg"],
["Dhammu",2012,4.9,"Action","https://ntrpics.netlify.app/Images/Dammu.jpg"],
["Baadshah",2013,6.3,"Action","https://ntrpics.netlify.app/Images/Baadshah.jpg"],
["Ramayya Vasthavayya",2013,5.1,"Romance","https://ntrpics.netlify.app/Images/RamayyaVasthavayya.jpg"],
["Rabhasa",2014,4.8,"Action","https://ntrpics.netlify.app/Images/Rabhasa.jpg"],
["Temper",2015,7.4,"Action","https://ntrpics.netlify.app/Images/Temper.jpg"],
["Nannaku Prematho",2016,7.5,"Thriller","https://ntrpics.netlify.app/Images/NannakuPrematho.jpg"],
["Janatha Garage",2016,7.2,"Action","https://ntrpics.netlify.app/Images/JanathaGarage.jpg"],
["Jai Lava Kusa",2017,6.8,"Action","https://ntrpics.netlify.app/Images/JaiLavaKusa.jpg"],
["Aravinda Sametha Veera Raghava",2018,7.3,"Action","https://ntrpics.netlify.app/Images/AravindaSamethaVeeraRaghava.jpg"],
["RRR",2022,7.8,"Action","https://ntrpics.netlify.app/Images/RRR.jpg"],
["Devara: Part 1",2024,6.0,"Action","https://ntrpics.netlify.app/Images/DevaraPart1.jpg"],
["War 2",2025,5.1,"Action","https://ntrpics.netlify.app/Images/WAR2.jpg"]
];

const movies=[...baseMovies.map((x,i)=>({id:i+1,title:x[0],year:x[1],rating:x[2],genre:x[3],poster:x[4],collection:"Webflix"})),...ntrFilms.map((x,i)=>({id:101+i,title:x[0],year:x[1],rating:x[2],genre:x[3],poster:x[4]||ntrPhoto,collection:"Jr NTR"}))];
let list=JSON.parse(localStorage.getItem("webflix-list")||"[]");
const $=s=>document.querySelector(s);
function card(m){
 const favorite=list.includes(m.id);
 return '<article class="card" data-id="'+m.id+'"><img src="'+m.poster+'" alt="'+m.title+' poster" loading="lazy" onerror="this.src=\''+ntrPhoto+'\'"><button type="button" class="add '+(favorite?'is-favorite':'')+'" data-add="'+m.id+'" onclick="toggleFavorite('+m.id+', event)" aria-label="'+(favorite?'Remove '+m.title+' from favorites':'Add '+m.title+' to favorites')+'">'+(favorite?'♥':'♡')+'</button><div class="card-info"><div class="card-title">'+m.title+'</div><div class="card-meta">★ '+m.rating+' • '+m.year+(m.collection==="Jr NTR"?" • Jr NTR":"")+'</div></div></article>'
}
function render(id,arr){const el=$("#"+id);if(el)el.innerHTML=arr.map(card).join("")}
render("trending",movies.filter(m=>m.collection==="Webflix").slice(0,8));
render("popular",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,12));
render("ntrMovies",movies.filter(m=>m.collection==="Jr NTR"));
render("acclaimed",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,10));
const genres=[...new Set(movies.map(m=>m.genre))];
$("#genreButtons").innerHTML=genres.map(g=>'<button class="genre" data-genre="'+g+'">'+g+'</button>').join("");
function renderList(){const a=movies.filter(m=>list.includes(m.id));render("myList",a);$("#listCount").textContent=a.length+" favorite"+(a.length===1?"":"s")}
function toggleFavorite(id,event){if(event){event.preventDefault();event.stopPropagation()}list=list.includes(id)?list.filter(x=>x!==id):[...list,id];localStorage.setItem("webflix-list",JSON.stringify(list));renderList();render("trending",movies.filter(m=>m.collection==="Webflix").slice(0,8));render("popular",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,12));render("ntrMovies",movies.filter(m=>m.collection==="Jr NTR"));render("acclaimed",[...movies].sort((a,b)=>b.rating-a.rating).slice(0,10))}
renderList();
function openMovie(id){const m=movies.find(x=>x.id===id);if(!m)return;$("#modalPoster").src=m.poster;$("#modalTitle").textContent=m.title;$("#modalGenre").textContent=(m.collection==="Jr NTR"?"JR NTR • ":"")+m.genre.toUpperCase();$("#modalMeta").innerHTML="<span>★ "+m.rating+"</span><span>"+m.year+"</span><span class='pill'>HD</span>";$("#modalDescription").textContent=m.collection==="Jr NTR"?m.title+" ("+m.year+") — part of the Jr NTR filmography collection.":"Explore "+m.title+" — a "+m.genre.toLowerCase()+" title from "+m.year+".";$("#modalList").dataset.id=id;$("#modalList").textContent=list.includes(id)?"♥ In Favorites":"♡ Add to Favorites";$("#modal").classList.add("open")}
document.addEventListener("click",e=>{const c=e.target.closest(".card");if(c&&!e.target.closest(".add"))openMovie(+c.dataset.id);const g=e.target.closest("[data-genre]");if(g){const hits=movies.filter(m=>m.genre===g.dataset.genre);$("#resultsSection").style.display="block";$("#resultsTitle").textContent=g.dataset.genre+" Movies";render("results",hits);$("#resultsSection").scrollIntoView({behavior:"smooth"})}});
$("#modalClose").onclick=()=>$("#modal").classList.remove("open");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("open")};
$("#modalList").onclick=e=>{const id=+e.currentTarget.dataset.id;list=list.includes(id)?list.filter(x=>x!==id):[...list,id];localStorage.setItem("webflix-list",JSON.stringify(list));renderList();e.currentTarget.textContent=list.includes(id)?"♥ In Favorites":"♡ Add to Favorites"};
$("#playHero").onclick=()=>alert("Demo mode: connect your licensed video source to enable playback.");
$("#infoHero").onclick=()=>openMovie(1);
$("#modalPlay").onclick=()=>alert("Demo mode: connect your licensed video source to enable playback.");
$("#searchToggle").onclick=()=>{$("#searchPanel").classList.add("open");$("#searchInput").focus()};
$("#closeSearch").onclick=()=>$("#searchPanel").classList.remove("open");
$("#searchInput").oninput=e=>{const query=e.target.value.trim().toLowerCase();if(!query){$("#resultsSection").style.display="none";return}const hits=movies.filter(m=>(m.title+" "+m.genre+" "+m.year+" "+m.collection).toLowerCase().includes(query));$("#resultsSection").style.display="block";$("#resultsTitle").textContent='Results for "'+query+'" • '+hits.length;render("results",hits)};
window.addEventListener("scroll",()=>$(".nav").classList.toggle("scrolled",scrollY>30));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#modal").classList.remove("open");$("#searchPanel").classList.remove("open")}});

// Horizontal movie-row navigation + mouse/touch drag support
function scrollRow(id,dir){const row=$("#"+id);if(row)row.scrollBy({left:dir*Math.max(row.clientWidth*.82,520),behavior:"smooth"})}
document.addEventListener("click",e=>{const b=e.target.closest("[data-scroll]");if(b)scrollRow(b.dataset.scroll,+b.dataset.dir)});
document.querySelectorAll(".movie-row").forEach(row=>{let down=false,start=0,left=0;row.addEventListener("pointerdown",e=>{down=true;start=e.clientX;left=row.scrollLeft;row.setPointerCapture(e.pointerId)});row.addEventListener("pointermove",e=>{if(down)row.scrollLeft=left-(e.clientX-start)*1.25});row.addEventListener("pointerup",()=>down=false);row.addEventListener("pointercancel",()=>down=false)});
