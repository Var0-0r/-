class Phone {
    // 构造方法 名字不能改
    constructor(name) {
        this.name = name;
    }
    //  方法必须使用该方法
    call() {
        console.log("我可以打电话");
    }
}
// 类的静态成员
class NewPhone {
    static name = "HuaWei";
    chang() {
        console.log(`my name`);
    }
}
let np = new NewPhone();
np.chang();

// ES6类的继承
class SmartPhone extends Phone{
    constructor(name,color){
        super(name);
        this.color=color;
    }
    
}