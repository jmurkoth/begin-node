var fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
  };


  var writeToFile=()=>{
    var originalNoteString = JSON.stringify(originalNote);
    fs.writeFileSync('notes.json', originalNoteString);
  }

//Method to check for duplicates
var hasDuplicates=(notes, title)=>{
   var duplicates= notes.filter((note)=>{
        return note.title === title;
    });
    return (duplicates && duplicates.length>0);
};

// method to fetch notes
var fetchNotes=()=>{
    var notes=[];
  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes= JSON.parse(notesString);
  }
  catch(err)
  {
    console.log('Couldnt read file');
  }
  return notes;
};

//save the notes
var saveNote= (notes)=>{
    fs.writeFile('notes-data.json', JSON.stringify( notes), (err) => {
        if (err) throw err;
        console.log('Notes have been saved!');
      });
};

// remove a note
var removeNote=(title)=>{
    // get all the notes
    console.log(`Removing the note with TITLE: ${title}`)
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    var noteToRemove=notes.length !== filteredNotes.length;
    if(noteToRemove) {saveNote(filteredNotes);}
    // this tells us if we actually found the note
    return noteToRemove;
};

//read the note
var readNote=(title)=>{
    var note=null;
    console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title == title);
    if(filteredNotes && filteredNotes.length>0)
    {
        note= filteredNotes[0];
    }
    return note;
};

// log the note
var logNote =(note)=>{
    if(note){
        console.log(`------------------`);
        console.log(`Note Title: ${note.title}`);
        console.log(`Note Body: ${note.body}`)
        console.log(`------------------`);
    }

};

// get all the notes

var getAll=()=>{
    console.log(`getting all the notes`);
    var notes = fetchNotes();
    return notes;
};

//add the note
var addNote = (title,body)=>{
    console.log(`Adding the note`);
    var notes=fetchNotes();
    var note={title,body};
   //Check for duplicates
    if(hasDuplicates(notes, title))
    {
        console.log('This is a duplicate note.');
        return;
    }
    //add to the array
    notes.push(note);
    //save the note
    saveNote(notes);
    return note;
}


 // module exports
  module.exports ={
    writeToFile,
    addNote,
    removeNote,
    readNote,
    logNote,
    getAll
  }
