/* Функція "Діалог з користувачем"
   Використовує prompt, alert, confirm, умовне розгалуження та цикл для демонстрації роботи */
function dialogWithUser() {
  let name = prompt("Введіть ваше ім'я:");
  if (!name) {
    alert("Ви не ввели ім'я!");
    return;
  }
  alert("Вітаємо, " + name + "!");
  
  // Підтвердження продовження діалогу
  let wantsContinue = confirm("Бажаєте продовжити діалог?");
  if (!wantsContinue) {
    alert("Діалог завершено.");
    return;
  }
  
  // Цикл для введення чисел та їх сумування
  let sum = 0;
  let num;
  do {
    num = parseFloat(prompt("Введіть число (0 для завершення):"));
    if (isNaN(num)) {
      alert("Будь ласка, введіть коректне число.");
      continue;
    }
    sum += num;
  } while(num !== 0);
  alert("Сума введених чисел: " + sum);
}

// Виклик функції "Діалог з користувачем"
dialogWithUser();

/* Функція для виводу інформації про розробника сторінки
   Параметри: surname (прізвище), firstName (ім'я), position (посада) з значенням за замовчуванням */
function developerInfo(surname, firstName, position = "UX/UI designer") {
  alert("Розробник: " + surname + " " + firstName + "\nПосада: " + position);
}

// Виклик функції з параметрами
developerInfo("Доломан", "Максим");

/* Функція для порівняння двох рядків.
   Більшим вважається той, що має більшу довжину.
   Результат виводиться через alert */
function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert("Більший рядок: " + str1);
  } else if (str2.length > str1.length) {
    alert("Більший рядок: " + str2);
  } else {
    alert("Рядки мають однакову довжину:\n" + str1 + "\n" + str2);
  }
}

// Виклик функції порівняння рядків
compareStrings("JavaScript", "JS");