
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
function createStory(expression, noDetectionCount) {

    if (noDetectionCount > 5 && noDetectionCount <= 10 && storyContainer.hasChildNodes()) {
        warningContainer.innerHTML = `<h1>Resetting story in...${10 - noDetectionCount} seconds</h1>`
    } else {
        warningContainer.innerHTML = ``
    }

    if (noDetectionCount > 10) {
        storyContainer.innerHTML = ''
        document.querySelector('.story-finish').style.opacity = "0"
        i = 1;
    }

    if (expression === null) {
        faceDetectedContainer.innerHTML = "No face detected"
        return
    } else {
        faceDetectedContainer.innerHTML = "Face detected"
    }

    if (i <= storyLength) {

        let newWord = ''

        if (words[i]['pronoun']) {
            newWord = words[i]['they']
        } else if (words[i]['fill']) {
            newWord = words[i]['word']
        } else {
            let randomIndex = Math.floor(Math.random() * words[i][expression].length)
            newWord = words[i][expression][randomIndex]
        }

        storyContainer.innerHTML += `${newWord} `

        if (i === storyLength) {
            document.querySelector('.story-finish').style.opacity = "1"
        }

        i++
    }
}

// createStory('happy')




