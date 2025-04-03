//Katia Abigail Álvarez Contreras

"use strict"; 

export function firstNonRepeating(string) {
    if (!string) return undefined;
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
    let k = array.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < k - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
      k--;
    } while (swapped);
  
    return array;
  }

  export function invertArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  }

  export function invertArrayInplace(array) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
  
      left++;
      right--;
    }
  }

  export function capitalize(word) {
    let words = word.split(' ');
    let result = "";
  
    for (let i = 0; i < words.length; i++) {
      let w = words[i];
      if (w.length > 0) {
        let firstLetter = w[0].toUpperCase();
        let rest = w.slice(1).toLowerCase();
        result += firstLetter + rest;
      }
  
      if (i < words.length - 1) {
        result += " ";
      }
    }
  
    return result;
  }
  

  export function mcd(n1, n2) {
    while (n2 !== 0) {
      let temp = n2;
      n2 = n1 % n2;
      n1 = temp;
    }
    return n1;
  }

  export function hackerSpeak(word) {
    let result = "";
  
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
  
      if (letter === 'a' || letter === 'A') {
        result += '4';
      } else if (letter === 'e' || letter === 'E') {
        result += '3';
      } else if (letter === 'i' || letter === 'I') {
        result += '1';
      } else if (letter === 'o' || letter === 'O') {
        result += '0';
      } else if (letter === 's' || letter === 'S') {
        result += '5';
      } else {
        result += letter;
      }
    }
  
    return result;
  }
  
  export function factorize(n) {
    let factors = [];
  
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  
  export function deduplicate(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      let current = array[i];
  
      let found = false;
      for (let j = 0; j < result.length; j++) {
        if (result[j] === current) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        result.push(current);
      }
    }
  
    return result;
  }
  
  export function findShortestString(list) {
    if (list.length === 0) {
      return 0; 
    }
  
    let shortest = list[0].length;
  
    for (let i = 1; i < list.length; i++) {
      let currentLength = list[i].length;
  
      if (currentLength < shortest) {
        shortest = currentLength;
      }
    }
  
    return shortest;
  }
  
  export function isPalindrome(word) {
    let reversed = "";
  
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
  
    if (word === reversed) {
      return true;
    } else {
      return false;
    }
  }
  
  export function sortStrings(list) {
    let result = [];
  
    for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
    }

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - 1 - i; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
  
    return result;
  }

  export function stats(numbers) {
    if (numbers.length === 0) {
      return [0, 0]; 
    }
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    let average = sum / numbers.length;
  
    let counter = {};
  
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
  
      if (counter[num] === undefined) {
        counter[num] = 1;
      } else {
        counter[num]++;
      }
    }
  
    let moda = numbers[0];
    let maxFrequency = counter[moda];
  
    for (let key in counter) {
      if (counter[key] > maxFrequency) {
        moda = Number(key);
        maxFrequency = counter[key];
      }
    }
  
    return [average, moda];
  }

  export function popularString(list) {
    if (list.length === 0) {
      return ''; 
    }
  
    let counter = {};
  
    for (let i = 0; i < list.length; i++) {
      let word = list[i];
  
      if (counter[word] === undefined) {
        counter[word] = 1;
      } else {
        counter[word]++;
      }
    }
  
    let mostPopular = list[0];
    let maxCount = counter[mostPopular];
  
    for (let word in counter) {
      if (counter[word] > maxCount) {
        mostPopular = word;
        maxCount = counter[word];
      }
    }
  
    return mostPopular;
  }
  

  export function isPowerOf2(number) {
    if (number < 1) {
      return false;
    }
  
    while (number > 1) {
      if (number % 2 !== 0) {
        return false;
      }
      number = number / 2;
    }
  
    return true;
  }
  
  export function sortDescending(list) {
    let result = [];
  
    for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
    }
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - 1 - i; j++) {
        if (result[j] < result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
  
    return result;
  }
  