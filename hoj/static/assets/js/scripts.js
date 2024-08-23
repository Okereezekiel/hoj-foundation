document.addEventListener('DOMContentLoaded', function() {
    const words = ["Hello friend, my name is\
     Honourable Okey-Joe Onuakalusi\
     Member representing Oshodi-Isolo Federal Constituency 2."]; // Words to display

    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let currentWord = '';

    function typeWord() {
        if (currentLetterIndex <= words[currentWordIndex].length) {
            currentWord = words[currentWordIndex].slice(0, currentLetterIndex++);
            document.getElementById('word').textContent = currentWord;
            setTimeout(typeWord, 200); // Typing speed
        } else {
            currentLetterIndex = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(typeWord, 1000); // Delay between words
        }
    }

    typeWord();

// Smooth scrolling anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



});


