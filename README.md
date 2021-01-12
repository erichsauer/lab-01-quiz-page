# THE PLAN

## OUTCOMES
- prompts user
    - welcome to the test
    - to continue or opt out
    - to submit first name
    - to submit last name
    - to answer question 1
    - to answer question 2
    - to answer question 3
- displays results of quiz

## HTML setup
- set IDs for DOM elements
    - button
    - empty `<div>`
- set up basic quiz content
    - three `<p>`
    - one image
    - one UL
    - on OL
    - headers

## JS setup
- grab DOM elements
    - button
    - empty `<div>`
    - validation step: `console.log(button, div)`
- add event listener
    - button
    - validation step: on click, `console.log('button click!')`
- respond to button click with
    - alert "you're gonna take a quiz!"
    - confirmation "do you wanna?"
        - yes continues
        - no exits cool zone with `return`
    - prompt "what's your name?"
        - validation step: `console.log(name)`
    - (joke) prompt "what's your SSN?"
    - question 1
    - question 2
    - question 3
        - validation step: `console.log(answer1, answer 2, answer3)`
- tracks number of correct answers
    - create function to check answers begin with Y
        - `charAt(0).toUppercase()
    - `let correctAnswers = 0` at first
    - `correctAnswer++` with every correct answer
        - validation step: `console.log(correctAnswers)`
    - create a variable that stores score as percentage
        - use `Math.round()` to round to nearest whole number
- displays score with name
    - concatenate in an `if() {} else {}` with &{quickConcatenateTags}

## CSS PLAN
- make it purdy
