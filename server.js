// REQUIRE DEPENDENCIES
const express = require('express');

// INITIALIZE EXPRESS APP
const app = express();
const port = 9000;

// app.get("/", function(request, response) {
//     response.send(" Good luck samim")
// });

const drinks = [
    {
      name: "cruddy mary",
      price: 132,
      image: "https://i.imgur.com/Va5iIw5",
    },
    {
      name: "index on the beach",
      price: 68,
      image: "https://i.imgur.com/XV2aPa2",
    },
    {
      name: "hack & coke",
      price: 1,
      image: "https://i.imgur.com/rLOXFRI",
    },
    {
      name: "whiskey-value pair",
      price: 11,
      image: "https://i.imgur.com/a7rmkoS",
    },
    {
      name: "404 horsemen",
      price: 202,
      image: "https://i.imgur.com/FLucOLr",
    },
    {
      name: "if stateMint julep",
      price: 2,
      image: "https://i.imgur.com/yaoK0Dg",
    },
    {
      name: "APIPA",
      price: 43,
      image: "https://i.imgur.com/qAhA7pi",
    },
    {
      name: "node to joy",
      price: 56,
      image: "https://i.imgur.com/MbVdwZz",
    },
  ]

  app.get("/drinks/", (req, res) => {
    res.send(drinks)
  })

//   app.get("/drinks/:indexOfDrinksArray", (req, res) => {
//     res.send(drinks[req.params.indexOfDrinksArray])
//   })

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});