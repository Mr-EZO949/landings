document.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll(".section-how-we-work__step-list__item-link").forEach(function(tabsBtn){
    console.log("fds")
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path
      document.querySelectorAll(".section-how-we-work__step-list__item-link").forEach(function(links){
        links.classList.remove("section-how-we-work__step-list__item-link_selected");
      })
      tabsBtn.classList.add("section-how-we-work__step-list__item-link_selected")
      document.querySelectorAll(".tab-content").forEach(function(tabContent){
        tabContent.classList.remove("tab-content-active")

      })
      document.querySelector(`[data-target="${path}"`).classList.add("tab-content-active");
    })
  })
})

const menuButton = document.querySelector('.header__burger');
const menuOverlay = document.querySelector('.menu-overlay');
const backgroundOverlay = document.querySelector('.background-overlay');

menuButton.addEventListener('click', function() {
  console.log("fdssdf");
    menuButton.classList.toggle('active');
    menuOverlay.classList.toggle('open');
    backgroundOverlay.classList.toggle('bg-overlay');
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



