// Step 1: Wrap entire contents of script.js in an IIFE (Immediately Invoked Function Expression)
(function () {
  // Step 2: Create an array of names
  var names = ["John", "Jane", "sam", "James", "Julia", "world", "Jake"];

  // Step 3: Loop over the array
  for (var i = 0; i < names.length; i++) {
    // Step 4: Retrieve current name from the array
    var currentName = names[i];

    // Step 5: Convert current name to lowercase
    var lowerCaseName = currentName.toLowerCase();

    // Step 6: Retrieve the first letter of the lowercase name
    var firstLetter = lowerCaseName.charAt(0);

    // Step 7: Check if the first letter is 'j'
    if (firstLetter === 'j') {
      // Step 8: If it starts with 'j', print "Goodbye" + name
      console.log("Goodbye " + currentName);
    } else {
      // Step 9: If it starts with any other letter, print "Hello" + name
      console.log("Hello " + currentName);
    }
  }
})();
