const exp = 'happy'

// for (let key in words.adjectives) {
//     console.log(key)
//     if (key === exp) {
//         console.log(words.adjectives[key][0])
//     }
// }

// console.log(words.adjectives.happy.length)

let newWord = ''

for (let key in words.adjectives) {
    if (key === exp) {
        newWord = words.adjectives[key][Math.floor(Math.random() * words.adjectives[key].length)]
    }
}
// let newWord = words.adjectives.expression[Math.floor(Math.random() * words.adjectives.expression.length)]
// story += newWord
console.log(newWord)

const storyContainer = document.querySelector('#story')
storyContainer.innerHTML += `${newWord} `

// console.log(storyContainer)
function createStory(expression) {


    let newWord = ''

    for (let key in words.adjectives) {
        if (key === expression) {
            newWord = words.adjectives[key][Math.floor(Math.random() * words.adjectives[key].length)]
        }
    }
    console.log(newWord)

    storyContainer.innerHTML += `${newWord} `
}
