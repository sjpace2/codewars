//TAKE A 10 MINUTE WALK

//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//MY SOLUTION:


//WHAT NEEDS TO BE TRUE...

//array length must equal 10 since walk has to be 10 minutes.

//LOGIC...

//each letter in the array has an opposing direction, 'n' is opposite of 's', 'e' is opposite of 'w'. By incrementing 'n' for every 'n' and decrementing 'n' for every 's', and then the same operations for 'e' and 'w', as long as 'n' and 'e' equal 0 at the end of the loop, the walk will end in the place it began.

function isValidWalk(walk) {
//first I set a variable equaling 0 for 'n' and 'e'.
    let n = 0;
    let e = 0;

//then the for loop to check each letter in the array and increment/decrement 'n' and 'e'.
    
    for(let i=0; i<walk.length; i++){
      if(walk[i]==='n'){
        n++
      } else if(walk[i]==='s'){
        n--
      } else if(walk[i]==='e'){
        e++
      } else if(walk[i]==='w'){
        e--
      }
    }
    
//then conditionals to check if the array length equals 10 and if both variables equal 0.

    if(walk.length !== 10){
        return false
    } else if (n===0 && e===0) {
        return true
    } else {
        return false
    }
}