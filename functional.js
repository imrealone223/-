let meduza1 = document.querySelector('.meduza')
let horse1 = document.querySelector('.horse')
let osminog1 = document.querySelector('.osminog')
let shark1 = document.querySelector('.shark')
let delphin1 = document.querySelector('.delphin')

let meduza={
    name:'Медуза',
    price: 3999,
    photo:'https://en.wikipedia.org/wiki/Jellyfish'
}
let horse={
    name:'Морская лошадка',
    price: 12999,
    photo:"https://en.wikipedia.org/wiki/Seahorse",
}
let osminog={
    name:'Осьминог',
    price: 15999,
    photo:"https://en.wikipedia.org/wiki/Octopus",
}
let shark={
    name:'Акула',
    price: 57999,
    photo:"https://en.wikipedia.org/wiki/Shark",
}
let delphin={
    name:'Дельфин',
    price: 18999,
    photo:"https://en.wikipedia.org/wiki/Dolphin",
}

let products = [meduza, horse, osminog, shark, delphin]
let basket_array = []

meduza1.addEventListener('click',function(){
    korz.push(meduza)
})
horse1.addEventListener('click',function(){
    korz.push(horse)
})
osminog1.addEventListener('click',function(){
    korz.push(osminog)
})
shark1.addEventListener('click',function(){
    korz.push(shark)
})
delphin1.addEventListener('click',function(){
    korz.push(delphin)
})

let basket = document.querySelector('.basket')
let main = document.querySelector('.main')
let basket_list = document.querySelector('.basket-list')

basket.addEventListener('click', function(){
    main.style.display = 'none'
})