var menuVisible = false;
var hamburgerMenu = document.querySelector(".hamburger-menu");
var menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", function () {
    if (!menuVisible) {
        menu.style.left = "0";
        menuVisible = true;
        for (var i = 0; i < 3; i++) {
            hamburgerMenu.children[i].classList.add("active-bar");
        }
    } else {
        menu.style.left = "-200px";
        menuVisible = false;
        for (var i = 0; i < 3; i++) {
            hamburgerMenu.children[i].classList.remove("active-bar");
        }
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var invalidNumbers = [];
var answers = [];

function handleColumnCountChange() {
    var columnCountInput = document.getElementById("columnCountInput");
    var cellCountInput = document.getElementById("cellCountInput");
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var invalidNumbersInput = document.getElementById("invalidNumbersInput");
    var generateButton = document.querySelector("button");
    var columnCount = parseInt(columnCountInput.value);

    if (columnCount === 0 || columnCount > 5) {
        cellCountInput.disabled = true;
        minNumberInput.disabled = true;
        maxNumberInput.disabled = true;
        generateButton.disabled = true;
        invalidNumbersInput.disabled = true;
    } else {
        cellCountInput.disabled = false;
        minNumberInput.disabled = false;
        maxNumberInput.disabled = false;
        generateButton.disabled = false;
        invalidNumbersInput.disabled = false;
    }
}

var columnCountInput = document.getElementById("columnCountInput");
columnCountInput.addEventListener("change", handleColumnCountChange);

function handleCellCountChange() {
    var cellCountInput = document.getElementById("cellCountInput");
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var invalidNumbersInput = document.getElementById("invalidNumbersInput");
    var generateButton = document.querySelector("button");
    var cellCount = parseInt(cellCountInput.value);

    if (cellCount >= 0 && cellCount <= 4) {
        minNumberInput.disabled = true;
        maxNumberInput.disabled = true;
        generateButton.disabled = true;
        invalidNumbersInput.disabled = true;
    } else {
        minNumberInput.disabled = false;
        maxNumberInput.disabled = false;
        generateButton.disabled = false;
        invalidNumbersInput.disabled = false;
    }
}

var cellCountInput = document.getElementById("cellCountInput");
cellCountInput.addEventListener("change", handleCellCountChange);

function handleMinNumberChange() {
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var generateButton = document.querySelector("button");
    var minNumber = parseInt(minNumberInput.value);

    if (invalidNumbers.includes(minNumber)) {
        maxNumberInput.disabled = true;
        generateButton.disabled = true;
    } else {
        maxNumberInput.disabled = false;
        generateButton.disabled = false;
    }
}

var minNumberInput = document.getElementById("minNumberInput");
minNumberInput.addEventListener("change", handleMinNumberChange);

function handleMaxNumberChange() {
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var invalidNumbersInput = document.getElementById("invalidNumbersInput");
    var generateButton = document.querySelector("button");
    var maxNumber = parseInt(maxNumberInput.value);
    var minNumber = parseInt(minNumberInput.value);
    var errorContainer = document.getElementById("maxNumberError");

    if (invalidNumbers.includes(maxNumber)) {
        generateButton.disabled = true;
    } else if (maxNumber === minNumber) {
        generateButton.disabled = true;
        invalidNumbersInput.disabled = true;
        errorContainer.textContent = "Min and Max shouldn't match.";
    } else if (maxNumber < minNumber) {
        generateButton.disabled = true;
        invalidNumbersInput.disabled = true;
        errorContainer.textContent = "Number is less than min number.";
    } else {
        generateButton.disabled = false;
        invalidNumbersInput.disabled = false;
        errorContainer.textContent = "";
    }
}

var maxNumberInput = document.getElementById("maxNumberInput");
maxNumberInput.addEventListener("change", handleMaxNumberChange);

document.addEventListener("DOMContentLoaded", function () {
    var columnCountInput = document.getElementById("columnCountInput");
    var cellCountInput = document.getElementById("cellCountInput");
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var invalidNumbersInput = document.getElementById("invalidNumbersInput");
    var generateButton = document.querySelector("button");
    var seeSolutionButton = document.getElementById("seeSolutionButton");

    columnCountInput.disabled = true;
    cellCountInput.disabled = true;
    minNumberInput.disabled = true;
    maxNumberInput.disabled = true;
    invalidNumbersInput.disabled = true;
    generateButton.disabled = true;
    seeSolutionButton.disabled = true;

    function handleModeChange() {
        var modeSelect = document.getElementById("modeSelect");
        var selectedMode = modeSelect.value;
        var modeMessage = document.getElementById("modeMessage");
        var differnce1 = document.getElementById("differnce1");
        var differnce2 = document.getElementById("differnce2");

        if (selectedMode === "baby") {
            modeMessage.innerHTML = "<p style='color: red;'>You are in Baby Mode</p>";
            differnce1.innerHTML = "<li style='color: red;'>Min number default: 2</li>";
            differnce2.innerHTML = "<li style='color: red;'>Max number default: 9</li>";
        } else if (selectedMode === "adv") {
            modeMessage.innerHTML = "<p style='color: red;'>You are in Advanced Mode</p>";
            differnce1.innerHTML = "<p style='color: red;'>No defaults are set</p>";
            differnce2.innerHTML = "";
        } else {
            modeMessage.innerHTML = "<p style='color: red;'>Choose Mode</p>";
            differnce1.innerHTML = "";
            differnce2.innerHTML = "";
        }

        if (selectedMode === "baby" || selectedMode === "adv") {
            columnCountInput.disabled = false;
            cellCountInput.disabled = false;
            minNumberInput.disabled = false;
            maxNumberInput.disabled = false;
            invalidNumbersInput.disabled = false;
            generateButton.disabled = true;
        } else {
            columnCountInput.disabled = true;
            cellCountInput.disabled = true;
            minNumberInput.disabled = true;
            maxNumberInput.disabled = true;
            invalidNumbersInput.disabled = true;
            generateButton.disabled = true;
        }
    }

    var modeSelect = document.getElementById("modeSelect");
    modeSelect.addEventListener("change", handleModeChange);
});

function handleInvalidNumbersChange() {
    var invalidNumbersInput = document.getElementById("invalidNumbersInput");
    var invalidNumbersStr = invalidNumbersInput.value;
    invalidNumbers = invalidNumbersStr.split(",").map(Number);

    var columnCountInput = document.getElementById("columnCountInput");
    var cellCountInput = document.getElementById("cellCountInput");
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var generateButton = document.querySelector("button");

    var columnCount = parseInt(columnCountInput.value);
    var minNumber = parseInt(minNumberInput.value);
    var maxNumber = parseInt(maxNumberInput.value);

    if (columnCount === 0 || columnCount > 5) {
        cellCountInput.disabled = true;
        minNumberInput.disabled = true;
        maxNumberInput.disabled = true;
        generateButton.disabled = true;
    } else {
        cellCountInput.disabled = false;
        minNumberInput.disabled = false;
        maxNumberInput.disabled = false;
        generateButton.disabled = false;
    }
}

var invalidNumbersInput = document.getElementById("invalidNumbersInput");
invalidNumbersInput.addEventListener("change", handleInvalidNumbersChange);

function updateCircleText() {
    var columnCountInput = document.getElementById("columnCountInput");
    var cellCountInput = document.getElementById("cellCountInput");
    var numberOfColumns = parseInt(columnCountInput.value);
    var cellsPerColumn = parseInt(cellCountInput.value);

    var circleText = document.getElementById("circleText");
    var result = numberOfColumns * cellsPerColumn;

    if (!isNaN(result)) {
        circleText.textContent = result;
    } else {
        circleText.textContent = "";
    }
}

var inputElements = document.querySelectorAll("input");
inputElements.forEach(function (input) {
    input.addEventListener("change", updateCircleText);
});

updateCircleText();

function generateMultiplication() {
    var modeSelect = document.getElementById("modeSelect");
    var mode = modeSelect.value;
    var minNumberInput = document.getElementById("minNumberInput");
    var maxNumberInput = document.getElementById("maxNumberInput");
    var minNumber = parseInt(minNumberInput.value);
    var maxNumber = parseInt(maxNumberInput.value);
    var num1, num2, result, formatIndex, format;

    if (mode === "baby") {
        num1 = getRndInteger(minNumber, maxNumber);

        do {
            num1 = getRndInteger(minNumber, maxNumber);
        } while (invalidNumbers.includes(num1));

        num2 = getRndInteger(2, 9);
        result = num1 * num2;

        formatIndex = Math.floor(Math.random() * 3);
        switch (formatIndex) {
            case 0:
                format = num1 + " * " + num2 + " = ____";
                break;
            case 1:
                format = "____ * " + num2 + " = " + result;
                break;
            case 2:
                format = num1 + " * ____ = " + result;
                break;
        }
    } else if (mode === "adv") {
        num1 = getRndInteger(minNumber, maxNumber);

        do {
            num1 = getRndInteger(minNumber, maxNumber);
        } while (invalidNumbers.includes(num1));

        num2 = getRndInteger(minNumber, maxNumber);

        do {
            num2 = getRndInteger(minNumber, maxNumber);
        } while (invalidNumbers.includes(num2));

        result = num1 * num2;

        formatIndex = Math.floor(Math.random() * 3);
        switch (formatIndex) {
            case 0:
                format = num1 + " * " + num2 + " = ____";
                break;
            case 1:
                format = "____ * " + num2 + " = " + result;
                break;
            case 2:
                format = num1 + " * ____ = " + result;
                break;
        }
    }

    return {
        num1: num1,
        num2: num2,
        result: result,
        format: format
    };
}

function generateMultiplicationTable() {
    var columnCountInput = document.getElementById("columnCountInput");
    var cellCountInput = document.getElementById("cellCountInput");
    var columnCount = parseInt(columnCountInput.value);
    var cellCount = parseInt(cellCountInput.value);

    var table = document.getElementById("multiplicationTable");
    table.innerHTML = "";
    var allCells = table.getElementsByTagName("td");
    for (var i = 0; i < allCells.length; i++) {
        allCells[i].classList.remove("bold-answer");
    }

    answers = [];

    for (var i = 0; i < cellCount; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columnCount; j++) {
            var cell = document.createElement("td");
            var generated = generateMultiplication();
            answers.push(generated.result);

            cell.id = "cell_" + i + "_" + j;
            cell.innerHTML = generated.format;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    var generateButton = document.getElementById("generateButton");
    generateButton.disabled = true;
    table.style.display = "table";
    seeSolutionButton.disabled = false;
    updateCircleText();
}

function seeSolution() {
    var table = document.getElementById("multiplicationTable");

    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var cellId = "cell_" + i + "_" + j;
            var cell = document.getElementById(cellId);
            var originalFormat = cell.innerHTML;

            if (originalFormat.includes("____")) {
                var formatParts = originalFormat.split("=");
                var leftSide = formatParts[0].trim();
                var rightSide = formatParts[1].trim();

                if (leftSide.includes("____")) {
                    var rightValue = eval(rightSide);
                    var num2 = rightValue / eval(leftSide.replace("____", "1"));
                    var result = Math.round(num2);
                    var newContent = leftSide.replace("____", num2) + " = " + rightSide;
                    cell.innerHTML = newContent.replace(String(num2), "<span style='color: #01E2ED; font-weight:bold'>" + num2 + "</span>");
                } else if (rightSide.includes("____")) {
                    var leftValue = eval(leftSide);
                    var num1 = eval(rightSide.replace("____", "1"));
                    var m = num1 / leftValue;
                    var n = leftValue / m;
                    var correctResult = Math.round(n * m);
                    var newContent = leftSide + " = " + correctResult;
                    cell.innerHTML = newContent.replace(String(correctResult), "<span style='color: #01E2ED; font-weight:bold'>" + correctResult + "</span>");
                }
            } else {
                var result = eval(originalFormat);
                if (Number.isInteger(result)) {
                    var newContent = originalFormat.replace("____", result);
                    cell.innerHTML = newContent.replace(String(result), "<span style='color: rgb(102, 247, 254); font-weight:bold'>" + result + "</span>");
                } else {
                    var newContent = originalFormat.replace("____", "Invalid");
                    cell.innerHTML = newContent;
                }
            }
        }
    }

    var seeSolutionButton = document.getElementById("seeSolutionButton");
    seeSolutionButton.disabled = true;
    generateButton.disabled = false;
}

var generateButton = document.getElementById("generateButton");
var seeSolutionButton = document.getElementById("seeSolutionButton");

generateButton.addEventListener("click", function (event) {
    event.preventDefault();
    generateMultiplicationTable();
    var table = document.getElementById("multiplicationTable");
    var seeSolutionButton = document.getElementById("seeSolutionButton");
    table.style.display = "table";
    seeSolutionButton.style.display = "block";
});

generateMultiplicationTable();

var table = document.getElementById("multiplicationTable");
table.style.display = "none";
