const root =  "/WSOA3028A_2615283/"
const menuItems = [
    {name: "Home", href: `${root}index.html`},
    {name: "Portfolio", href: `${root}portfolio/index.html`},
    {name: "Profile", href: `${root}profile/index.html`},
    {name: "Designs", href: `${root}designs/index.html`},
    {name: "Blogs", href: `${root}blogs/index.html`},
    {name: "Essays", href: `${root}essays/index.html`},
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

export function initialize(currentPage) {
    const nav = document.querySelector("header > nav")
    for (let menuItem of menuItems) {
        const a = document.createElement("a")
        if (currentPage != menuItem.name) {
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            nav.appendChild(a)
        }
        else if (currentPage == menuItem.name) {
            a.innerText = menuItem.name
            nav.appendChild(a)
        }
    }
}