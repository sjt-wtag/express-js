import express from "express";
import fs, { stat } from "fs";

let app = express();
let movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.use(express.json());

// GET - api/movies
app.get("/api/v1/movies", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      movies: movies,
    },
  });
  console.log("home");
});

//POST - api/v1/movies
app.post("/api/v1/movies", (req, res) => {
  const newId = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({ id: newId }, req.body);

  movies.push(newMovie);

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  });
});

// PATCH
app.patch("/api/v1/movies/:id", (req, res) => {
  let id = req.params.id * 1; // converting number to string
  let movieToUpdate = movies.find((el) => el.id === id);

  if (!movieToUpdate) {
    return res.status(404).json({
      status: "fail",
      message: "No movie object ID " + id + "is found",
    });
  }

  let index = movies.indexOf(movieToUpdate);
  Object.assign(movieToUpdate, req.body);

  movies[index] = movieToUpdate;

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: movieToUpdate,
      },
    });
  });
});

// DELETE
app.delete("/api/v1/movies/:id", (req, res) => {
  let id = req.params.id * 1; // converting number to string
  let movieToDelete = movies.find((el) => el.id === id);

  if (!movieToDelete) {
    return res.status(404).json({
      status: "fail",
      message: "No movie object ID " + id + "is found",
    });
  }

  let index = movies.indexOf(movieToDelete);
  movies.splice(index, 1);

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: null,
      },
    });
  });
});

//CREATE a server
const port = 3000;
app.listen(port, () => {
  console.log("server has started at port ", port);
});
