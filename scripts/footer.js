const footerItems = [
    {id: "1", name: "GitHub", href: "https://github.com/NightLocke15?tab=repositories"},
    {id: "2", name: "LinkedIn", href: "https://www.linkedin.com/in/christine-holt-8821252b6/"},
    {id: "3", name: "itch.io", href: "https://2615283.itch.io/"}
]

export function footer() {
    const nav = document.querySelector("footer > div")
    for (let footerItem of footerItems) {
        const a = document.createElement("a")
        a.innerText = footerItem.name
        a.setAttribute("href", footerItem.href)
        a.setAttribute("class", "footerItem")
        a.setAttribute("id", "link")
        a.setAttribute("target", "_blank")
        nav.appendChild(a)
    }
}
