function testDecorator(flag: boolean) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log("welcome Alipay");
      };
    };
  } else {
    return function(constructor: any) {};
  }
}

@testDecorator(true)
class Test {}

const test = new Test();
(test as any).getName();
