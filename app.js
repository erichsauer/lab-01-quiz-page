// import functions and grab DOM elements
import { answerCheck } from './/utils.js'

const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-results-div');
// initialize state
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('So you wanna take a quiz about raccoons...');
    
    const confirmation = confirm('Are you ready to PROVE that you learned a lot about raccoons?');
    
    if(!confirmation) return;
    
    const firstName = prompt("What's your first name?")
    const lastName = prompt("What's your last name?")
    const ssn = Number(prompt("What's your Social Security Number?", "0"))

    if (ssn === 0) {
        alert("Ha! Well played. Let's continue.")
    } else { alert("NEVER give your SSN to a pop-up prompt from the mid-90s! Let's continue.")
    }
        
    let correctAnswers = 0

    const answerOne = prompt("Do raccoons have a dog's stomach and a possum's heart?", 'yes/no')

    if (answerCheck(answerOne)) correctAnswers++;

    console.log(answerOne, correctAnswers)
    
    const answerTwo = prompt("Is it scientifically speculated that raccoons are in fact an assemblage of very condensed squirrels?")
    
    if (answerCheck(answerTwo)) correctAnswers++;

    console.log(answerTwo, correctAnswers)
    
    const answerThree = prompt('Are raccoons the child of a hamster and a witch?')
    
    if (!answerCheck(answerThree)) correctAnswers++;
    
    console.log(firstName, lastName, correctAnswers);
    
})
// - respond to button click with
// - tracks number of correct answers
// - displays score with name