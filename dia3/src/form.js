const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', (e) => {
  e.target.value = toCapitalize(e.target.value)
})

const toCapitalize = (name) => {
  const words = name.split(' ')
  const capitalized = words.map(word => {
    if(word.length > 0) {
      const firstLetter = word[0].toUpperCase()
      const otherLetters = word.slice(1).toLowerCase()
      return `${firstLetter}${otherLetters}`
    }else {
      return ''
    }
  })
  let response = ''
  capitalized.map((word, index, array) => index === (array.length -1) ? response += word : response += `${word} `)

  return response
}
