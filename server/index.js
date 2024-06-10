const express = require("express");
const cors = require('cors');
const app = express();
const {
  serveSongs,
  serveSong,
  createSong,
  updateSong,
  deleteSong,
} = require("./controllers/SongController");
const port = process.env.PORT || 8082;
app.use(cors());
app.use(express.json());

app.get("/songs", serveSongs);
app.get("/songs/:id", serveSong);
app.post("/songs", createSong);
app.patch("/songs/:id", updateSong);
app.delete("/songs/:id", deleteSong);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });