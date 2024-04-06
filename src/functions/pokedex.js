// functions/myFunction.js

exports.handler = async () => {
  const pokeAPI = 'https://pokeapi.co/api/v2/pokedex/kanto';
  const response = await fetch(pokeAPI)
  const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };
  