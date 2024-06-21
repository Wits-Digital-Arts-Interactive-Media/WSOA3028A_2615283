const root =  "/WSOA3028A_2615283/"

const portfolioItems = [
    {id: "1", name: "Weight Game Assignment", image: "images-in-portfolio/Weight-Small.png", imageDesc: "", imageTitle: "", href: `${root}portfolio/item1.html`},
    {id: "2", name: "Multiplayer Clone Assignment", image: "images-in-portfolio/Multiplayer-Small.png", imageDesc: "", imageTitle: "", href: `${root}portfolio/item2.html`},
    {id: "3", name: "Platformer Feedback Simulator", image: "images-in-portfolio/Feedback-Small.png", imageDesc: "", imageTitle: "", href: `${root}portfolio/item3.html`},
    {id: "4", name: "A Day in the Life of a Varsity Student", image: "images-in-portfolio/Text-Based-Small.png", imageDesc: "", imageTitle: "", href: `${root}portfolio/item4.html`},
]

export function portfolioIndex() {
    const place = document.getElementById("portfolioItems")
    for (let portfolioItem of portfolioItems) {
        const article = document.createElement("article")
        article.setAttribute("id", "portfolioItem" + portfolioItem.id)
        article.setAttribute("class", "portfolioItem")
        place.appendChild(article)

        article.addEventListener('click', function() {
            location.href = portfolioItem.href
        }, false)

        const image = document.createElement("img")
        image.setAttribute("id", "portfolioSmallImage")
        image.setAttribute("src", portfolioItem.image)
        image.setAttribute("alt", portfolioItem.imageDesc)
        image.setAttribute("alt", portfolioItem.imageTitle)
        article.appendChild(image)

        const heading = document.createElement("p")
        heading.setAttribute("class", "entry-title")
        heading.innerText = portfolioItem.name
        article.appendChild(heading)
    }
}