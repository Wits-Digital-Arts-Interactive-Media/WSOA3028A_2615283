const root =  "/WSOA3028A_2615283/"

const designLogs = [
    {name: "Design Log 1: Goal Alignment, Information Structure and User Flow.", href: `${root}designs/log1.html`},
    {name: "Design Log 2: Inspirations, Visual Aesthetics and Visual Elements.", href: `${root}designs/log2.html`},
    {name: "Design Log 3: Initial Wireframes and Colour Blockouts.", href: `${root}designs/log3.html`},
    {name: "Design Log 4: Interface Elements and Style Guide.", href: `${root}designs/log4.html`},
    {name: "Design Log 5: Current Wireframes and Colour Blockouts.", href: `${root}designs/log5.html`},
    {name: "Design Log 6: Implementation Documentation.", href: `${root}designs/log6.html`},
    {name: "Design Log 7: Implementation Documentation.", href: `${root}designs/log7.html`},
]

export function recentLog() {
    const name = document.getElementById("Design-Log-Heading")
    const a = document.createElement ("a")
    a.innerText = designLogs[designLogs.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem2').addEventListener('click', function() {
    location.href = designLogs[designLogs.length - 1].href
}, false)