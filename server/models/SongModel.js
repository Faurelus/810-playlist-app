class Song {
    static #all = [];
    
    constructor(title, artist) {
      this.id = Song.#all.length + 1;
      this.title = title;
      this.artist = artist;
      Song.#all.push(this);
    }
  
    static listAll() {
      return Song.#all;
    }
  
    static find(id) {
      return Song.#all.find((song) => song.id === id);
    }
  
    static updateTitle(id, title) {
      const song = Song.find(id);
      if (!song) return null;
      song.title = title;
      return song;
    }
  
    static updateArtist(id, artist) {
      const song = Song.find(id);
      if (!song) return null;
      song.artist = artist;
      return song;
    }
  
    static delete(id) {
      const index = Song.#all.findIndex((song) => song.id === id);
      if (index < 0) return null;
      Song.#all.splice(index, 1);
      return true;
    }
  }
  
  module.exports = Song;
  