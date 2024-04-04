import  './css/style.css';
import './css/spinner.css';
import './css/alert.css';
import './css/swiper.css';


import { initSwiper01, initSwiper02 } from './swiper.js';
import { startAnimation } from './indexAnimation.js';

/*import backgroundImage from './css/images/back.jpg';

const element = document.createElement('div');
element.style.backgroundImage = `url(${backgroundImage})`;*/



const page = { currPage: window.location.pathname }


let swiper02 = document.querySelector('#swiper02');



//change of color movie vs tv series

function changeOfLinkColor () {
    let links = document.querySelectorAll('.main_category_switch');
    const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const typeOfMedia = urlParams.get('type');
    links.forEach((link) => {
     if (link.getAttribute('href') === page.currPage.slice(1) )
    {link.style.color = '#f2ff42b6';
    link.style.fontSize  = '1.9vw'; }
    else if (link.getAttribute('group') === page.currPage.slice(1))
    {link.style.color = '#f2ff42b6';
    link.style.fontSize  = '1.9vw'; }
    else if (link.getAttribute('group') === page.currPage.slice(1)) 
    {link.style.color = '#f2ff42b6';
    link.style.fontSize  = '1.9vw';}
    else if (typeOfMedia === 'movie' && link.getAttribute('group') === 'movieDetails.html')
    {link.style.color = '#f2ff42b6';
    link.style.fontSize  = '1.9vw';
    
    }
    else if (typeOfMedia === 'tv-shows' &&  link.getAttribute('group') === 'TVshowsDetails.html')
    {link.style.color = '#f2ff42b6';
    link.style.fontSize  = '1.9vw';
   
}
    } 
    )
}


/*function backImg() {
    const movieDetailInfo = localStorage.getItem('selectedMovie');
    const movieDetailInfoObject = JSON.parse(movieDetailInfo);

    let url = './css/images/back.jpg';
    let backdropPath = movieDetailInfoObject.backdrop_path;
    let backdropPathUrl = `${url}${backdropPath}`;
    let body = document.querySelector('body');

    // Get the pseudo-element style
    let afterStyles = window.getComputedStyle(body, '::after');

    // Define the linear gradient with opacity stops
   let gradient = `
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 1) 100%
        ),`;

    let newStyleRule = `
        content: "";
        background: ${gradient} url('${backdropPathUrl}');
        background-size: cover;
        background-position: center;
        top: 0;
        left: 0;
        opacity: 0.3;
        height: 200vh;
        width: 100vw;
        position: absolute;
        z-index: -1;
    `;

    // Create a new style element
    let style = document.createElement('style');
    style.textContent = `body::after { ${newStyleRule} }`;

    // Append the style element to the document head
    document.head.appendChild(style);
}*/

function detailBackdropImg() {
    const movieDetailInfo = localStorage.getItem('selectedMovie');
    const movieDetailInfoObject = JSON.parse(movieDetailInfo);

    let url = 'https://image.tmdb.org/t/p/original';
    let backdropPath = movieDetailInfoObject.backdrop_path;
    let backdropPathUrl = `${url}${backdropPath}`;
    let body = document.querySelector('body');

    // Get the pseudo-element style
    let afterStyles = window.getComputedStyle(body, '::after');

    // Define the linear gradient with opacity stops
   let gradient = `
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 1) 100%
        ),`;

    let newStyleRule = `
        content: "";
        background: ${gradient} url('${backdropPathUrl}');
        background-size: cover;
        background-position: center;
        top: 0;
        left: 0;
        opacity: 0.3;
        height: 200vh;
        width: 100vw;
        position: absolute;
        z-index: -1;
    `;

    // Create a new style element
    let style = document.createElement('style');
    style.textContent = `body::after { ${newStyleRule} }`;

    // Append the style element to the document head
    document.head.appendChild(style);
}


