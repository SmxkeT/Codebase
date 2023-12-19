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


let artest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //array
let arlenght = artest.length //designating array length
let sum = 0 //counter to store total.

//loop to iterate by the length of array
for(let i = 0; i < arlenght; i++)
{
    sum += artest[i] //adds calculation to sum variable
}
alert(`the sum is ${sum}`) //Displays the total sum of array.

