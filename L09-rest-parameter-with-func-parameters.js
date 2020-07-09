/* rest paramenter allow functions to take a 
variable number of arguments */

const sum = (... args) => {
    return args.reduce((a, b) => a + b, 0);
  }