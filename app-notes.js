console.log('Notes Application starting');
const fwrite = require('./notesjson');
// declare the options
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  };
 const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };
const yargs = require('yargs').command('add','Add a new note',{
    title: titleOptions,
    body:bodyOptions
 })
 .command('list','List all the notes')
 .command('remove','remove the note',{
    title: titleOptions
 })
 .command('read','read the note',{
    title: titleOptions
 })
 .help();
       

switch(yargs.argv._[0])
{
    case "add":
         var note= fwrite.addNote(yargs.argv.title, yargs.argv.body);
          fwrite.logNote(note);
          break;
    case "remove":
        var removedNote =fwrite.removeNote(yargs.argv.title);
        var message = removedNote? `Note has been removed`: `Could not find a matching note`;
        console.log(message);
        break;
    case "read":
        var note = fwrite.readNote(yargs.argv.title);
        if(note){
            fwrite.logNote(note);
        }
        else{
            console.log(`no matching note found`);
        }
        break;
    case "list":
      var allNotes =fwrite.getAll();
      console.log(`Printing ${allNotes.length} note(s).`);
      allNotes.forEach((note) => fwrite.logNote(note));
      break;
     default:
        console.log('unknown command');
        break;
}


