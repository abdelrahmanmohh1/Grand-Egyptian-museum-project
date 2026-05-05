function mySearchFunction() {
  var input = document.getElementById("mySearchInput");
  var filter = input.value.toUpperCase();
  
  var items = document.getElementsByClassName("gallery-item");

  for (var i = 0; i < items.length; i++) {
    var desc = items[i].getElementsByClassName("desc")[0];

    if (desc) {
      var textValue = desc.textContent || desc.innerText;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}
function setLayout(type) {
  const container = document.querySelector(".gallery-container");

  container.classList.remove("grid", "list", "details");
  container.classList.add(type);
}
let currentPage = 1;
const itemsPerPage = 4;

function showPage(page) {
  const items = document.getElementsByClassName("gallery-item");

  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  for (let i = 0; i < items.length; i++) {
    if (i >= start && i < end) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
function clearSearch() {
  const input = document.getElementById("mySearchInput");
  input.value = "";

  const items = document.getElementsByClassName("gallery-item");

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "";
  }

}