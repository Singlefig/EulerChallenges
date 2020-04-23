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

function largestProduct(k,str) {
    let max = 0;
    for(let i = 0;i < str.length-(k-1);i++) {
        let part = str.substr(i,k);
        let current = 1;
        for(let n of part) {
            current *= +n;
        }
        max = Math.max(max,current);
    }
    return max;
}

function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n_temp = readLine().split(' ');
        let n = parseInt(n_temp[0]);
        let k = parseInt(n_temp[1]);
        let num = readLine();
        console.log(largestProduct(k,num));
    }

}