// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


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
