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

function findTriplet(n) {

  for (let c = Math.floor(n / 3 + 1); c < n / 2; c++) {

    let sqa_b = c * c - n * n + 2 * n * c
    let a_b = Math.floor(Math.sqrt(sqa_b));

    if (a_b * a_b == sqa_b) {
      let b = (n - c + a_b) / 2;
      let a = n - b - c;
      return a * b * c;
    }
  }
  return -1
}

function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n = parseInt(readLine());
        console.log(findTriplet(n));
    }

}