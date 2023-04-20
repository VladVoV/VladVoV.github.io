class PokemonAbilities {
  static async displayAbilities(pokemonList) {
    const abilitiesList = document.createElement('ul');
    abilitiesList.classList.add('abilities-list');

    for (const pokemon of pokemonList) {
      const pokemonData = await this.fetchPokemonData(pokemon.name);

      const abilities = pokemonData.abilities.map(ability => ability.ability.name);
      const pokemonAbilities = document.createElement('li');
      pokemonAbilities.classList.add('pokemon-abilities');
      pokemonAbilities.innerHTML = `
        <h3>${pokemon.name} Abilities:</h3>
        <ul>
          ${abilities.map(ability => `<li>${ability}</li>`).join('')}
        </ul>
      `;

      abilitiesList.appendChild(pokemonAbilities);
    }

    const characterList = document.querySelector('.character-list');
    characterList.insertAdjacentElement('beforeend', abilitiesList);
  }

  static async fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new PokeApiError('Network response was not ok');
    }
    return await response.json();
  }
}
export default PokemonAbilities;