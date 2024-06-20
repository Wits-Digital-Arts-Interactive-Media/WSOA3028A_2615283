const root =  "/WSOA3028A_2615283/"

const items = [
    {name: "Weight Game", href: `${root}portfolio/item1.html`},
    {name: "Multiplayer Clone", href: `${root}portfolio/item2.html`},
    {name: "PLatformer Feedback", href: `${root}portfolio/item3.html`},
    {name: "Text-Based Adventure", href: `${root}portfolio/item4.html`},
]

export function recentItem() {
    const name = document.getElementById("Portfolio-Item-Heading")
    const a = document.createElement ("a")
    a.innerText = items[items.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem3').addEventListener('click', function() {
    location.href = items[items.length - 1].href
}, false)