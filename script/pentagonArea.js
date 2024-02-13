
function pentagonArea() {
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const area = 0.5 * p * b;
    // console.log(area)
    setInnerTextById('pentagon-area', area);
}


function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}