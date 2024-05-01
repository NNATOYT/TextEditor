import { Note } from "./note.js";
import * as app from "../const.js"
import { Data } from "./data.js";

export class Manager {
    constructor() {
        this.zoomSize = 20;
        this.zoomPorcent = 100;
        this.editorMode = app.EDITOR_MODE_CREATING;

        this.noteID = 0;
        this.notesArray = [];

        this.currentNoteID = null;
    }

    init() {
        const data = new Data()

        data.save("notes-array",this.notesArray)
        data.save("note-count-id",this.noteID)

        this.notesArray = this.convertToNote(data.get("notes-array"))
        this.noteID = data.get("note-count-id")
        console.log(this)
    }

    saveData() {
        const data = new Data()

        data.write("notes-array",this.notesArray)
        data.write("note-count-id",this.noteID)
    }
    /**
     * 
     * @param {Note} note The note to add to the array.
     */
    addNoteToArray(note) {
        this.notesArray.push(note)
        console.log("Se ha agregado : " + note)
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
            if(this.notesArray[i].id === id) {
                return this.notesArray[i]
            }
        }

    }

    /**
     * 
     * @param {Object[]} array 
     * @returns {Note[]}
     */
    convertToNote(array) {
        return array.map(element => {
            const note = new Note(element.name,element.text,element.id)
            return note
        })
    }
}