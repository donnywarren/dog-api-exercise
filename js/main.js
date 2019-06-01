const button = document.querySelector('button');
const breedInput = document.querySelector('input');
const imageDiv = document.querySelector('div');

button.addEventListener('click', async () => {
  let breed = breedInput.value;
  let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  let dogPic = response.data.message;
  imageDiv.innerHTML = `<img class="dogpic" src=${dogPic}>`;
});
