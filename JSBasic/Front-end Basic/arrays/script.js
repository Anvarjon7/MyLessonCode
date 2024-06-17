// Массивы и циклы

// ==============================================================================================================

// const number =100
// const arr = []
// const names = ["Arsen","Artem","Anwar","Vlad"]
// const array = ["Arsen",["Hello", "World"], number]
// // console.log(array, names)

// console.log(array[1][0])



// push() - метод добавления элемента в конец массива
// const numbers = [1, 2, 3, 4]
// numbers.push(5,6,7,8)
// console.log(numbers)

// // pop() - удаляет элемент с конца массива
// const names = ["Vlad", "Iren", "Dmitrii"]
// const newLenght = names.push("Arsen")
// console.log(newLenght)

// const numbers = []
// const num1 = +prompt("Введите первое число")
// const num2 = +prompt("Введите второе число")
// numbers.push(num1,num2)
// console.log(numbers)

// ===========================================================================================================================================================================================================================================

// Цикл

// const names = ["Vlad", "Iren", "Dmitrii"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// for(let i = 0; i < 3; i++) {
//     console.log(names[i])
// }

// for(let i = 0; i < 100; i++) {
//     console.log(i)
// }
// for (let i = 0; i < array.length;i++) {
//     const element = array [i];
    
// }

// const names = ["Arsen", "Vlad", "Olga", "Irina"]

// for (let i = 0; i < names.length; i++) {
//     console.log(`Helloooo , ${names[i]}`)
// }

// const numbers = [-100, 0, 50, -20, 0, 15, 25, -40]


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       console.log(numbers[i]);
//     }
//   }
  const numbers = [10, 17 , 11 , 16 , 27 , 28 , 67, 89, 68]
  let sumOdd = 0
  let sumEven = 0
  for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        sumOdd = sumOdd + numbers[i]
    }else {
        sumEven = sumEven + numbers[i]
    }
}
const sumFinal = sumEven - sumOdd
    if(sumEven > sumOdd) {
        sumEven - sumOdd
    }else (
        sumOdd - sumEven)
    console.log(sumFinal)
