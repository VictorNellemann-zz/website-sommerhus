/* 
Step 1:
En prisberegner som kan udregner en ca. pris for et ophold baseret på 2 parametre sendt fra en simpel form i frontenden.
Parameter #1: Første dag: String fra en array
Parameter #2: Antal dage: Int
Parameter #3: Medbringer selv håndklæder og sengetøj: Ja/nej (boolean)
Udregning: (Antal dage * X kr. per dag) + (antal dage * X kr. for strøm per dag) + gebyr for vask =

Step 2:
Refaktorisere beregneren, så den trækker på en Class "priceForStay", som består af en række properties ("firstDay", "numberOfDays", "needForCleaning",) og en function til "calculatePrice".
*/

var priceCalculator = {
    
    laundryFee: 100,
    basePricePerDay: 250,
    electricityCostPerDay: 70,
    numberOfDays: 8,
    // firstDayOfStay: "Mandag",
    
    calculatePrice: function(laundryFee, basePricePerDay, electricityCostPerDay, numberOfDays) {
        var calculatedPrice = basePricePerDay + electricityCostPerDay * numberOfDays + laundryFee;
        return calculatedPrice;
    },
    
    get price() {
        return this.calculatePrice();
    }
}

var myPrice = new priceCalculator.price;

console.log(myPrice);


/*var week = {
    weekDays: [
        day1 = "Mandag", 
        day2 = "Tirsdag", 
        day3 = "Onsdag", 
        day4 = "Torsdag", 
        day5 = "Fredag", 
        day6 = "Lørdag", 
        day7 = "Søndag"
    ]    
}

var number = {    
    numbers: [],
    createListOfNumbers: function() {
        for(var i = 1; i <= 14; i++){
            numbers.push(i);
        }        
    }
};*/