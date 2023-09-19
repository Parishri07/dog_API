// Create a Headers object and set custom headers
const customHeaders = new Headers();
customHeaders.append('width', '100');  // Set the width to 100px
customHeaders.append('height', '100'); // Set the height to 100px

// Make the fetch request with custom headers
fetch('https://random.dog/woof.json', {
//   method: 'GET',
//   headers: customHeaders,
})
  .then((response) => {
    // console.log(response.status);
    // console.log(response.ok);
    // console.log(response.headers);
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    return response.json();
  })
  .then((response) => {
    console.log(response);
    document.getElementById('myImage').src = response.url;
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

  var inputElement = document.getElementById('dogBreed');
  var dogBreedInput = inputElement.value;
  console.log(dogBreedInput);
