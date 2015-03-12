class BaseView {
    constructor(name = 'default view name') {
        this._name = name;
    }

    introduce() {
        return `my name is ${this._name}`;
    }
}

module.exports = BaseView;
