let userInputs = [];
let originalStory = `One day, ${userInputs[0]} and ${userInputs[1]} decided to take a trip to the beach. ${userInputs[0]} packed a bag full of ${userInputs[2]} and a big jug of ${userInputs[3]}. ${userInputs[1]} brought a towel that had a picture of a ${userInputs[4]} on it. The beach was crowded but there were few spots left. So they put down their towels and enjoyed the sunny day.`;
let questionArray = ['Enter your name', 'Enter your friends name', 'Enter your favorite food', 'Enter your favorite drink', 'Enter your favorite animal'];
let numberOfQuestions = questionArray.length-1;
let questionCounter = 0;

for (let i = numberOfQuestions; i>=0; i--) {
    console.log(questionArray[questionCounter] + ` (${numberOfQuestions} questions left)`);
    numberOfQuestions--;
    questionCounter++;
}















// original story
// One day, - and - decided to take a trip to the beach. - packed a bag full of - and a big jug of -. - brought a towel that had a picture of a - on it. The beach was crowded but there were few spots left.
