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
    
    
    let firstName = prompt("What's your first name?")
    const lastName = prompt("What's your last name?")
    
    if (firstName === '') firstName = 'friend'

    prompt("What's your Social Security Number?", "0")
    alert("NEVER give your SSN to a mid-90s-era pop-up prompt! Let's continue.")
        
    let correctAnswers = 0

    const answerOne = prompt("Do raccoons have a dog's stomach and a possum's heart?", 'yes/no')

    if (answerCheck(answerOne)) correctAnswers++;
    
    const answerTwo = prompt("Is it scientifically speculated that raccoons are in fact an assemblage of very condensed squirrels?", 'yes/no')
    
    if (answerCheck(answerTwo)) correctAnswers++;
    
    const answerThree = prompt('Are raccoons the child of a hamster and a witch?', 'yes/no')

    quizButton.style.display = 'none'
    quizResult.style.display = 'block'
    
    if (!answerCheck(answerThree)) correctAnswers++;
    
    const yourGrade = correctAnswers / 3 * 100
    const yourGradeRounded = Math.round(yourGrade)

if (correctAnswers > 1) {
    quizResult.textContent = `Congratulations, ${firstName} ${lastName}! You scored ${correctAnswers} out of 3! That's ${yourGradeRounded}%!`
} else {
    quizResult.textContent = `Good grief, ${firstName} ${lastName}! You scored ${correctAnswers} out of 3! You need to study up on raccoon facts!`

    quizResult.style.color = 'red'
}
})
