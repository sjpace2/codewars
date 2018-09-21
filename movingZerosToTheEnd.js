//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

/*LOGIC
For this problem, I knew I'd need to loop over the array and remove any zeros. It would also be important to keep a count of how many zeros would need to be pushed onto the array at the end. 
*/



var moveZeros = function (arr) {

    //set up variable to count zeros
    let zeroCount = 0
    
    //for loop to count how many zeros there are
    for(let i=0; i<arr.length; i++){
      if(arr[i]===0){
        zeroCount++
      }
    }

    //filter to create a new array without zeros
     let newArray = arr.filter(element=>{
       return element !== 0
    })

    //for loop to push zeros 'zeroCount' times to the end of the new array
   for(let i=1; i<=zeroCount; i++){
     newArray.push(0)
   }
   return newArray
  }