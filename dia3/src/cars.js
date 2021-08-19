const form = document.querySelector('[data-js="form-cars"]')
const table = document.querySelector('[data-js="table"]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const elements = e.target.elements

  const row = document.createElement('tr')
  const url = document.createElement('td')
  const model = document.createElement('td')
  const year = document.createElement('td')
  const plate = document.createElement('td')
  const color = document.createElement('td')
  url.innerText = elements.url.value
  model.innerText = elements.model.value
  year.innerText = elements.year.value
  plate.innerText = elements.plate.value
  color.innerText = elements.color.value
  if(
    elements.url.value &&
    elements.model.value &&
    elements.year.value &&
    elements.plate.value &&
    elements.color.value
  ) {
    row.appendChild(url)
    row.appendChild(model)
    row.appendChild(year)
    row.appendChild(plate)
    row.appendChild(color)
    table.appendChild(row)

    const inputs = [...elements].map(input => input.value = '')
    elements.url.focus()
  }else {
    alert('Preencha todos os campos para efetuar o cadastro!')
  }
})
