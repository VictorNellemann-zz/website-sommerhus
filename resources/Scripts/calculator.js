/* Step 1:
En prisberegner som kan udregner en ca. pris for et ophold baseret på 2 parametre sendt fra en simpel form i frontenden.
Parameter #1: Første dag: String fra en array
Parameter #2: Antal dage: Int
Parameter #3: Medbringer selv håndklæder og sengetøj: Ja/nej (boolean)
Udregning: (Antal dage * X kr. per dag) + (antal dage * X kr. for strøm per dag) + gebyr for vask = */

class PriceCalculator {
    constructor(numberOfDays, addLaundryFee) {
        
        this.basePricePerDay = 250,
        this.electricityCostPerDay = 70,
        this.laundryFee = 100,
        this.numberOfDays = numberOfDays,
        this.addLaundryFee = addLaundryFee,
        this.calculatedPrice = 0,

        this.calculate = function (basePricePerDay, electricityCostPerDay, numberOfDays, laundryFee) {
            this.calculatedPrice = (basePricePerDay + electricityCostPerDay) * numberOfDays;
            if (this.addLaundryFee == true) {
                this.calculatedPrice + this.laundryFee;
            }
            return this.calculatedPrice;
        }
    }
};

function createPrice(params) {
    var myPrice = new PriceCalculator();
    var price = myPrice.calculate(8, true);
    document.getElementById("price").innerHTML = price;
};

