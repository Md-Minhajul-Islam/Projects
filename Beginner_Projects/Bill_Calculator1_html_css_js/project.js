
const calculateBill = () => {

    const input = document.getElementsByClassName("input");
    const bill = parseFloat(input[0].value);
    const tax = parseFloat(input[1].value);

    document.getElementById("message").innerText = "";
    if (isNaN(bill) || bill < 0 || isNaN(tax) || tax < 0)
    {
        document.getElementById("message").innerText = "Please enter valid positive numbers only.";
        return;
    }
    
    const total = (bill + (bill * tax) / 100).toFixed(2);

    document.getElementById("output").innerText = total;
};