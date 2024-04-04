// animation.js
import anime from 'animejs';


export function startAnimation() {
  anime ({
    targets: '#amazing path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 40 },
    direction: 'alternate',
    loop: false,
  });

  window.addEventListener('DOMContentLoaded',  () => {
  
    
   
    squareObj();
  });

  function hideLogo() {
    setTimeout(() => {
      let logo = document.querySelector('#amazing');
      logo.style.transition = ' opacity 0.6s'; // Apply transition property
      logo.style.opacity = '0'; // Set opacity to 0
     
    }, 2500);
  }

  function showBlock() {
    hideLogo()
    setTimeout(() => {
      const swichCategory = document.querySelector('#main_category_container_index');
      swichCategory.style.display = 'block';
    }, 4000);
  }


  function squareObj() {
    setTimeout(() => {
      let back = document.querySelector('#back');
      let rightValue = parseFloat(back.style.right) || 0;
      let interval = 1;

      for (let i = 100; i >= 0; i--) {
        setTimeout(() => {
          back.style.right = i + '%';
        }, (25 - i) * interval);

        back.style.transition = '0.8s';
        back.style.opacity = '0.9';
      }
    }, 2500);
  }
  
  showBlock()
}
