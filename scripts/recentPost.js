const root =  "/WSOA3028A_2615283/"

const blogs = [
    {name: "Blog 1: Setting up GitHub and reflecting on 'As We May Think' by Vannevar Bush (1945).", href: `${root}blogs/blog1.html`},
    {name: "Blog 2: File Structure, URL scheme, other Design decisions and reflecting on Multhrop (1991).", href: `${root}blogs/blog2.html`},
    {name: "Blog 3: User Alignment and further File Structure reflections.", href: `${root}blogs/blog3.html`},
    {name: "Blog 4: Goal Alignment ane more design features.", href: `${root}blogs/blog4.html`},
    {name: "Blog 5: South African School websites pros and cons (Essay 1 planning).", href: `${root}blogs/blog5.html`},
    {name: "Blog 6: The lack of women in tech.", href: `${root}blogs/blog6.html`},
    {name: "Blog 7: The spread of the internet.", href: `${root}blogs/blog7.html`},
    {name: "Blog 8: Close Reading on 'Making A feminist Internet In Africa: Why The Internet Needs African Feminists and Feminisms' by Sheena Magenya(2020)", href: `${root}blogs/blog8.html`},
    {name: "Blog 9: A reflection on my development and 'Algorithmic Colonization in Africa' by Abeba Birhane.", href: `${root}blogs/blog9.html`},
    {name: "Blog 10: A reflection on Development and the benefits and challenges of responsive design.", href: `${root}blogs/blog10.html`},
    {name: "Blog 11: The ethics of the internet.", href: `${root}blogs/blog11.html`},
]

export function recentPosts() {
    const name = document.getElementById("Blog-Heading")
    const a = document.createElement ("a")
    a.innerText = blogs[blogs.length - 1].name    
    name.appendChild(a)    
}

document.getElementById('activityItem3').addEventListener('click', function() {
    location.href = blogs[blogs.length - 1].href
}, false)