const form = document.querySelector('[data-js="form-cars"]')
const table = document.querySelector('[data-js="table"]')
const url = 'http://localhost:3333/cars'
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const elements = e.target.elements
//   const row = document.createElement('tr')
//   const url = document.createElement('td')
//   const model = document.createElement('td')
//   const year = document.createElement('td')
//   const plate = document.createElement('td')
//   const color = document.createElement('td')
//   const img = document.createElement('img')
//   const colorDiv = document.createElement('div')
//   colorDiv.style.width = '70px'
//   colorDiv.style.height = '50px'
//   colorDiv.style.backgroundColor = elements.color.value
//   img.setAttribute('src', elements.url.value)
//   model.innerText = elements.model.value
//   year.innerText = elements.year.value
//   plate.innerText = elements.plate.value
//   color.appendChild(colorDiv)
//   if(
//     elements.url.value &&
//     elements.model.value &&
//     elements.year.value &&
//     elements.plate.value &&
//     elements.color.value
//   ) {
//     row.appendChild(img)
//     row.appendChild(model)
//     row.appendChild(year)
//     row.appendChild(plate)
//     row.appendChild(color)
//     table.appendChild(row)

//     const inputs = [...elements].map(input => input.value = '')
//     elements.url.focus()
//   }else {
//     alert('Preencha todos os campos para efetuar o cadastro!')
//   }
// })

const GetData = async () => {
  const tr = document.createElement('tr')
  const data = await fetch(url).then(resp => resp.json())

  data.length > 0 ?
  data.map():
    tr.innerText = 'Nenhum carro encontrado'
    tr.setAttribute('colspan', '100%')
    table.appendChild(tr)
}
GetData()
