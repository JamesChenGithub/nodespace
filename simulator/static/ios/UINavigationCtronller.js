const JSStack = require('./UIStack.js')
const UINavigationBar = require('./UINavigationBar')

module.exports = class UINavigationController extends UIViewController {
    constructor(aViewController) {
        this.viewControllers = new UIStack(typeof UIViewController);
        this.viewControllers.push(aViewController);
        this.navigationBar = new UINavigationBar();

    }
};