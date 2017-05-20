/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var prev = 1;
  var next = 1;
  var fibNum = 0;
  while(fibNum <= maxFibValue) {
  	prev = next;
  	if(fibNum % 2 === 0) {
  		sum += fibNum;
  	}
  	next = fibNum;
  	fibNum = next + prev;
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  var prev = 1;
  var next = 1;
  var fibNum = 0;
  while(fibNum < maxFibValue) {
  	prev = next;
  	next = fibNum;
  	fibNum = next + prev;
  }
  highest = next;

  return highest;
}

console.log(_highestFibonacciNumber(100));

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};