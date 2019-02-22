const removeElement = (elementId) => {
    let elementToRemove = document.querySelector(`#${elementId}`)
    elementToRemove.parentElement.removeChild(elementToRemove)

}

export default removeElement