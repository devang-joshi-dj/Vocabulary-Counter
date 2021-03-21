window.onload = (): void => {

  const input: HTMLInputElement = (<HTMLInputElement>document.querySelector('#input'));
  const characters: HTMLElement = (<HTMLElement>document.querySelector('#charactersValue'));
  const words: HTMLElement = (<HTMLElement>document.querySelector('#wordsValue'));
  const sentences: HTMLElement = (<HTMLElement>document.querySelector('#sentencesValue'));
  const paragraphs: HTMLElement = (<HTMLElement>document.querySelector('#paragraphsValue'));

  input.focus(); // to keep focus on textarea on page load

  // setting initial values to characters, words and sentences
  characters.innerHTML = String(0);
  words.innerHTML = String(0);
  sentences.innerHTML = String(0);
  paragraphs.innerHTML = String(0);

  const filterInput = (input: Array<string>): Array<string> => {
    return input.filter(element => {
      return element != null && element != '' && element != ' ';
    });
  }

  const countCharacters = (input: string): number => {
    // function to count and return characters
    const arr: string[] = input.trim().split('');
    return arr.length;
  }

  const countWords = (input: string): number => {
    // function to count and return words
    const numberOfWords: string[] = input.trim().split('\n').join('. ').split(' ');
    return filterInput(numberOfWords).length;
  }

  const countSentences = (input: string): number => {
    // function to count and return sentences
    const numberOfSentences: string[] = input.trim().split('\n').join('. ').split('. ');
    return filterInput(numberOfSentences).length;
  }

  const countParagraphs = (input: string): number => {
    // function to count and return paragraphs
    const numberOfParagraphs: string[] = input.trim().split('\n');
    return filterInput(numberOfParagraphs).length;
  }

  document.addEventListener('keyup', (): void => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    characters.innerHTML = String(countCharacters(input.value));
  });

  document.addEventListener('keyup', (): void => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    words.innerHTML = String(countWords(input.value));
  });

  document.addEventListener('keyup', (): void => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    sentences.innerHTML = String(countSentences(input.value));
  });

  document.addEventListener('keyup', (): void => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    paragraphs.innerHTML = String(countParagraphs(input.value));
  });
}