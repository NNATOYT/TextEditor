import { UI } from "./models/ui.js"
import { Note } from "./models/note.js"
import { Manager } from "./models/manager.js"

const manager = new Manager()

const btn = document.getElementById("btn-save-editor")
const btnAddZoom = document.getElementById("btn-add-zoom")
const btnLessZoom = document.getElementById("btn-less-zoom")

btn.addEventListener("click" , (e) => {
    const name = document.getElementById("note-name-editor")
    const text = document.getElementById("note-text-editor")

    const note = new Note(name.value,text.value,manager.noteID)
    const ui = new UI()

    ui.createNewNote(note)

    manager.noteID++
    manager.addNoteToArray(note)
    console.log(manager.notesArray)
})

btnAddZoom.addEventListener("click" , (e) => {
    const ui = new UI()
    ui.addZoom(manager)
})

btnLessZoom.addEventListener("click" , (e) => {
    const ui = new UI()
    ui.lessZoom(manager)
})