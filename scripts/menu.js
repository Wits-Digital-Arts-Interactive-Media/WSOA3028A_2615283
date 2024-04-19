const menuItems = [
    {name: "Home", href: "index.html"},
    {name: "Portfolio", href: "/portfolio/portfolio.html"},
    {name: "Profile", href: "/profile/profile.html"},
    {name: "Designs", href: "/designs/design.html"},
    {name: "Blogs", href: "blogs/blogs.html"},
    {name: "Essays", href: "essays/essays.html"},
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