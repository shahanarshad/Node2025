const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);

    }
};
const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Shahan:' + hobby));   //map function creates a new array, without changing the original array
console.log(hobbies);  //original array 




