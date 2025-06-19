// Create a JavaScript program that uses a whileloop to sum all even numbers between 1 and 20.
let i=1;
let sumeven=0;
while (i<=20) {
    if (i % 2 ==0) {
        sumeven+=i;
    }
    i++;

}
console.log(`sum of even numbers between 1 to 20 : ${sumeven}`);