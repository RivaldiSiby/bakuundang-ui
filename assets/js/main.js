setInterval(() => {
  let spanId = document.getElementById("undangan-animate");
  if (spanId.textContent === "Pernikahan") {
    spanId.textContent = "Ulang Tahun";
  } else {
    spanId.textContent = "Pernikahan";
  }
}, 2000);

// active menu list
let menulist = document.querySelectorAll("#link-m-list");
function removeAllActiveMenu() {
  for (let x = 0; x < menulist.length; x++) {
    menulist[x].classList.remove("text-primary");
  }
}
for (let x = 0; x < menulist.length; x++) {
  menulist[x].addEventListener("click", () => {
    removeAllActiveMenu();
    menulist[x].classList.add("text-primary");
  });
}

// show pass handler
document.getElementById("icon-eye").addEventListener("click", () => {
  let eyeicon = document.getElementById("icon-eye");
  let pass = document.getElementById("Password");
  if (eyeicon.classList.contains("show-pass")) {
    eyeicon.classList.remove("show-pass");
    eyeicon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    pass.setAttribute("type", "text");
  } else {
    eyeicon.classList.add("show-pass");
    eyeicon.innerHTML = `<i class="fa-solid fa-eye"></i`;
    pass.setAttribute("type", "password");
  }
});
