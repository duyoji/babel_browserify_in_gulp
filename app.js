import BaseController from './src/controller/BaseController';
import BaseModel      from './src/model/BaseModel';
import BaseView       from './src/view/BaseView';

class Main {
    static main() {
        var baseController = new BaseController();
        var baseModel      = new BaseModel();
        var baseView       = new BaseView();

        console.log('-----------------------');
        console.log('call BaseController instance methods');
        console.log('-----------------------');
        console.log( baseController.introduce() );
        console.log( baseController.toString() );
        console.log('-----------------------');
        console.log('call BaseModel instance methods');
        console.log('-----------------------');
        console.log( baseModel.introduce() );
        console.log( baseModel.toString() );
        console.log('-----------------------');
        console.log('call BaseView instance methods');
        console.log('-----------------------');
        console.log( baseView.introduce() );
        console.log( baseView.toString() );
    }
}

Main.main();
