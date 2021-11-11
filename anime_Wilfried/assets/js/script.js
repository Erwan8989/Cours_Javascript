let cardsImg = document.querySelectorAll('.card')
let name = document.querySelector('h2');
let img = document.querySelectorAll('img');
let burger = document.querySelector('ion-icon')
let navigation = document.querySelector('nav')

cardsImg.forEach(c => {
    c.addEventListener('mouseover', () => {
        let arrayNum = new Array();
        let randNum;
        
        for (let i = 0; i <= 8; i++) {
            randNum = Math.trunc(Math.random() * 100) + '%';
            arrayNum.push(randNum);
        }
        arrayNum.splice(4, 0, '/')
        
        img.forEach(i => {
            let result = '';
            for (let j = 0; j < arrayNum.length - 1; j++) {
                result += arrayNum[j] + ' '
            }
            i.style.borderRadius = result;
            console.log(i.style.borderRadius)
        })
        
    })
})

burger.addEventListener('click',() => {
    navigation.classList.toggle('active')
    burger.classList.toggle('active')
    let naming = '';
    let delay;
    if(burger.classList.contains('active')) {
        naming = 'close-outline';
        delay = 100
    } else {
        naming = 'menu-outline';
        delay = 400;
    }
    setTimeout(() => {
        burger.setAttribute('name',naming)
    }, delay);
})