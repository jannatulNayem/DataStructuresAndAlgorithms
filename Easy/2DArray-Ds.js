'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let start = 0;
    let x = 0;
    let y = 0;
    let count = 0
    let temp = 0
    let arraySum = []


    for (let n = 0; n < 4; n++) {
        for (let m = 0; m < 4; m++) {
            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                   count++
                   if(count == 4 || count == 6){
                       continue
                   }else temp += arr[i][j]
                }
                
            }
            arraySum.push(temp)
            temp = 0
            count = 0


            x = start;
            y++;
        }
        start++;
        y = 0
        x = start
    }
    return Math.max(...arraySum)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
