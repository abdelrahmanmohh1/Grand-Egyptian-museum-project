function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
const btn = document.getElementById("btn-pharaonic");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});