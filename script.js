const nav = document.getElementById("mobile-nav");

function toggleMenu(action) {
    if (action == "show") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

const sentences = [
    "Bringing Security To A whole New Level",
    "Security at hand, wherever you go.",
    "Easy Access, Fast Response, Full Security",
];

let sentenceIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Milliseconds per character
const delayBetweenSentences = 2000; // Milliseconds to wait between sentences

function typeSentence() {
  const typewriterElement = document.getElementById('typewriter');
  const currentSentence = sentences[sentenceIndex];
  
  if (charIndex < currentSentence.length) {
    typewriterElement.textContent += currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeSentence, typingSpeed);
  } else {
    setTimeout(deleteSentence, delayBetweenSentences);
  }
}

function deleteSentence() {
  const typewriterElement = document.getElementById('typewriter');
  const currentSentence = sentences[sentenceIndex];
  
  if (charIndex > 0) {
    typewriterElement.textContent = currentSentence.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteSentence, typingSpeed);
  } else {
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(typeSentence, typingSpeed);
  }
}

typeSentence();