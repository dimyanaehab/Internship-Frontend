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