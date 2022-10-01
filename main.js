window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  var elemento = document.getElementById('navigation')
  /*usei esse var elemento para que o valor de elemento do elemento.classList não fosse indefinido*/
  //console.log(elemento)
  if (scrollY > 0) {
    elemento.classList.add('scroll')
  } else {
    elemento.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  var batata = document.getElementById('backToTopButton')
  if (scrollY > 500) {
    batata.classList.add('show')
  } else {
    batata.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1700
}).reveal(`#home,
#home img,
#home .stats,
#services,#services header,
#services .card,
#about,
#about header,
#about .content`)
