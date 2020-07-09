/* 

const user = { name: 'John Doe', age: 34 };

can be replaced with:

const { name: userName, age: userAge } = user;

*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today: highToday,  tomorrow: highTomorrow} = HIGH_TEMPERATURES
  
  // Only change code above this line
  