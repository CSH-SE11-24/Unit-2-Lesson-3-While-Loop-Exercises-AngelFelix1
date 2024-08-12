// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let i = 0

while(i <2){
  i++
  console.log(i)
}

  


// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40

let x = 20
while(x < 10){
  x= x + 2
  console.log(x)
}


// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1

let user = prompt("what is your age?")
while(user >1){
  user =user - 1
  console.log(user)
}


// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let sum = 0 
let user2  = prompt("give me a positive ineger?")
user2 = parseInt(user2)
while(user2 > 0 ){
   sum = user2 + sum
  user2 = user2 -1

}
  console.log("the sum is",sum)


// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").

let user3 = prompt("enter a password")

while(user3 != "secret"){
  console.log("thats wrong try again")
  user3 = prompt("enter a password")
}





// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




