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

function findNthSimpleNumber(n) {
    let primes = [2];
    let higherDivisorLimit;
    let isPrime;
    for(let i = 3; primes.length < n; i+=2) {
        higherDivisorLimit = Math.sqrt(i) + 1;
        isPrime = true;
        for(let j = 0; primes[j] < higherDivisorLimit; j++) {
            if(i % primes[j] === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(i);
    }
    return primes[primes.length - 1];

}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        process.stdout.write(findNthSimpleNumber(n)+"\n");
    }

}