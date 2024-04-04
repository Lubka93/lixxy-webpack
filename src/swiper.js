export  function initSwiper01 () { 
new Swiper('#swiper01', {
  // Optional parameters
    // Optional parameters
    slidesPerView: 4,
    slidesPerColumn: 4,
    slidesPerGroup :2,
    spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
}

//const maxCardsPerSlide = 9; // Adjust this value based on your design



export function initSwiper02 () {
new Swiper('#swiper02', {
  // Optional parameters
  slidesPerView: 3,
    slidesPerColumn: 4,
    slidesPerGroup :3,
    spaceBetween: 30,
  direction: 'horizontal',
  loop: false,
  
 

  // If we need pagination
  pagination: {
    el: '#swiper02 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  grid: {
    rows: 4,
   
  },
  

});
const swiperWrapper02 = document.querySelector('#swiper-wrapper02');
const swiperSlides = document.querySelectorAll('#swiper-wrapper02 .swiper-slide');
const maxCardsPerSlide = 9; // Adjust this value based on your design

const page = { currPage: window.location.pathname };
console.log(page.currPage);

const numRows = Math.ceil(swiperSlides.length / maxCardsPerSlide);
const totalAvailableHeight = 40000; // Adjust this value based on your design

let height;

if (page.currPage === '/main.html' || page.currPage === '/movieDetails.html' || page.currPage === '/tvShows.html' || page.currPage === '/TVshowsDetails.html') {
    height = totalAvailableHeight / (numRows * 3);
} else if (page.currPage === '/searchPage.html') {
    // Adjust the height calculation based on the number of results
    if (swiperSlides.length <= 10) {
        height = totalAvailableHeight / (numRows * 20);
    } else if (swiperSlides.length <= 20) {
        height = totalAvailableHeight / (numRows * 7);
    } else if (swiperSlides.length <= 50) {
        height = totalAvailableHeight / (numRows * 5);
    }
    // Add more conditions as needed
}

swiperWrapper02.style.height = `${height}px`;
 }