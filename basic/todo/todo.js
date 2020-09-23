/**
 * A basic note taker app in Javascript.
 */

let app = document.getElementById('app');
let notes = document.getElementById('notes');
let noteInput = document.getElementById('note-input');

function addButton(title) {
    let elem = document.createElement('button');
    elem.innerText = title;

    elem.addEventListener('mousedown', function(e)
    {
        let parent = elem.parentElement;
        notes.removeChild(parent);
    });


    return elem;
}

noteInput.addEventListener('keydown', function(e) {
    if(e.keyCode == 13)
    {
        let note = e.target.value;
        let elem = document.createElement("DIV");
        elem.className = "note";
        elem.innerText = note;

        let btn = addButton('Remove');

        elem.appendChild(btn);
        notes.appendChild(elem);
    }
});

