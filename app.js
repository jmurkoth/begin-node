console.log('Application starting');
const fs = require('fs');
const os = require ('os');
const notes = require('./notes');
const _ = require('lodash');


var user = os.userInfo();

var res = notes.addNote();
console.log(res);
// add function
var z = notes.add;
console.log(z(1,9));

// filtering an array
var filteredArray = _.uniq(['Gary', 1, 'Gary', 1, 2, 3, 4,9,8,39,35,39]);
console.log(filteredArray);

// reading from cmd line
var arg= process.argv[2];
console.log('Command: ',arg);

switch (arg) {
  case 'add':
     console.log('adding');
    break;
  case 'list':
    console.log('listing');
  default:
  console.log('unknown command');
    break;
}
// Option one
fs.appendFile('greetings.txt', `Hello world ${user.username} Age ${notes.age}!`, function (err){
    if (err) { 
      console.log('Unable to write to file');
    }
    else{
        console.log('Written successfully');
    }
  });
  