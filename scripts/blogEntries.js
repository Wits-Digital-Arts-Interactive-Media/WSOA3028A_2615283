const root =  "/WSOA3028A_2615283/"

const blogs = [
    {id: "entry1", name: "Blog 1", href: `${root}blogs/blog1.html`, summary: "In this week's blog post I reflect on how I found setting up my Github, I reflect on As We May Think by Vannevar Bush (1945), I discuss some interesting things I found on the history of the web and I talk about some of my goals for this course."},
    {id: "entry2", name: "Blog 2", href: `${root}blogs/blog2.html`, summary: "This week I reflect on the reading by Multhrop (1991), and I go into more depth about my file structure, URL scheme and other design aspects of the website."},
    {id: "entry3", name: "Blog 3", href: `${root}blogs/blog3.html`, summary: "In this week's blog post I reflect on my user alignment and do some more thinking on my folder structure."},
    {id: "entry4", name: "Blog 4", href: `${root}blogs/blog4.html`, summary: "This week I focus on my goal alignment and some more of the design features of my website."},
    {id: "entry5", name: "Blog 5", href: `${root}blogs/blog5.html`, summary: "This week I had a look at some South African school websites with their pros and cons, in order to decide which website I will be using for my Essay 1."},
    {id: "entry6", name: "Blog 6", href: `${root}blogs/blog6.html`, summary: "In this post I explore why there are not enough women in tech jobs and what we can do to improve femal representation in tech fields."},
    {id: "entry7", name: "Blog 7", href: `${root}blogs/blog7.html`, summary: "This week I reflect on the spread of internet access around the world and what that measn for me as a South African developer."},
    {id: "entry8", name: "Blog 8", href: `${root}blogs/blog8.html`, summary: "In this post I do a close reading of the article 'Making A feminist Internet In Africa: Why The Internet Needs African Feminists and Feminisms' by Sheena Magenya(2020)"},
    {id: "entry9", name: "Blog 9", href: `${root}blogs/blog9.html`, summary: "In this post I do a little bit of reflection on my development process up until now, and I reflect on 'Algorithmic Colonization in Africa' by Abeba Birhane."},
    {id: "entry10", name: "Blog 10", href: `${root}blogs/blog10.html`, summary: ""},
    {id: "entry11", name: "Blog 11", href: `${root}blogs/blog11.html`, summary: ""},
]

export function blogsIndex() {
    const place = document.getElementById("blogLinks")
    for (let blog of blogs) {
        const article = document.createElement("article")
        article.setAttribute("class", "h-entry")
        article.setAttribute("id", blog.id)
        place.appendChild(article)

        article.addEventListener('click', function() {
            location.href = blog.href
        }, false)

        const heading = document.createElement("h2")
        heading.setAttribute("class", "entry-title")
        heading.innerText = blog.name
        article.appendChild(heading)

        const summary = document.createElement("p")
        summary.setAttribute("class", "entry-summary")
        summary.innerText = blog.summary
        article.appendChild(summary)
    }
}

