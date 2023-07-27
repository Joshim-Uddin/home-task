// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

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
