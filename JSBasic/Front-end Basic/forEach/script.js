

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// names.forEach(function(name, index, array) {
//     console.log(name)
    // console.log(index)
    // console.log(array)
// })


// const numbers = [10, 5, 18, 21, 5, 7]
// numbers.forEach(function (number) {
//     console.log(number ** 2)
// })

// const names = ["Artem", "Nina", "Olga", "Vlad"]
// const addElem = document.querySelector(".item")
// names.forEach(function (name) {
//     addElem.insertAdjacentHTML("afterbegin", `<p>${name}</p>`) 
// })

// const title = document.querySelector("h1")
// title.innerText += "Hiii"

const products = [
    {
        name: "Молоко",
        price: 500
    },
    {
        name: "Гречка",
        price: 600
    },
    {
        name: "Масло",
        price: 850
    },
]
const addElem = document.querySelector(".product")
products.forEach(function(product) {
    addElem.innerHTML += `<div class ="product">
                            <h5>${product.name}</h5> 
                            <p>${product.price}</p>
                          </div>`
})