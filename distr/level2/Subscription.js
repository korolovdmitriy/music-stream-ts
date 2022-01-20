"use strict";
class Subscription {
    constructor() {
        this._status = false;
    }
    get status() {
        return this._status;
    }
    changeStatus() {
        this._status = !this._status;
    }
}
//# sourceMappingURL=Subscription.js.map