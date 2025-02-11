const btnDarkMode = document.querySelector(".dark-mode-btn");

// Checking night mode in in system options
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// Checking night mode in localStorage
if (localStorage.getItem("darkMode") == "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") == "dark") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Changing theme by system options
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorTheme = event.matches ? "dark" : "light";

    if (newColorTheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
    }
  });

// Night mode on
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// Effects

function changeId() {
  // Находим элемент по текущему id
  const element = document.getElementById("particles-js");

  // Меняем его id на новый
  element.id = "particles-js-2";
}

document
  .getElementById("trigger-button")
  .addEventListener("click", function () {
    particlesJS.load("particles-js", "assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
      changeId();

      // Явно указываем, что события взаимодействия применяются к контейнеру
      pJSDom[0].pJS.interactivity.el = document.getElementById("particles-js");
    });
  });
