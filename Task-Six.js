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