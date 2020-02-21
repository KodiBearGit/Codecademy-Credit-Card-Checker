    // All valid credit card numbers
    const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
    const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
    const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
    const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
    const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

    // All invalid credit card numbers
    const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
    const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
    const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
    const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
    const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

    // Can be either valid or invalid
    const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
    const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
    const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
    const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
    const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

    // An array of all the arrays above
    const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


    // Add your functions below:
    const validateCred = (creditCardNumber) => {
        let sumofDigits = 0;
        //let currentDigit;
        let j = 1;  //odd/even counter for array starts with ood number one there's probably a slicker way to do this by reversing the original array order then using the i counter instead
        //console.log(creditCardNumber.length) 
        let lastCCNumber = creditCardNumber[creditCardNumber.length - 1];
        for (let i = creditCardNumber.length- 2; i >= 0; i--){
            if (j % 2 === 0) {
                //currentDigit = creditCardNumber[i];
                sumofDigits = sumofDigits + creditCardNumber[i];
                //console.log(`even number ${currentDigit}`);
        } else if (creditCardNumber[i] * 2 > 9) { //doubleNumberAdjusted = 'odd and when multiplied by two >=10'
            //currentDigit = creditCardNumber[i] * 2 - 9;
            sumofDigits = sumofDigits + (creditCardNumber[i] * 2) - 9; 
            //console.log(`odd number >9 ${currentDigit}`);
        } else {
            //currentDigit = creditCardNumber[i] * 2;
            sumofDigits = sumofDigits + (creditCardNumber[i] * 2);
            //console.log(`odd number <=9 ${currentDigit}`);
            };
            j = j + 1;
        };
        //console.log(sumofDigits);
        //console.log(lastCCNumber);
        //console.log((sumofDigits + lastCCNumber) % 10);
        if ((sumofDigits + lastCCNumber) % 10 === 0) {
            //console.log('This is a real CC Number!');
            return true;
        } else {
            //console.log('This is a fake CC Number!');
            return false;
        };
    };
    let invalidCardList = [];  
    const findInvalidCards = creditCards => {
        for (let k = 0; k < creditCards.length; k++){
            if (!validateCred(creditCards[k])) {
                //console.log(creditCards[k] + 'THIS IS A BAD NUMBER')
                invalidCardList.push(creditCards[k]);
            };
        };
        return invalidCardList;
    };

    let lendingInstitutions = ['Amex (American Express)', 'Visa', 'Mastercard', 'Discover']
    let InvalidCardCompanies = [];

    const idInvalidCardCompanies = badCardNumbers => {
        for (i = 0; i < badCardNumbers.length; i++) {
            //console.log(badCardNumbers[i][0]);
           //console.log(badCardNumbers[i]);
            if (badCardNumbers[i][0] === 3) {
                if (InvalidCardCompanies.indexOf(lendingInstitutions[0]) === -1 ) {
                InvalidCardCompanies.push(lendingInstitutions[0]);
                };  
            } else if (badCardNumbers[i][0] === 4) {
                if (InvalidCardCompanies.indexOf(lendingInstitutions[1]) === -1 ) {
                    InvalidCardCompanies.push(lendingInstitutions[1]);
                }; 
            } else if (badCardNumbers[i][0] === 5) { 
                if (InvalidCardCompanies.indexOf(lendingInstitutions[2]) === -1 ) {
                    InvalidCardCompanies.push(lendingInstitutions[2]);
                }; 
            } else if (badCardNumbers[i][0] === 6) {
                if (InvalidCardCompanies.indexOf(lendingInstitutions[3]) === -1 ) {
                    InvalidCardCompanies.push(lendingInstitutions[3]);
                }; 
            } else { 
                    InvalidCardCompanies.push('Company Not Found');
                };
        };
        return InvalidCardCompanies;
    };

findInvalidCards(batch);
//console.log(invalidCardList.length);
idInvalidCardCompanies(invalidCardList);  