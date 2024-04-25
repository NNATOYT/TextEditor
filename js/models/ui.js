import {Note} from "./note.js"

export class UI {
    constructor() {

    }

    /**
    @param {Note} note The note to add on the Document
    */
    cerateNewNote(note) {
        const element = document.createElement("div")
        element.innerHTML = `
            <b>Name:${this.name}</b>
            <br>
            <span>${this.text}</span>
            <br>
            <span>Date: 10/10/2024</span>
        `
    }
}