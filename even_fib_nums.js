/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var prev = 1; //f(n-2)
  var next = 1; //f(n-1)
  var fibNum = 0; //fn
  while(fibNum <= maxFibValue) {
  	prev = next;
  	if(fibNum % 2 === 0) {
  		sum += fibNum;
  	}
  	next = fibNum;
  	fibNum = next + prev; //fn = f(n-1) + f(n-2)
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  var prev = 1; //f(n-2)
  var next = 1; //f(n-1)
  var fibNum = 0; //fn
  while(fibNum <= maxFibValue) {
  	prev = next;
  	next = fibNum;
  	fibNum = next + prev; //fn = f(n-1) + f(n-2)
  }
  highest = next; //highest = f(n-1)

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};