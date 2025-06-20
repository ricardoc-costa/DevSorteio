const sortear = document.querySelector(".sortear")
const resultado = document.querySelector(".resultado")

function getRandomIntInclusive() {
const min = document.querySelector(".de").value
const max = document.querySelector(".ate").value

const arred = Math.floor(Math.random() * (max - min + 1))
const numero = Number(arred) + Number(min)

resultado.innerHTML = numero
console.log(numero)
}

sortear.addEventListener("click", getRandomIntInclusive)