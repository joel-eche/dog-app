const BASE_API = 'https://dog.ceo/api';

export const getBreeds = async () => {
  const response = await fetch(`${BASE_API}/breeds/list/all`);
  const data = await response.json();

  if (response.ok) {
    return { message: Object.keys(data.message), status: "success"};
  }
  return { message: [], status: "error" }
}

export const getRandomDogs = async () => {
  const response = await fetch(`${BASE_API}/breeds/image/random/10`);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return [{ message: [], errorMessage: data.message, status: "error" }]
}

export const getFilteredDogsByBreed = async (breed) => {
  const response = await fetch(`${BASE_API}/breed/${breed}/images/random/10`);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return { message: [], errorMessage: data.message, status: "error" }
}