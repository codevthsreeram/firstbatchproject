class MyClass {
    Message: string;

    constructor(msg: string) {
        this.Message = msg;
    }

    getMessage() {
        return this.Message;
    }
}

let objMyClass = new MyClass('my message');
let rtnMessage = objMyClass.getMessage();
