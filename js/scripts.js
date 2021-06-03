function cap() {
  const lastLetter = firstSentence.charAt(firstSentence.length-1).toUpperCase();
  const firstLetter = firstSentence.charAt(0).toUpperCase();
  return firstLetter + lastLetter;
}
function reverse() {
  let reverse1 = reverseLetters.charAt(reverseLetters.length-1);
  let reverse2 = reverseLetters.charAt(0);
  return reverse1 + reverse2;
}
function addTogether() {
  return firstSentence + reverseLetterString;
}
function letterEquation() {
  const countSentence = parseInt(firstSentence.length);
  const divide = countSentence / 2;
  const newLetter = firstSentence.charAt(divide);
  return newLetter + newReverseLetterString;
}
function reverseAll() {
  let finalReverse = "";

  for (let i = lastOne.length-1; i>=0; i--) {
    finalReverse += lastOne[i]
  }
  return(finalReverse);
}

let firstSentence = prompt("Enter a sentence:");
const reverseLetters = cap();
const reverseLetterString = reverse();
const newReverseLetterString = addTogether();
const lastOne = letterEquation();
const ultimateOne = reverseAll();

$(document).ready(function() {

  $("#sentence1").text(firstSentence);
  $("#sentence2").text(ultimateOne);

  $("#originalWord").click(function() {
    $("#sentence2").hide();
    $("#sentence1").toggle();
  });
  $("#reversedWord").click(function() {
    $("#sentence1").hide();
    $("#sentence2").toggle();
  });
});
