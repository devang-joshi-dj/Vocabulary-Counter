window.onload = function () {
    var input = document.querySelector('#input');
    var characters = document.querySelector('#charactersValue');
    var words = document.querySelector('#wordsValue');
    var sentences = document.querySelector('#sentencesValue');
    var paragraphs = document.querySelector('#paragraphsValue');
    input.focus(); // to keep focus on textarea on page load
    // setting initial values to characters, words and sentences
    characters.innerHTML = String(0);
    words.innerHTML = String(0);
    sentences.innerHTML = String(0);
    paragraphs.innerHTML = String(0);
    var filterInput = function (input) {
        return input.filter(function (element) {
            return element != null && element != '' && element != ' ';
        });
    };
    var countCharacters = function (input) {
        // function to count and return characters
        var arr = input.trim().split('');
        return arr.length;
    };
    var countWords = function (input) {
        // function to count and return words
        var numberOfWords = input.trim().split('\n').join('. ').split(' ');
        return filterInput(numberOfWords).length;
    };
    var countSentences = function (input) {
        // function to count and return sentences
        var numberOfSentences = input.trim().split('\n').join('. ').split('. ');
        return filterInput(numberOfSentences).length;
    };
    var countParagraphs = function (input) {
        // function to count and return paragraphs
        var numberOfParagraphs = input.trim().split('\n');
        return filterInput(numberOfParagraphs).length;
    };
    document.addEventListener('keyup', function () {
        // event listeners to assign proper function to set values in DOM for every keyup event
        characters.innerHTML = String(countCharacters(input.value));
    });
    document.addEventListener('keyup', function () {
        // event listeners to assign proper function to set values in DOM for every keyup event
        words.innerHTML = String(countWords(input.value));
    });
    document.addEventListener('keyup', function () {
        // event listeners to assign proper function to set values in DOM for every keyup event
        sentences.innerHTML = String(countSentences(input.value));
    });
    document.addEventListener('keyup', function () {
        // event listeners to assign proper function to set values in DOM for every keyup event
        paragraphs.innerHTML = String(countParagraphs(input.value));
    });
};
