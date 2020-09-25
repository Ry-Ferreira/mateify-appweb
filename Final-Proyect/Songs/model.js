const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: String,
    album: String,
    duration: String,
    artist: String
});

const songModel = mongoose.model('Song', songSchema);

const handelFindSong = async() => {
    let songJSON = await songModel.find({});
    return songJSON;
}

const createSong = async(song) => {
    let docSong = new songModel(song);
    await docSong.save();
};  

const authUpdateSong = (changes) => {
    let docSongModified = new songModel(changes);
    await docSongModified.save();
}; 

module.exports = {
    handelFindSong,
    createSong,
    authUpdateSong
};