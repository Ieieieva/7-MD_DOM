
// ------ 1. button --------

const allBoxes = document.querySelectorAll<HTMLDivElement>('.boxes__box')
const allBtns = document.querySelectorAll<HTMLButtonElement>('.button')

allBtns[0]?.addEventListener('click', () => {
    allBoxes[0].style.backgroundColor = 'yellow';
})


// ------ 2. button --------

allBtns[1].addEventListener('click', () => {
    allBoxes[1].textContent = 'SUCCESS';
})


// ------ 3. button --------

allBtns[2].addEventListener('click', () => {
    allBoxes[2].style.visibility = 'hidden';
})


// ------ 4. button --------

allBtns[3].addEventListener('click', () => {
    if (allBoxes[3].style.visibility === 'visible') {
        allBoxes[3].style.visibility = 'hidden';
    } else {
        allBoxes[3].style.visibility = 'visible';
    }
})


// ------ 5. button --------

const colors = ['#017187', '#5C0187B5', '#8711018F', '#01870EA1', '#E2CF22', '#011E87'];
let index = 0;
allBtns[4].addEventListener('click', () => {
    allBoxes[4].style.backgroundColor = colors[index]
    // Each time the button is clicked, we either increment the value in the index variable or set it back to 0 if 
    // the last color already was shown.
    index = index >= colors.length - 1 ? 0 : index + 1;
})


// ------ 6. button --------

allBtns[5].addEventListener('click', () => {
    let counter = 0
    let timer = setInterval(() => {
        counter = counter + 1
        allBoxes[5].innerHTML = '' + counter;
        if (counter === 10) {
            clearInterval(timer)
        }
    }, 3000);
})


// ------ 7. button --------

allBtns[6].addEventListener('click', () => {
    const body = document.getElementsByTagName('body')[0]
    allBoxes.forEach(box => {
        box.style.backgroundColor = '#18D5E1'
        body.style.backgroundColor = '#e9e6c9'
    })
})


// ------ 1. box --------



allBoxes[0].addEventListener('mouseenter', () => {
    allBoxes[0].style.backgroundColor = 'red';
})
allBoxes[0].addEventListener('mouseleave', () => {
    allBoxes[0].style.backgroundColor = 'teal';
})

// ------ 5. box --------

allBoxes[4].addEventListener('mouseenter', function time () {
    let counter1 = 0
    let timer1 = setInterval(() => {
        counter1 = counter1 + 1
        allBoxes[4].innerHTML = '' + counter1
        if (counter1 === 10) {
            clearInterval(timer1)
        }
        allBoxes[4].addEventListener('mouseleave', function time () {
            allBoxes[4].innerHTML = '0';
            clearInterval(timer1)
        })
    }, 3000);
})


// ------ input --------

// const input = document.querySelector<HTMLInputElement | null>('footer__input');
// const button = document.querySelector<HTMLButtonElement>('footer__btn');
// const area = document.querySelector<HTMLParagraphElement>('areaForText');


// if (input.value !== null) {
//     button.addEventListener('click', () => {
//         area.innerHTML = 'You typed: ' + input.value;
//     })
// }

// const myFunction = () => {
//     const text = input.value;
//     document.querySelector('areaForText').innerHTML = text;
// }

// (console.log(allBtns[2]))