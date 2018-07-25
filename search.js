/* 
What I did to get it to work after you type quit.
I put the if(search === 'quit') as the last else if in my while loop. This way everthing else I searched for will wait until the loop is done to print. So when the order of the while loop follows it will be accessed be for the break.
*/

// varitable declaired
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

// function declaired
function print(message) {
  document.write( '<p>' + message + '</p>');
}

// while loop declaired
while ( true ) {
  search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
  if (search == 'list') {
  print(inStock.join(', '));
  } else if( inStock.indexOf(search) > -1) {
    print ("Yes, we have " + search + " in the store.");
  }else if (inStock.indexOf(search) < -1) {
    print (search + " is not in stock.");
  } else if (search === 'quit') {
    break;
  }
}
