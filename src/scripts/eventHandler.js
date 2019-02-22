import apiManager from "./apiManager";
import listHTML from "./listHTML";
import placeList from "./placeList";

const addInterest = () => {

}

const deleteInterest = () => {

}

const removeElement = (elementId) => {
    let elementToRemove = document.querySelector(`#${elementId}`)
    elementToRemove.parentElement.removeChild(elementToRemove)

}

const eventHandler = () => {
    document.querySelector("#output").addEventListener("click", (event) => {
        if (event.target.id === "addInterest") {

        } else if (event.target.id.startsWith("delete")) {
            let idToDelete = event.target.id.split("--")[1]
            // Confirmation message
            document.querySelector(`#interest--${idToDelete}`).innerHTML += listHTML.deleteAlert(idToDelete)

        } else if (event.target.id.startsWith("confirm")) {
            let idToDelete = event.target.id.split("--")[1]
            // Delete from API
            apiManager.delete(`interests/${idToDelete}`)
                .then(() => {
                    // Clear and re-print list
                    document.querySelector("#list").innerHTML = ""
                    placeList()
                })

        } else if (event.target.id === "cancel") {
            removeElement("alert")
        }
    })
}

export default eventHandler