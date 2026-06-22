// Example service function
async function getPokemonDetails(nameOrId) {
  // 1. Get raw data from repository
  const rawData = await pokemonRepository.getPokemonByNameOrId(nameOrId);

  // 2. Transform it (format names, convert units, etc.)
  const formattedData = this.formatPokemonData(rawData);

  // 3. Return clean data
  return formattedData;
}