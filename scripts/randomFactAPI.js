
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener ("click", function (event) {
        if (!event.target.matches("#factButton")) return
    
       fetch ("https://uselessfacts.jsph.pl/api/v2/facts/random")
            .then((response) => response.json())
            .then((data) => renderFact(data))
            .catch(() => renderError())
    })
})

function renderFact(data) {
    const fact = document.getElementById("fact")
    const error = document.getElementById("error")

    error.innerHTML = ""
    fact.innerHTML = data.text
}

function renderError() {
    const error = document.getElementById("error")
    error.innerHTML = "Oops... Please try again Later!"
}