if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require('axios')

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE

// This gets the list of drinks that match a search based on drink name
app.get('/api/search/:query', (request, response) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${request.params.query}`)
    .then(drinkResponse => response.json(drinkResponse.data))
    .then(drinkSelection = drinkResponse.data.idDrink)
    console.log(drinkSelection)
})

// This gets a list of all the drinks
app.get('/api/search/', (request, response) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
    .then(drinkResponse => response.json(drinkResponse.data))
})


// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)
