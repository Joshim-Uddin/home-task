// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallestNumber =(array)=>{
    const min = array.sort((a, b) => a-b)
   const secondSmallNumber = min[1]
   return secondSmallNumber;
}
console.log(secondSmallestNumber([70,3,45,32,900, 500, 73,88]))