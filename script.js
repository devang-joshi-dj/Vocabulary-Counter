window.onload = function () {
    var input = document.querySelector('#input');
    var characters = document.querySelector('#charactersValue');
    var words = document.querySelector('#wordsValue');
    var sentences = document.querySelector('#sentencesValue');
    input.focus(); // to keep focus on textarea on page load
    // setting initial values to characters, words and sentences
    characters.innerHTML = String(0);
    words.innerHTML = String(0);
    sentences.innerHTML = String(0);
    var countCharacters = function (input) {
        // function to count and return characters
        var arr = input.trim().split('');
        return arr.length;
    };
    var countWords = function (input) {
        // function to count and return words
        var arr = input.trim().split(' ');
        var arrFiltered = arr.filter(function (element) {
            return element != null && element != '' && element != ' ';
        });
        return arrFiltered.length;
    };
    var countSentences = function (input) {
        // function to count and return sentences
        var arr = input.trim().split('.');
        var arrFiltered = arr.filter(function (element) {
            return element != null && element != '' && element != ' ';
        });
        return arrFiltered.length;
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
};
