const form = document.getElementById("contactForm");
const errorEl = document.getElementById("error");
const themeBtn = document.getElementById("themeBtn");

// Обробка події submit у формі
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Перевірка заповненості полів
    if (name === "" || email === "" || message === "") {
        errorEl.textContent = "Будь ласка, заповніть усі поля.";
        return;
    }

    // Проста перевірка email
    if (!email.includes("@") || !email.includes(".")) {
        errorEl.textContent = "Введіть коректну електронну адресу.";
        return;
    }

    errorEl.textContent = "";

    // Привітання через alert
    alert(`Дякую, ${name}! Ваше повідомлення надіслано.`);

    // Виведення даних у консоль
    console.log("Ім'я:", name);
    console.log("Email:", email);
    console.log("Повідомлення:", message);

    form.reset();
});

// Перемикач теми (світла/темна) із збереженням у LocalStorage
function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    themeBtn.textContent = theme === "dark" ? "Світла тема" : "Темна тема";
}

applyTheme(localStorage.getItem("theme") || "light");

themeBtn.addEventListener("click", function () {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});