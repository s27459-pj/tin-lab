function censor(text, words) {
  for (let word of words) {
    while (text.indexOf(word) > -1) {
      text = text.replace(word, "*");
    }
  }
  return text;
}

console.log(censor("Ala ma kota i psa", ["Ala", "kot"])); // "* ma * i psa"
