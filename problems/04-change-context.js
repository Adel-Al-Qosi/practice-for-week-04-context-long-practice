function changeContext(func, obj) {
  // Your code here
  let bindedFunc = func.bind(obj)
  return bindedFunc()
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;