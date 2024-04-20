function redactText() {
    const originalText = document.getElementById('originalText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');
    const replacementChars = document.getElementById('replacementChars').value || '*';

    let redactedText = originalText;

    wordsToRedact.forEach(word => {
        const regex = new RegExp(word, 'gi');
        redactedText = redactedText.replace(regex, replacementChars.repeat(word.length));
    });

    document.getElementById('redactedText').innerText = redactedText;

    // Display stats
    const wordsScanned = originalText.split(/\s+/).length;
    const wordsMatched = wordsToRedact.filter(word => originalText.match(new RegExp(word, 'gi'))).length;
    const charactersScrambled = redactedText.length - originalText.length;
    const stats = `Words scanned: ${wordsScanned}<br>Words matched: ${wordsMatched}<br>Total characters scrambled: ${charactersScrambled}`;
    document.getElementById('stats').innerHTML = stats;
}
