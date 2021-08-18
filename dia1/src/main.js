import './style.css'

const app = document.querySelector('[data-js="app"]')
const link = document.querySelector('[data-js="link"]')
app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
link.addEventListener('click', () => {
  app.style.display === 'none' ? app.style.display = 'block' : app.style.display = 'none'
  app.style.display === 'none' ? link.innerHTML = 'Exibir App' : link.innerHTML = 'Ocultar App'
})