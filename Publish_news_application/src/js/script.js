<script>
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.publish_news-btn').addEventListener('click', function(event) {
      var title = document.getElementById('title_news').value.trim();
      var description = document.querySelector('textarea[name="description_news"]').value.trim();
      var link = document.getElementById('link_to_news').value.trim();
      var price = document.getElementById('set_price').value.trim();

      // Проверка поля цены на наличие только цифр
      if (!(/^\d+$/.test(price))) {
        alert('Пожалуйста, введите только цифры в поле цены.');
        event.preventDefault();
        return;
      }

      // Проверка остальных полей на ограничение в 1000 символов
      if (title.length > 1000 || description.length > 1000 || link.length > 1000) {
        alert('Поля Название, Описание и Ссылка на материал должны содержать не более 1000 символов.');
        event.preventDefault();
        return;
      }

      // Если все проверки прошли успешно, можно отправить форму
      document.publish_news.submit();
    });
  });
</script>
