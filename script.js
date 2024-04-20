const contentInput = document.getElementById("content");
const wordsInput = document.getElementById("words-to-scramble");
const replacementInput = document.getElementById("replacement");
const redactButton = document.getElementById("redact-button");
const resultDiv = document.getElementById("result");

redactButton.addEventListener("click", function() {
    const content = contentInput.value;
    const wordsToScramble = wordsInput.value.split(" ");
    const replacement = replacementInput.value;
    const scrambledContent = scrambleText(content, wordsToScramble, replacement);
    
    const stats = getStats(content, scrambledContent, wordsToScramble);
    
    resultDiv.innerHTML = `<h3>Scrambled Text:</h3><pre>${scrambledContent}</pre>`;
    resultDiv.innerHTML += `<h3>Stats:</h3><ul>
                <li>Words Scanned: ${stats.wordsScanned}</li>
                <li>Words Scrambled: ${stats.wordsScrambled}</li>
                <li>Characters Scrambled: ${stats.charactersScrambled}</li>
                <li>Time Taken: ${stats.timeTaken} seconds</li>
            </ul>`;
});

function scrambleText(text, words, replacement) {
    const regex = new RegExp("\\b(" + words.join("|") + ")\\b", "gi"); // \b for word boundaries
    return text.replace(regex, function(matchedWord) {
        return matchedWord.split("").map(() => replacement).join("");
    });
}

function getStats(originalText, scrambledText, words) {
    const wordsScanned = originalText.split(" ").length;
    const wordsScrambled = words.length;
    const charactersScrambled = scrambledText.length - originalText.length;
    const startTime = performance.now();
    // Simulate processing time (remove for actual performance measurement)
    for (let i = 0; i < 1000000; i++) {}
    const endTime = performance.now();
    const timeTaken = (endTime - startTime) / 1000;
    return { wordsScanned, wordsScrambled, charactersScrambled, timeTaken };
}
