let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search= document.getElementsByClassName('search')[0]; 
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click',()=>{
   cards.scrollLeft -=140;
})

right_btn.addEventListener('click',()=>{
   cards.scrollLeft +=140;
})


let json_url= "movie.json";
fetch(json_url).then(Response => Response.json())
.then(data => {
   data.forEach((ele,i)=> {
    let {name,imdb,genre,date,sposter,bposter,url} = ele; 
    let card = document.createElement('a');
    card.classList.add('card') 
    card.href=(url);
    card.innerHTML =`
     <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>

                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>${imdb}</span><i class="bi bi-star-fill"></i> 8.2</h3>
                            </div>
                        </div>
                      
                    </div>

    `
    cards.appendChild(card);
   });

   document.getElementById('title').innerText = data[1].name;
    document.getElementById('gen').innerText = data[1].genre;
     document.getElementById('date').innerText = data[1].date;
      document.getElementById('rate').innerHTML = `<span>IMBD</span><i class="bi bi-star-fill"></i> ${data[1].imdb}`;

// loading search Data
data.forEach(element =>{
    let {name,imdb,genre,date,sposter,url} = element; 
     let card = document.createElement('a');
     card.classList.add('card') 
    card.href=(url);
    card.innerHTML =`
      <img src="${sposter}" alt="">
                <div class="cont">
                    <h3>${name}</h3>
                    <p>${genre},${date}, <span>IMBD</span><i class="bi bi-star-fill"></i>${imdb}</p>
                </div>`

                search.appendChild(card);
});
// fitering search

   search_input.addEventListener('keyup', ()=>{
   let filter = search_input.value.toUpperCase()
   let a = search.getElementsByTagName('a');
   for (let index = 0; index < a.length; index++) {
      let b = a[index].getElementsByClassName('cont')[0];

      let Textvalue = b.textContent || b.innerText;
      if (Textvalue.toUpperCase().indexOf(filter) > -1) {

         a[index].style.display ="flex";
         search.style.visibility = "visible";
         search.style.opacity = 1;
      } else {
           a[index].style.display ="none";
      }
      if (search_input.value == 0){
         search.style.visibility = "hidden";
         search.style.opacity = 0;
      }
      
   }
})

   let series = document.getElementById('series');

   series.addEventListener('click', ()=>{
   cards.innerHTML = '';

   let series_array = data.filter = data.filter(ele => {
      return ele.type === "series";
   });
    series_array.forEach((ele,i)=> {
    let {name,imdb,genre,date,sposter,bposter,url} = ele; 
    let card = document.createElement('a');
    card.classList.add('card') 
    card.href=(url);
    card.innerHTML =`
     <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>

                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>${imdb}</span><i class="bi bi-star-fill"></i> 8.2</h3>
                            </div>
                        </div>
                      
                    </div>

    `
    cards.appendChild(card);
   });

    
})

let  movies = document.getElementById('movies');
movies.addEventListener('click', ()=>{
   cards.innerHTML = '';

   let movies_array = data.filter = data.filter(element => {
      return element.type === "movies";
   });
 movies_array.forEach((element,i)=> {
    let {name,imdb,genre,date,sposter,bposter,url} = element; 
    let card = document.createElement('a');
    card.classList.add('card') 
    card.href=(url);
    card.innerHTML =`
     <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>

                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>${imdb}</span><i class="bi bi-star-fill"></i> 8.2</h3>
                            </div>
                        </div>
                      
                    </div>

    `
    cards.appendChild(card);
   });

    
})


   });