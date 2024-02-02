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
    if(this.window.innerWidth > 901){
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