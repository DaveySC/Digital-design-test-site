const btn = document.querySelector('.switch__input');

const root = document.querySelector(":root");

btn.addEventListener('click', function() {
    if (btn.checked) {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
    }
})