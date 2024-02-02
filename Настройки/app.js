e = document.getElementById('profile')
p = document.getElementById('menu')                                     //вкл-выкл меню профиля

e.addEventListener("click", function(){
    p.style.display = ( p.style.display == "block") ? 'none' : 'block'
});

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
function verifyPass(){                                                  //проверка на совпадение паролей в разделе регистрации
    let oldPass = document.getElementById('old_password');
    let newPass = document.getElementById('new_password');
    let match = true;
    if(oldPass.value == newPass.value){  //пароли совпали
        document.querySelector('.exception').style.display = 'none';
        match = true;
    } else {                            //пароли не совпали
        document.querySelector('.exception').style.display = 'block';
        match = false;
        oldPass.value = '';
        newPass.value = '';
    }
    return match;
}
document.querySelectorAll('.right_container_wrapper').forEach(element =>{        //обработчик события для проверки на совпадение паролей
    element.onsubmit = verifyPass;
});

/*function swap() {
    circle = document.querySelector('.big_avatar_circle')
    linkForAvatar = document.querySelector('.avatar_link')
    let elementNext = circle.nextElementSibling;
    if (elementNext == linkForAvatar) {
      circle.parentNode.insertBefore(linkForAvatar, circle);
      return;
    }
    circle.parentNode.insertBefore(linkForAvatar.parentNode.replaceChild(circle, linkForAvatar), elementNext);
}*/
