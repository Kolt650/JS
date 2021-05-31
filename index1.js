// Блок с записями
let tableBlock = document.querySelector(".table-block");
// Записи
let tableInputs = tableBlock.querySelectorAll(".table-input");
// Кнопки удаления записей
let removeBtn = document.querySelector(".table-remove button");
// Блок с полями для добавления записей
let inputAdd = document.querySelector(".add");
// Поля для добавления записей
let addInputs = inputAdd.querySelectorAll("input[type=text]");
// Кнопка добавления записи
let addBtn = inputAdd.querySelector(".table-input-add");

// Функция удаления элемента
const removeElements = () => {
    // Обрабатываем клик по кнопке "удалить"
    removeBtn.addEventListener("click", (e) => {
        // Обходим циклом все элементы
        tableInputs.forEach((element) => {
            // Для каждого элемента записываем в переменную чекбокс
            let checkbox = element.querySelector("input[type=checkbox]");

            // Если чекбокс активен, то удаляем элемент
            if (checkbox.checked) {
                element.remove();
            }
        });
    });
};

removeElements();