import BaseController from './src/controller/BaseController';
import BaseModel      from './src/model/BaseModel';
import BaseView       from './src/view/BaseView';

class Main {
    static main() {
        var baseController = new BaseController();
        var baseModel      = new BaseModel();
        var baseView       = new BaseView();

        console.log( baseController.introduce() );
        console.log( baseModel.introduce() );
        console.log( baseView.introduce() );
    }
}

Main.main();
