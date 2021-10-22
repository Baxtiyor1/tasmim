// ********* modal header ***********
const elModalOpenBtn = document.querySelector('#modal_open');
const elModalCloseBtn = document.querySelector('.modal__btn');
const elModal = document.querySelector('.modal')

elModalOpenBtn.addEventListener('click', ()=>{
    elModal.classList.add('modal__active')
})
elModalCloseBtn.addEventListener('click', ()=>{
    elModal.classList.remove('modal__active')
})

// ------------ team modal ---------


// const elTeamOpenBtn = document.querySelectorAll('.team__open');
// const elTeamCloseBtn = document.querySelector('.team__close');
// const elTeamModal = document.querySelector('.team__modal');

// elTeamOpenBtn.addEventListener('click', ()=>{
//     elTeamModal.classList.add('team__modal__active')
// });
// elTeamCloseBtn.addEventListener('click', ()=>{
//     elTeamModal.classList.remove('team__modal__active')
// });
// console.log(elTeamOpenBtn)


// ********** price section price titles *************
const priceWebBtn = document.querySelector('#web');
const priceProdBtn = document.querySelector('#prod');
const priceExtraBtn = document.querySelector('#extra');

priceWebBtn.addEventListener('click', ()=>{
    if(priceWebBtn.classList.value !== 'price__title--btn price__title--btn--active'){
        priceWebBtn.classList.add('price__title--btn--active')
        priceProdBtn.classList.remove('price__title--btn--active')
        priceExtraBtn.classList.remove('price__title--btn--active')
    }
})
priceProdBtn.addEventListener('click', ()=>{
    if(priceProdBtn.classList.value !== 'price__title--btn price__title--btn--active'){
        priceProdBtn.classList.add('price__title--btn--active')
        priceWebBtn.classList.remove('price__title--btn--active')
        priceExtraBtn.classList.remove('price__title--btn--active')
    }
})
priceExtraBtn.addEventListener('click', ()=>{
    if(priceExtraBtn.classList.value !== 'price__title--btn price__title--btn--active'){
        priceExtraBtn.classList.add('price__title--btn--active')
        priceWebBtn.classList.remove('price__title--btn--active')
        priceProdBtn.classList.remove('price__title--btn--active')
    }
})



//******* Slider *********/

let mySlider = new Swiper(".team__slider", {
    
    navigation: {
        nextEl: ".slider_next_btn",
        prevEl: ".slider_prev_btn",
    },
    
    slidesPerView: 4,
    spaceBetween: 0,

    //REsponsive
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 0,
        },
        560: {
            slidesPerView: 2,
            //   spaceBetween: 0,
        },
        1115: {
          slidesPerView: 3,
        //   spaceBetween: 20,
        },
        1427: {
          slidesPerView: 4,
        //   spaceBetween: 50,
        }
    }
});

