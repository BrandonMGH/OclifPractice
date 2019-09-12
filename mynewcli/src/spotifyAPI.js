var axios = require("axios");

var spotTest = function(postNumber) {
  console.log(postNumber)
axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`).then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  },

  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);
};

// var spotTest = function(name) {
//     this.name = name;
    
//   };




module.exports = spotTest