const button = document.querySelector('button');
const imageDiv = document.querySelector('div');
const list = document.querySelector('.list');

button.addEventListener('click', async () => {
  // API endpoint:
  // https://dog.ceo/api/breeds/list/all

  const response = // <--- Write an axios call here to get all the available breeds.
                   // The endpoint to use is in the comment above.
  const dogList = Object.keys(response.data.message);
  dogList.forEach((dog) => {
    const breedItem = document.createElement('li');
    breedItem.innerHTML = dog;
    list.append(breedItem);
  });
});
