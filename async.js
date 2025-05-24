const fetchData = () => {
const promise= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
    }, 1500);
  });
return promise;
};


setTimeout(() => {
  console.log("Timeout is implemented");
  fetchData(text => {
    console.log(text);
  });
}, 7000); //delya of 7 sec is added, example of async code block

console.log("Hi, this is Shahan"); //sync code examples, as they do not have any delay.
console.log("Welcome to sync code example"); //sync code examples, as they do not have any delay.
