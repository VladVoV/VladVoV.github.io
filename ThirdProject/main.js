import PokeApiRandom from './pokeApiRandom.js';
import PokemonAbilities from './abilities.js';
class PokeApiError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PokeApiError';
  }
}

class ErrorHandler {
  static handle(error) {
    console.error(error);
    alert('An error occurred. Please try again.');
  }
}

class PokeApi {
  constructor() {
    this.searchInput = document.querySelector('.search-input');
    this.searchButton = document.querySelector('.search-button');
    this.randomButton = document.querySelector('.random-button');
    this.abilitiesCheckes = document.querySelector('.abilities-check');
    this.characterList = document.querySelector('.character-list');
    this.searchButton.addEventListener('click', () => this.searchCharacter());
    this.randomButton.addEventListener('click', () => this.searchRandomCharacter());
    this.searchInput.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        this.searchCharacter();
      }
    });
  }

  async searchCharacter() {
    try {
      const searchQuery = this.searchInput.value.toLowerCase();
      const characterData = await this.fetchCharacter(searchQuery);
      this.displayCharacter(characterData);
      if(this.abilitiesCheckes.checked === true){
      await PokemonAbilities.displayAbilities([characterData]);
      }
    } catch (error) {
      if (error instanceof PokeApiError) {
        ErrorHandler.handle(error);
      } else {
        throw new PokeApiError('Error fetching character data. Please try again.');
      }
    }
  }
  async searchRandomCharacter() {
    try{
      const randomCharacters = await PokeApiRandom.getRandomCharacters();
      this.displayRandomCharacters(randomCharacters);
    }
    catch (error){
      if (error instanceof PokeApiError) {
        ErrorHandler.handle(error);
      } else {
        throw new PokeApiError('Error fetching character data. Please try again.');
      }
    }
  }
  displayRandomCharacters(randomCharacters) {
    randomCharacters.forEach((characterData) => {
      const characterName = characterData.name;
      const characterImage = characterData.image;
      const characterElement = document.createElement('div');
      characterElement.classList.add('character');
      characterElement.innerHTML = `
      <h2>${characterName}</h2>
      <img src="${characterImage}" alt="${characterName}">
    `;
      this.characterList.appendChild(characterElement);
    });
  }

  async fetchCharacter(characterName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterName}`);
    if (!response.ok) {
      throw new PokeApiError('Network response was not ok');
    }
    return await response.json();
  }

  displayCharacter(characterData) {
    const characterName = characterData.name;
    const characterImage = characterData.sprites.front_default;
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    characterElement.innerHTML = `
      <h2>${characterName}</h2>
      <img src="${characterImage}" alt="${characterName}">
    `;
    this.characterList.appendChild(characterElement);
  }
}

const pokeApi = new PokeApi();

if (pokeApi.searchInput.value !== '') {
  pokeApi.searchCharacter();
}