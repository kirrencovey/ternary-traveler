import apiManager from "./apiManager"
import printToDOM from "./printToDOM";

const dropdown = () => {
    apiManager.get("places")
        .then((locationArray) => {
            locationArray.forEach((location) => {
                let locationHTML = `<option value="${location.name}">${location.name}</option>`
                printToDOM(locationHTML, "locations")
            })
        })
}

export default dropdown