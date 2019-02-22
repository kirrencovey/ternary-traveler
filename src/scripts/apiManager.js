const apiManager = {
    get: (searchString) => {
        return fetch(`http://localhost:8088/${searchString}`)
            .then(response => response.json())
    },
    post: (searchString) => {
        return fetch(`http://localhost:8088/${searchString}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
            .then(response => response.json())
    },
    delete: (searchString) => {
        return fetch(`http://localhost:8088/${searchString}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }
}

export default apiManager