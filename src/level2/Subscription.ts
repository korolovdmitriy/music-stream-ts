// import { ISubscription } from "../level1/ISubscription";

class Subscription implements ISubscription {
  private _status: boolean;
  public constructor() {
    this._status = false;
  }

  public get status(): boolean {
    return this._status;
  }

  public changeStatus(): void {
    this._status = !this._status;
  }
}

// export { Subscription };