//task 1
let a=5; //-->15-->10
let b=10; //-->5

a=a+b;
b=a-b;
a=a-b;

console.log("a:",a);
console.log("b:",b);

//task 2
let numbers = [4,9,2,7,5];
let max= numbers[0];

for (let i=1;i<numbers.length;i++) {
    if (numbers[i] > max) {
        max=numbers[i]
    }
}

console.log("max num:",max);

//task 3
let str = "JavaScript is awesome";
let vowels="aeiouAEIOU";
let count=0;

for(let char of str) {
    if(vowels.includes(char)) {
        count++;
    }
}

console.log("vowel count:",count);

//task 4
function isPrime (num) {
    if (num<=1) return false;

    for(let i=2;i<=Math.sqrt(num);i++) {
        if (num%i==0)
            return false;
    }
    return true;
 }
 console.loh(isPrime(17));

 //task 5
 function reverseString(str) {
    return str.split("").reverse().join("");
 }

 console.log(reverseString("hello"))

 //task 6
 let nums = [1,2,3,4,5,6];
 let evenSum = 0;
 for (let num of nums) {
    if (num % 2 ===0) {
        evenSum += num;
    }
 }

 console.log("Sum of even numbers", evenSum);

 //task 7
 let arr = [1,2,3,2,4,1,5];
 let uniqueArr = arr.filter((item,index) => arr.indexOf(item)===index);
 console.log(uniqueArr);

 //task 8
 for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//task 9
function factorial(n) {
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

//task 10
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}