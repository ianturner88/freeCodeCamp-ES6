/* let limits the variables scope to inside 
a block, statement or expression */

function checkScope() {
    

    const  i = 'function scope';
    if (true) {
      const i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  