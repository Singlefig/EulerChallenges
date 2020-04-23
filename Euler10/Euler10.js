process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function isPrime(num) {
    if (num < 2 || num % 2 === 0) {
        return false;
    }
    for (let i = 3, sqrt = Math.sqrt(num); i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function getSumOfPrimes(n) {
    let sum = 2;
    for(let i = 0; i <= n;i++) {
        if(isPrime(i)) {
            sum+=i;
        }
    }
    return sum;
}

function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n = parseInt(readLine());
        console.log(getSumOfPrimes(n));
    }

}