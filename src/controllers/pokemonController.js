// Example controller function
async function getPokemonDetails(req, res) {
  // 1. Get data from request (what Pokemon?)
  const { nameOrId } = req.params;

  // 2. Ask service to do the work
  const pokemon = await pokemonService.getPokemonDetails(nameOrId);

  // 3. Send response (HTML or JSON)
  res.render('pokemon', { pokemon });
}