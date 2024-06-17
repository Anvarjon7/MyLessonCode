// const title = document.createElement("h1")
// title.innerText = "Assalomu alekum"
// const header = document.querySelector("header")
// header.append(title)

// const paragraph = document.createElement("p")
// paragraph.innerText = "helloooooo"
// const divElem = document.querySelector(".item")
// divElem.append(paragraph)

// const item = document.querySelector(".item")
// for (let i = 0; i < 20; i++) {
//     item.insertAdjacentHTML("afterbegin", `<p class = 'paragraph'>${i}</p>`)

// }


const names = ["Arsen", "Artem", "Vlad", "Alina", "Iren"]
const item = document.querySelector(".item")
for ( let i = 0; i < names.length; i++) {
    item.insertAdjacentHTML("afterbegin", `<p>${names[i]}</p>`)
}
