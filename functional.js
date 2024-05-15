let meduza1 = document.querySelector('.meduza')
let horse1 = document.querySelector('.horse')
let osminog1 = document.querySelector('.osminog')
let shark1 = document.querySelector('.shark')
let delphin1 = document.querySelector('.delphin')
let total_position = document.querySelector('.total_position')

let meduza={
    name:'Медуза',
    price: 3999,
    photo:'https://images.unsplash.com/photo-1628944682084-831f35256163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
}
let horse={
    name:'Морская лошадка',
    price: 12999,
    photo:"https://images.unsplash.com/photo-1515309025403-4b0184873cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
}
let osminog={
    name:'Осьминог',
    price: 15999,
    photo:"https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
}
let shark={
    name:'Акула',
    price: 57999,
    photo:"https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
}
let delphin={
    name:'Дельфин',
    price: 18999,
    photo:"https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
}

let products = [meduza, horse, osminog, shark, delphin]
let basket_array = []

meduza1.addEventListener('click',function(){
    basket_array.push(meduza)
    total_position.innerHTML =  +total_position.innerHTML + 1
})
horse1.addEventListener('click',function(){
    basket_array.push(horse)
    total_position.innerHTML =  +total_position.innerHTML + 1
})
osminog1.addEventListener('click',function(){
    basket_array.push(osminog)
    total_position.innerHTML =  +total_position.innerHTML + 1
})
shark1.addEventListener('click',function(){
    basket_array.push(shark)
    total_position.innerHTML =  +total_position.innerHTML + 1
})
delphin1.addEventListener('click',function(){
    basket_array.push(delphin)
    total_position.innerHTML =  +total_position.innerHTML + 1
})

let basket = document.querySelector('.basket')
let main = document.querySelector('.main')
let basket_list = document.querySelector('.basket-list')
let category = document.querySelector('.cat')

let result = 0
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    basket_array = []
    result = 0
    basket_list.innerHTML = ''
    total_position.innerHTML = 0
    clear.style.display = 'none'
    main.style.display = 'block'
})

basket.addEventListener('click', function(){
    
    main.style.display = 'none'
    basket_list.innerHTML = '<hr>'
    for(let i=0; i<basket_array.length; i++){
        basket_list.innerHTML = basket_list.innerHTML + `<h3 width="300px">${i+1}.  ${basket_array[i].name}</h3> <img height="50px" src="${basket_array[i].photo}"/img><h4>  ${basket_array[i].price} руб.</h4><hr>`
        result = +result + +basket_array[i].price      
        
    }
    basket_list.innerHTML = basket_list.innerHTML + `<h3 width="300px">Итого:  ${result} руб.<h3>`
    basket_list.innerHTML = basket_list.innerHTML + `<p class='clear'>Очистить</p>`
    basket_list.style.display = 'block'
    clear.style.display = 'block'

    
})

category.addEventListener('click', function(){
    main.style.display = 'block'
    basket_list.style.display = 'none'
})
