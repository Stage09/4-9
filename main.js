
// ---------------------------------------||16-masala||---------------------------
// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
// let filteredProducts = products.filter(product => product.id !== 4);

// console.log(filteredProducts);

// ---------------------------------------||17-masala||---------------------------
// let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// people.sort((a, b) => a.age - b.age);

// let youngest = people[0].age;
// let oldest = people[people.length - 1].age;

// let ageDifference = oldest - youngest;

// console.log(ageDifference); 

// ---------------------------------------||18-masala||---------------------------
// function countCase(str) {
//     let result = { uppercase: 0, lowercase: 0 };

//     // Har bir belgini tekshirish
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             result.uppercase += 1; 
//         } else if (char >= 'a' && char <= 'z') {
//             result.lowercase += 1;  
//         }
//     }

//     return result;
// }

// console.log(countCase("Hello World!")); 
// ---------------------------------------||19-masala||---------------------------
// function evenOddIndexSums(arr) {
//     let result = { evenIndexSum: 0, oddIndexSum: 0 };

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             result.evenIndexSum += arr[i];
//         } else {
//             result.oddIndexSum += arr[i];
//         }
//     }

//     return result;
// }

// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));

// ---------------------------------------||20-masala||---------------------------
// function rotateMatrix(matrix) {
//     let n = matrix.length;
//     let result = [];

//     for (let col = 0; col < n; col++) {
//         let newRow = [];
//         for (let row = n - 1; row >= 0; row--) {
//             newRow.push(matrix[row][col]);
//         }
//         result.push(newRow);
//     }

//     return result;
// }

// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//         [7, 8, 9]
//     ]));

// ---------------------------------------||21-masala||---------------------------
// function removeSpaces(str) {
//     return str.replace(/\s/g, '');
// }

// console.log(removeSpaces("Hello World! How are you?")); 

// ---------------------------------------||22-masala||---------------------------

// function areAnagrams(str1, str2) {
//     str1 = str1.replace(/\s/g, '').toLowerCase();
//     str2 = str2.replace(/\s/g, '').toLowerCase();

//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(areAnagrams("listen", "silent")); 
// console.log(areAnagrams("hello", "world")); 

// ---------------------------------------||23-masala||---------------------------
// function mostFrequentElement(arr) {
//     let frequencyMap = {};
//     let maxCount = 0;
//     let mostFrequent = null;

//     for (let num of arr) {
//         frequencyMap[num] = (frequencyMap[num] || 0) + 1;

//         if (frequencyMap[num] > maxCount) {
//             maxCount = frequencyMap[num];
//             mostFrequent = num;
//         }
//     }

//     return mostFrequent;
// }

// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1])); 

// ---------------------------------------||24-masala||---------------------------

// function sumOfDigits(str) {
//     let sum = 0;

//     for (let char of str) {

//         if (!isNaN(char) && char !== ' ') {
//             sum += parseInt(char);
//         }
//     }

//     return sum;
// }

// console.log(sumOfDigits("abc123def45"));


// ---------------------------------------||25-masala||---------------------------
// function space(str) {

//     let frequency = {};

//     for (let char of str) {
//         if (char !== ' ') {  
//             frequency[char] = (frequency[char] || 0) + 1;
//         }
//     }

//     return frequency;
// }
// console.log(space("space")); 