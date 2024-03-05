var titleField = document.getElementById('title_news');
var descriptionField = document.getElementById('description_news');
var linkField = document.getElementById('link_to_news');

titleField.addEventListener('input', function() {
    if (this.value.length > 1000) {
        this.value = this.value.slice(0, 1000);
    }
});

descriptionField.addEventListener('input', function() {
  if (this.value.length > 1000) {
      this.value = this.value.slice(0, 1000);
  }
});

linkField.addEventListener('input', function() {
  if (this.value.length > 1000) {
      this.value = this.value.slice(0, 1000);
  }
});