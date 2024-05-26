const root =  "/WSOA3028A_2615283/"
const menuItems = [    
    {name: "HOME", href: `${root}index.html`},
    {name: "PORTFOLIO", href: `${root}portfolio/index.html`},    
    {name: "PROFILE", href: `${root}profile/index.html`},
    {name: "DESIGNS", href: `${root}designs/index.html`},
    {name: "BLOGS", href: `${root}blogs/index.html`},
    {name: "ESSAYS", href: `${root}essays/index.html`},
]

const blogPostsAndEssays = [
    {name: "Dev-Log"},
    {name: "Blog-1"},
    {name: "Blog-2"},
    {name: "Blog-3"},
    {name: "Blog-4"},
    {name: "Blog-5"},
    {name: "Blog-6"},
    {name: "Blog-7"},
    {name: "Blog-8"},
    {name: "Blog-9"},
    {name: "Essay-1"},
    {name: "Design-Log-1"},
    {name: "Design-Log-2"},
    {name: "Design-Log-3"},
    {name: "Design-Log-4"},
    {name: "Design-Log-5"},
]


export function smallMenu(currentPage) {
    const nav = document.getElementById("offScreenMenu")
    for (let menuItem of menuItems) {
        const a = document.createElement("a")
        if (currentPage != menuItem.name) {
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            a.setAttribute("class", "smallMenuItem")
            a.setAttribute("id", "other")
            nav.appendChild(a)
        }
        else if (currentPage == menuItem.name) {
            a.innerText = menuItem.name
            a.setAttribute("class", "smallMenuItem")
            a.setAttribute("id", "current")
            nav.appendChild(a)
        }
    }
}