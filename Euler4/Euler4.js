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

const reverse = (oldNum) => {
    let a = oldNum.toString().split("").reverse().join("");
    return +a
}

const checkMultiple = (num) => {
    for(let i = 100; i < 999; i++) {
        for(let j = 100; j < 999; j++) {
            if(i * j == num) {
                return num
            } 
        }
    };
    return -1;
};


function main() {
    var t = parseInt(readLine());
    while(t--){
        var n = parseInt(readLine());
        while(n--) {
            if(reverse(n) == n) {
                if(checkMultiple(n) != -1) {
                    console.log(n);
                    break;
                }
            }
        }

    }

}