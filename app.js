const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollar){
    let euro = dollar / 1.07;
    return euro*156.5;
}

function fromYenToPound(yen){
    let euro = yen/156.5;
    return euro*0.87;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}