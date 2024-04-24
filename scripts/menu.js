const root = "/WSOA3028A_2024"

const menuItems = [
    {name: "Home", href: `${root}/index.html`},
    {name: "Portfolio", href: `${root}/portfolio/portfolio.html`},
    {name: "Profile", href: `${root}/profile/profile.html`},
    {name: "Designs", href: `${root}/designs/design.html`},
    {name: "Blogs", href: `${root}/blogs/blogs.html`},
    {name: "Essays", href: `${root}/essays/essays.html`},
]

export function Initialize(currentPage) {
    const nav = document.querySelector ("header > nav")
    const ul = document.createElement ("ul")
    for (let menuItem of menuItems) {
        const li = document.createElement ("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement ("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        }
        else if (currentPage == menuItem.name){
            li.innerText = menuItem.name
        }       
        ul.appendChild(li)        
    }
    nav.appendChild(ul)    
}
console.log("hi")