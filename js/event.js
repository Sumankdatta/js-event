function makeOrange() {
    document.body.style.backgroundColor = 'orange'
}
//second
const makeYellow = document.getElementById('make-yellow')

makeYellow.onclick = function btnYellow() {
    document.body.style.backgroundColor = 'yellow'
}

//3rd
const makePurple = document.getElementById('make purple');

makePurple.onclick = btnPurple

function btnPurple() {
    document.body.style.backgroundColor = 'purple'
}
//forth
const makePink = document.getElementById('make-pink')

makePink.addEventListener('click', btnPink)

function btnPink() {
    document.body.style.backgroundColor = 'pink'
}

//fifth

const darkRed = document.getElementById('dark-red')

darkRed.addEventListener('click', function btnDarkRed() {
    document.body.style.backgroundColor = 'DarkRed'
})

// sixth

document.getElementById('make-salmon').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Salmon'
})



