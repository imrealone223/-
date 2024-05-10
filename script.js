var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });
 
let meduza1 = document.querySelector('.meduza')
let horse1 = document.querySelector('.horse')
let osminog1 = document.querySelector('.osminog')
let shark1 = document.querySelector('.shark')
let delphin1 = document.querySelector('.delphin')

let meduza={
    name:'Медуза',
    price:'3 999',
    photo:"https://en.wikipedia.org/wiki/Jellyfish",
}
let horse={
    name:'Морская лошадка',
    price:'12 999',
    photo:"https://en.wikipedia.org/wiki/Seahorse",
}
let osminog={
    name:'Осьминог',
    price:'15 999',
    photo:"https://en.wikipedia.org/wiki/Octopus",
}
let shark={
    name:'Акула',
    price:'57 999',
    photo:"https://en.wikipedia.org/wiki/Shark",
}
let delphin={
    name:'Дельфин',
    price:'18 999',
    photo:"https://en.wikipedia.org/wiki/Dolphin",
}

let products = [meduza, horse, osminog, shark, delphin]
let korz = []

meduza.addEventListener('click',function(){
    korz.push(meduza)
})
horse.addEventListener('click',function(){
    korz.push(horse)
})
osminog.addEventListener('click',function(){
    korz.push(osminog)
})
shark.addEventListener('click',function(){
    korz.push(shark)
})
delphin.addEventListener('click',function(){
    korz.push(delphin)
})

let korz1 = document.querySelector('.kor')
let main = document.querySelector('.main')

kor.addEventListener('click',function(){
    main.style.display = 'none'
    
})