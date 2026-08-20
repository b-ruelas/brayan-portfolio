const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
} else {
    document.body.classList.add("dark-mode");
}


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}