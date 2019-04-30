const express = require("express");
const app = express();

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("home")
});


app.listen(process.env.PORT, () => console.log("My app server is running!!"));
// Root link is: http://localhost:3000/