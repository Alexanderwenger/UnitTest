// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valorEnDolar){
    // convert the given valueInDollar to Yens
    let valueInYen = valorEnDolar / 1.2 * 127.9;
    //return the yen value
    return valueInYen;
}

const fromYenToPound = function(valorEnYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valorEnYen/127.9 * 0.8;
    //return the pound value
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
