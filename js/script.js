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
try{
    const elTeamOpenBtn = document.querySelectorAll('.team__open');
    const elTeamCloseBtn = document.querySelectorAll('#team__modal--close');
    const elTeamModal = document.querySelector('.team__modal');
    
    elTeamOpenBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            elTeamModal.classList.add('team__modal__active')
        });
    })
    elTeamCloseBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            elTeamModal.classList.remove('team__modal__active')
        });
    })
}catch{console.log('modal error')}


// ********** price section price titles *************
try{
    const priceWebBtn = document.querySelector('#web');
    const priceProdBtn = document.querySelector('#prod');
    const priceExtraBtn = document.querySelector('#extra');
    const elWeb = document.querySelector('#web_razrabotka')
    const elEncorage = document.querySelector('#encorage')
    const elExtra = document.querySelector('#extra_price')

    


    
    priceWebBtn.addEventListener('click', ()=>{
        if(priceWebBtn.classList.value !== 'price__title--btn price__title--btn--active'){
            priceWebBtn.classList.add('price__title--btn--active')
            priceProdBtn.classList.remove('price__title--btn--active')
            priceExtraBtn.classList.remove('price__title--btn--active')
        }
        if(elWeb.classList.value !== 'price__box price__box--active'){
            elWeb.classList.add('price__box--active')
            elEncorage.classList.remove('price__box--active')
            elExtra.classList.remove('price__box--active')
        }
    })
    priceProdBtn.addEventListener('click', ()=>{
        if(priceProdBtn.classList.value !== 'price__title--btn price__title--btn--active'){
            priceProdBtn.classList.add('price__title--btn--active')
            priceWebBtn.classList.remove('price__title--btn--active')
            priceExtraBtn.classList.remove('price__title--btn--active')
        }
        if(elEncorage.classList.value !== 'price__box price__box--active'){
            elEncorage.classList.add('price__box--active')
            elWeb.classList.remove('price__box--active')
            elExtra.classList.remove('price__box--active')
        }
    })
    priceExtraBtn.addEventListener('click', ()=>{
        if(priceExtraBtn.classList.value !== 'price__title--btn price__title--btn--active'){
            priceExtraBtn.classList.add('price__title--btn--active')
            priceWebBtn.classList.remove('price__title--btn--active')
            priceProdBtn.classList.remove('price__title--btn--active')
        }
        if(elExtra.classList.value !== 'price__box price__box--active'){
            elExtra.classList.add('price__box--active')
            elWeb.classList.remove('price__box--active')
            elEncorage.classList.remove('price__box--active')
        }
    })
}catch{console.log('err')}



//******* Slider *********/

try{
    let mySlider = new Swiper(".team__slider", {
        
        navigation: {
            nextEl: ".slider_next_btn",
            prevEl: ".slider_prev_btn",
        },
        
        // slidesPerView: ,
        // spaceBetween: 0,
        
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
}catch{console.log('swipper err')}

try{
    let partnerSlider = new Swiper(".partner__slider", {
        
        // navigation: {
        //     nextEl: ".slider_next_btn",
        //     prevEl: ".slider_prev_btn",
        // },
        
        // slidesPerView: ,
        spaceBetween: 0,
        
        //REsponsive
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                // spaceBetween: 0,
            },
            560: {
                slidesPerView: 3.2,
                //   spaceBetween: 0,
            },
            1115: {
                slidesPerView: 4,
                //   spaceBetween: 20,
            },
            1427: {
                slidesPerView: 5,
                //   spaceBetween: 50,
            }
        }
    });
}catch{console.log('swipper partner err')}