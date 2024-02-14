
  //* 1 * Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

  arr=[2,2,4,5,6,7,8,9,10,11,12]

  let num=arr[0]
  console.log("first number is: ",num);
  function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return "not a prime number";
        }
      }
      return "number is prime";
    }
    let pri=isPrime(num)
    console.log(pri);
  
  
      
    //* 2 * Write a JavaScript program to find the most frequent item of an array
  var arr1=[3, 'b', 'b', 'a', 1,1,1, 2, 1, 3, 'a', 2, 4, 9, 3];
  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<arr1.length; i++)
  {
          for (var j=i; j<arr1.length; j++)
          {
                  if (arr1[i] == arr1[j])
                   m++;
                  if (mf<m)
                  {
                    mf=m; 
                    item = arr1[i];
                  }
          }
          m=0;
  }
  console.log(item+" ( " +mf +" times ) ") ;
  
  
  
  
    //* 3 * Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
   }
  
  
    // * 4 * Write a JavaScript program to find the sum of squares of the elements of an array.
    function sumofsquares(arr) {
      let sum = 0;
    
  
      for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
      }
    
  
      return sum;
    }
    
      const numbers = [1, 2, 3, 4, 5];
    const sumsquares = sumofsquares(numbers);
    console.log(sumsquares);  