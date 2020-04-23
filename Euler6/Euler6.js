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

function subSquares(n) {
    let result = 0;
    let sumOfSquares = 0;
    let sumInSquare = 0;
    for(let i = 1; i <= n; i++) {
        sumOfSquares += Math.pow(i,2);
        sumInSquare += i;
    }
    //console.log(sumOfSquares);
    //console.log(sumInSquare);
    sumInSquare = Math.pow(sumInSquare,2);
    result = sumInSquare - sumOfSquares;
    return result;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        process.stdout.write(subSquares(n)+"\n");
    }

}