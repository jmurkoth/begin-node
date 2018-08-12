console.log('starting notes.js');
module.exports.age =25;

module.exports.addNote=()=>{
    console.log('Add Note');
    return 'New Note';
};
module.exports.add=(a,b)=>{
    console.log(`adding ${a} and ${b}`);
    return a+b;
};