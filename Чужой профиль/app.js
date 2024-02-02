e = document.getElementById('profile')
p = document.getElementById('menu')

e.addEventListener("click", function(){
    p.style.display = ( p.style.display == "block") ? 'none' : 'block'
})

let search = document.getElementById('lupa')                                //появление посковика в адаптивках
let toggle = document.getElementById('toggle_search')
let searchLine = document.querySelector('.search_line')
let specialSearch =document.querySelector('.special_search')
window.addEventListener('resize', function(){
    if(this.window.innerWidth > 1415){
        toggle.style.display = 'none'
        let textFromSpecialSearch = specialSearch.value
        searchLine.value = textFromSpecialSearch
    }
    /*if(this.window.innerWidth < 425){
        specialSearch.style.width = 300;
    } else {
        specialSearch.style.width = 500;
    }*/
}, true);
search.addEventListener("click", function(){                            //переключатель на кнопку поиска в адаптивке
    toggle.style.display = ( toggle.style.display == "block") ? 'none' : 'block'
});


let previousElement, currentElement, newsElement = document.getElementById('activeNews')

function changeButtonStyle(element){  //изменение цвета кнопок при нажатии
  window.addEventListener("resize", function(){
    if(this.window.innerWidth > 616){
      currentElement.style.color = "#F7F7F7"
      currentElement.style.background = "#4D2A6B"
      currentElement.style.fontWeight = 600
    }else{
      currentElement.style.color = "#4D2A6B"
      currentElement.style.background = "white"
      currentElement.style.fontWeight = 800
    }
  })
  if(this.window.innerWidth > 616) { //если окно в компьютерном режиме
    if(!previousElement){              //проверка на отсутсвие значения у переменной previousElement
      previousElement = document.getElementById(element)
      currentElement = previousElement  //предыдущий элемент становится текущим
      newsElement.style.background = "white" //обнуляется цвет первой кнопки, заданый в html-коде
      newsElement.style.color = "#090909"
      newsElement.style.fontWeight = 600
    }else{                              //если пользователь уже нажимал на кнопки, то выполняется эта часть кода
      previousElement = currentElement //текущий элемент становится предыдущим
      previousElement.style.background = "white" //предыдущий элемент меняет цвет
      previousElement.style.color = "#090909"
      currentElement = document.getElementById(element);
    }
    currentElement.style.background = "#4D2A6B"
    currentElement.style.color = "#F7F7F7"
  }else{                          //если окно в мобильной версии
    if(!previousElement){
      previousElement = document.getElementById(element)
      currentElement = previousElement
      newsElement.style.background = "white"
      newsElement.style.color = "#090909"
      newsElement.style.fontWeight = 600
    }else{
      previousElement = currentElement
      previousElement.style.color = "#090909"
      previousElement.style.fontWeight = 600
      currentElement = document.getElementById(element);
    }
    currentElement.style.color = "#4D2A6B"
    currentElement.style.fontWeight = 800
    
  }           
}
let previousSection, currentSection, newsSection = document.getElementById('news')

function changeSectionStyle(element){   //изменение секций сайта
  if(!previousSection){
    previousSection = document.getElementById(element)
    currentSection = previousSection
    newsSection.style.display = "none"
  }else{
    previousSection = currentSection
    previousSection.style.display = "none"
    currentSection = document.getElementById(element)
  }
  currentSection.style.display = "block"
}
