const root =  "/WSOA3028A_2615283/"

const essays = [
    {name: "Essay-1", href: `${root}essays/essay1.html`},
]

export function recentEssay() {
    const name = document.getElementById("Essay-Heading")
    const a = document.createElement ("a")
    a.innerText = essays[essays.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem2').addEventListener('click', function() {
    location.href = essays[essays.length - 1].href
}, false)