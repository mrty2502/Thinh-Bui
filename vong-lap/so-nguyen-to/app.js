let i = 3;
let count = 0;
let N = +prompt('Prime count: ');
while (count < N) {
    if (isPrime(i)) {
        document.write(i + ",");
        count++;
    }
    i++;
}

function isPrime(number) {
    for (let j = 2; j < number; j++) {
        if (number % j === 0) {
            return false;
        }
    }
    return true;
}


