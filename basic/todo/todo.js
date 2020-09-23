/**
 * A basic note taker app in Javascript.
 */

let app = document.getElementById('app');
let notes = document.getElementById('notes');
let noteInput = document.getElementById('note-input');
let storage = window.localStorage;
let storageKey = 0;

function addToStorage(item)
{
    storageKey += 1;
    storage.setItem(storageKey, item);
}

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

        addToStorage(note);

        elem.appendChild(btn);
        notes.appendChild(elem);

    }
});

