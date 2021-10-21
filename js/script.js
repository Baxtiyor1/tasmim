// ********* modal ***********
const elModalOpenBtn = document.querySelector('#modal_open');
const elModalCloseBtn = document.querySelector('.modal__btn');
const elModal = document.querySelector('.modal')

elModalOpenBtn.addEventListener('click', ()=>{
    elModal.classList.add('modal__active')
})
elModalCloseBtn.addEventListener('click', ()=>{
    elModal.classList.remove('modal__active')
})

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