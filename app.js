const modal = document.querySelector('.modal')
const superhero = document.querySelectorAll('#superhero')
const close = document.querySelector('.modal__content--close')
const cardsItems = document.querySelectorAll('#card-items')

superhero.forEach((heroe) => {
  heroe.addEventListener('click', function () {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
    cardsItems.forEach((e, key) => {
      e.src = `img/slider/${heroe.dataset.name}/${key + 1}.png`
    })
  })
})


close.addEventListener('click', () => {
  modal.classList.remove('visible')
  modal.classList.add('hidden')
})
