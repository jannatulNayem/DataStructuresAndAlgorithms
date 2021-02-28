"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the matchingStrings function below.
function matchingStrings(string_arr, query_string) {
  let string_object = {};

  string_arr.forEach((element) => {
    if (element in string_object) string_object[element]++;
    else string_object[element] = 1;
  });

  let output_arr = [];
  query_string.forEach((element) => {
    if (element in string_object) output_arr.push(string_object[element]);
    else output_arr.push(0);
  });
  return output_arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const stringsCount = parseInt(readLine(), 10);

  let strings = [];

  for (let i = 0; i < stringsCount; i++) {
    const stringsItem = readLine();
    strings.push(stringsItem);
  }

  const queriesCount = parseInt(readLine(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }

  let res = matchingStrings(strings, queries);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
