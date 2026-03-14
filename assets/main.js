function updateTime() {
  let now = new Date();

  document.getElementById("date").innerHTML = now.toDateString();

  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);

// nav js
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});
