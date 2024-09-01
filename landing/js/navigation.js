// Получаем все секции на странице
const sections = document.querySelectorAll('section');
// Получаем все ссылки в меню навигации
const menuLinks = document.querySelectorAll('.anchor');

// Функция для проверки видимости элемента
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Функция обратного вызова для Intersection Observer
const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Если секция видима, выделяем соответствующий пункт меню навигации
            menuLinks.forEach((link) => {
                const sectionId = link.getAttribute('href').slice(1);
                if (sectionId === entry.target.id) {
                    link.classList.add('active'); // Добавляем класс "active" для меню
                } else {
                    link.classList.remove('active'); // Удаляем класс "active" для остальных пунктов меню
                }
            });
        }
    });
};

// Создаем Intersection Observer для отслеживания видимости секций
const observer = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.5 // При значении 0.5, элемент считается видимым, если он виден хотя бы наполовину
});

// Наблюдаем каждую секцию
sections.forEach((section) => {
    observer.observe(section);
});

const navSection = document.getElementById('navSection')
const btnMenu = document.getElementById('menu')
const btnClose = document.getElementById('close')

btnMenu.addEventListener('click', function(){
    navSection.style.right = 0 + 'px'
    btnMenu.style.display = 'none'
})
btnClose.addEventListener('click', function(){
    navSection.style.right = -260 + 'px'
    btnMenu.style.display = 'flex'
})