const express = require("express");
require("dotenv").config();

const app = express();

const port = 5010;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

const usersHandlers = require("./usersHandlers");

app.use(express.json());

app.get("/api/movies", movieHandlers.getMovies);

app.get("/api/movies/:id", movieHandlers.getMovieById);

app.post("/api/movies", movieHandlers.postMovie);

app.get("/api/users", usersHandlers.getUsers);

app.get("/api/users/:id", usersHandlers.getUserById);

app.post("/api/users", usersHandlers.postUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
