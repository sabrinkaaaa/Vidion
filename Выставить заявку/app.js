e = document.getElementById('profile')
p = document.getElementById('menu')

e.addEventListener("click", function(){
    p.style.display = ( p.style.display == "block") ? 'none' : 'block'
})