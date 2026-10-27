const form = document.getElementById("regForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(inputId, errorId, text) {
  const input = document.getElementById(inputId);
  document.getElementById(errorId).textContent = text;
  if (input) {
    input.classList.remove("valid", "invalid");
    // перезапуск анімації shake
    void input.offsetWidth;
    input.classList.add("invalid");
  }
  return false;
}

function setOk(inputId, errorId) {
  const input = document.getElementById(inputId);
  document.getElementById(errorId).textContent = "";
  if (input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  return true;
}

function checkName() {
  const v = document.getElementById("name").value.trim();
  return v === "" ? setError("name", "nameError", "Введіть ім'я") : setOk("name", "nameError");
}

function checkEmail() {
  const v = document.getElementById("email").value.trim();
  if (v === "") return setError("email", "emailError", "Введіть email");
  if (!emailRegex.test(v)) return setError("email", "emailError", "Невірний формат email");
  return setOk("email", "emailError");
}

function checkPassword() {
  const v = document.getElementById("password").value;
  return v.length < 6
    ? setError("password", "passwordError", "Пароль має містити мінімум 6 символів")
    : setOk("password", "passwordError");
}

function checkConfirm() {
  const p = document.getElementById("password").value;
  const c = document.getElementById("confirm").value;
  if (c === "") return setError("confirm", "confirmError", "Підтвердіть пароль");
  if (c !== p) return setError("confirm", "confirmError", "Паролі не збігаються");
  return setOk("confirm", "confirmError");
}

function checkAge() {
  const v = document.getElementById("age").value;
  if (v === "") return setError("age", "ageError", "Введіть вік");
  if (Number(v) < 10) return setError("age", "ageError", "Вік має бути 10 або більше");
  return setOk("age", "ageError");
}

function checkGender() {
  const g = document.querySelector('input[name="gender"]:checked');
  if (!g) return setError(null, "genderError", "Оберіть стать");
  document.getElementById("genderError").textContent = "";
  return true;
}

// перевірка "наживо" під час введення
document.getElementById("name").addEventListener("input", checkName);
document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("password").addEventListener("input", checkPassword);
document.getElementById("confirm").addEventListener("input", checkConfirm);
document.getElementById("age").addEventListener("input", checkAge);
document.querySelectorAll('input[name="gender"]').forEach(function (r) {
  r.addEventListener("change", checkGender);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const results = [checkName(), checkEmail(), checkPassword(), checkConfirm(), checkAge(), checkGender()];

  if (results.every(Boolean)) {
    alert("Реєстрація успішна!");
    form.reset();
    document.querySelectorAll("input").forEach(function (i) {
      i.classList.remove("valid", "invalid");
    });
  }
});