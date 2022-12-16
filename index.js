const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openAIRoutes"));

app.listen(PORT, () => console.log("server is up on port:", PORT));