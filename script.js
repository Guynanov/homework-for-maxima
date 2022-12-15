// Задание 1
function saveName() {
  let name = document.getElementById("user-name").value;
  document.getElementById("greeting").innerHTML = `Приветствую вас, ${name}!`;
}

// Задание 2

// let a = +prompt("Первое число?", 1); // Так же можно использовать объект Number: Number(prompt("Первое число?", 1));
// let b = +prompt("Второе число?", 2);
// alert(a + b);

// Задание 3

// function findPrimes(n) {
//   let primes = [];
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }
// let primes = findPrimes(10);
// console.log(primes);

// Задание 4

// console.log((((0.1 + 0.2) * 10) / 10).toFixed(1) == 0.3);

// Задание 5

// function minMax(array) {
//   let min = array[0];
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     } else if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   console.log("Максимальное число в массиве:", max);
//   console.log("Минимальное число в массиве:", min);
// }
// minMax([15, 24, -3, 3, 0, 26, -3]);

// Задание 6

// function isPalindrome(str) {
//   str = str.replace(/\s/g, "").toLowerCase();
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("Madam")); // выведет true
// console.log(isPalindrome("hello")); // выведет false

// Задание 7

// function findAnagram(arr, word) {
//   const sortedWord = word.split("").sort().join("");
//   const anagrams = [];
//   for (const el of arr) {
//     const sortedEl = el.split("").sort().join("");
//     if (sortedEl === sortedWord) {
//       anagrams.push(el);
//     }
//   }
//   if (anagrams.length === 0) {
//     return "Анаграмм нет";
//   }
//   return anagrams;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// let word = "aer";
// console.log(findAnagram(arr, word));
