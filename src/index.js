const texts = document.getElementsByTagName('p');
for (let i = 0, l = texts.length; i < l; i++) {
  texts[i].innerHTML = bonicText(texts[i].innerText)
}


function bonicText(text) {
  if (text.includes("\n")) {
    return splitMapJoin(text, "\n", bonicLine)
  } else if (text.includes(" ")) {
    return splitMapJoin(text, " ", bonicFirstHalfOfWord)
  }
  return bonicFirstHalfOfWord(text)
}

function bonicLine(line) {
  return splitMapJoin(line, " ", bonicFirstHalfOfWord)
}

function bonicFirstHalfOfWord(word) {
  const firstHalf = word.substring(0, Math.ceil(word.length / 2));
  return word.replace(firstHalf, bold(firstHalf));
}

function bold(str) {
  return `<b>${str}</b>`
}

function splitMapJoin(str, char, fn) {
  return str
    .split(char)
    .map(fn)
    .join(char);
}
