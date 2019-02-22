import listHTML from "./listHTML"
import apiManager from "./apiManager"
import printToDOM from "./printToDOM"

const placeList = () => {
    apiManager.get("places?_embed=interests")
        .then(placesArray => {
            placesArray.forEach(place => {
                let placeCard = listHTML.placeHTML(place)
                printToDOM(placeCard, "list")

                let interestArray = place.interests
                interestArray.forEach(interest => {
                    let interestCard = listHTML.interestHTML(interest)
                    printToDOM(interestCard, `location--${place.id}`)
                })
            })
        })
}

export default placeList