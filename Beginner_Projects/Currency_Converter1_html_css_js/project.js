const firstCurrencyEl = document.getElementById("first-currency");
const secondCurrencyEl = document.getElementById("second-currency");
const firstInputEl = document.getElementById("first-input");
const secondInputEl = document.getElementById("second-input");
const exchangeRateEl = document.getElementById("exchange-rate");

async function updateRate() {
    try {
        const rate = await fetch(`https://v6.exchangerate-api.com/v6/def2e3afadfb0ed5b138d3af/latest/${firstCurrencyEl.value}`)
            .then(res => res.json());
        secondInputEl.value = (rate.conversion_rates[secondCurrencyEl.value] * firstInputEl.value).toFixed(2);
        exchangeRateEl.innerText = `1 ${firstCurrencyEl.value} = ${rate.conversion_rates[secondCurrencyEl.value]} ${secondCurrencyEl.value}`;
    }
    catch {
        console.log("An Error Occured!");   
    }
}

firstCurrencyEl.addEventListener("change", updateRate);
secondCurrencyEl.addEventListener("change", updateRate);
firstInputEl.addEventListener("input", updateRate);