const express = require('express');


const app = express();

const axios = require('axios')

let movies = {};

app.get('/', function(req, res){
    var key = req.url
    if (movies[key] == null){
        
        axios.get('http://www.omdbapi.com' + req.url + '&apikey=8730e0e') 
        .then(response => {
            res.status(200);
            movies[key] = response.data;
            res.send(response.data);
        })
        
    
        .catch(function (error) {
            console.log(error.message);
        });

        console.log(movies[key])
        
    }
    else {
        res.send(movies[key]);
        res.status(200);
    }

})



// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;