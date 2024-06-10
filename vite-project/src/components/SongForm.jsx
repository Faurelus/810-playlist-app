import { useState } from "react";

function SongForm({ addedSong, setAddedSong }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8082/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, artist }),
      });
      if (res.ok) {
        setAddedSong(!addedSong);
        setTitle("");
        setArtist("");
      } else {
        console.error("Failed to add song");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border p-5 m-auto"
    >
      <h1 className="text-2xl font-thin text-center">ADD SONG</h1>
      <label>
        Song Title:
        <input
          type="text"
          className="p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Enter song title"
        />
      </label>
      <label>
        Artist Name:
        <input
          type="text"
          className="p-2"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          name="artist"
          placeholder="Enter artist name"
        />
      </label>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        ADD
      </button>
    </form>
  );
}

export default SongForm;
