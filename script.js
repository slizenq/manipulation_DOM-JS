1 задание
let btn = document.querySelector('#replace_value')
btn.addEventListener('click', (event) =>  {
    document.querySelector('.green > p').innerHTML = 'dasd'
})

2 задание
let btn = document.querySelector('.ex1')
btn.addEventListener('mouseover', (event) =>  {
    btn.classList.add('hovered')
})
btn.addEventListener('mouseout', (event) =>  {
    btn.classList.remove('hovered')
})

3 задание
let el = document.querySelector('#inputField')
let test = document.querySelector('#output')
el.addEventListener('input',(event) => {
    test.innerHTML = el.value
})

4 задание
let el = document.querySelector('.ex1')
el.style.cursor = 'pointer'
el.addEventListener('dblclick',(event) => {
    el.style.backgroundColor = 'red'
})

5 задание
let el = document.getElementById('agreeCheckbox')
let ele = document.getElementById('submitButton')

el.addEventListener('input',() => {
    // ele.setAttribute('disabled','')
    (el.checked) ? ele.setAttribute('disabled','') : ele.removeAttribute('disabled','')    
})

6 задание
window.addEventListener('resize', (event) => {
    let el = document.querySelector('#windowSize')
    el.innerHTML = `Высота: ${event.currentTarget.innerHeight} + ширина: ${event.currentTarget.innerWidth}`
    el.style.width = `${event.currentTarget.innerWidth}px`
    el.style.height = `${event.currentTarget.innerHeight}px`
})

7 задание
let el = document.querySelector('#link')
el.addEventListener('mouseover', (event) =>  {
    el.innerHTML = "Вы навели мышь"
})
el.addEventListener('mouseout', (event) =>  {
    el.innerHTML = "вернуться к исходному тексту"
})

8 задание
let btn = document.querySelector('#windowSize')
btn.addEventListener('click', (event) =>  {
    btn.style.display = 'none'
})

9 задание
let el = document.querySelector('#agree')
el.addEventListener('input', () => {
    (el.value.length > 10) ? el.value = el.value.slice(0, 10) : el.value
})

10 задание
let el = document.querySelector('#toggleButton')
let link = document.querySelector('#dad')
el.addEventListener('click', () => {
    (document.querySelector('.acctive')) ? link.className=('unacctive') : link.className=('acctive');
})

/////////////////////////////
Задача 1
let test = {
    name: 'Ayy',
    testA: 15
}
// test.testN = test.Name
// console.log(test);


let user = {
    name: 'viktor',
    age: 18
}
Object.assign(user, test)
console.log(user);

// Задача 2

// Задача 3

// Задача 4

// Задача 5

// Задача 6

// Задача 7

// Задача 8

// Задача 9

// Задача 10