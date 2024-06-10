import { useState } from "react";

function SongCard({ title, artist, id, editedSong, setEditedSong }) {
  const [newTitle, setTitle] = useState(title);
  const [newArtist, setArtist] = useState(artist);
  const [isEditing, setIsEditing] = useState(false);

  const editSong = async (id) => {
    try {
      const res = await fetch(`http://localhost:8082/songs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newArtist }),
      });
      if (res.ok) {
        setIsEditing(false);
        setEditedSong(!editedSong);
      } else {
        console.error("Failed to edit song");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteSong = async (id) => {
    try {
      const res = await fetch(`http://localhost:8082/songs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEditedSong(!editedSong);
      } else {
        console.error("Failed to delete song");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[250px] border p-10">
      <img
        src="/musical-note-symbol.png"
        width={80}
        className="m-auto"
        alt="music note"
      />

      {!isEditing ? (
        <div className="pt-2">
          <h3 className="text-[2rem] w-[100px] m-auto">{newTitle}</h3>
          <p className="text-[0.8rem]">{newArtist}</p>
        </div>
      ) : (
        <div className="pt-2">
          <input
            type="text"
            className="text-[2rem] w-[100px] m-auto text-center"
            onChange={(e) => setTitle(e.target.value)}
            value={newTitle}
          />
          <input
            type="text"
            className="text-[0.8rem] w-[100px] m-auto text-center"
            onChange={(e) => setArtist(e.target.value)}
            value={newArtist}
          />
        </div>
      )}
      <div className="flex gap-2 justify-center pt-2">
        <button className="text-[0.8rem]" onClick={() => deleteSong(id)}>
          Delete
        </button>
        {isEditing ? (
          <button className="text-[0.8rem]" onClick={() => editSong(id)}>
            Save
          </button>
        ) : (
          <button className="text-[0.8rem]" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default SongCard;
