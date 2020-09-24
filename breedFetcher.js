const rp = require('request-promise'); // rp will now return a promise

const breed = process.argv.splice(2); // cat breed provided by user in command line

rp(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
  .then(body => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  })
  .catch(() => {
    console.log('Error: Breed name not found');
  });