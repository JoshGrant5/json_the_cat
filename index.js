const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.splice(2); // cat breed provided by user in command line

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});