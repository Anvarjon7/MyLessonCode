
// const chocolate = {
//     name: "Milka",
//     Owner:	"Mondelez International",
//     country: "Switzerland",
//     introduced: 1901,
//     costs: 15
// }
// console.log(`В магазине нужно купить chocolate.${chocolate.name}, его цена ${chocolate.costs}`)

// const products = [
//     {
//         name: "молоко",
//         price: 500
//     },
//     {
//         name: "масло",
//         price: 400
//     },
//     {
//         name: "гречка",
//         price: 700
//     },
// ]
// let sum = 0
// for(let i = 0; i < products.length; i++) {

//     sum = sum + products[i].price
// }
//     console.log(sum)

// const products = [
//     {
//         name: "молоко",
//         price: 500
//     },
//     {
//         name: "масло",
//         price: 400
//     },
//     {
//         name: "гречка",
//         price: 700
//     },
// ]

// for( let i = 0; i < products.length; i++) {
//     if(products[i].price > 500) {
//         console.log(products[i].name)
// }

// }


// for(let item of products) {
//     if (item.price >= 500) {
//         console.log(`${item.name}, price: ${item.price}`)
//     }
// }


const products = [
    {
        name: "ACER",
        model: "G500",
        price: 50000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "G200",
        price: 45000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "T237",
        price: 60000,
        category: "TV"
    },
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    },
    {
        name: "Lenovo",
        model: "T700",
        price: 65000,
        category: "TV"
    }
] 

    // console.log(`Название товарв ${products[i].name}, его скидка ${products[i].price - (products[i].price * 0.1)}`)

//     const {name, model, price, category} = products[i]
//     console.log(` Название - ${name}, Модель - ${model}, Цена ${price}, Категория ${category}`)
// }
const productsTv = []
for (let i = 0; i < products.length; i++) {
    const {name, model, price, category} = products[i]
    if (category == "TV") {
        console.log(` Название - ${name}, Модель - ${model}, Цена ${price}`)

        productsTv.push({name,price,model})
        console.log(productsTv)
    }
}

