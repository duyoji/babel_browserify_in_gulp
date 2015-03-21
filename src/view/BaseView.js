import BaseObject from '../core/BaseObject';

class BaseView extends BaseObject {
    constructor(name = 'default view name') {
        this._name = name;
    }

    introduce() {
        return `my name is ${this._name}`;
    }
}

export default BaseView;
