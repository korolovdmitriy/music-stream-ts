(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TrackData"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Track = void 0;
    const TrackData_1 = require("./TrackData");
    class Track extends TrackData_1.TrackData {
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
    exports.Track = Track;
});
//# sourceMappingURL=Track.js.map