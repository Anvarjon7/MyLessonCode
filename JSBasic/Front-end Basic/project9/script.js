// const clickCard = document.querySelector(".item-1")
// const texts1 = document.querySelectorAll(".item-1 p")
// clickCard.addEventListener("click", function(){
//     texts1.forEach(function(text) {
//         text.classList.toggle("hidden")
//     })
// })

const cards = document.querySelectorAll(".item")
cards.forEach(function(card) {
card.addEventListener("click", function(){
        const texts = card.querySelectorAll("p")
        texts.forEach(function(text) {
            text.classList.toggle("hidden")
        })
    })
})