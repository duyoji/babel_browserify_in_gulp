import BaseObject from '../core/BaseObject';

class BaseModel extends BaseObject {
    constructor(name = 'default model name') {
        this._name = name;
    }

    introduce() {
        return `my name is ${this._name}`;
    }
}

module.exports = BaseModel;
