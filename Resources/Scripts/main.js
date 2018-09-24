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

// console.log("JS loaded");

// week = [
//     day1 = "Mandag", 
//     day2 = "Tirsdag", 
//     day3 = "Onsdag", 
//     day4 = "Torsdag", 
//     day5 = "Fredag", 
//     day6 = "Lørdag", 
//     day7 = "Søndag"
// ];

// var select = document.getElementById("select-first-day");
// for(index in week) {
//     select.options[select.options.length] = new Option(week[index], index);
// };

// Array som med et for loop som fylder arrayet med tal fra 1 til 14.
numbers = [];
for(var i = 1; i <= 14; i++){
    numbers.push(i);
}

// Et for-loop som fylder formens select felt med tal fra et numbers array, "numbers"
var selectDays = document.getElementById("number-of-days");
for(index in numbers) {
    selectDays.options[selectDays.options.length] = new Option(numbers[index], index);
};


