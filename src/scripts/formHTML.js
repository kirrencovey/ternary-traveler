const formHTML = () => {
    return `<fieldset>
        <legend>Add A New Point of Interest</legend>

        <label for="Location">Location</label>
        <select name="locations" id="locations"></select>

        <label for="interest">Name</label>
        <input type="text" name="interest" id="interest">

        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>

        <button>Add</button>
    </fieldset>`
}

export default formHTML