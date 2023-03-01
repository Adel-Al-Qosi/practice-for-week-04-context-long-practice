function allTheArgs(func, ...args) {
  // Your code here
  let bindedFunc = func.bind(this, ...args)
  return bindedFunc
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;