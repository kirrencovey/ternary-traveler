import apiManager from "./apiManager"
import printToDOM from "./printToDOM";

const dropdown = () => {
    apiManager.get("places")
        .then((locationArray) => {
            locationArray.forEach((location) => {
                console.log(location)
                let locationHTML = `<option value="${location.name}"></option>`
                printToDOM(locationHTML, "locations")
            })
        })
}

export default dropdown