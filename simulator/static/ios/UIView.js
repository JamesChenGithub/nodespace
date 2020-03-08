
module.exports = class UIView {
    constructor(htmlref) {
        this.href = htmlref;
        this.superView = null;
        this.subViews = [];
    }

    addSubView(aview) {
        if (aview instanceof UIView) {
            aview.superView = this;
            this.subViews.append(aview);
        } else {
            throw "aview : " + aview + ", is not a typeof UIView";
        }
    }

    removeFromSuperView() {
        if(this.superView != null) {
            this.superView.subViews.remove(this);
            this.superView = null;
        }
    }
};

