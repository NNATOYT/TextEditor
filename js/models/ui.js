import {Note} from "./note.js"

export class UI {
    constructor() {

    }

    /**
    @param {Note} note The note to add on the Document
    */
    cerateNewNote(note) {
        const notesContainer = document.getElementById("notes-container")
        const element = document.createElement("div")
        const buttonDelete = document.createElement("button")

        buttonDelete.innerText = "Delete"
        buttonDelete.addEventListener("click",() => element.remove())

        element.classList = "note"
        element.innerHTML = `
            <b>Name:${note.name}</b>
            <span class="text">${note.text}</span>
            <span>Date: 10/10/2024</span>
        `
        element.append(buttonDelete)
        notesContainer.append(element)
    }
}