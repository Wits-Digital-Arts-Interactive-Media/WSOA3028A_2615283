const root =  "/WSOA3028A_2615283/"

const pages = [
    {name: "Home", href: `${root}index.html`}
]

const blogs = [
    {name: "Blog-Post-1", href: `${root}blog1.html`},
    {name: "Blog-Post-2", href: `${root}blog2.html`},
    {name: "Blog-Post-3", href: `${root}blog3.html`},
    {name: "Blog-Post-4", href: `${root}blog4.html`},
    {name: "Blog-Post-5", href: `${root}blog5.html`},
    {name: "Blog-Post-6", href: `${root}blog6.html`},
    {name: "Blog-Post-7", href: `${root}blog7.html`},
    {name: "Blog-Post-8", href: `${root}blog8.html`},
]

export function recentPosts() {
    const name = document.querySelector("main > h3")
    const a = document.createElement ("a")
    a.innerText = blogs[blogs.length - 1].name
    a.setAttribute("href", blogs[blogs.length - 1].href)      
    name.appendChild(a)    
}

