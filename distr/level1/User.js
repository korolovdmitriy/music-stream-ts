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
    exports.User = void 0;
    class User {
        constructor(name, email, password, playlists, subscription) {
            this._name = name;
            this._email = email;
            this._password = password;
            this._playlists = playlists;
            this._subscription = subscription;
        }
        get name() {
            return this._name;
        }
        get email() {
            return this._email;
        }
        set email(newEmail) {
            this._email = newEmail;
        }
        get password() {
            return this._password;
        }
        set password(newPassword) {
            this._password = newPassword;
        }
        get subscription() {
            return this._subscription.status;
        }
        playAll() {
            this._playlists.forEach((playlist) => playlist.playAll());
        }
        findPlaylist(id) {
            return this._playlists.find((playlist) => playlist.id === id) || null;
        }
        addPlaylist(playlist) {
            if (!this.findPlaylist(playlist.id) && this._subscription.status) {
                this._playlists.push(playlist);
            }
        }
        addPlaylistAsync(playlist, callback) {
            setTimeout(() => {
                let error;
                if (!this.findPlaylist(playlist.id) && this._subscription.status) {
                    this._playlists.push(playlist);
                }
                else {
                    error = new Error("Something went wrong :(");
                }
                callback(error);
            }, 1000);
        }
        removePlaylistById(id) {
            this._playlists.forEach((playlist, index) => {
                if (playlist.id === id) {
                    this._playlists.splice(index, 1);
                }
            });
        }
        findTrackById(id) {
            const playlist = this._playlists.find((playlist) => playlist.findTrackById(id));
            if (playlist) {
                return playlist.findTrackById(id);
            }
            return null;
        }
        addTrackToPlaylist(playlistId, track) {
            const playlist = this.findPlaylist(playlistId);
            if (playlist) {
                playlist.addTrack(track);
            }
        }
        removeTrackFromPlaylist(playlistId, trackId) {
            const playlist = this.findPlaylist(playlistId);
            if (playlist) {
                playlist.removeTrackById(trackId);
            }
        }
        changeSubscription() {
            this._subscription.changeStatus();
        }
    }
    exports.User = User;
});
//# sourceMappingURL=User.js.map