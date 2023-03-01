function bindToAnArg(func, arg) {
  // Your code here
  const bindedFunc = func.bind(this, arg)
  return bindedFunc
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;