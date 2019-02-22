import apiManager from "./apiManager";
import listHTML from "./listHTML";
import removeElement from "./removeElement"
import printToDOM from "./printToDOM";

const $ = document.querySelector.bind(document)

const addInterest = () => {
    // Capture user input
    let placeId = parseInt($("#locations").value)
    let name = $("#interest").value
    let description = $("#description").value

    // Make a new object
    let newInterest = {
        placeId: placeId,
        name: name,
        description: description
    }

    // Post to API
    apiManager.post("interests", newInterest)
        // Add HTML to DOM
        .then((interestObject) => {
            let newInterestHTML = listHTML.interestHTML(interestObject)
            printToDOM(newInterestHTML, `location--${interestObject.placeId}`)
        })
}

const eventHandler = () => {
    $("#output").addEventListener("click", (event) => {
        if (event.target.id === "addInterest") {
            addInterest()

        } else if (event.target.id.startsWith("delete")) {
            let idToDelete = event.target.id.split("--")[1]
            // Confirmation message
            $(`#interest--${idToDelete}`).innerHTML += listHTML.deleteAlert(idToDelete)

        } else if (event.target.id.startsWith("confirm")) {
            let idToDelete = event.target.id.split("--")[1]
            // Delete from API
            apiManager.delete(`interests/${idToDelete}`)
                .then(() => {
                    removeElement(`interest--${idToDelete}`)
                })

        } else if (event.target.id === "cancel") {
            removeElement("alert")
        }
    })
}

export default eventHandler