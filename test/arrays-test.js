/*global describe, it */
var grilledCheeseIngridents = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic' ];
var tomatoSauceIngridents = ['tomato', 'garlic', 'olive oil', 'basil', 'oreagno'];
var myArray = ['element 0', 'element 1', 'element 2, ..., elementN'];

var primeNumbers = ['2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37'];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = [ "he", '110', "w", '0', "r", '1', "d" ];

var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");

var chocolateBars =
  ["hundred grand", "kitkat", "skittles", "snickers"];

"addElementToBeginningOfArray";
{
    ('add the element to the beginning of array');
    'returns("the whole array");' ;
  }
"destructivelyAddElementToBeginningOfArray" ; {
  ('add the elementto  to the beginning of array, alters the original array');
 'returns(the new array and not modifiy the original);';
}
"addElementToEndOfArray" ; {
  ('takes two arguments, an array and an element to add to the end of the array, without altering the original');
  'returns ("without altering the original array")';
}
"accessElementInArray" ; {
  ('accepts an array and an index') ;
  returns('the element at that index');
}
"destructivelyRemoveElementFromBeginningOfArray" ; {
  ('takes an array as an argument and removes the first element');
  'returns(the entire array and mutates the array);';
"removeElementFromBeginningOfArray" ; {
  ('takes an array as the only argument and removes the first element');
  'returns(the entire array and should not mutate underlying array);';
}
"destructivelyRemoveElementFromEndOfArray"
; {
  ('takes an array as its only argument and removes the last element');
  'returns(the entire array, and mutate the array);';
}
"removeElementFromEndOfArray" ; {
  ('takes an array as its only argument and removes the last elementy');
  'returns(the array without the last element and should not mutate the original array);';
}
}
var cities = ["New York", "San Fransisco", "...cities", "Philidelphia"];

var empty = [];

  describe('chocolateBars', () => {
    ('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
expect(chocolateBars).to.equal;
      '["hundred grand", "kitkat", "skittles",  "snickers"]';
    });
  });
  describe('addElementToBeginningOfArray(array, element)', () => {
    ('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1]);
    });

    ('does not alter the original array', () => {
      const array = [1];

      addElementToBeginningOfArray(array, 'foo');

      expect(array).to.eql([1]);
    });
  });

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    ('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1]);
    });

    ('alters the original array', () => {
      const array = [1];

      destructivelyAddElementToBeginningOfArray(array, 'foo');

      expect(array).to.eql(['foo', 1]);
  });
  })

  ('addElementToEndOfArray(array, element)', () => {
    ('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo']) ;
    });
  });
    ("does not alter the original array", () => {
      const array = ['1'] ;
      addElementToEndOfArray('array', 'foo') ;
      });
      'expect(array).to.eql([1])' ;
  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    ('adds an element to the end of an array', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.equal([1, 'foo']) ;
    });
  });
    ('alters the original array', () => {
      const array = [1];
    });
 ("accessElementInArray(array, index)", () => {
    ("accesses the element in array at the given index", () => {
      expect
      ("accessElementInArray(['1, 2, 3'], '2')").to.equal('3') ;
    });
 });