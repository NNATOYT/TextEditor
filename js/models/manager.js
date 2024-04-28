import { Note } from "./note.js";

export class Manager {
    constructor() {
        this.zoomSize = 20;
        this.zoomPorcent = 100;
        this.editorMode = "CREATION";

        this.noteID = 0;
        this.notesArray = [];
    }

    /**
     * 
     * @param {Note} note The note to add to the array.
     */
    addNoteToArray(note) {
        this.notesArray.push(note)
    }

    removeNoteToArray(noteID) {

    }
}