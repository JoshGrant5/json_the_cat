//* Solution using promises not wanted by the assignment
// const rp = require('request-promise');
// const fetchBreedDescription = (breed, (error, description) => {
//   rp(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
//     .then(body => {
//       const data = JSON.parse(body);
//       console.log(data[0].description);
//     })
//     .catch(() => {
//       console.log('Error: Breed name not found');
//     });
// });

const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, resource, body) => {
    let data = JSON.parse(body);
    if (error) {
      console.log('Error: ', error);
      return callback(error, null);
    } else if (data.length === 0) {
      console.log('Error: Breed not found');
      return callback(error, null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };