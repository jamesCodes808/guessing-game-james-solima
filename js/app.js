'use strict'; //gives us stricter syntax rules.
setTimeout(onload, 5000)

function onload() {
    let person = prompt('What is your name?');

    if (person === null || person === '') {
        person = prompt('Please enter a real name');
    } else {
        alert(`Welcome ${person}`);
    }

    console.log(person);

    let isReady = confirm('Are you ready to play a game?');

    let questions = ['Am I older than 21?', 'Is my favorite animal a cockroach?', 'Do I like sushi?', 'Have I ever worked for NASA?', 'My goal is to be a professional pirate right?']

    let answers = ['y', 'n', 'y', 'n', 'n']

    let response = '';

    let score = 0;

    if (isReady) {
        alert(`Great ${person}! Let's play a game!`)

        for (let i = 0; i < questions.length; i++) {
            response = prompt(`${questions[i]} (please type "y" or "n")`);
            if (response.toLowerCase() === answers[i].toLowerCase()) {
                alert('Good Job!')
                score += 1;
            } else {
                alert('Nice try.')
            }
        }

    } else {
        alert("Please come back when you're ready");
    }

    if (score > 0) {
        alert(`Good job ${person}! You scored ${score}`)
    } else if (score === 0) {
        alert(`Sorry, ${person} you didn't get any correct!`)
    }
}