function detailBackdropImgTvSeries() {
    const tvDetailInfo = localStorage.getItem('selectedTV');
    const tvDetailInfoObject = JSON.parse(tvDetailInfo);

    const url = 'https://image.tmdb.org/t/p/original';
    const backdropPath = tvDetailInfoObject.backdrop_path;
    const backdropPathUrl = `${url}${backdropPath}`;
    const body = document.querySelector('body');

    // Get the pseudo-element style
    const afterStyles = window.getComputedStyle(body, '::after');

    let gradient = `
    linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 1) 100%
    ),`;

let newStyleRule = `
    content: "";
    background: ${gradient} url('${backdropPathUrl}');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    top: 0;
    left: 0;
    height: 200vh;
    width: 100vw;
    position: absolute;
    z-index: -1;
`;
// Create a new style element
let style = document.createElement('style');
style.textContent = `body::after { ${newStyleRule} }`;

// Append the style element to the document head
document.head.appendChild(style);
}





//show popular movies
async function showPopularMovies() {
    showSpinner();
    const { results } = await getLatestMovies('movie/popular');
    const results02 = await getLatestMovies02('movie/popular');
    const results002 = await getLatestMovies03('movie/popular');
    const results03 = results02.results;
    const results04 = results002.results;
    const completeResults = results.concat(results03);
    const finalResults = completeResults.concat(results04);
    const swiperWrapper02 = document.querySelector('#swiper02 .swiper-wrapper');
  
    finalResults.forEach((movie) => {
      let url = 'https://image.tmdb.org/t/p/w500';
      let div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.setAttribute('movie-id', `${movie.id}`);
      div.innerHTML = `<img class="swiper-slide02" 
          ${movie.poster_path
          ? `src="${url + movie.poster_path}" alt="${movie.title}"> `
          : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${movie.title}"> `}
          <h2>${movie.title}</h2>
          <p>${movie.release_date}</p>`;
  
      div.addEventListener('click', showMovieDetail);
      div.style.cursor = 'pointer'; 
  
      swiperWrapper02.appendChild(div);
    });
  
    initSwiper02(); 
    hideSpinner();
  }
  




//show top rated movies
async function showTopMovies() {
    showSpinner();
    const {results} = await getLatestMovies('movie/top_rated');
    results.forEach((movie)=>{
        let url = 'https://image.tmdb.org/t/p/original';
    let swiperWrapper01 = document.querySelector('#swiper01 .swiper-wrapper');
let div = document.createElement('div');
div.classList.add('swiper-slide');
div.setAttribute('movie-id', `${movie.id}`);
div.innerHTML =`<img class="img_upper_swiper" 
${movie.poster_path
  ? `src="${url + movie.poster_path}" alt="${movie.original_title}"> `
  : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${movie.original_title}"> `}
  <p class = "slideBasicInfo">  <i id="star_icon" class="fa-solid fa-star fa-xs"><span id="star_text"> ${movie.vote_average.toFixed(1)} /10 </span></i> ${movie.original_title} </p>`;;

    swiperWrapper01.appendChild(div);
    div.addEventListener('click', showMovieDetail); 
    div.style.cursor = 'pointer';

});
    initSwiper01();
    hideSpinner();
}


// show popular TV series

async function showPopularTvSeries () {
   
    showSpinner();
    const {results} = await getLatestMovies('tv/popular');
    const results02 = await getLatestMovies02('tv/popular');
    const results002 = await getLatestMovies03('tv/popular');
const results03 = results02.results;
const results04 = results002.results
    const completeResults = results.concat(results03);
    const finalReasults = completeResults.concat(results04);
    finalReasults.forEach((serie)=>{
        let url = 'https://image.tmdb.org/t/p/w500';
    let swiperWrapper02 = document.querySelector('#swiper02 .swiper-wrapper');
let div = document.createElement('div');
div.classList.add('swiper-slide');
div.setAttribute('serie-id', `${serie.id}`);
div.innerHTML =`<img class="swiper-slide02" 
        ${serie.poster_path 
        ? `src="${url+serie.poster_path}" alt="${serie.name}"> `
        : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${serie.name}"> `}
        <h2>${serie.name}</h2>
<p>${serie.first_air_date}</p>`;
div.addEventListener('click', showTvShowDetail);
div.style.cursor = 'pointer';  
    swiperWrapper02.appendChild(div);
    });
    initSwiper02();
    hideSpinner();
}

//show top rated tv series
async function showTopTvSeries() {
    showSpinner();
    const {results} = await getLatestMovies('tv/top_rated');
    
    results.forEach((serie)=>{
        let url = 'https://image.tmdb.org/t/p/original';
    let swiperWrapper01 = document.querySelector('#swiper01 .swiper-wrapper');
let div = document.createElement('div');
div.classList.add('swiper-slide');
div.setAttribute('serie-id', `${serie.id}`);
div.innerHTML =`<img class="img_upper_swiper" 
${serie.poster_path
  ? `src= "${url + serie.poster_path}" alt="${serie.original_name}"> `
  : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${serie.original_name}">`}
  <p class = "slideBasicInfo">  <i id="star_icon" class="fa-solid fa-star fa-xs"><span id="star_text"> ${serie.vote_average.toFixed(1)} /10 </span></i> ${serie.original_name} </p>`;


  
  div.addEventListener('click', showTvShowDetail);
  div.style.cursor = 'pointer';  
    swiperWrapper01.appendChild(div);

    });
    initSwiper01();
    hideSpinner();
}

// show movie detail




async function showMovieDetail (e) {
    e.stopPropagation();
    e.preventDefault();
    showSpinner();
    const myDetailPage = 'movieDetails.html';
if (e.currentTarget.classList.contains('swiper-slide')) { 

  const movieId = e.currentTarget.getAttribute('movie-id'); 
    const reasult = await getLatestMovies(`movie/${movieId}`);
    const reasultActors = await getLatestMovies(`movie/${movieId}/credits`);   
    



        localStorage.setItem('selectedMovie', JSON.stringify(reasult));
        localStorage.setItem('selectedMovieActors', JSON.stringify(reasultActors));
        window.location.href = myDetailPage;
        } 
        hideSpinner();
 }


 //show tv detail

 async function showTvShowDetail (e) {
    e.stopPropagation();
    e.preventDefault();
    showSpinner();
    const myDetailPage = 'TVshowsDetails.html';
    const api_Key = 'afbf7cca056ce2daed661a5d429faeeb';
if (e.currentTarget.classList.contains('swiper-slide')) { 
  const TvShowId = e.currentTarget.getAttribute('serie-id');
  console.log(TvShowId);
    const reasult = await getLatestMovies(`tv/${TvShowId}`);
    const reasultActors = await getLatestMovies(`tv/${TvShowId}/credits`);
  
    
        localStorage.setItem('selectedTV', JSON.stringify(reasult));
        localStorage.setItem('selectedTvActors', JSON.stringify(reasultActors));
       

     
        window.location.href = myDetailPage;
     
        } 
        hideSpinner();
 }

function createDetailPage () {
  
  const movieDetailInfo = localStorage.getItem('selectedMovie');
  const movieDetailInfoObject= JSON.parse(movieDetailInfo);

  const movieDetailInfoActors = localStorage.getItem('selectedMovieActors');
  const movieDetailInfoActorsObject= JSON.parse(movieDetailInfoActors);
 
  
  console.log(movieDetailInfoActorsObject.cast)
  const arrOfActors = movieDetailInfoActorsObject.cast;
  const arrOfActorsDisplay = [];

  for (let item of arrOfActors) {arrOfActorsDisplay.push(item.name)}



    let movieDetailCard = document.querySelector('#detail_section');
    let url = 'https://image.tmdb.org/t/p/original';

    let div = document.createElement('div');
    div.setAttribute('id', 'picture_wrapper');
 
    div.innerHTML = `<img id="img_detail" ${movieDetailInfoObject.poster_path 
        ? `src="${url+movieDetailInfoObject.poster_path}" alt="${movieDetailInfoObject.title}">`
        : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg alt="movie">`}
        <div id="text_wrapper">
        <h1>${movieDetailInfoObject.title}</h1>
        
        <i id="star_icon" class="fa-solid fa-star fa-xl"><span id="star_text">${movieDetailInfoObject.vote_average.toFixed(1)}/10 </span></i>
   <p>
   <span class="span_desc">Release date:</span> ${movieDetailInfoObject.release_date}  <br> <br>
   <span class="span_desc"> Genres:</span>  ${movieDetailInfoObject.genres.map(genre => genre.name).join(', ')} <br> <br>


   <span class="span_desc"> Actors:</span> <p id="list-of-actors">  ${arrOfActorsDisplay.slice(0,10)}  <br> <a id="and_more_button">and more </a>  </p> <br> <br>    
  <p id="#span_detail_text"> ${movieDetailInfoObject.tagline} </p> <br><br>
   <span id="span_detail_text"> ${movieDetailInfoObject.overview} </span>  <br><br>
       </p>
       
       <button id="movie_homepage_button"><a href="${movieDetailInfoObject.homepage} ">Movie homepage</a></button>
       <button id="movie_button"><a href="./searchPage.html">Search Other Movies</a></button>
       <div id="info_about_movie">
       <p> <span class="span_desc">Revenue: </span> $${movieDetailInfoObject.revenue} <br></p>
       <p> <span class="span_desc">Runtime: </span> ${movieDetailInfoObject.runtime} minutes<br></p>
       <p> <span class="span_desc"> Original Language: </span> ${movieDetailInfoObject.original_language} <br></p>
        <p> <span class="span_desc">Country:</span> ${movieDetailInfoObject.production_countries.map(country => country.name).join(', ')}</p>
        <p> <span class="span_desc">Status:</span> ${movieDetailInfoObject.status}</p>
       </div>
       </div>`;
       
      
       movieDetailCard.appendChild(div);
       let listOfActors = document.querySelector('#list-of-actors');
       let andMoreButton = document.querySelector('#and_more_button');
       
       div.addEventListener('click', (e) => {
           if (e.target.tagName === 'A') {
               if (e.target.id === 'and_more_button') {
                   listOfActors.innerHTML = `${arrOfActorsDisplay} <br>  <a id="and_less_button"> hide </a>`;
                   andMoreButton.style.display = 'none';
               } else if (e.target.id === 'and_less_button') {
                   listOfActors.innerHTML = `${arrOfActorsDisplay.slice(0, 10)} <br>  <a id="and_more_button">and more </a>`;
                 
               }
           }
       });
       
       // Add event delegation for dynamically created "less" button
       document.addEventListener('click', (e) => {
           if (e.target.id === 'and_less_button') {
               listOfActors.innerHTML = `${arrOfActorsDisplay.slice(0, 10)}  <br>  <a id="and_more_button">and more </a>`;
             
           }
       });
       
        
}

function createDetailPageTv () {
  
    const TvDetailInfo = localStorage.getItem('selectedTV');
    const TvDetailInfoObject= JSON.parse(TvDetailInfo);

    const TvDetailInfoActors = localStorage.getItem('selectedTvActors');
    const TvInfoActorsObject= JSON.parse(TvDetailInfoActors);
   console.log(TvDetailInfoObject);
   console.log(TvInfoActorsObject);
    const arrOfActors = TvInfoActorsObject.cast;
    const arrOfActorsDisplay = [];
    for (let item of arrOfActors) {arrOfActorsDisplay.push(item.name)}
   
      let TvDetailCard = document.querySelector('#detail_section');
    
      let url = 'https://image.tmdb.org/t/p/original';
     
      let div = document.createElement('div');
      div.setAttribute('id', 'picture_wrapper');
      div.innerHTML = `<img id="img_detail" ${TvDetailInfoObject.poster_path 
          ? `src="${url+TvDetailInfoObject.poster_path}" alt="${TvDetailInfoObject.original_name}">`
          : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg alt="movie">`}
          <div id="text_wrapper">
          <h1>${TvDetailInfoObject.original_name}</h1>
          
          <i id="star_icon" class="fa-solid fa-star fa-xl"><span id="star_text">${TvDetailInfoObject.vote_average.toFixed(1)}/10 </span></i>
     <p>
     <span class="span_desc">First air date:</span> ${TvDetailInfoObject.first_air_date}  <br> <br>
     <span class="span_desc">Last air date:</span> ${TvDetailInfoObject.last_air_date}  <br> <br>
     <span class="span_desc"> Genres:</span>  ${TvDetailInfoObject.genres.map(genre => genre.name).join(', ')} <br> <br>

     <span class="span_desc"> Actors:</span> <p id="list-of-actors">  ${arrOfActorsDisplay.slice(0,10)}  <br> <a id="and_more_button">and more </a>  </p> <br> <br> 

     <p id="#span_detail_text"> ${TvDetailInfoObject.tagline}</p> <br><br>

     <span id="span_detail_text"> ${TvDetailInfoObject.overview} </span>  <br><br>
         </p>
         
         <button id="movie_homepage_button"><a href="${TvDetailInfoObject.homepage}">Movie homepage</a></button>
         <button id="movie_button"><a href="./searchPage.html">Search Other Tv series</a></button>
         <div id="info_about_movie">
         <p> <span class="span_desc">Number of Seasons: </span> ${TvDetailInfoObject.number_of_seasons} <br></p>
         <p> <span class="span_desc">Number of Episodes: </span> ${TvDetailInfoObject.number_of_episodes} <br></p>
         <p> <span class="span_desc"> Original Language: </span> ${TvDetailInfoObject.original_language} <br></p>
          <p> <span class="span_desc">Country:</span> ${TvDetailInfoObject.production_countries.map(country => country.name).join(', ')}</p>
          <p> <span class="span_desc">Status:</span> ${TvDetailInfoObject.status}</p>
         </div>
         </div>`;
         
        
         TvDetailCard.appendChild(div);



         let listOfActors = document.querySelector('#list-of-actors');
         let andMoreButton = document.querySelector('#and_more_button');
         if (arrOfActorsDisplay.length <= 10) { andMoreButton.style.display = 'none'}
         else { 
         div.addEventListener('click', (e) => {
             if (e.target.tagName === 'A') {
                 if (e.target.id === 'and_more_button') {
                     listOfActors.innerHTML = `${arrOfActorsDisplay} <br>  <a id="and_less_button"> hide </a>`;
                     andMoreButton.style.display = 'none';
                 } else if (e.target.id === 'and_less_button') {
                     listOfActors.innerHTML = `${arrOfActorsDisplay.slice(0, 10)} <br>  <a id="and_more_button">and more </a>`;
                   
                 }
             }
         });
         
         // Add event delegation for dynamically created "less" button
         document.addEventListener('click', (e) => {
             if (e.target.id === 'and_less_button') {
                 listOfActors.innerHTML = `${arrOfActorsDisplay.slice(0, 10)}  <br>  <a id="and_more_button">and more </a>`;
               
             }
         }) }
  }



//Fetch data TMDB API

async function getLatestMovies (endpoint) {
const api_Key = 'afbf7cca056ce2daed661a5d429faeeb';
const url =  'https://api.themoviedb.org/3/';
const request = await fetch( `${url}${endpoint}?api_key=${api_Key}&language=en-US`);
 const data = await request.json();
return data
 }

 async function getLatestMovies02 (endpoint) {
    const api_Key = 'afbf7cca056ce2daed661a5d429faeeb';
    const url =  'https://api.themoviedb.org/3/';
    const request = await fetch( `${url}${endpoint}?api_key=${api_Key}&language=en-US&page=2`);
     const data = await request.json();
    return data
     }

     async function getLatestMovies03 (endpoint) {
        const api_Key = 'afbf7cca056ce2daed661a5d429faeeb';
        const url =  'https://api.themoviedb.org/3/';
        const request = await fetch( `${url}${endpoint}?api_key=${api_Key}&language=en-US&page=3`);
         const data = await request.json();
        return data
         }

//search API data

async function searchAPIData  () {
    const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const typeOfMedia = urlParams.get('type');
const nameOfSearch = urlParams.get('search-term');

    const api_Key = 'afbf7cca056ce2daed661a5d429faeeb';
    const url =  'https://api.themoviedb.org/3/';


    const totalPages = 5; // You can set the maximum number of pages you want to fetch

    let results = [];
    for (let page = 1; page <= totalPages; page++) {
        const request = await fetch(`${url}search/${typeOfMedia}?api_key=${api_Key}&language=en-US&query=${nameOfSearch}&page=${page}`);
        const data = await request.json();

        if (data.results) {
            results = [...results, ...data.results];
        } else {
            // Break the loop if there are no more results
            break;
        } 
     }


    //const request = await fetch(`${url}search/${typeOfMedia}?api_key=${api_Key}&language=en-US&query=${nameOfSearch}`);
    // const data = await request.json();
   
    return {results};
    
     }
    
//spinner
         let loadingDiv = document.querySelector('#loading');

         function showSpinner() {
           loadingDiv.style.visibility = 'visible';
         
         }
         
      
         function hideSpinner() {
            loadingDiv.style.visibility = 'hidden';
           
          }
     

 
    
// show custom alert 

function showAlert (message) {
let alertDiv = document.querySelector('.container');
let button = document.querySelector('.close');
let messageText = document.querySelector('#message-text');
messageText.textContent = message;
alertDiv.style.display = 'block';
alertDiv.style.opacity = '1';
setTimeout(() => {alertDiv.remove() }, 10000);
button.addEventListener('click', ()=>{alertDiv.remove()})
}



//search functionality 

async function search() {

    showSpinner();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const typeOfMedia = urlParams.get('type');
    const nameOfSearch = urlParams.get('search-term');
    let inputField = document.querySelector('#input_for_search');

    if (nameOfSearch !== '' && nameOfSearch !== null) {
        const { results, total_pages, page } = await searchAPIData();
     
        let searchHeading= document.querySelector('#search_reasult_heading');
        searchHeading.innerHTML = `${results.length} of search results for "${nameOfSearch}"`;

        if (results.length === 0 ) {
            showAlert('No results found!');
        }
        else if (typeOfMedia === 'movie') {
            displaySearchResults(results);
           
            inputField.value = '';
           
            // Additional code for displaying results can be added here
        }
        else if (typeOfMedia === 'tv') { displaySearchResultstv (results);
             
            inputField.value = '';
        }
    } else {
        showAlert('Write your search title, please, and check the movie or TV section!');
    };
    hideSpinner();
  

}

// display search results 




function displaySearchResults (results) {

    showSpinner();
    
    const finalResults = results;
   
    const swiperWrapper02 = document.querySelector('#swiper02 .swiper-wrapper');
  
    finalResults.forEach((movie) => {
      let url = 'https://image.tmdb.org/t/p/w500';
      let div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.classList.add('card');
      div.setAttribute('movie-id', `${movie.id}`);
      div.innerHTML = `<img class="swiper-slide02" 
          ${movie.poster_path
          ? `src="${url + movie.poster_path}" alt="${movie.title}"> `
          : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${movie.title}"> `}
          <h2>${movie.title}</h2>
          <p>${movie.release_date}</p>`;
  
      div.addEventListener('click', showMovieDetail);
      div.style.cursor = 'pointer'; 
  
      swiperWrapper02.appendChild(div);
    });
  
    initSwiper02(); 
    hideSpinner();
}


// display search results for tv 

function displaySearchResultstv (results) {

    showSpinner();
    
    const finalResults = results;

    const swiperWrapper02 = document.querySelector('#swiper02 .swiper-wrapper');
  
    finalResults.forEach((serie) => {
      let url = 'https://image.tmdb.org/t/p/w500';
      let div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.setAttribute('serie-id', `${serie.id}`);
      div.innerHTML = `<img class="swiper-slide02" 
          ${serie.poster_path
          ? `src="${url + serie.poster_path}" alt="${serie.name}"> `
          : `src="./css/images/movie-clapper-board-y2j7891v11vvki79.jpg" alt="${serie.name}"> `}
          <h2>${serie.name}</h2>
          <p>${serie.first_air_date}</p>`;
  
      div.addEventListener('click', showTvShowDetail);
      div.style.cursor = 'pointer'; 
  
      swiperWrapper02.appendChild(div);
    });
  
    initSwiper02(); 
    hideSpinner();
}

function init () {

    switch (page.currPage){
        case '/index.html':
            startAnimation();
          //  backImg()
            case '/':
                startAnimation();
            break
        case '/main.html':
        
            showTopMovies();
            showPopularMovies ();
          //  search();
          //  backImg();
          changeOfLinkColor ();
            break;
        case '/tvShows.html':
            showTopTvSeries();
            showPopularTvSeries ();
           // search();
           // backImg()
           changeOfLinkColor ();
            
                    console.log('TV shows page');
                    
                            break;
        case '/movieDetails.html':
                            console.log('Detail page');
                            createDetailPage ();
                            showPopularMovies ();
                            detailBackdropImg ();
                                break;
        case '/TVshowsDetails.html':
                                    console.log('TV show detail page');
                                    createDetailPageTv ();
                                    showPopularTvSeries ();
                                    detailBackdropImgTvSeries ();
                                        break;
        case '/searchPage.html' : 
                                        console.log('search page');
                                        search();
                                       
                                      
                                            break;
    };

changeOfLinkColor ();
}


window.addEventListener('DOMContentLoaded', init);


