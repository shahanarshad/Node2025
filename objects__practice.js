const person={
name:  'Max',
age: 29,
greet:function() {


console.log('Hi,I am ' + this.name);
//this indicates the current object it is under , which will person in our example 
}//braces for arrow function,
,
jasper() {


    console.log('and, My age is :  ' + this.age);
    //this indicates the current object it is under , which will person in our example 
    }//braces for arrow function



}; //braces for object


person.greet();
person.jasper();