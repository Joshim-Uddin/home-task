// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

/*
const arr = []
const reverse = (str)=>{
    const newStr = str.split("");
    for(let i=newStr.length-1; i>=0; i--){
        arr.push(newStr[i]);
    }
    const reversedStr = arr.join("");
    console.log(reversedStr)
}
reverse("hello world");
*/

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

/**
const sumOfPositiveNumbers =(array)=>{
    const positiveNumbers = array.filter(number=>number>0)
    const sum = positiveNumbers.reduce((sum, number)=>sum+number, 0)
    console.log(sum);
}
sumOfPositiveNumbers([2, -5, 10, -3, 7])
*/

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

/*
const frequentElement = (arr)=>{
    let count = 0;
    let maxFrequency = 1;
    let item ;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++;
                if(maxFrequency<count){
                    maxFrequency = count;
                    item = arr[i]
                }
                
            }
        }
        count = 0;
        
    }
    
    return item;
}
console.log(frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5,5,5]))
*/
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
const indices = (array, targetValue)=>{
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]+array[j]==targetValue){
                return [i, j]
            }
        }
    }
}
console.log(indices([1, 3, 6, 8, 11, 15], 9))
//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, num2, operator)=>{
switch(operator){
    case '+': return num1 + num2;
    break;
    case '-': return num1 - num2;
    break;
    case '/': return num1 / num2;
    break;
    case '*': return num1 * num2;
    break;
    default: return;
}
}
console.log(calculator(4,5,'*'))

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*_?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    password += getRandomCharacter(uppercaseLetters);
    password += getRandomCharacter(lowercaseLetters);
    password += getRandomCharacter(numbers);
    password += getRandomCharacter(specialCharacters);
  
    const remainingLength = length - 4;
  
    for (let i = 0; i < remainingLength; i++) {
      password += getRandomCharacter(allCharacters);
    }
  
    password = shuffleString(password);
  
    return password;
  }
  
  function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  function shuffleString(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }
  
  console.log(generateRandomPassword(8));
  

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallestNumber =(array)=>{
    const min = array.sort((a, b) => a-b)
   const secondSmallNumber = min[1]
   return secondSmallNumber;
}
console.log(secondSmallestNumber([70,3,45,32,900, 500, 73,88]))