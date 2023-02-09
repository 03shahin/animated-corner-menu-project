

const menuElem = document.querySelectorAll('.menu a')
const btnElem  = document.querySelector('#toggle-btn')

let isMenuActiv = false


console.log(menuElem);


btnElem.addEventListener('click' , () => {
    if (!isMenuActiv) {
        console.log('baz shod');
        isMenuActiv = true
        btnElem.classList.add('active')
        menuElem[0].style.transform = 'translate(150px , 0px )'
        menuElem[1].style.transform = 'translate(150px , 90px )'
        menuElem[2].style.transform = 'translate(98px , 150px )'
        menuElem[3].style.transform = 'translate(0px , 150px )'
    }else{
        menuElem.forEach(menuElem => menuElem.style.transform = 'translate(0 , 0 )')
        console.log('bste shod');
        isMenuActiv = false
        btnElem.classList.remove('active')
    }
})