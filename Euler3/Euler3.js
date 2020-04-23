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

function getBiggestMultiply(n) {
    let j=[];
    for(let i=2;i<=n;i++){
        if(n%i===0)
        j.push(i);
        }
    let counter;
    for(let k=0;k<j.length;k++){
        for(counter=2;counter<=j[k]/2;counter++){
            if(j[k]%counter===0){
            j[k]=-1;
            }
        }
    }
    j.sort(function(a, b) {
        return a - b;
    });
  let largest = j[j.length - 1];

  return largest;
}

function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n = parseInt(readLine());
        process.stdout.write(getBiggestMultiply(n)+"\n");
    }

}