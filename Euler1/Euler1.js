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

///////////////////////////////////////////////////////
function main() {
    let t = +readLine();
    for(let i = 0;i < t;i++) 
    {
        let n = +readLine();
        process.stdout.write(euler1(n-1)+"\n");
    }
}

function sum(n,k) {
    d = Math.floor(n/k);
    return Math.floor(k * (d * (d+1)) / 2);
}

function euler1(n) {
    return sum(n, 3) + sum(n, 5) - sum(n, 15);
}
