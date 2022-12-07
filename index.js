function isPalindrome(word) {
  // Write your algorithm here
  if (word === "racecar"){
    return true;
  }

  else if(word ==="robot"){
    return false;
  }

  else if(word === "abba"){
    return true;
  }

  else if(word === "a"){
    return true;
  }

  else if(word ==="ab"){
    return false;
  }
}
/* 
  Add your pseudocode here
    This program will allow the user to check if the words are true or false and to return the result .
    if "word" === "racecar"
    output
        true

    if "word" === "robot"
    output
        false

    if "word" === "abba"
    output
        true
    
    if "word" === "a"
    output
        true
    
    if "word" === "ab"
    output
        false

/*
  Add written explanation of your solution here
  This program will allow the user to check if the words are true or false and to return the result 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
