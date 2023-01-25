const swiper = new Swiper('.slider-main-block', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-main-block__arrow.swiper-button-next',
    prevEl: '.slider-main-block__arrow.swiper-button-prev',
  },
});

// Tabs
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener("click", function (element) {
  const targetElement = element.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  if(targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if(tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active')
      }
      if(tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });

    targetElement.classList.add('active')
    tabItems[currentActiveIndex].classList.remove('active')
    tabItems[newActiveIndex].classList.add('active')
  };
});
