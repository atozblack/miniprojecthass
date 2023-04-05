function getValueFromInputField(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    const inputNumeric = parseFloat(inputString);
    return inputNumeric;
}
