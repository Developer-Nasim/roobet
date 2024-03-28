(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('.menuShadow').toggleClass('show');
  }); 

    
  // owlCarousel
  $(".howto-slider").owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        margin: 0,
        dots: true,
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

function makeEd() { 
    let items = document.querySelectorAll('#panel')
    items.forEach(item => {

        let myPanel = item;
        let subpanel = myPanel.querySelector("#panel-container");

        myPanel.onmousemove = transformPanel;
        myPanel.onmouseenter = handleMouseEnter;
        myPanel.onmouseleave = handleMouseLeave;

        let mouseX, mouseY;

        let transformAmount = 5;

        function transformPanel(mouseEvent) {
            mouseX = mouseEvent.pageX;
            mouseY = mouseEvent.pageY;

            const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
            const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

            const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
            const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

            subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
        }

        function handleMouseEnter() {
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);
            subpanel.style.transition = "transform 0.1s";
        }

        function handleMouseLeave() {
            subpanel.style.transition = "transform 0.1s";
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);

            subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
        }

    })
}
makeEd()
  
 // below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});





})(jQuery);
