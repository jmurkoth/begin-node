console.log('starting notes.js');
age =25;

addNote=()=>{
    console.log('Add Note');
    return 'New Note';
};
add=(a,b)=>{
    console.log(`adding ${a} and ${b}`);
    return a+b;
};

module.exports ={
 age,
 addNote,
 add
}