// navbar mobile
const navList = document.querySelector('#main-nav .nav-list'),
      openNav = document.querySelector('#main-nav i.fa-align-right'),
      closeNav = document.querySelector('#main-nav i.fa-times')
openNav.addEventListener('click', e => {
  navList.style.right = '0'
  closeNav.style.cssText += 'opacity: 1; pointer-events: auto; z-index: 9999'
})

closeNav.addEventListener('click', e => {
  navList.style.right = '-200vw'
  closeNav.style.cssText += 'opacity: 0; pointer-events: none;'
})

window.onscroll = e => {
  if(window.pageYOffset >= 5000){
    navList.parentElement.parentElement.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; box-shadow: 0 10px 15px rgba(0,0,0,0.1)'
  } else{
    navList.parentElement.parentElement.style.cssText = 'position: static'
  }
}