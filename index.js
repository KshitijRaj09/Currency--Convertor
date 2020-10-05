const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Attach Event listeners
currency_one.addEventListener('change', currencyConvertor);

currency_two.addEventListener('change', currencyConvertor);

amount_one.addEventListener('input', currencyConvertor);

currency_two.addEventListener('input', currencyConvertor);
swap.addEventListener('click', swapInput);

//Function to convert currency
function currencyConvertor(){
    let country_one = currency_one.value;
    let country_two = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${country_one}`)
    .then(Response => Response.json())
    .then( data =>{
    let converted_rate = data.rates[country_two];
    rate.innerHTML = `1 ${country_one} = ${converted_rate} ${country_two}`;
    amount_two.value = (converted_rate*amount_one.value).toFixed(2);
    })
}

//Function to Swap inputs
function swapInput(){
    let temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    currencyConvertor();
}


