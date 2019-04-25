// DeliCounter Lab
// 1. Add elements to an array
// 2. Return items from an array
// 3. Iterate through an array
// 4. Pass an array as a function parameter
//
// Instructions:
//
// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.
// At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
// var katzDeli = [];
//
//


// PART 1 - Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people, katzDeliLine,
// along with the new person's name as parameters.
// The function should return their position in line.
// And don't go being too programmer-y and give them their index.
// These are normal people. If they are 7th in line, tell them that.
// Don't get their hopes up by telling them they are number 6 in line.




//building it like an anonymous function
// The function, takeANumber, should accept the current line of people, katzDeliLine, and new person's name as parameters

var takeANumber = function(katzDeli, newCustomer) {

        //for the line to be a line, its length should be greater than 0
        if (katzDeli.length > 0);
        //if condition holds true then push the new customer's name onto the array katzDeli
        katzDeli.push(newCustomer);
        //the new customer's position in the line will be the length of the katzDeli array therefore:
        return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
   }

// 1. Declare our function - accepts 2 parameters - katzDeli & newCustomer
// 2. Check our conditionals - if katzDeliLength.length > 0
// 3. Push our new customer to the end of the Array
// 4. Return our string that outputs the position of the new customer
// 5. Test our function - make sure to pass arguments through the function
    //   takeANumber(katzDeli, 'Ada');



// PART 2 - Build a function nowServing.
// This function should return the first person in line and then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"


//Build a function nowServing. It accepts the line in the Deli as a parameter.
function nowServing (katzDeliLine) {
    if(katzDeliLine.length===0) { //if length of line is equal to 0, we will use comparison operator with ===
    return 'There is nobody waiting to be served!'; //returns the given string
  }

  // This function should return the first person in line and then remove that individual from the line.
  // array.shift() removes first element from the array
  var customer = katzDeliLine.shift();

  //return sentence with customer being currently served
  return "Currently serving " + customer + ".";
  }


// //1. Declare our function - taking our perameter - current line = katzDeliLine
// //2. Check our conditionals - if equal to 0 - return "There is nobody waiting to be served!"
// //3. Remove first person from the line and return string
// //4. Return string "Currently serving - first person with customer name"
// //5. Test our fuction - make sure it works!


//   describe('nowServing', () => {
//     it('returns the line is empty when no one is on line', () => {
//       expect(nowServing([])).toEqual("There is nobody waiting to be served!");
//     });

//     it('returns an announcement about the person it is serving, and shifts the line', () => {
//       const deliLine = ["Steven", "Blake", "Avi"]
//       expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
//       expect(deliLine).toEqual(["Blake", "Avi"]);
//     });
//   });


// PART 3 Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return
//        "The line is currently: 1. Ada, 2. Grace".
//If there is nobody in line, it should return "The line is currently empty."



//declare function currentLine as an anonymous function
//this function has line in the deli as the only parameter
var currentLine = function (katzDeliLine) {
  //If there is nobody in line, it should return "The line is currently empty."
  if (katzDeliLine.length===0) {
    return "The line is currently empty.";
}
    //create an empty array with the final results carrying customers and their numbers
    var customerAndNumber = [];
    //loop through the line in the deli
    for (var i=0; i<katzDeliLine.length; i++) {
    //add people falling into the line into the empty array we just created.
    //We will add 1 to it cause the first element in an array is 0
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
  }
  //array.join(",") creates new string by joining all elements in array separated by specified seperator
  return "The line is currently: " + customerAndNumber.join(", ");
 }

// 1. Declare our function - currentLine - take in the parameter katzDeliLine
// 2. Check our condistionals - if equal to 0 - return "The line is currenlty empty."
// 3. loop through our array = our current deli line / katzDeliLine
// 4. Push the customer and taking the index / their current position in line -
// 5. Return string - by joining all the elements of the array using .join method


















function nowServing (katzDeliLine) { //declared function
    if(katzDeliLine.length===0) { //checks if length of array(katzDeli) is = to 0
    return 'There is nobody waiting to be served!'; //returns string no one is waiting
 }

     var customer = katzDeliLine.shift(); // shift array of people

    return "Currently serving " + customer + "." ; //return string with customer name
 }

 const deliLine = ["Steven", "Blake", "Avi"];
 console.log(deliLine);
