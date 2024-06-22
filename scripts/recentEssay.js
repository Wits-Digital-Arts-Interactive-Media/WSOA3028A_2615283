const root =  "/WSOA3028A_2615283/"

const essays = [
    {name: "Essay 1: UI & UX Analysis.", href: `${root}essays/essay1.html`},
    {name: "Essay 2: Digital Colonialism.", href: `${root}essays/essay2.html`},
]

export function recentEssay() {
    const name = document.getElementById("Essay-Heading")
    const a = document.createElement ("a")
    a.innerText = essays[essays.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem4').addEventListener('click', function() {
    location.href = essays[essays.length - 1].href
}, false)