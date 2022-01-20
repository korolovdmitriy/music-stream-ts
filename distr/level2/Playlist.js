"use strict";
class Playlist {
    constructor(tracks, title, id) {
        this._tracks = tracks;
        this._title = title;
        this._id = id;
    }
    get tracks() {
        return this._tracks;
    }
    get title() {
        return this._title;
    }
    get id() {
        return this._id;
    }
    get currentTrack() {
        return this._tracks.find((track) => track.state) || null;
    }
    playAll() {
        this._tracks.forEach((track) => track.play());
    }
    addTrack(track) {
        this._tracks.push(track);
    }
    findTrackById(id) {
        return this._tracks.find((track) => track.id === id) || null;
    }
    removeTrackById(id) {
        this._tracks.forEach((track, index) => {
            if (track.id === id) {
                this._tracks.splice(index, 1);
            }
        });
    }
}
//# sourceMappingURL=Playlist.js.map