const express = require("express");
const app = express();


app.get("/", (req, res) => res.send("This is the landing page!!!"));


app.listen(3000, () => console.log("My app server is running!!"));