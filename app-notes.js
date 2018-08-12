console.log('Notes Application starting');
const yargs = require('yargs');
const fwrite = require('./notesjson');


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
     default:
        console.log('unknown command');
        break;
}


