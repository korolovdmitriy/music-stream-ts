class Track extends TrackData implements ITrack {
  private _title: string;
  private _id: number;
  private _state: boolean = false;
   public constructor(genre: string, rate: number, title: string, id: number) {
    super(genre, rate);
    this._title = title;
    this._id = id;
    this._state = false;
  }

  public get title(): string {
    return this._title;
  }

  public set title(newTitle: string) {
    this._title = newTitle;
  }

  public get id(): number {
    return this._id;
  }

  public get state(): boolean {
    return this._state;
  }

  public play(): void {
    this._state = true;
  }

  public stop(): void {
    this._state = false;
  }
}
