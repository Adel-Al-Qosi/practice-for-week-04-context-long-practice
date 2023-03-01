function callOnTarget(func, obj1, obj2) {
  // Your code here
  const bindedFunc = func.call(obj1, obj2)
  return bindedFunc
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;