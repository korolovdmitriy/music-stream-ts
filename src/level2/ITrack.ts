interface ITrack {
    genre: string;
    rate: number;
    title: string;
    readonly id: number;
    readonly state: boolean;
    play(): void;
    stop(): void;
}

// export { ITrack };