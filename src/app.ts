import { Track } from "./level3/Track";
import { Playlist } from "./level2/Playlist";
import { Subscription } from "./level2/Subscription";
import { User } from "./level1/User";

const track01 = new Track("Techno", 5, "Max Cooper - Spike", 1);
const track02 = new Track("Melodic House", 6, "ARTBAT - Horizon", 2);
const track03 = new Track("Deep House", 7, "Anyma - Walking", 3);
const track04 = new Track("House", 5, "track 04", 4);
const track05 = new Track("House", 4, "track 05", 5);

const userSubscription = new Subscription();

const playlist01 = new Playlist([track01, track02, track03], "First playlist", 1);
const playlist02 = new Playlist([track01, track03, track04, track05], "Second playlist", 2);
const playlist03 = new Playlist([track03, track04, track05], "Third playlist", 3);
const playlist04 = new Playlist([track03, track04, track05], "Fourth playlist", 4);
const playlist05 = new Playlist([track03, track04, track05], "Fourth playlist", 5);
const user01 = new User("User name", "User email", "password", [playlist01, playlist02, playlist03], userSubscription);

user01.changeSubscription();

user01.addPlaylistAsync(playlist04, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.log("Playlist added!");
    user01.addPlaylistAsync(playlist05, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.log("Playlist added!");
        user01.addPlaylistAsync(playlist03, function (error) {
          if (error) {
            console.error(error);
          } else {
            console.log("Playlist added!");
          }
        });
      }
    });
  }
});

