const input = document.querySelector('[data-js="input"]')
const form = document.querySelector('[data-js="form"]')

input.addEventListener('input', (e) => {
  e.target.value = toCapitalize(e.target.value)
})

const toCapitalize = (name) => {
  const words = name.split(' ')
  const capitalized = words.map(word => {
    if(word.length > 0) {
      if(
        word.toLowerCase() === 'de' ||
        word.toLowerCase() === 'da' ||
        word.toLowerCase() === 'do' ||
        word.toLowerCase() === 'dos'
      ) {
        return word.toLowerCase()
      }else {
        const firstLetter = word[0].toUpperCase()
        const otherLetters = word.slice(1).toLowerCase()
        return `${firstLetter}${otherLetters}`
      }
    }else {
      return ''
    }
  })
  let response = ''
  capitalized.map((word, index, array) => index === (array.length -1) ? response += word : response += `${word} `)

  return response
}
//Create title
const title = document.createElement('h1')
title.innerText = 'Exercício 2'

//Create select to colors
const selectColor = document.createElement('select')
selectColor.setAttribute('multiple', true)
selectColor.classList.add('costum-select')

//Create options of colors
const color1 = document.createElement('option')
color1.setAttribute('value', 'laranja')
color1.setAttribute('label', 'Laranja')
const color2 = document.createElement('option')
color2.setAttribute('value', 'amarelo')
color2.setAttribute('label', 'Amarelo')
const color3 = document.createElement('option')
color3.setAttribute('value', 'azul')
color3.setAttribute('label', 'Azul')
const color4 = document.createElement('option')
color4.setAttribute('value', 'verde')
color4.setAttribute('label', 'Verde')
const color5 = document.createElement('option')
color5.setAttribute('value', 'vermelho')
color5.setAttribute('label', 'Vermelho')

//Insert options in to select
selectColor.appendChild(color1)
selectColor.appendChild(color2)
selectColor.appendChild(color3)
selectColor.appendChild(color4)
selectColor.appendChild(color5)

//Create div to receive the color representation
const divColors = document.createElement('div')
divColors.classList.add('colors-container')
const label = document.createElement('p')
label.innerHTML = 'Cores selecionadas:'

//Insert elements do form html
form.appendChild(title)
form.appendChild(selectColor)
form.appendChild(label)
form.appendChild(divColors)

const colorDivs = {
  amarelo: '#ff0',
  azul: '#0800ff',
  laranja: '#ffa700',
  verde: '#14ff00',
  vermelho: '#f00'
}
function createColorDivs(color, label) {
  const div = document.createElement('div')
  const text = document.createElement('p')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.backgroundColor = color
  text.innerText = label
  div.appendChild(text)

  return div
}

selectColor.addEventListener('change', (e) => {
  const options = [...e.target.selectedOptions]
  divColors.innerHTML = ''
  options.map(opt => {
    divColors.appendChild(createColorDivs(colorDivs[opt.value], opt.label))
  })
})

