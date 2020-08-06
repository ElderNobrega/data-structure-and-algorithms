// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    let answer = 1
    if (number == 0 || number == 1) {return 1}
    answer = number * findFactorialRecursive(number - 1)
    return answer;
  }
  
  function findFactorialIterative(number) {
    let answer = 1
    for (let i = 2; i <= number; i++) {
        answer = answer * i
    }
    return answer;
  }

  console.log(findFactorialIterative(2))
  console.log(findFactorialRecursive(2))