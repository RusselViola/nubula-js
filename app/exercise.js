exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i in arr) { sum += arr[i]; }
    return sum;
  },

  remove : function(arr, item) {
    for(var i in arr){
      while (arr[i] == item) arr.splice(i,1);
    }
    return arr;
  },
  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    var string = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < string.length; i++) {
      if (longest < string[i].length) {
        longest = string[i].length;
        word = string[i];
      }
    }
    return word;
  },

  letterMoveForward : function(str) {
    var caesar = str.replace(/[a-z]/gi, function(c) {
      switch (c) {
        case 'z': return 'a';
        case 'Z': return 'A';
        default: return String.fromCharCode(1 + c.charCodeAt(0));
      }
    });
    return caesar;
  },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};
