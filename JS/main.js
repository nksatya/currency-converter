/*
    Author: Satya Nilamegam Kumaran
    ID: C0886405
*/

function convert() {
    let usd = document.getElementById("USD").value;
    let usdOption = document.getElementById("usdCurrency").value;
    let cadOption = document.getElementById("cadCurrency").value;

    if (usdOption == cadOption) {
        alert("Cannot convert to same currency value!")
    }
    else if (usd == null || usd == undefined || usd == "") {
        alert("The input value is empty, please provide a value to convert.")
    }
    else if (usdOption == "CAD") {
        document.getElementById("CAD").value = parseFloat(usd * 0.756);
        alert(usd + " CAD is equal to " + parseFloat(usd * 0.756));
    }
    else if (usdOption == "USD") {
        document.getElementById("CAD").value = parseFloat(usd * 1.322)
        alert(usd + " USD is equal to " + parseFloat(usd * 1.322));
    }

}
