const myXMLHttpRequest = new XMLHttpRequest();
const url = "http://api.openweathermap.org/data/2.5/weather?lat=55.9233&lon=11.669";

myXMLHttpRequest.onreadystatechange = function() {
    if(myXMLHttpRequest.readyState === 4 && myXMLHttpRequest.status === 200) {
        let myObject = JSON.parse(myXMLHttpRequest.responseText);
        let myJSON =-stringify(myObject);
        console.log("GOOD!");        
    }
}


myXMLHttpRequest.open("GET", url, true);
myXMLHttpRequest.send();