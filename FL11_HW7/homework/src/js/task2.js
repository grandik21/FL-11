let numberPocket;
let div = 2;
let totalPrize = 0;
let prizeChange = 1;
let max = 8;
let change = 4;
let random;
let check = confirm('Do you want to play a game?');

if (check) {
    while (check) {
        random = Math.floor(Math.random() * (max + 1));
        let attempts = 3;
        let prize = 100;
        prize *= prizeChange;
        for (; attempts > 0;) {
            numberPocket = +prompt('Choose a roulette pocket number from 0 to ' + max +
                '\nAttempts left: ' + attempts +
                '\nTotal prize: ' + totalPrize +
                '$\nPossible prize for current attempt: ' + prize + '$');
            if (numberPocket === random) {
                totalPrize += prize;
                check = confirm('Congratulation your won! Your prize is: ' + totalPrize +
                    '$. Do you want to continue?');
                break;
            }
            attempts--;
            prize /= div;
        }
        if (check && numberPocket === random) {
            max += change;
            prizeChange *= div;
        }
        if (!check && numberPocket === random) {
            alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            check = confirm('Do you want to play again?');
            if (check) {
                totalPrize = 0;
                prizeChange = 1;
                max = div * div * div;
            }
        }
        if (numberPocket !== random) {
            alert('Thank you for your participation. Your prize is: 0$');
            check = confirm('Do you want to play again?');
            if (check) {
                totalPrize = 0;
                prizeChange = 1;
                max = div * div * div;

            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}
