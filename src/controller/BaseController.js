class BaseController {
    constructor(name = 'default controller name') {
        this._name = name;
    }

    introduce() {
        return `my name is ${this._name}`;
    }
}

module.exports = BaseController;
