const formHTML = () => {
    return `<fieldset>
        <h3>Add A New Point of Interest</h3>

        <div id="formInputs">
            <div id="formSection">
                <label for="Location">Location</label>
                <select name="locations" id="locations"></select>

                <label for="interest">Name</label>
                <input type="text" name="interest" id="interest">
            </div>
            <div id="descriptionSection">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="5"></textarea>
            </div>
        </div>

        <button id="addInterest">Add</button>
    </fieldset>`
}

export default formHTML