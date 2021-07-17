let express = require("express");
let data = require("./data.json");

// created instance
let server = express();

server.get("/pets", function (req, res) {
    res.json(data);
  });

server.get("/pettypes", function(req, res) {
  let Data = {cities:[], types:[], breeds:[]};
  let uniqueTypes = {};
  let uniqueCities ={};
  let uniqueBreeds = {};
  for (let i = 0; i < data.length; i++) {
    let pet = data[i];
    let petType = pet.animal;
    let petCity = pet.city;
    let petBreed = pet.breed;

    if (!uniqueCities.hasOwnProperty(petCity)) {
      Data.cities.push(petCity);
      uniqueCities[petCity] = "true";
    }

    if (!uniqueTypes.hasOwnProperty(petType)) {
      Data.types.push(petType);
      uniqueTypes[petType] = "true";
    }

    if (!uniqueBreeds.hasOwnProperty(petBreed)) {
      Data.breeds.push(petBreed);
      uniqueBreeds[petBreed] = "true";
    }
  }
  res.json(Data);
});

server.listen(4000);