const container = document.getElementById("container");
const btn = document.getElementById("btn");


function createNote(text = "") {
    const newNote = document.createElement("textarea");
    newNote.classList.add("note");
    newNote.placeholder = "Empty note";
    newNote.value = text;
    
    // save on change
    newNote.addEventListener("input", saveNotes);

    newNote.addEventListener("dblclick", () => {
        if (confirm("Delete this note?")) {
            newNote.remove();
            saveNotes();
        } 
    });
    container.insertBefore(newNote, btn);
}
function saveNotes(){
    const allNotes = document.querySelectorAll(".note");
    const notes = [];
    allNotes.forEach(note => {
        if (note.value.trim() !== "")
        {
            notes.push(note.value);
        }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(text => createNote(text));
}
loadNotes();