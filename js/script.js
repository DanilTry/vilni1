window.onscroll = function showHeader(){
    var header = document.querySelector('.header')
    const headerLogo = document.querySelector('.header__logo')
    const menuItem = document.querySelector('.menu__item')
    const menulink = document.querySelector('.menu__link')
    const lng = document.querySelector('.header__lng')
    const buttonHeader = document.querySelector('.button__header')
  
    if(window.pageYOffset > 1){
      header.classList.add("header__fixed")
      headerLogo.classList.add('header-logo__active')
    }
    else{
      header.classList.remove("header__fixed")
      headerLogo.classList.remove('header-logo__active')

    }
  }
  
  
  
  
  
