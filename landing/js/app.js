// let subInput = document.getElementById('sub');
// const subBtn = document.getElementById('subBtn');
// const attention = document.getElementById('attention');

// subBtn.addEventListener('click', () => {
//     attention.style.display = 'block'
// })
// if(attention.style.display == 'block'){
//    setTimeout(function(){attention.style.display = 'none'}, 2000) 
//    console.log(1)
// }

const signButton = document.querySelector('.sign')                //функция для кнопки входа
let signButtonText = document.getElementById('signButtonText')
if(this.window.innerWidth < 780){
    signButtonText.style.display = 'none';
}
window.addEventListener("resize", function(){
    if(this.window.innerWidth < 780){
        signButtonText.style.display = 'none';
    }else{
        signButtonText.style.display = 'block';
    }
  })

let offset = 0;                                                    //функция для слайдера новостей
const sliderLine = document.querySelector('.slider_line');

document.getElementById('next').addEventListener('click', function(){
    offset += 300;
    if(offset > 1200){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.getElementById('prev').addEventListener('click', function(){
    offset -= 300;
    if(offset < 0){
        offset = 1200;
    }
    sliderLine.style.left = -offset + 'px';
});



// const buttons = document.querySelectorAll('.faq_btn');
// const questions = document.querySelectorAll('.question')

// buttons.forEach(but => {
//     but.addEventListener('click', () => {
//         // Убираем класс 'active' у всех кнопок
//         questions.forEach(qst => {
//             qst.classList.remove('active');
//         });
        
//         // Добавляем класс 'active' только к нажатой кнопке
//         qst.classList.toggle('active');
//     });
// });

// const buttons = document.querySelectorAll('.faq_btn');
// const questions = document.querySelectorAll('.question')

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         questions.forEach(question => {
//         question.classList.remove('active');
//     });
//     if(questions[index].classList.contains('active')){
//         questions[index].classList.remove('active');
//         console.log(1)
//     }else{
//         questions[index].classList.add('active');
//     }
//     });
// });

let prevQuestion, currQuestion

function activeQuestion(element){
    if(!prevQuestion){
        prevQuestion = document.getElementById(element)
        currQuestion = prevQuestion
    }else{
        prevQuestion = currQuestion.classList.toggle('active')
        prevQuestion.classList.remove('active')
        currQuestion = document.getElementById(element)
    }
    currQuestion.classList.add('active')
}

let prevButton, currButton, firstButton = document.getElementById('btn_toggle')        //функция для кнопок faq

function activeButton(element){
    if(!prevButton){
        prevButton = document.getElementById(element)
        currButton = prevButton
        firstButton.classList.remove('current')
    }else{
        prevButton = currButton
        prevButton.classList.remove('current')
        currButton = document.getElementById(element)
    }
    currButton.classList.add('current')
}



let previousSection, currentSection, firstSection = document.getElementById('firstSection')

function changeSectionStyle(element){   //изменение секций сайта
  if(!previousSection){
    previousSection = document.getElementById(element)
    currentSection = previousSection
    firstSection.style.display = "none"
  }else{
    previousSection = currentSection
    previousSection.style.display = "none"
    currentSection = document.getElementById(element)
  }
  currentSection.style.display = "block"
}

navBtn = document.getElementsByClassName('anchor')

for(i = 0; i < navBtn.length; ++i){
    navBtn[i].onclick = leftNavBtn
}

let count = 0, lastButton, nextButton
function leftNavBtn(){
    if(!lastButton){
        lastButton = this
        nextButton = lastButton
        navBtn[0].classList.remove('active')
    }else{
        lastButton = nextButton
        lastButton.classList.remove('active')
        nextButton = this
    }
    nextButton.classList.add('active')
}       

let lastNav, currentNav, nav = document.querySelectorAll("#nav")
nav.addEventListener('click', function(){
    if(!lastNav){
        lastNav = nav
        currentNav = lastNav
        // firstButton.classList.remove('active')
    }else{
        lastNav = currentNav
        lastNav.classList.remove('active')
        currentNav = nav
    }
    currentNav.classList.add('active')
})




// document.getElementById('fb').addEventListener('click', function(){
//     if(!question.classList.add('active')){
//         question.classList.add('active')
//     }
//     if(question.classList == 'active'){
//         question.classList.remove('active')
//     }
// })