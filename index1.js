// ���� � ��������
let tableBlock = document.querySelector(".table-block");
// ������
let tableInputs = tableBlock.querySelectorAll(".table-input");
// ������ �������� �������
let removeBtn = document.querySelector(".table-remove button");
// ���� � ������ ��� ���������� �������
let inputAdd = document.querySelector(".add");
// ���� ��� ���������� �������
let addInputs = inputAdd.querySelectorAll("input[type=text]");
// ������ ���������� ������
let addBtn = inputAdd.querySelector(".table-input-add");

// ������� �������� ��������
const removeElements = () => {
    // ������������ ���� �� ������ "�������"
    removeBtn.addEventListener("click", (e) => {
        // ������� ������ ��� ��������
        tableInputs.forEach((element) => {
            // ��� ������� �������� ���������� � ���������� �������
            let checkbox = element.querySelector("input[type=checkbox]");

            // ���� ������� �������, �� ������� �������
            if (checkbox.checked) {
                element.remove();
            }
        });
    });
};

removeElements();