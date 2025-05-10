
function getElement(id, prop) {

    if (prop == "value")
        return parseFloat(document.getElementById(id).value);
    else if (prop == "innerText")
        return parseFloat(document.getElementById(id).innerText);
}

function setElement(id, prop, val) {
    
    if (prop == "value")
        document.getElementById(id).value = val;
    else if (prop == "innerText")
        document.getElementById(id).innerText = val;
}


function handledeposit() {
    var inputValue = getElement("deposit-input", "value");

    setElement("deposit-input", "value", "");       

    if (isNaN(inputValue) || inputValue <= 0) return;

    var depositAmount = getElement("deposit-amount", "innerText"); 
    var totalAmount = getElement("total-amount", "innerText");
    
    setElement("deposit-amount", "innerText", (inputValue + depositAmount).toFixed(2));
    setElement("total-amount", "innerText", (totalAmount + inputValue).toFixed(2));
}

function handleWithdraw() {
    var inputValue = getElement("withdraw-input", "value");
    var totalAmount = getElement("total-amount", "innerText");

    setElement("withdraw-input", "value", "");

    if (isNaN(inputValue) || inputValue <= 0 || inputValue > totalAmount) return;

    var withdrawAmount = getElement("withdraw-amount", "innerText");

    setElement("withdraw-amount", "innerText", (withdrawAmount + inputValue).toFixed(2));
    setElement("total-amount", "innerText", (totalAmount - inputValue).toFixed(2)); 
}

