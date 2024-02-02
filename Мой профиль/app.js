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
    if(this.window.innerWidth > 1378){
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
  if(this.window.innerWidth > 616) {
    if(!previousElement){
      previousElement = document.getElementById(element)
      currentElement = previousElement
      newsElement.style.background = "white"
      newsElement.style.color = "#090909"
    }else{
        previousElement = currentElement
        previousElement.style.background = "white"
        previousElement.style.color = "#090909"
        currentElement = document.getElementById(element);
    }
    currentElement.style.background = "#4D2A6B"
    currentElement.style.color = "#F7F7F7"
  }else{
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
    window.addEventListener("resize", function(){
      if(this.window.innerWidth > 616){
        currentElement.style.color = "#F7F7F7"
        currentElement.style.background = "#4D2A6B"
        currentElement.style.fontWeight = 600
      } else {
        currentElement.style.color = "#4D2A6B"
        currentElement.style.background = "white"
        currentElement.style.fontWeight = 800
      }
    })
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
