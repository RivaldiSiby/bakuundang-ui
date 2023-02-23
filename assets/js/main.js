setInterval(() => {
  let spanId = document.getElementById("undangan-animate");
  if (spanId.textContent === "Pernikahan") {
    spanId.textContent = "Ulang Tahun";
  } else {
    spanId.textContent = "Pernikahan";
  }
}, 2000);
