const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("hi, I am " + this.name);
  },
};
const hobbies=['Shahan','Arshad'];
const copiedArray=hobbies.slice();//slice simply copies the array , no arguments copies hwole array 

//console.log(copiedArray); 


const fakelove=[...hobbies]; //spread operator example on the array , it copied the elements of the array onto new one.
console.log(fakelove);

const shahan={...person}; //spread exmaple on the object. 
console.log(shahan);

const toArray=(...args)=> {
return args;

}

console.log(toArray(1,2,3,4));





