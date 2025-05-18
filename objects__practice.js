const person={
name:  'Max',
age: 29,
greet:function() { //another way to use the function


console.log('Hi,I am ' + this.name);
//this indicates the current object it is under , which will person in our example 
},//braces for arrow function,

jasper() {   //two different way to call a function 
    
console.log('and, My age is :  ' + this.age);     
//this indicates the current object it is under , which will person in our example 
}//braces for arrow function

}; //braces for object


person.greet();
person.jasper();