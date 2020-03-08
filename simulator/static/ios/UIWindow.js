const JSStack = require('./UIView.js')

module.exports = class UIWindow extends UIView {
    constructor() {
        this.statusBar = new UIView();
        this.rootViewController = null;
    }

    setRootViewController(rootViewController) {
        this.rootViewController = rootViewController;
    }
};