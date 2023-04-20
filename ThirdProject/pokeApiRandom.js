class PokeApiRandom {
  static async getRandomCharacters() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    if (!response.ok) {
      throw new PokeApiError('Network response was not ok');
    }
    const pokemonList = await response.json();
    const randomIndices = new Set();
    while (randomIndices.size < 5) {
      randomIndices.add(Math.floor(Math.random() * pokemonList.results.length));
    }
    const randomPokemon = [];
    for (const index of randomIndices) {
      const pokemonResponse = await fetch(pokemonList.results[index].url);
      if (!pokemonResponse.ok) {
        throw new PokeApiError('Network response was not ok');
      }
      const pokemonData = await pokemonResponse.json();
      randomPokemon.push({
        name: pokemonData.name,
        image: pokemonData.sprites.front_default
      });
    }
    return randomPokemon;
  }
}

export default PokeApiRandom;