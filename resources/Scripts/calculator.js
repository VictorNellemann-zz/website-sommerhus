
// Variables on base prices declared
// Consider loading the prices through a JSON price-list saved on the server.

const basePricePerDay = 250;
const expenditurePerDay = 50;
const laundryFee = 100;

// Array som med et for loop som fylder arrayet 'numbers' med tal fra 1 til 14.

numbers = [];
for(var i = 0; i <= 14; i++){
    numbers.push(i);
}

// Et for-loop som fylder formens select felt med tal fra et numbers array baseret på dets index

var selectDays = document.getElementById("number-of-days");
for(index in numbers) {
    selectDays.options[selectDays.options.length] = new Option(numbers[index], index);
};

// Declaring and calling a function that loads base prices into a price table in the frontend.

function listPrices(basePricePerDay, expenditurePerDay, laundryFee) {
    document.getElementById("base-price-per-day").innerHTML = basePricePerDay + " kr.";
    document.getElementById("expenditure-per-day").innerHTML = expenditurePerDay + " kr.";
    document.getElementById("laundry-fee").innerHTML = laundryFee + " kr.";
};

listPrices(basePricePerDay, expenditurePerDay, laundryFee);

// Declaring the main function that does the actual calculation based on user input and our base prices

function calculatePrice() {
    let numberOfDays = 0;
    let addLaundryFee = true;
    let priceOfStay = 0;
    
    function updateNumberOfDays() {
        numberOfDays = document.getElementById("number-of-days");
        numberOfDays = numberOfDays.options[numberOfDays.selectedIndex].text;
        numberOfDays = Number(numberOfDays);
        return numberOfDays;
    };
    
    function updateLaudryFee() {        
        let selected = document.getElementById("laundry");
        if (selected.value == "yes") {
            addLaundryFee = true
        } if (selected.value == "no") {
            addLaundryFee = false
        };        
        return addLaundryFee;
    };
    
    function updatePrice() {
        priceOfStay = (basePricePerDay + expenditurePerDay) * numberOfDays;
        if (addLaundryFee == true && priceOfStay !== 0) {
            priceOfStay = priceOfStay + laundryFee;
        }
        return priceOfStay;
    };

    updateNumberOfDays(numberOfDays);
    updateLaudryFee();
    updatePrice(basePricePerDay, expenditurePerDay, numberOfDays, laundryFee, addLaundryFee);    
    document.getElementById("price").innerHTML = priceOfStay + " kr.";
};

// Adding a click event-listener to the page.
// The click-event calls the calculator, that in turn returns a calculated price to a p-tag in the mark-up.

document.getElementById("calculate").addEventListener("click", calculatePrice);