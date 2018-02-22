//console.log('Notes Running ');

const fs=require('fs');

var fetchNotes=()=> {
  try{
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch(e){
     return [];
  }
};
var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));//we wre writing it to file notes-data.sjon and we first convert notes to string

};
var addNote=(title,body)=>{
  var notes=fetchNotes();
  var note ={
    title:title,
    body:body
  };

  var duplicatenotes=notes.filter((note)=>note.title===title);
  if(duplicatenotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
var getAll=()=>{
  return fetchNotes();
};
var getNote=(title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];//first item
  console.log('Getting note',title);
};
var removeNote = (title) => {
  //console.log('Removing note', title);
  var notes=fetchNotes();// first fetch the noteString
  var filteredNotes=notes.filter((note) => note.title !== title);// all those notes whose title don't match with the title in parameter
  saveNotes(filteredNotes);//save it

  return notes.length !== filteredNotes.length;// to check if note is removed or note
};
var logNote =(note) =>{
 console.log('--');
 console.log(`Title: ${note.title}`);
 console.log(`Body: ${note.body}`);
};
module.exports ={
  addNote,
  getAll,
  getNote,
  logNote,
  removeNote
}
