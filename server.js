let express = require("express");
let data = require("./data.json");

// created instance
let server = express();

server.get("/pets", function (req, res) {
    res.json(data);
  });

server.get("/pettypes", function(req, res) {
  let typeData = [];
  let uniquePets = {};
  for (let i = 0; i < data.length; i++) {
    let pet = data[i];
    let petType = pet.animal;

    if (!uniquePets.hasOwnProperty(petType)) {
      typeData.push(petType);
      uniquePets[petType] = "true";
    }
  }
  res.json(typeData);
});

server.listen(4000);