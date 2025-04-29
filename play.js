const name = 'Shahan';
let age = 29;
const hashobbies = true;  //boolean
//const --> value does not change. 
//we will use let instead of var 
age=35;

const summarizeUser = (userName, userAge, userHasHobby) => { // these are local variables, cannot be used outside unless declared

    return 'Name is ' + userName + ' age is ' + userAge + ' and the uset has the hobbies are ' + userHasHobby;
};

const add=(a,b) => {
return 'total is ' + (a+b);
};



const add1 =(a,b) => a+b;
const addOne=a => a+1;  //parenthesis will remove it. if you have a single paramter. 
const addRandom =()=>1+2;









console.log(add(1,2));
console.log(summarizeUser(name, age, hashobbies));
console.log(addOne(4));
console.log(addRandom());

