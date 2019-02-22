import formHTML from "./formHTML"
import printToDOM from "./printToDOM"
import dropdown from "./dropdown";

const form = () => {
    let form = formHTML()
    printToDOM(form, "form")
    dropdown()
}

export default form