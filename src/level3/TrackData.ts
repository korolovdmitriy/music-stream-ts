class TrackData {
  private _genre: string;
  private _rate: number;
  
  public constructor(genre: string, rate:number) {
    this._genre = genre;
    this._rate = rate;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(newGenre: string) {
    this._genre = newGenre;
  }

  public get rate(): number {
    return this._rate;
  }

  public set rate(newRate: number) {
    this._rate = newRate;
  }
}
// export { TrackData };

