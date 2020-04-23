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

const lcm = n => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i / gcd(i, result);
  }
  return result;
};

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        process.stdout.write(lcm(n)+"\n");
    }

}