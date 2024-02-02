function changeText() {
    var textElement = document.getElementById("remove-fav");
    if (textElement.innerText === "Добавить в избранное") {
      textElement.innerText = "Убрать из избранного";
    } else {
      textElement.innerText = "Добавить в избранное";
    }
  }