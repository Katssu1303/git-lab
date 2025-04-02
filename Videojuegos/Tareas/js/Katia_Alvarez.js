//Katia Abigail Álvarez Contreras

"use strict"; 

export function firstNonRepeating(string) {
    const count = {};

    for(let char of string){
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of string) {
        if (count[char] === 1) {
          return char;
        }
    }

    return null;
}

//console.log(firstNonRepeating('abacddbec')); 

export function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return arr;
  }
