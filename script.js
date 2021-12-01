// Constantes globais
const showAll = document.getElementById('allPokemons');
const pokelist = document.getElementById('pokeList');

// A função abaixo apresenta todos os pokemons na tela:
const todosOsPokemonsNaTela = async () => {
  pokelist.replaceChildren();
  for (let i = 1; i <= 10; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        addPokemons(data);
      });
  }
};

// Função para add os pokemons:

const addPokemons = (data) => {
  const newPokemon = document.createElement('li');
  const newPokemonImg = document.createElement('img');
  newPokemonImg.src = `${data.sprites.front_default}`;
  newPokemon.innerText = firstLetterToUpperCase(data.name);
  pokelist.appendChild(newPokemon);
  pokelist.appendChild(newPokemonImg);
};

// A função abaixo torna a primeira letra dos pokemons maiúscula:

const firstLetterToUpperCase = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const button = document.getElementById('pokeSend');

const findPokemonByName = (pokemon) => {
  pokelist.replaceChildren();
  const input = document.getElementById('pokeName');
  pokemon = input.value;
  input.value = '';
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      addPokemons(data);
    });
};

window.onload = () => {
  button.addEventListener('click', findPokemonByName),
    showAll.addEventListener('click', todosOsPokemonsNaTela);
};

// Fazer uma telinha com as infos de cada pokemon -> add eventlistener para cada um

//data.type.name