import { useState, useEffect } from "react";

import "./App.css";
import "./index.css";
import SongForm from "./components/SongForm";
import SongsList from "./components/SongsList";

function App() {
  const [addedSong, setAddedSong] = useState(false);
  const [editedSong, setEditedSong] = useState(false);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const dofetch = async () => {
      const res = await fetch("http://localhost:8082/songs");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setSongs(data);
      }
    };
    dofetch();
  }, [addedSong, editedSong]);

  return (
    <>
      <SongForm addedSong={addedSong} setAddedSong={setAddedSong} />
      <SongsList
        editedSong={editedSong}
        setEditedSong={setEditedSong}
        songs={songs}
      />
    </>
  );
}

export default App;
