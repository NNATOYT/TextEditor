import { Note } from "./note.js"
import { Manager } from "./manager.js"

export class UI {
    constructor() {
    }

    /**
    @param {Note} note The note to add on the Document
    */
    createNewNote(note) {
        const notesContainer = document.getElementById("notes-container")
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")

        const element = document.createElement("div")
        const buttonDelete = document.createElement("button")
        const buttonEdit = document.createElement("button")
        const buttonsContainer = document.createElement("div")

        buttonDelete.innerHTML = "<b>Delete</b>"
        buttonDelete.classList = "btn"
        buttonDelete.addEventListener("click",() => element.remove())

        buttonEdit.innerHTML = "<b>Edit</b>"
        buttonEdit.classList = "btn"
        buttonEdit.addEventListener("click" , () => this.openNote(note))

        element.id = note.id
        element.classList = "note"
        element.innerHTML = `
            <b class="note-name">${note.name}</b>
            <p class="note-text">${note.text}</p>
            <span>Date: 10/10/2024</span>
        `

        buttonsContainer.classList = "btns-container"


        editorName.value = ""
        editorText.value = ""

        buttonsContainer.append(buttonDelete)
        buttonsContainer.append(buttonEdit)
        element.append(buttonsContainer)
        notesContainer.append(element)
    }

    /**
     * 
     * @param {Note} note Note to open. 
     */
    openNote(note) {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        
        editorName.value = note.name
        editorText.value = note.text
    }

    /**
     * 
     * @param {Manager} manager The manager of the session. 
     */
    addZoom(manager) {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        const editorZoomPorcent = document.getElementById("editor-zoom-porcent")

        manager.zoomSize++
        manager.zoomPorcent += 5

        editorText.style.fontSize = manager.zoomSize + "px"
        editorName.style.fontSize = manager.zoomSize + "px"
        editorZoomPorcent.textContent = manager.zoomPorcent + "%"
    }

    lessZoom(manager) {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        const editorZoomPorcent = document.getElementById("editor-zoom-porcent")

        manager.zoomSize--
        manager.zoomPorcent -= 5
        editorText.style.fontSize = manager.zoomSize + "px"
        editorName.style.fontSize = manager.zoomSize + "px"
        editorZoomPorcent.textContent = manager.zoomPorcent + "%"
    }
}