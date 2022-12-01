const Input = document.querySelector("#input")
const h1Btn = document.querySelector("#h1")
const h2Btn = document.querySelector("#h2")
const h3Btn = document.querySelector("#h3")
const OutPut = document.querySelector("#output")

Input.addEventListener("Input", function () {
    displayOutput(Input.value)
})
h1Btn.addEventListener("click",h1Text )
h2Btn.addEventListener("click",h2Text )
h3Btn.addEventListener("click",h3Text )

function displayOutput(text) {
    OutPut.innerHTML = text
}
function h1Text () {
    displayOutput(`<h1>${Input.value}</h1> `)
}
function h2Text () {
    displayOutput(`<h2>${Input.value}</h2> `)
}
function h3Text() {
    displayOutput(`<h3>${Input.value}</h2> `)
}