import {UI} from "./models/ui.js"
import {Note} from "./models/note.js"

const btn = document.getElementById("btn-save-editor")

btn.addEventListener("click" , () => {
    const name = document.getElementById("note-name-editor")
    const text = document.getElementById("note-text-editor")

    const note = new Note(name.value,text.value)
    const ui = new UI()

    ui.cerateNewNote(note)
})