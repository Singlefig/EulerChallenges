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

function getSumFib(n) {
    let prev = 0;
    let current = 1;
    let result = 0;
    for(let i = 0; ;i++) {
        let next = prev + current;

        if(next > n) {
            break;
        }

        if(next % 2 === 0) {
            result += next;
        }
        prev = current;
        current = next;
    }
    return result;
}

function main() {
    var t =+readLine();
    for(var a0 = 0; a0 < t; a0++){
        var n = +readLine();
        process.stdout.write(getSumFib(n).toString()+"\n");
    }
}