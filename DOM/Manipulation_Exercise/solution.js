let numberOne = document.getElementById("task1").innerText = 'new text'

let numberTwo = document.getElementById("task2").innerHTML = '<button type: submit/>'

let numberThree = document.querySelector("body").style.backgroundColor = '#232323'
let makeReadable = document.querySelector("body").style.color = 'white'

let numberFour = document.querySelectorAll(".item")
for (let i of numberFour) {
    i.style.border = '2px solid yellow'
}

let numberFive = document.querySelector("#task5").setAttribute('href', 'https://www.springboard.com/')

let numberSix = document.querySelector("#task6").value = 'DOM Master'

let numberSeven = document.querySelector('#task7').classList.add('new-class')

let numberEight = document.querySelector("#task8")
let newButton = document.createElement("button")
numberEight.append(newButton)

let numberNine = document.querySelector("#task9").remove()