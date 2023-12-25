//  //let = variables with equations | alert = displaying the answers
//       let numone = -5 + 8 * 6;
//       alert(numone)

//       let numtwo = (55 + 9) % 9;
//       alert(numtwo)

//       let numthree = 20 + -3 * 5 / 8;
//       alert(numthree)

//       let numfour = 5 + 15 / 3 * 2 - 8 % 3
//       alert(numfour)

      
//       //Two variables to ask for number inputs.
//       let usernum1 = prompt("Enter a number: ");
//       let usernum2 = prompt("Enter a second number: ");

//       //divides both user input numbers and displays the answer.
//       alert(usernum1 / usernum2)


//code will display text 6 times.
// const n = 6;

// //looping from i = 1 to 6. | Displays frog
// for (let i = 1; i <= n; i++) {
//     alert("frog")
// }

//program to ddisplay sum of numbers
//variables
// let sum = 0;
// const n = 100;

// //loop from i = 1 to n
// for (let i = 1; i <= n; i++){
//     sum += i; // sum is now sum + i
// }
// alert(sum)

// //program to check if number is odd or even.
// n = 15; // variable to count

// //looping from i = 1 to 15
// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 === 0)   //if I can be divided by itself = even
//     {
//         alert(`${i} is even`)
//     }
//     else{
//         alert(`${i} is odd`) // if I can't be divided by itself it's odd.
//     }
// }

//program to show times table.

// n = 10 //count for loop.
// let number = (prompt("Enter a number from 1 - 10: ")) //asks for user to  enter number

// //loop that will iterate 10 times.
// for(let i = 1; i <= n; i++)
// {
//     alert(`${number}x${i}=${number * i}`) //display  number x i = (example = 2 x 2 = 4)
// }

//program to add values of an array.

// let artest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //array
// let arlenght = artest.length //designating array length
// let sum = 0 //counter to store total.

// //loop to iterate by the length of array
// for(let i = 0; i < arlenght; i++)
// {
//     sum += artest[i] //adds calculation to sum variable
// }
// alert(`the sum is ${sum}`) //Displays the total sum of array.


//program to calculate average elements of array

// let artest2 = [20, 30, 25, 35, -16, 60, -100] //array
// let arlength = artest2.length //array length
// let sum = 0 //calculation storage

// //loop to iterate length of array
// for(let i = 0; i < arlength; i++)
// {
//     sum += artest2[i] //adding array total to sum variable
    
// }
// let round = (sum / arlength) //Divide sum of array with length to get average 
// let rounded = round.toFixed(1); // rounds average to 1 decimal place.

// alert(`Average value is ${rounded}`) //display average array value.


//program to get min and max of array.

// artest = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49] //array

// max = artest [0] //max and minimum holders
// min = artest [0]

// //loop to iterate and check if array[i] is min or max
// for(i = 0; i < max; i++) 
// {
//     if (max < artest[i]) 
//     {
//         max = artest[i] 
//     }
    
//     if (min > artest[i]) 
//     {
//         min = artest[i] 
//     }

// }

// alert(`maximum value of the array is ${max}, and minimum is ${min}`) //displays the maximum and minimum array values.
1

//program to check if numbers are the same or not.

// let usernum1 = prompt("enter a number; "); //takes user input
// let usernum2 = prompt("enter second number; ");
// let usernum3 = prompt("enter final number; ");

// //checks to see if numbers are equal, different or neither.
// if (usernum1 === usernum2 && usernum2 === usernum3) 
// {
// alert("All numbers are the same");
// }

// else if (usernum1 !== usernum2 && usernum2 !== usernum3)
// {
//     alert("All numbers are different");
// }
// else
// {
//     alert("Numbers are neither equal nor different")
// }


//program to check if numbers are ascending or descending.

// //take user inputs.
// let usernum1 = prompt("Enter a number")
// let usernum2 = prompt("Enter second number; ")
// let usernum3 = prompt("Enter final number; ")

// //checking if numbers are ascending, descending or neither.
// if (usernum3 < usernum2 && usernum2 < usernum1)
// {
//     alert("Numbers are descending order")
// }
// else if (usernum1 < usernum2 && usernum2 < usernum3 )
// {
//     alert("Numbers are ascending order")
// }
// else
// {
//     alert("order is neither ascending or descending.")
// }


//Functions
//functions testing

// function frogchamp() //function to display Froggy
// {
//     alert("Froggy")
// }

// frogchamp()


// ar = [10, 2, 3, 4, 7] //array
// max = ar [0]

// function arcontent() //function to display content of an array.
// {
// alert(`The content of the array is: ${ar}`)
// }


// //function to display max value of an array
// function armax()
// {
//     for(i = 0; i < max; i++)
    
//         if (max < ar[i])
//         {
//             max = ar[i]
//         }
//         alert(`The maximum value is ${max}`)

    
// }

// //calling functions
// arcontent()
// armax()



//function to display factorial of entered number

// function suffering()
// {
//     let usernum = prompt("Enter number")
//     let total = usernum

//     if(usernum < 1) // loop to calculate factorial of usernum
//     alert(`Number is 1`)
//     else
//     {
//     for (let i = usernum -1; i > 0; i--)
//     total = total * i
//     }

// alert(`Number is ${total}`)
// }
// suffering()


//function to check if parameter number is prime or not.
// function sufferingagain(prime)
// {
//     let result = true //bool to store result

//     if(prime === 1)
//     {
//         result = false;
//     }
//     else
//     {
//         for(let i = 2; i < prime; i++) //loop to check if number is prime or not.
//         if(prime % i === 0)
//         {
//             result = false;
//         }
//     }

//     if (result === true) //if true is prime else not
//     {
//         alert(`${prime} is a prime number`)
//     }
//     else if (result === false)
//     {
//         alert(`${prime} is not a prime number`)
//     }
// }

// sufferingagain(15) //calling function
// sufferingagain(21)
// sufferingagain(9)
// sufferingagain(2)
// sufferingagain(7)
// sufferingagain(1)
// sufferingagain(3)
// sufferingagain(5)
// sufferingagain(11)
// sufferingagain(13)

