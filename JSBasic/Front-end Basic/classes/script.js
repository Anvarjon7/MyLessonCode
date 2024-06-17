

// const title = document.querySelector("h1")
// // console.log(title.classList)

// title.classList.add("item")

// title.classList.remove("my_title")

const todo = ["Сварить суп", "Сделать ДЗ", "Убраться дома", "Поваляться"]
const container = document.querySelector(".todo-list")

todo.forEach(function(text) {
    container.innerHTML += `
                <div class="todo-item">
                    <h5>
                        ${text}
                    </h5>
                </div>
    `
})

const todoCards = document.querySelectorAll(".todo-item") // Нахожу все карточки
todoCards.forEach(function(todoCard) {
    todoCard.addEventListener("click", function(event) {
        // event.target.classList.add("active")
        todoCard.classList.toggle("active") // 
    })
    
const button = document.querySelector(".all-btn")
button.addEventListener("click", function(e){
    todoCards.forEach( function(todoCard) {
        todoCard.classList.add("active")
        })
    })
    
})

const cancelBtn = document.querySelector(".cancel-btn")
cancelBtn.addEventListener("click", function(){
    todoCards.forEach(function(todoCard){
        todoCard.classList.remove("active")
    })
})