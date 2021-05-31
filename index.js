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

// Функция добавления элемента
const addElement = () => {
  // Обрабатываем событие клика по кнопке "добавить"
  addBtn.addEventListener("click", () => {
    let error = false;
    // Если хотя бы один инпут не заполнен, выходим из функции и добавление не происходит
    addInputs.forEach((element) => {
      if (element.value == "") {
        error = true;
        return false;
      }
    });

    if (error) {
      return false;
    }

    // Если же заполнены все инпуты, то записываем в переменные введённые значения
    let lastName = inputAdd.querySelector("input[name=last-name]").value;
    let firstName = inputAdd.querySelector("input[name=first-name]").value;
    let secondName = inputAdd.querySelector("input[name=second-name]").value;
    let cource = inputAdd.querySelector("input[name=cource]").value;
    let group = inputAdd.querySelector("input[name=group]").value;

    // Создаём новый элемент с новыми значениями в атрибуте value
    let newElement = `<div class="table-input">
          <div class="table-input-checkbox">
            <input type="checkbox" name="delete">
          </div>
          <div class="table-input-field last-name">
            <input type="text" name="last-name" value="${lastName}" required disabled>
          </div>
          <div class="table-input-field first-name">
            <input type="text" name="first-name" value="${firstName}" required disabled>
          </div>
          <div class="table-input-field second-name">
            <input type="text" name="second-name" value="${secondName}" required disabled>
          </div>
          <div class="table-input-field cource">
            <input type="text" name="cource" value="${cource}" required disabled>
          </div>
          <div class="table-input-field group">
            <input type="text" name="group" value="${group}" required disabled>
          </div>
        </div>`;

    // Добавляем новый элемент в блок с записями
    tableBlock.innerHTML += newElement;

    // Очищаем поля для ввода значений нового элемента
    addInputs.forEach((element) => {
      element.value = "";
    });

    // Обновляем переменные, тк количество элементов в них изменилось
    tableBlock = document.querySelector(".table-block");
    tableInputs = tableBlock.querySelectorAll(".table-input");
  });
};



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
}

addElement();
removeElements();
