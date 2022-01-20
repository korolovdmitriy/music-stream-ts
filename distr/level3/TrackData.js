(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TrackData = void 0;
    class TrackData {
        constructor(genre, rate) {
            this._genre = genre;
            this._rate = rate;
        }
        get genre() {
            return this._genre;
        }
        set genre(newGenre) {
            this._genre = newGenre;
        }
        get rate() {
            return this._rate;
        }
        set rate(newRate) {
            this._rate = newRate;
        }
    }
    exports.TrackData = TrackData;
});
//# sourceMappingURL=TrackData.js.map