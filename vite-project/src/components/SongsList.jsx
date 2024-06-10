import { useEffect } from "react";
import SongCard from "./Songcard";

function SongsList({ songs, editedSong, setEditedSong }) {
  return (
    <div className="flex gap-5 pt-5">
      {songs.map((song) => (
        <div className="w-[250px]" key={song.id}>
          <SongCard
            editedSong={editedSong}
            setEditedSong={setEditedSong}
            id={song.id}
            title={song.title}
            artist={song.artist}
          />
        </div>
      ))}
    </div>
  );
}

export default SongsList;
