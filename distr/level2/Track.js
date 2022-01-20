"use strict";
class Track extends TrackData {
    constructor(genre, rate, title, id) {
        super(genre, rate);
        this._state = false;
        this._title = title;
        this._id = id;
        this._state = false;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get id() {
        return this._id;
    }
    get state() {
        return this._state;
    }
    play() {
        this._state = true;
    }
    stop() {
        this._state = false;
    }
}
//# sourceMappingURL=Track.js.map