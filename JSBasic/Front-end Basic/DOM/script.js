// const title = document.querySelector("h1")
// console.log(title.innerText)
// const myTitle = document.querySelector(".my-title")
// console.log(myTitle.innerText)
// myTitle.innerText = "This is my title"

// const titles = document.querySelectorAll("h1")
// console.log(titles)
// titles[0].innerText = "Cheeeeeese"

// for(let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Cheeeesee"
// }

// const text = document.querySelector("p")
// text.innerText = "Привет"

// const texts = document.querySelectorAll("p")
// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Привет"
// }

// const text = document.querySelector(".item p")
// text.innerText = "Привет"

// const img = document.querySelector("img")
// const source = img.getAttribute("src")
// console.log(source)
// img.setAttribute("src", "../project4/img.5 - Copy.jpeg") 

// const item = document.querySelector(".item")
// item.insertAdjacentHTML("afterend", "<p>Hello World<p>")

// const paragraph = document.querySelector(".item")
// for (let i = 0; i < 20; i++) {
//     const paragraph = document.querySelector("p")
//     paragraph.innerText = i 
//     paragraph.append(paragraph)
// }

// const names = ["Arsen", "Artem", "Vlad", "Alina", "Iren"]
// const item = document.querySelector(".item")
// for(let i = 0; i < names.length; i++) {
// item.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`)

// }
// for(let i = 0; i = names.length; i++ ) {
//     const p = document.createElement("p")
//     p.innerText = names[i]
//     item.append(p)

// const text = "Hello World"
// const item = document.querySelector("header")
// item.insertAdjacentHTML("afterbegin", `<h1>${text}<h1>`)

// const products = ["Milka", "Alpen Gold", "Snickers", "Mars", "M&M"]
// const array = document.querySelector("header")
// for(let i = 0; i < products.length; i++) {
//     array.insertAdjacentHTML("afterbegin", `<p>${products[i]}</p>`)
// }
// Алгоритм добавления тега с помощью insertAdjacentHTML


const products = [
    {
        name: "Молоко",
        price:700
    },
    {
        name: "Гречка",
        price: 600
    },
    {
        name: "Масло",
        price: 600
    },
]
const item = document.querySelector(".item")
for(let i = 0; i < products.length; i++) {
    item.insertAdjacentHTML("beforeend",`<div>
                                            <h5>${products[i].name}</h5>
                                            <p>${products[i].price}</p>
                                          </div>`)
}


