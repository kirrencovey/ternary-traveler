const listHTML = {
    placeHTML: (place) => {
        return `<section class="locationCard" id="location--${place.id}">
        <h2>${place.name}</h2>
        </section>`
    },
    interestHTML: (interest) => {
        return `<div id="interest--${interest.id}" class="interest">
        <div class="interestName">${interest.name}</div>
        <div class="interestDescription">${interest.description}</div>
        <button id="delete--${interest.id}">Delete</button>
        </div>
        `
    },
    deleteAlert: (idToDelete) => {
        return `
            <div id="alert">
                <div>Are you sure you want to delete this item?</div>
                <button id="confirm--${idToDelete}">Confirm</button>
                <button id="cancel">Cancel</button>
            </div>
        `
    }
}

export default listHTML