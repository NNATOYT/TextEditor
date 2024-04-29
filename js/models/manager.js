import { Note } from "./note.js";
import * as app from "../const.js"

export class Manager {
    constructor() {
        this.zoomSize = 20;
        this.zoomPorcent = 100;
        this.editorMode = app.EDITOR_MODE_CREATING;

        this.noteID = 0;
        this.notesArray = [];

        this.currentNoteID = null;
    }

    /**
     * 
     * @param {Note} note The note to add to the array.
     */
    addNoteToArray(note) {
        this.notesArray.push(note)
    }

    removeNoteToArray(noteID) {
        this.notesArray = this.notesArray.filter((note) => note.id != noteID )
    }

    /**
     * 
     * @param {int} id 
     * @param {Note} note 
     */
    updateNoteOfTheArray(id,note) {
        for(let i = 0; i < this.notesArray.length; i++) {
            if(this.notesArray[i].id === id) {
                this.notesArray[i] = note 
                return
            }
        }
    }

    getNoteFromID(id) {
        for(let i = 0; i < this.notesArray.length; i++) {
            console.log(i)
            if(this.notesArray[i].id === id) {
                return this.notesArray[i]
            }
        }

    }
}