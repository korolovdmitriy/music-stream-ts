import { ITrack } from "../level2/ITrack";

interface IPlaylist {
    readonly tracks: ITrack[];
    readonly title: string;
    readonly id: number;
    readonly currentTrack: ITrack | null;
    playAll(): void;
    addTrack(track: ITrack): void;
    findTrackById(id: number): ITrack | null;
    removeTrackById(id: number): void;
}

export { IPlaylist };