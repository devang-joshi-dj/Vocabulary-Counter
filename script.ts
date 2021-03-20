window.onload = (): void => {
  
  const input: HTMLInputElement = (<HTMLInputElement>document.querySelector('#input'));
  const characters: HTMLElement = (<HTMLElement>document.querySelector('#charactersValue'));
  const words: HTMLElement = (<HTMLElement>document.querySelector('#wordsValue'));
  const sentences: HTMLElement = (<HTMLElement>document.querySelector('#sentencesValue'));

  input.focus(); // to keep focus on textarea on page load

  // setting initial values to characters, words and sentences
  characters.innerHTML = String(0);
  words.innerHTML = String(0);
  sentences.innerHTML = String(0);

  const countCharacters = (input: string):number => {
    // function to count and return characters
    const arr: string[] = input.trim().split('');
    return arr.length;
  }

  const countWords = (input: string):number => {
    // function to count and return words
    const arr: string[] = input.trim().split(' ');
    const arrFiltered = arr.filter(element => {
      return element != null && element != '' && element != ' ';
    });
    return arrFiltered.length;
  }

  const countSentences = (input: string):number => {
    // function to count and return sentences
    const arr: string[] = input.trim().split('.');
    const arrFiltered = arr.filter(element => {
      return element != null && element != '' && element != ' ';
    });
    return arrFiltered.length;
  }

  document.addEventListener('keyup', () => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    characters.innerHTML = String(countCharacters(input.value));
  });

  document.addEventListener('keyup', () => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    words.innerHTML = String(countWords(input.value));
  });

  document.addEventListener('keyup', () => {
    // event listeners to assign proper function to set values in DOM for every keyup event
    sentences.innerHTML = String(countSentences(input.value));
  });
}