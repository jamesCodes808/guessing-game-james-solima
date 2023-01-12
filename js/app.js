'use strict'; //gives us stricter syntax rules.
setTimeout(onload, 5000)

function onload() {
    let person = prompt('What is your name?');

    if (person === null || person === '') {
        person = prompt('Please enter a real name');
    } else {
        alert(`Welcome ${person}`);
    }

    let isReady = confirm('Are you ready to play a game?');

    let questions = ['Am I older than 21?', 'Is my favorite animal a cockroach?', 'Do I like sushi?', 'Have I ever worked for NASA?', 'My goal is to be a professional pirate right?']

    let numericQuestion = 'How many serious jobs did I have in the past? (please enter a number between 1-5)';

    let answers = ['y', 'n', 'y', 'n', 'n', ''];

    let numericQuestionAnswer = 3;

    let multipleChoiceQuestion = 'Which of these are some of my favorite Animes from 2022?';

    let multipleChoiceAnswers = ['Girls Frontline', 'Spy x Family', 'Fruits Basket', 'Jujutsu Kaisen', 'Island of Giant Insects'];

    let response = '';

    let attempts = 0;

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

        while (attempts < 4) {
            response = prompt(numericQuestion);
            if (response < numericQuestionAnswer) {
                alert(`you guessed too low`);
                attempts++;
            } else if (response > numericQuestionAnswer) {
                alert(`you guessed too high`);
                attempts++;
            } else if (response == numericQuestionAnswer) {
                alert(`Good job ${person}! You got it in ${attempts} attempts!`)
                score++;
                break;
            }

            if (attempts == 4) {
                alert(`You have run out of attempts, ${person}`);
                break;
            }
        }

        attempts = 0;

        while (attempts < 6) {
            response = prompt(`${multipleChoiceQuestion} There are your choices (please select a number between 1-5): 
            1: ${multipleChoiceAnswers[0]}, 
            2: ${multipleChoiceAnswers[1]}, 
            3: ${multipleChoiceAnswers[2]}, 
            4: ${multipleChoiceAnswers[3]}, 
            5: ${multipleChoiceAnswers[4]}`);

            response = parseInt(response - 1);


            if (response == 1 || response == 3) {
                alert(`Good job ${person}, you guessed it in ${attempts} attempts`);
                score++
                break;
            };

            if (response != 1 || response != 3) {
                attempts++;
                alert("That was wrong! Try again!");
            };

            if (attempts === 6) {
                alert(`Sorry! ${person}, you have run out of attempts`);
                break;
            };
        };

        if (score > 0) {
            alert(`Good job ${person}! You scored ${score} out of 7!`)
        } else if (score === 0) {
            alert(`Sorry, ${person} you didn't get any correct!`)
        };


    } else {
        alert("Please come back when you're ready");
    };
}
