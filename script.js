const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let totalcnt = Number(numberOfPeople.innerText);
console.log(totalcnt)

// ** Calculate the total bill per person **
const calculateBill = () => {
    const bill = Number(billTotalInput.value);
    const tip = (Number(tipInput.value) / 100).toFixed(2);
    const totalTipAmount = (tip * bill);
    const totalAmount = totalTipAmount + bill;

    const perPersonShare = (totalAmount / totalcnt).toFixed(2);

    perPersonTotal.innerText = `₹${perPersonShare}`;
    // console.log(bill);
    // console.log(tip);
};

// ** Splits the bill between more people **
const increasePeople = () => {
    totalcnt += 1;
    numberOfPeople.innerText = totalcnt;
    calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    if (totalcnt <= 1) {
        throw 'You cannot have person less than 1!'
        return;
    }
        
    totalcnt -= 1;
    numberOfPeople.innerText = totalcnt;
    calculateBill();

};
