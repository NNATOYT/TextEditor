import { SETTINGS,NAME_EDITOR,TEXT_EDITOR } from "./const.js"

const btnOpenSettings = document.getElementById("btn-open-settings")
const btnSaveSettings = document.getElementById("btn-save-settings")

btnOpenSettings.addEventListener("click",() => {
    SETTINGS.style.display = "grid"
})

btnSaveSettings.addEventListener("click", () => {
    SETTINGS.style.display = "none"
})