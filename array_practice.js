const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);

    }
};
const hobbies = ['Sports', 'Cooking'];  //const is storing the address value of the array , so even if you add members in the array it will not create issues.

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Shahan:' + hobby));   //map function creates a new array, without changing the original array
console.log(hobbies);  //original array 


hobbies.push('Programming');  //adding value to the original array 
console.log(hobbies);  

