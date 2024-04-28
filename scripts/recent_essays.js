const root =  "/WSOA3028A_2615283/"

const essays = [
    {name: "Essay-1", href: `${root}essays/essay1.html`},
]

export function recentEssay() {
    const name = document.getElementById("Essay-Heading")
    const a = document.createElement ("a")
    a.innerText = essays[essays.length - 1].name
    a.setAttribute("href", essays[essays.length - 1].href)      
    name.appendChild(a)    
}