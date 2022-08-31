// REQUIRE DEPENDENCIES
const express = require('express');

// INITIALIZE EXPRESS APP
const app = express();
const port = 9000;
const drinks = require ("./models/drinks.js");


app.get("/", function(request, response) {
    response.send(" Welcome to the Gitpub App!")
});

app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {
        drinks
    });

});

//   app.get("/drinks/:indexOfDrinksArray", (req, res) => {
//     res.send(drinks[req.params.indexOfDrinksArray])
//   })

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});