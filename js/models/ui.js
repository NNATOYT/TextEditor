import { Note } from "./note.js"
import { Manager } from "./manager.js"
import * as app from "../const.js"

export class UI {
    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager) {
        this.manager = manager;
    }

    /**
     * 
     * @param {Note[]} notesArray 
     */
    init(notesArray) {
        notesArray.forEach((note) => {
            this.createNote(note)
        })
    }

    /**
     * 
     * @param {Note} note 
     */
    createNote(note) {
        const notesContainer = document.getElementById("notes-container")

        const element = document.createElement("div")
        const buttonDelete = document.createElement("button")
        const buttonEdit = document.createElement("button")
        const buttonsContainer = document.createElement("div")

        buttonDelete.innerHTML = "<b>Delete</b>"
        buttonDelete.classList = "btn"
        buttonDelete.addEventListener("click", () => this.deleteNote(element,note.id))

        buttonEdit.innerHTML = "<b>Edit</b>"
        buttonEdit.classList = "btn"
        buttonEdit.addEventListener("click" , () => this.editNote(note.id))

        element.id = note.id
        element.classList = "note"
        element.innerHTML = `
            <b class="note-name">${note.name}</b>
            <p class="note-text">${note.text}</p>
            <span>Date: 10/10/2024</span>
        `

        buttonsContainer.classList = "btns-container"

        buttonsContainer.append(buttonDelete)
        buttonsContainer.append(buttonEdit)
        element.append(buttonsContainer)
        notesContainer.append(element)
    }

    /**
    @param {Note} note The note to add on the Document
    @param {Function} callback 
    */
    createNewNote(note) {
        this.createNote(note)

        this.resetValuesForm()
        this.updateManager(note)
    }

    /**
     * 
     * @param {Note} note Note to open. 
     */
    editNote(noteID) {
        const note = this.manager.getNoteFromID(noteID)
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        
        editorName.value = note.name
        editorText.value = note.text

        this.manager.currentNoteID = note.id
        this.manager.editorMode = app.EDITOR_MODE_EDITING
        this.changeEditorMode(app.EDITOR_MODE_EDITING)
        console.log(this.manager)
    }

    /**
     * 
     * @param {HTMLElement} element Element to delete.
     */
    deleteNote(element,noteID) {
        element.remove()
        this.manager.removeNoteToArray(noteID)
        this.manager.editorMode = app.EDITOR_MODE_CREATING
        this.changeEditorMode(this.manager.editorMode)
        this.resetValuesForm()
        this.manager.saveData()

    }

    /**
     * 
     * @param {HTMLElement} noteElement 
     * @param {Note} note 
     */
    updateNote(noteElement,note) {
        noteElement.children[0].textContent = note.name
        noteElement.children[1].textContent = note.text

    }

    /**
     * 
     * @param {Note} note 
     */
    updateManager(note) {
        this.manager.noteID++
        this.manager.addNoteToArray(note)
    }

    /**
     * 
     * @param {Manager} manager The manager of the session. 
     */
    addZoom() {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        const editorZoomPorcent = document.getElementById("editor-zoom-porcent")

        this.manager.zoomSize++
        this.manager.zoomPorcent += 5

        editorText.style.fontSize = this.manager.zoomSize + "px"
        editorName.style.fontSize = this.manager.zoomSize + "px"
        editorZoomPorcent.textContent = this.manager.zoomPorcent + "%"
    }

    lessZoom() {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        const editorZoomPorcent = document.getElementById("editor-zoom-porcent")

        this.manager.zoomSize--
        this.manager.zoomPorcent -= 5

        editorText.style.fontSize = this.manager.zoomSize + "px"
        editorName.style.fontSize = this.manager.zoomSize + "px"
        editorZoomPorcent.textContent = this.manager.zoomPorcent + "%"
    }


    changeEditorMode(mode) {
        const btnSave = document.getElementById("btn-save-editor")
        switch(mode) {
            case app.EDITOR_MODE_EDITING :
                btnSave.innerHTML = "<b>Save Changes (ctrl + s)</b>"
                break

            case app.EDITOR_MODE_CREATING :
                btnSave.innerHTML = "<b>Save (ctrl + s)</b>"
                break
        }
    }


    resetValuesForm() {
        const editorName = document.getElementById("note-name-editor")
        const editorText = document.getElementById("note-text-editor")
        
        editorName.value = ""
        editorText.value = ""
    }

    loadNotes() {

    }

    //SETTINS SECTION//
    showSettingsMenu() {
        
    }
}