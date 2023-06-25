const reverseString = function(string) {
   var split = string.split('');
   var reversed = split.reverse();
   var newString = reversed.join('');
   return newString;
};

// Do not edit below this line
module.exports = reverseString;
