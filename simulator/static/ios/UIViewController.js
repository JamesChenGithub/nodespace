const UIView = require('./UIView.js')
module.exports = class UIViewController {
    constructor(atitle) {
        this.title = atitle;
        this.view = new UIView();
    }
};

