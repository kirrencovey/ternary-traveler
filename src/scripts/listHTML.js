import apiManager from "./apiManager"
import printToDOM from "./printToDOM"

const placeHTML = (place) => {
    return `<section class="locationCard" id="location--${place.id}">
        <h2>${place.name}</h2>
    </section>`
}

const interestHTML = (interest) => {
    return `<div id="interest--${interest.id}">
        <p>${interest.name}: ${interest.description}</p>
        <button id="delete--${interest.id}">Delete</button>
    </div>
    `
}

const listHTML = () => {
    apiManager.get("places?_embed=interests")
        .then(placesArray => {
            placesArray.forEach(place => {
                let placeCard = placeHTML(place)
                printToDOM(placeCard, "list")

                let interestArray = place.interests
                interestArray.forEach(interest => {
                    let interestCard = interestHTML(interest)
                    printToDOM(interestCard, `location--${place.id}`)
                })
            })
        })
}




export default listHTML