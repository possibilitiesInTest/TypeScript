class Test {
    public readonly color: string = 'orange';

    constructor(myColor) {
        this.color = myColor;
    }
}

const mytest = new Test("blue");

alert(mytest.color);