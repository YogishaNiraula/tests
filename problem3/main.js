function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

for (let i = 1; i < 100; i++) {
  console.log(fizzBuzz(i));
}
