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

HTML setup
- set IDs for DOM elements
    - button
    - empty `<div>`
- set up basic quiz content
    - three `<p>`
    - one image
    - one UL
    - on OL
    - headers

JS setup
- grab DOM elements
    - button
    - empty `<div>`
- add event listener
    - button
- respond to button click with
    - alert "you're gonna take a quiz!"
    - confirmation "do you wanna?"
        - yes continues
        - no exits cool zone with `return`
    - prompt "what's your name?"
    - prompt "what's your SSN?"
    - question 1
    - question 2
    - question 3
- tracks number of correct answers
- displays score with name