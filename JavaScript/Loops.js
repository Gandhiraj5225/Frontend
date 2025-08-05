//Duplicates
 let numbers = [1, 2, 3, 4, 5, 1, 2];
 let largest = 0;
 let secondlargest = 0;
for (let i= 0; i < numbers.length; i++) {
    if (numbers[i]> largest) {
        secondlargest = largest;
        largest = numbers[i];
    }
}
console.log("largest: " + largest);
console.log("secondlargest: " + secondlargest);