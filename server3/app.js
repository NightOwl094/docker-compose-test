const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => res.send(`this landing page ${port}`));
app.listen(port, console.log(`app listening at http://localhost:${port}`));
