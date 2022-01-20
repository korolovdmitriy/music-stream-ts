(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subscription = void 0;
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
    exports.Subscription = Subscription;
});
//# sourceMappingURL=Subscription.js.map