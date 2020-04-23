const main = () => {
    let t = +readLine();
    let sum = 0;
    for(let a0 = 0; a0 < t; a0++)
    {
        let n = +readLine();
        for(let a1 = 0; a1 < n; a1++)
        {
            if(a1 % 3 === 0 || a1 % 5 === 0)
            {
                sum+=a1;
            }
        }
        process.stdout.write(sum+"\n");
        sum = 0;
    }
}

function sum(n,k) {
    d = Math.floor(n/k);
    return Math.floor(k * (d * (d+1)) / 2);
}

function euler1(n) {
    return sum(n, 3) + sum(n, 5) - sum(n, 15);
}
let t = +readLine();
for(let i = 0;i < t;i++) {
    let someVar = +readLine();
    process.stdout.write(euler1(someVar-1));
}