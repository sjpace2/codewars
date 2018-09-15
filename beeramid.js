// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// 1) your referral bonus, and

// 2) the price of a beer can

// MY SOLUTION

// function needs to return how many levels are possible given the bonus amount and price of a can of beer. 
// to start off, the function will need to calculate how many cans can be purchased using simple division and save it to a variable.
// In order to find out how many levels are possible, a do while loop will be used
// the loop will subract cans for each level until there are no cans left
// since each level requires a number of cans === level**2, we'll need a "level" variable too
// we'll also define a variable to count how many times the do while loop runs which will be the total number of levels returned from the function


var beeramid = function(bonus, price) {
    //find out how many cans we have
    let cans = bonus/price
    //define variables
    let levels = 0
    let n=1
    // loop
    do {
      cans = cans - n**2
      n++
      levels++
    } while (cans >= 0)

    //return number of levels-1 because the function will run the final time with not enough cans to complete a level, but still a positive number of cans
    return levels-1
  }
  
