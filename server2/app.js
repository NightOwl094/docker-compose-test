const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send(`this is api server ${port}`));
app.listen(port, console.log(`app listening at http://localhost:${port}`));
