/* when there is no function body and only a return
value -> arrow function syntax ( () => ) allows you 
to omit the keyword 'return' */

var magic = function() {
    "use strict";
    return new Date();
  };
  

  const magic = () => new Date();