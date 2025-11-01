alert("Ласкаво просимо на сайт FoodLogika!");

let  = new Date();
document.getElementById("date").innerHTML = "Сьогодні: " + d.toLocaleDateString("uk-UA");
alert("Ласкаво просимо на сайт FoodLogika!");

// Показує дату
let  = new Date();
document.getElementById("date").innerHTML = "Сьогодні: " + d.toLocaleDateString("uk-UA");

// Кнопка "вгору"
let btn = document.getElementById("topBtn");

window.onscroll = function() {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo(0, 0);
};