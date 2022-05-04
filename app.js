const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const globalRouter = require("./routers/globalRouter");

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} SERVER START`)
});