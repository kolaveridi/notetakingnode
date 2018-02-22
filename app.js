//console.log('Starting App');

const fs=require('fs');//
const os=require('os');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;
var command=argv._[0];
//console.log('Command',command);
//console.log('Command is ',process.argv);
//console.log('Yargs is ',argv);

if (command === 'add') {
  console.log('Adding new notes');
  var note=notes.addNote(argv.title,argv.body);
  if(note){
     console.log('Note created');
     console.log('---');
     console.log('Title:${note.title}');
     console.log('Body:${note.body}');
  }
  else{
    console.log('Note title taken');
  }
} else if (command === 'list') {
   var allNotes=notes.getAll();
   console.log(`Printing $(allNotes.length) notes(s)`);
   allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
   var note=notes.getNote(argv.title);
   if(note){
     console.log('Note found');
     console.log('---');
     console.log(`Title:${note.title}`);
     console.log(`Body:${note.body}`);
   }
   else{
     console.log('Note not found');
   }

} else if (command === 'remove') {
    var noteRemoved=notes.removeNote();
    var message=noteRemoved?'Note was removed':'Note not found';
    console.log(message);
} else {
  console.log('Command not recognized');
}

//const _=require('lodash');
//var user=os.userInfo();
//var filteredarray=_.uniq(['satya',1,2,3,3,'satya',25]);
//console.log(filteredarray);
//console.log(_.isString(true));
//console.log(_.isString('true'));
//var res=notes.addNote();
//console.log(res);
//console.log('Result:', notes.add(100,10));
// console.log(user);
//fs.appendFileSync('greetings.txt',`Hello ${user.username} . You are ${notes.age}`);
