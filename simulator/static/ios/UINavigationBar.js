const JSStack = require('./UIView.js')

module.exports = class UINavigationController extends UIViewController {
    constructor() {
        this.title = "";
    }

    setTitle(title) {
        this.title = title;
    }

    title() {
        return this.title;
    }

    showGoBack() {
        console.log('显示返回按钮');
    }

    goBack() {
        
    }
};