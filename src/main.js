const author = 'cyan'
import './assets/css/index.css'
import './assets/less/index.less'
// import './assets/scss/index.scss'
console.log(`作者是${author}1`);
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    };
  }
console.log(Bork.staticProperty);
Bork.staticFunction()