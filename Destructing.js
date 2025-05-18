const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("hi, I am" + this.name);
  },
};

const printName = ({age}) => { //example of object destructuring
  //funciton made
  console.log(age); //passing the parameter, in reality it will call person.Name
}; //end of function

printName(person);

const {name,age}=person;
//console.log(person);
//console.log(name,age);

const hobbies =['Sports','Cooking'];
const [h1,h2]=hobbies;
console.log(h1,h2);