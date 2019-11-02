
const storyStructure = ['pronoun', 'verb', 'at', 'the', 'noun', 'in', 'pronoun', 'noun', 'and', 'verb', 'adjective', '.', 'pronoun', 'verb', 'to', 'the', 'noun', 'and', 'verb', 'on', 'her', 'adjective', 'noun', '.', 'pronoun', 'had', 'adverb', 'adjective', 'adjective', 'place', 'with', 'its', 'adjective', 'adjective', 'noun', '.', 'It', 'was', 'a', 'place', 'that', 'verb', 'pronoun', 'noun', 'to', 'feel', 'adjective', '.']
const wordTypes = ['verb', 'noun', 'adjective', 'place']

const storyContainer = document.querySelector('#story')


let i = 0;
function createStory(expression) {

    if (i <= storyStructure.length - 1) {
        let newWord = ''

        // if the wordTypes array includes the type of words we're currently on then...
        if (wordTypes.includes(storyStructure[i])) {

            let len = words[storyStructure[i]][expression].length;
            // get a random word from the words object within: 
            // 1. the type of word we want (Adjective, noun...)
            // 2. matches the expression the user has just shown
            newWord = words[storyStructure[i]][expression][Math.floor(Math.random() * len)];
        } else if (storyStructure[i] === "pronoun") {
            newWord = "She" // This will (hopefully) be the users gender in the future
        } else {
            newWord = storyStructure[i]
        }

        storyContainer.innerHTML += `${newWord} `
        i++
    }

}

    // if (words[storyStructure[i]][expression] === undefined) {
    //     console.log("err")
    //     newWord = storyStructure[i]
    //     storyContainer.innerHTML += `${newWord} `
    // } else {
    //     let len = words[storyStructure[i]][expression].length;
    //     newWord = words[storyStructure[i]][expression][Math.floor(Math.random() * len)];
    // }







    // i++
    // console.log(words[storyStructure[i]][expression][Math.floor(Math.random() * len)])
    // for (let key in words) {

    //     //     newWord = words[storyStructure[10]][expression][Math.floor(Math.random() * len)];

    //     //     // console.log(newWord)
    //     //     // if (key === storyStructure[i]) {
    //     //     // }
    // }


    // for (let key in words) {
    //     // console.log(key)
    //     if (key === expression) {
    //         console.log(words.adjectives.happy)
    //         newWord = words.adjectives[key][Math.floor(Math.random() * words.adjectives[key].length)]
    //         // newWord = storyStructure[i]
    //         console.log(newWord)
    //     }
    // // }

    // storyContainer.innerHTML += `${newWord} `
    // 4++

    // }
// }
