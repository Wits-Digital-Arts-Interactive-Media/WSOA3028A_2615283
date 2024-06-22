const root =  "/WSOA3028A_2615283/"

const portfolioItems = [
    {id: "1", name: "Weight Game Assignment", image: "images-in-portfolio/Weight-Small.png", imageDesc: "A stickman with a balloon tied to his back on a dark grey background.", imageTitle: "Weight Game", href: `${root}portfolio/item1.html`},
    {id: "2", name: "Multiplayer Clone Assignment", image: "images-in-portfolio/Multiplayer-Small.png", imageDesc: "Two squares with cute faces tied together with a rope, the one in the top area and another in the bottom. The squares are red and blue.", imageTitle: "Multiplayer Game", href: `${root}portfolio/item2.html`},
    {id: "3", name: "Platformer Feedback Simulator", image: "images-in-portfolio/Feedback-Small.png", imageDesc: "A pixel art character holding a gun, looking to the side with a dead look on their face.", imageTitle: "Platformer Feedback Simulator", href: `${root}portfolio/item3.html`},
    {id: "4", name: "A Day in the Life of a Varsity Student", image: "images-in-portfolio/Text-Based-Small.png", imageDesc: "A cute illustration of a character with big eyes, smiling. they are wearing a hoody.", imageTitle: "Text-Based Adventure", href: `${root}portfolio/item4.html`},
    {id: "5", name: "One Page Prose", href: `${root}portfolio/item5.html`},
    {id: "6", name: "Micro Fiction", href: `${root}portfolio/item6.html`},
    {id: "7", name: "Character Piece", href: `${root}portfolio/item7.html`},
    {id: "8", name: "Short Story", href: `${root}portfolio/item8.html`},
    {id: "9", name: "First Person Twine Piece", href: `${root}portfolio/item9.html`},
    {id: "10", name: "Third Person Twine Piece", href: `${root}portfolio/item10.html`},
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

        if (portfolioItem.id == "1" || portfolioItem.id == "2" || portfolioItem.id == "3" || portfolioItem.id == "4") {
            const image = document.createElement("img")
            image.setAttribute("id", "portfolioSmallImage")
            image.setAttribute("src", portfolioItem.image)
            image.setAttribute("alt", portfolioItem.imageDesc)
            image.setAttribute("title", portfolioItem.imageTitle)
            article.appendChild(image)

            const heading = document.createElement("p")
            heading.setAttribute("class", "entry-title")
            heading.setAttribute("id", "portfolioTitle")
            heading.innerText = portfolioItem.name
            article.appendChild(heading)
        } else {
            const heading = document.createElement("p")
            heading.setAttribute("class", "entry-title")
            heading.setAttribute("id", "portfolioTitle")
            heading.innerText = portfolioItem.name
            article.appendChild(heading)
        }
    }
}

