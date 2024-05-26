const root =  "/WSOA3028A_2615283/"

const portfolioItems = [
    {id: "1", name: "Weight Game Assignment", href: `${root}portfolio/item1.html`},
    {id: "2", name: "Multiplayer Clone Assignment", href: `${root}portfolio/item2.html`},
    {id: "3", name: "Platformer Feedback Simulator", href: `${root}portfolio/item3.html`},
    {id: "4", name: "A Day in the Life of a Varsity Student", href: `${root}portfolio/item4.html`},
]

export function portfolioIndex() {
    const place = document.getElementById("portfolioItems")
    for (let portfolioItem of portfolioItems) {
        const a = document.createElement("a")
        a.innerText = portfolioItem.name
        a.setAttribute("href", portfolioItem.href)
        a.setAttribute("id", "portfolioItem" + portfolioItem.id)
        a.setAttribute("class", "portfolioItem")
        place.appendChild(a)
    }
}