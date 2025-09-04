const logicalError = () => {
  let num = 5;
  if(num=10)
  {
    console.log(num);
  }
  else{
    console.log("Logical Error: num is not equal to 10");
  }
};

module.exports = logicalError;
