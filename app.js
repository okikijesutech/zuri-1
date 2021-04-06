const express = require("express");

const app = express();

const data = {
            name: "Okikijesu",
            country: "Nigeria",
            hobby: "Programming"
            }
const jsonData = JSON.stringify(data)

app.get("/", function (req, res) {
  res.write("Welcome to my project portal");
  res.write(jsonData)
  res.send();
})

app.listen(3000, function(){
  console.log("Server running on port 3000");
})
