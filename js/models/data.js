export class Data {

    
    save(key,data) {
        if(localStorage.getItem(key) === null) {
            localStorage.setItem(key,JSON.stringify(data))
            return
        } else {
            console.log("This key is already use");
            return
        }
    }

    get(key) {
        if(localStorage.getItem(key) === null) {
            return undefined
        } else {
            return JSON.parse(localStorage.getItem(key))
        }
    }

    write(key,data) {
        localStorage.setItem(key,JSON.stringify(data))
    }
}