function cap() {
  const lastLetter = firstSentence.charAt(firstSentence.length-1).toUpperCase();
  const firstLetter = firstSentence.charAt(0).toUpperCase();
  console.log(firstLetter + lastLetter);
  return firstLetter + lastLetter;
}
function reverse() {
  let reverse1 = reverseLetters.charAt(reverseLetters.length-1);
  let reverse2 = reverseLetters.charAt(0);
  console.log(reverse1 + reverse2);
  return reverse1 + reverse2;
}
function addTogether() {
  console.log(firstSentence + reverseLetterString);
  return firstSentence + reverseLetterString;
}
function letterEquation() {
  const countSentence = parseInt(firstSentence.length);
  const divide = countSentence / 2;
  const newLetter = firstSentence.charAt(divide);
  console.log(newLetter + newReverseLetterString);
  return newLetter + newReverseLetterString;
}

let firstSentence = prompt("Enter a sentence:");
console.log(firstSentence);
const reverseLetters = cap();
const reverseLetterString = reverse();
const newReverseLetterString = addTogether();
letterEquation();

