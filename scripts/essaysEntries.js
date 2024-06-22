const root =  "/WSOA3028A_2615283/"

const essays = [
    {id: "entry1",
    otherId: "essay1",
    name: "Essay 1: UI & UX Analysis of Laerskool Oranjegloed Primary’s Website.",
    href: `${root}essays/essay1.html`
    },
    {id: "entry2",
    otherId: "essay2",
    name: "Essay 2: Digital Colonialism.",
    href: `${root}essays/essay2.html`
    },
]

export function essayIndex () {
    const place = document.getElementById("essayLinks")
    for (let essay of essays) {
        const article = document.createElement("article")
        article.setAttribute("class", "h-entry")
        article.setAttribute("id", essay.id)
        place.appendChild(article)

        article.addEventListener('click', function(){
            location.href = essay.href
        }, false)

        const heading = document.createElement("h2")
        heading.setAttribute("class", "entry-title")
        heading.setAttribute("id", essay.otherId)
        heading.innerText = essay.name
        article.appendChild(heading)
    }
}