// import { ITrack } from "./ITrack";
// import { IPlaylist } from "../level4/IPlaylist";

class Playlist implements IPlaylist{
  private _tracks: ITrack[];
  private _title: string;
  private _id: number;
  public constructor(tracks: ITrack[], title: string, id: number) {
    this._tracks = tracks;
    this._title = title;
    this._id = id;
  }

  public get tracks(): ITrack[] {
    return this._tracks;
  }

  public get title(): string {
    return this._title;
  }

  public get id(): number {
    return this._id;
  }

  public get currentTrack(): ITrack | null {
    return this._tracks.find((track) => track.state) || null;
  }

  public playAll(): void {
    this._tracks.forEach((track) => track.play());
  }

  public addTrack(track: ITrack): void {
    this._tracks.push(track);
  }

  public findTrackById(id: number): ITrack | null {
    return this._tracks.find((track) => track.id === id) || null;
  }

  public removeTrackById(id: number): void {
    this._tracks.forEach((track, index) => {
      if (track.id === id) {
        this._tracks.splice(index, 1);
      }
    });
  }
}

// export { Playlist };