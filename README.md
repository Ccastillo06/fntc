<p align="center">
  <img src="https://raw.githubusercontent.com/Ccastillo06/fntc/master/assets/logo.png" alt="FNTC logo" width="300px" />
</p>

## What's fntc? ⁉️

This little experimental package with a size 637B let's you handle try/catch function in a different and React Hooks like way.

### Show me how to use it 💪

By using `fntc` you can approach try/catch in a simpler way.
Intead of doing this:

```
function wordToUpperCase(word) {
  try {
    const upperWord = word.toUpperCase();
    return upperWord;
  } catch (error) {
    const { message } = error;
    throw new Error( message);
  }
}
```

And repeating the same everytime we need to cover up our code using try/catch, handling errors or so, we can use `fntc` to handle it in a cleaner way:

```
  import { tc } from 'fntc';

  // Notice how we don't need to add the try/catch code anymore.
  function wordToUpperCase(word) {
    const [upperWord, errorMessage] = tc(() => word.toUpperCase())

    if (errorMessage) throw new Error(errorMessage);

    return upperWord;
  }
```

In case an async function is needed or we are using promises, we can approach it using `atc` instead.

Let's see how the normal flow would be when fetching the Rick & Morty API:

```
  function fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        const { results } = res;
        return results.map(({ name }) => name);
      })
      .catch(err => err);
  }

  async function getCharactersArray() {
    try {
      const response = await fetchCharacters();
      return response;
    } catch (error) {
      const { message } = error;
      throw new Error(message);
    }
  }

  getCharactersArray()
    .then(res => console.log(`These are the characters: ${res}`))
    .catch(err => console.log(err));
```

And let's make it simpler now with `atc`:

```
  import { atc } from 'fntc';

  function fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        const { results } = res;
        return results.map(({ name }) => name);
      })
      .catch(err => err);
  }

  // Notice how we don't need to add the try/catch code anymore.
  async function getCharactersArray() {
    const [characters, errorMessage] = await atc(fetchCharacters);

    if (errorMessage) throw new Error(errorMessage);

    return characters;
  }

  getCharactersArray()
    .then(res => console.log(`These are the characters: ${res}`))
    .catch(err => console.log(err));
```

### How can I install it?

Just run `npm i fntc` in your project and import it anywhere you need it 🚀

### About the package

As said before, this is an experiment and I would only use it in a personal project for fun! 🎉

Both `tc` and `atc` functions are tested using `Jest`, and the package is bundled using `microbundle`.
