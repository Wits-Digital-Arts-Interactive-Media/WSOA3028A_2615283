const root =  "/WSOA3028A_2615283/"

const items = [
    {name: "Weight Game Assignment", href: `${root}portfolio/item1.html`},
    {name: "Multiplayer Clone Assignment", href: `${root}portfolio/item2.html`},
    {name: "Platformer Feedback Simulator", href: `${root}portfolio/item3.html`},
    {name: "A Day in the Life of a Varsity Student", href: `${root}portfolio/item4.html`},
]

export function recentItem() {
    const name = document.getElementById("Portfolio-Item-Heading")
    const a = document.createElement ("a")
    a.innerText = items[items.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem1').addEventListener('click', function() {
    location.href = items[items.length - 1].href
}, false)