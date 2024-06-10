const Song = require('../models/SongModel');

exports.serveSongs = (req, res) => {
  res.json(Song.listAll());
};

exports.serveSong = (req, res) => {
  const song = Song.find(+req.params.id);
  if (!song) {
    return res.status(404).json({ error: 'Song not found' });
  }
  res.json(song);
};

exports.createSong = (req, res) => {
  const { title, artist } = req.body;
  if (!title || !artist) {
    return res.status(400).json({ error: 'Title and artist are required' });
  }
  const song = new Song(title, artist);
  res.status(201).json(song);
};

exports.updateSong = (req, res) => {
  const { newTitle, newArtist } = req.body;
  const song = Song.find(+req.params.id);
  
  if (!song) {
    return res.status(404).json({ error: 'Song not found' });
  }

  if (newTitle) {
    song.title = newTitle;
  }
  
  if (newArtist) {
    song.artist = newArtist;
  }
  
  res.json(song);
};

exports.deleteSong = (req, res) => {
  const deleted = Song.delete(+req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Song not found' });
  }
  res.status(204).end();
};
