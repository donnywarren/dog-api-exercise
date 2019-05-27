const button = document.querySelector('button');
const imageDiv = document.querySelector('div');
const list = document.querySelector('.list');

button.addEventListener('click', async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all');
  const dogList = Object.keys(response.data.message);
  dogList.forEach((dog) => {
    const breedItem = document.createElement('li');
    breedItem.innerHTML = dog;
    list.append(breedItem);
  });
});
