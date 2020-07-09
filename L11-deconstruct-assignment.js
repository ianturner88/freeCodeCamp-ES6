/* 
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

the above code may be replaced with

const { name, age } = user;
// name = 'John Doe', age = 34

*/


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
const {today, tomorrow} = HIGH_TEMPERATURES
  
  // Only change code above this line
  