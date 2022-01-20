(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./level3/Track", "./level2/Playlist", "./level2/Subscription", "./level1/User"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Track_1 = require("./level3/Track");
    const Playlist_1 = require("./level2/Playlist");
    const Subscription_1 = require("./level2/Subscription");
    const User_1 = require("./level1/User");
    const track01 = new Track_1.Track("Techno", 5, "Max Cooper - Spike", 1);
    const track02 = new Track_1.Track("Melodic House", 6, "ARTBAT - Horizon", 2);
    const track03 = new Track_1.Track("Deep House", 7, "Anyma - Walking", 3);
    const track04 = new Track_1.Track("House", 5, "track 04", 4);
    const track05 = new Track_1.Track("House", 4, "track 05", 5);
    const userSubscription = new Subscription_1.Subscription();
    const playlist01 = new Playlist_1.Playlist([track01, track02, track03], "First playlist", 1);
    const playlist02 = new Playlist_1.Playlist([track01, track03, track04, track05], "Second playlist", 2);
    const playlist03 = new Playlist_1.Playlist([track03, track04, track05], "Third playlist", 3);
    const playlist04 = new Playlist_1.Playlist([track03, track04, track05], "Fourth playlist", 4);
    const playlist05 = new Playlist_1.Playlist([track03, track04, track05], "Fourth playlist", 5);
    const user01 = new User_1.User("User name", "User email", "password", [playlist01, playlist02, playlist03], userSubscription);
    user01.changeSubscription();
    user01.addPlaylistAsync(playlist04, function (error) {
        if (error) {
            console.error(error);
        }
        else {
            console.log("Playlist added!");
            user01.addPlaylistAsync(playlist05, function (error) {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log("Playlist added!");
                    user01.addPlaylistAsync(playlist03, function (error) {
                        if (error) {
                            console.error(error);
                        }
                        else {
                            console.log("Playlist added!");
                        }
                    });
                }
            });
        }
    });
});
//# sourceMappingURL=app.js.map