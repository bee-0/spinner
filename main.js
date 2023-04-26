const spinner = document.getElementById("spinner");

setTimeout(() => {
  spinner.classList.add("hide-spinner");
}, 5000);

setTimeout(() => {
  spinner.style.display = "none";
}, 6500);
