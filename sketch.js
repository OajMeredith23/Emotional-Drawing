
const storyStructure = ['pronoun', 'verb', 'at', 'the', 'noun', 'in', 'pronoun', 'noun', 'and', 'verb', 'adjective', '.', 'pronoun', 'verb', 'to', 'the', 'noun', 'and', 'verb', 'on', 'her', 'adjective', 'noun', '.', 'pronoun', 'had', 'adverb', 'adjective', 'adjective', 'place', 'with', 'its', 'adjective', 'adjective', 'noun', '.', 'It', 'was', 'a', 'place', 'that', 'verb', 'pronoun', 'noun', 'to', 'feel', 'adjective', '.']
const wordTypes = ['verb', 'noun', 'adjective', 'place']

const storyContainer = document.querySelector('#story')
const warningContainer = document.querySelector('#warning')
const faceDetectedContainer = document.querySelector('#face-detected')

let storyLength = 0
for (let key in words) {
    storyLength++
}

const storyFinished = `<h1 class="story-finish">Fin.</h1>`

let i = 1;
function createStory(expression, gender, age, noDetectionCount) {
    if (gender === null) {
        gender = "undefined"
    }

    if (noDetectionCount > 5 && noDetectionCount <= 10 && storyContainer.hasChildNodes()) {
        warningContainer.innerHTML = `<h1>Resetting story in...${10 - noDetectionCount} seconds</h1>`
    } else {
        warningContainer.innerHTML = ``
    }

    if (noDetectionCount > 10) {
        storyContainer.innerHTML = ''
        i = 1;
    }

    if (expression === null) {
        faceDetectedContainer.innerHTML = "<h2>No face detected</h2> </br> <p>Make sure your face is in view of the camera</p>"
        // return
    } else {
        faceDetectedContainer.innerHTML = "Face detected – Use your expressions to write"
    }

    if (i <= storyLength) {

        let newWord = ''

        if (words[i]['pronoun']) {

            newWord = words[i][gender]
        } else if (words[i]['fill']) {

            newWord = words[i]['word']

        } else if (words[i]['age']) {
            age ? newWord = `${age} years old, ` : newWord = ``
        } else {
            let randomIndex = Math.floor(Math.random() * words[i][expression].length)
            newWord = words[i][expression][randomIndex]
        }

        storyContainer.innerHTML += `${newWord} `

        if (i === storyLength) {
            document.querySelector('.story-finish').style.opacity = "1"

            let wait = 0
            const resetDelay = 12;
            const reset = setInterval(() => {


                if (wait > 2) {
                    warningContainer.innerHTML = `<h1>Resetting story in...${resetDelay - wait} seconds</h1>`
                }

                console.log(wait)
                if (wait === resetDelay) {
                    storyContainer.innerHTML = ''
                    warningContainer.innerHTML = ``
                    document.querySelector('.story-finish').style.opacity = "0"
                    i = 1;
                    clearInterval(reset)
                }

                wait++
            }, 1000)
        }

        i++
    }
}




