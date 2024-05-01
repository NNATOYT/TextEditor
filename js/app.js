import { UI } from "./models/ui.js"
import { Note } from "./models/note.js"
import { Manager } from "./models/manager.js"
import { Data } from "./models/data.js"
import * as app from "./const.js"

const manager = new Manager()
const ui = new UI(manager)

const btn = document.getElementById("btn-save-editor")
const btnAddZoom = document.getElementById("btn-add-zoom")
const btnLessZoom = document.getElementById("btn-less-zoom")

manager.init()
ui.init(manager.notesArray)

btn.addEventListener("click" , (e) => {
    
        const name = document.getElementById("note-name-editor")
        const text = document.getElementById("note-text-editor")

        //CREANDO UNA NOTA//
        if (manager.editorMode === app.EDITOR_MODE_CREATING) {
            

            const note = new Note(name.value ,text.value ,manager.noteID)
            const ui = new UI(manager)

            ui.createNewNote(note)
            manager.saveData()

        } //EDITANDO UNA NOTA// 
        else if (manager.editorMode === app.EDITOR_MODE_EDITING) {
            const note = new Note(name.value,text.value,manager.currentNoteID)
            const ui = new UI(manager)
            const noteToEdit = document.getElementById(manager.currentNoteID)

            ui.updateNote(noteToEdit,note)
            manager.updateNoteOfTheArray(manager.currentNoteID,note)

            manager.editorMode = app.EDITOR_MODE_CREATING
            ui.changeEditorMode(app.EDITOR_MODE_CREATING)
            ui.resetValuesForm()
            manager.saveData()
        }
        console.log(manager)
    })


btnAddZoom.addEventListener("click" , () => {
    const ui = new UI(manager)
    ui.addZoom()
})

btnLessZoom.addEventListener("click" , () => {
    const ui = new UI(manager)
    ui.lessZoom()
})