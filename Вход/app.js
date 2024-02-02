/*e = document.getElementById('profile')
p = document.getElementById('menu')

e.addEventListener("click", function(){
    p.style.display = ( p.style.display == "block") ? 'none' : 'block'
})*/

document.querySelectorAll('.check').forEach(element => {
    element.onclick = checkFunction
});

function checkFunction(){
    ch = document.querySelector('.check')
    en = document.querySelector('.entry')
    reg = document.querySelector('.registration')
    if(ch.checked == true){       
        en.style.display = 'none'
        reg.style.display = 'block'
    } else {
        reg.style.display = 'none'
        en.style.display = 'block'
    }
}

function verifyPass(){
    let oldPass = document.getElementById('old_password');
    let newPass = document.getElementById('new_password');
    let match = true;
    if(oldPass.value == newPass.value){
        document.querySelector('.exception').style.display = 'none';
        match = true;
    } else {
        document.querySelector('.exception').style.display = 'block';
        match = false;
        oldPass.value = '';
        newPass.value = '';
    }
    return match;
}
document.querySelectorAll('.input_wrapper').forEach(element =>{
    element.onsubmit = verifyPass;
});

