// import { ITrack } from "../level3/ITrack";
// import { IPlaylist } from "./IPlaylist";
// import { ISubscription } from "./ISubscription";

class User {
  private _name: string;
  private _email: string;
  private _password: string;
  private _playlists: IPlaylist[];
  private _subscription: ISubscription;       

  public constructor(name: string, email: string, password: string, playlists: IPlaylist[], subscription: ISubscription) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._playlists = playlists;
    this._subscription = subscription;    
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public set email (newEmail: string) {
    this._email = newEmail;
  }

  public get password(): string {
    return this._password;
  }

  public set password(newPassword: string) {
    this._password = newPassword;
  }

  public get subscription(): boolean {
    return this._subscription.status;
  }

  public playAll(): void {
    this._playlists.forEach((playlist) => playlist.playAll());
  }

  public findPlaylist(id: number): IPlaylist | null {
    return this._playlists.find((playlist) => playlist.id === id) || null;
  }

  public addPlaylist(playlist: IPlaylist): void {
    if (!this.findPlaylist(playlist.id) && this._subscription.status) {
      this._playlists.push(playlist);
    }
  }

  public addPlaylistAsync(playlist: IPlaylist, callback: (error: object | undefined) => void ) {
    setTimeout((): void => {
      let error: object | undefined;
      if (!this.findPlaylist(playlist.id) && this._subscription.status) {
        this._playlists.push(playlist);
      } else {
        error = new Error("Something went wrong :(");
      }
      callback(error);
    }, 1000);
  }

//   public addPlaylistAsyncAsync(playlist) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!this.findPlaylist(playlist.id) && this.subscription) {
//           this._playlists.push(playlist);
//           resolve("Playlist added");
//         } else {
//           reject(new Error("Something went wrong :("));
//         }
//       }, 1000);
//     });
//   }

  public removePlaylistById(id: number): void {
    this._playlists.forEach((playlist, index) => {
      if (playlist.id === id) {
        this._playlists.splice(index, 1);
      }
    });
  }

  public findTrackById(id: number): ITrack | null {
    const playlist = this._playlists.find((playlist) =>
      playlist.findTrackById(id)
    );
    if (playlist) {
      return playlist.findTrackById(id);
    }
    return null;
  }

  public addTrackToPlaylist(playlistId: number, track: ITrack): void {
    const playlist = this.findPlaylist(playlistId);
    if (playlist) {
      playlist.addTrack(track);
    }
  }

  public removeTrackFromPlaylist(playlistId: number, trackId: number): void {
    const playlist = this.findPlaylist(playlistId);
    if (playlist) {
      playlist.removeTrackById(trackId);
    }
  }

  public changeSubscription(): void {
    this._subscription.changeStatus();
  }
}

// export { User };