function cap() {
  const lastLetter = firstSentence.charAt(firstSentence.length-1).toUpperCase();
  const firstLetter = firstSentence.charAt(0).toUpperCase();
  console.log(firstLetter + lastLetter);
}

const firstSentence = prompt("Enter a sentence:");
console.log(firstSentence);
cap(firstSentence);

