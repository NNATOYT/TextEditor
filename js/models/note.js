export class Note {

    /**
     * 
     * @param {string} name The tittle of the note 
     * @param {string} text The text of the note
     * @param {int} id ID of the note
     */
    constructor(name,text,id) {
        this.name = name || "Nameless " + id;
        this.text = text;
        this.id = id
    }
}