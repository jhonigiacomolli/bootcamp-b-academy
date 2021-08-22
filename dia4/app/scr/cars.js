const form = document.querySelector('[data-js="form-cars"]')
const table = document.querySelector('[data-js="table"]')

const url = 'http://localhost:3333/cars'

async function GetData () {
  const data = await fetch(url).then(resp => resp.json())
  table.innerHTML = ''
  if(data.length > 0) {
    data.map(car => {
      const tr = document.createElement('tr')
      const tdImage = document.createElement('td')
      const img = document.createElement('img')
      img.setAttribute('src', car.image)
      tdImage.appendChild(img)
      const tdModel = document.createElement('td')
      tdModel.innerText = car.brandModel
      const tdYear = document.createElement('td')
      tdYear.innerText = car.year
      const tdPlate = document.createElement('td')
      tdPlate.innerText = car.plate
      const tdColor = document.createElement('td')
      const colorDiv = document.createElement('div')
      colorDiv.style.width = '70px'
      colorDiv.style.height = '50px'
      colorDiv.style.backgroundColor = car.color
      tdColor.appendChild(colorDiv)
      const tdAction = document.createElement('td')
      const action = document.createElement('button')
      action.innerText = 'Excluir'
      action.addEventListener('click', async (e) => {
        e.preventDefault()
        const result = await DeleteData(car.plate)
        if(result.ok) {
          DisplayMessage(`O carro com a placa ${car.plate} foi excluido com sucesso!`)
          GetData()
        } else {
          DisplayMessage(`Opss... ocorreu um erro enquanto tentavamos excluir o carro com a placa ${car.plate}!`)
          GetData()
        }
      })
      tdAction.appendChild(action)
      tr.appendChild(tdImage)
      tr.appendChild(tdModel)
      tr.appendChild(tdYear)
      tr.appendChild(tdPlate)
      tr.appendChild(tdColor)
      tr.appendChild(tdAction)
      table.appendChild(tr)
    })
  }else {
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.innerText = 'Nenhum carro encontrado'
    td.setAttribute('colspan', 6)
    td.setAttribute('data-js', 'empty-row')
    tr.appendChild(td)
    table.appendChild(tr)
  }
}
GetData()

async function PostData() {
  const image = form.elements.url.value
  const model = form.elements.model.value
  const year = Number(form.elements.year.value)
  const plate = form.elements.plate.value
  const color = form.elements.color.value

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: image,
      brandModel: model,
      year: year,
      plate: plate,
      color: color
    })
  }).then(resp => resp.json())

  result.error ? DisplayMessage(result.message) :  DisplayMessage(result.message), GetData(), form.reset()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  PostData()
})

async function DeleteData(plate) {
  const result = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plate: plate,
    })
  })

  return result
}


function DisplayMessage(message) {
  const body = document.querySelector('body')
  const modal = document.createElement('div')
  const messageBox = document.createElement('div')
  const msg = document.createElement('p')
  const button = document.createElement('button')

  modal.classList.add('modal')
  modal.classList.add('open')
  messageBox.classList.add('message')
  msg.innerHTML = message
  messageBox.appendChild(msg)
  button.textContent = 'OK'
  button.addEventListener('click', () => {
    body.removeChild(modal)
  })
  messageBox.appendChild(button)

  modal.appendChild(messageBox)
  body.appendChild(modal)
}
