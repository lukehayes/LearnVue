/**
 * A basic note taker app in Javascript.
 */

let app = document.getElementById('app');
let notes = document.getElementById('notes');
let noteInput = document.getElementById('note-input');

noteInput.addEventListener('keydown', function(e) {
    if(e.keyCode == 13)
    {
        let note = e.target.value;
        let elem = document.createElement("DIV");
        elem.innerText = note;

        notes.appendChild(elem);
    }
});

