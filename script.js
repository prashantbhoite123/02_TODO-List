const form = document.querySelector("form");
const addBtn = document.querySelector(".addbtn");
const ulcon = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  const input = document.querySelector("#input");
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("abe jaldi bol kal subaha panvel niklna hai");
  } else {
    ulcon.innerHTML += `<li><input type="checkbox" id="checkbox" />${input.value}<i class="fa-solid fa-trash"></i></li>`;
    input.value = "";

    const li = document.querySelectorAll("li");

    const checkbox = document.querySelectorAll("#checkbox");
    checkbox.forEach((check) => {
      check.addEventListener("click", (e) => {
        e.target.parentNode.classList.toggle("check");
      });
    });
    const delbtn = document.querySelectorAll(".fa-solid");

    delbtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
  }
});
