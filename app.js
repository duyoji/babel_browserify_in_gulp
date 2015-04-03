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

        let main = new Main();
        main.letTest();
        main.constTest();
    }

    letTest() {
        let a = 1;
        {
            let a = 2;
            console.log('let in-block a : ' + a);
            {
                let a = 3;
                console.log('let in-block-in-block a : ' + a);

                a = 4;
                console.log('let in-block-in-block a chenge : ' + a);
            }
        }

        console.log('let out-block a : ' + a);
    }

    constTest() {
        const a = 1;
        {
            // constで定義したものを上書きしようとするとコンパイルエラーが起きる
            // a = 2;
            // console.log('const in-block a : ' + a);
        }

        console.log('const out-block a : ' + a);
    }
}

Main.main();
