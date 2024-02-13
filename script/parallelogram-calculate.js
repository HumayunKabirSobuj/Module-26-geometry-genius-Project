function calculateParallelogramArea() {

    const base = getInputValueById('parallelogram-base');
    // console.log('base value is : ',base)
    const height = getInputValueById('parallelogram-height');
    // console.log('height value is : ',height);
    const area = base * height;
    // console.log(area)
    setInnerTextById('parallelogram-area',area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;

}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}