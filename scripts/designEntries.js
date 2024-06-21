const root =  "/WSOA3028A_2615283/"

const designs = [
    {id: "entry1", 
    name: "Design Log 1: Goal Alignment, Information Structure and User Flow.", 
    href: `${root}designs/log1.html`, 
    summary: "In this log I speak about my goal alignment, my information structure and my user flow."},
    {id: "entry2", 
    name: "Design Log 2: Inspirations, Visual Aesthetics and Visual Elements.", 
    href: `${root}designs/log2.html`, 
    summary: "In this log I Speak a little on some of the websites that inspires me, and here are some notes on my visual aesthetics and some possible visual design elements."},
    {id: "entry3", 
    name: "Design Log 3: Initial Wireframes and Colour Blockouts.", 
    href: `${root}designs/log3.html`, 
    summary: "My initial wireframes and colour blockouts can be found here."},
    {id: "entry4", 
    name: "Design Log 4: Interface Elements and Style Guide.", 
    href: `${root}designs/log4.html`, 
    summary: "Here I talk about my interface elements and my style guide can be found here."},
    {id: "entry5", 
    name: "Design Log 5: Current Wireframes and Colour Blockouts.", 
    href: `${root}designs/log5.html`, 
    summary: "Here are my current design sketches in the form of wireframes and colour blockouts."},
    {id: "entry6", 
    name: "Design Log 6: Implementation Documentation.", 
    href: `${root}designs/log6.html`, 
    summary: "Implementation documentation for my HTML, JavaScript and CSS."},
]

export function designsIndex() {
    const place = document.getElementById("designLinks")
    for (let design of designs) {
        const article = document.createElement("article")
        article.setAttribute("class", "h-entry")
        article.setAttribute("id", design.id)
        place.appendChild(article);

        article.addEventListener('click', function() {
            location.href = design.href
        }, false)

        const heading = document.createElement("h2")
        heading.setAttribute("class", "entry-title")
        heading.innerText = design.name
        article.appendChild(heading)

        const summary = document.createElement("p")
        summary.setAttribute("class", "entry-summary")
        summary.innerText = design.summary
        article.appendChild(summary)
    }
}