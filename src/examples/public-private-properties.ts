class Test {
   color: string = 'orange';
   private _intensity: number = 5;

   get intensity(): number {
      return this._intensity;
   }

   set intensity(x: number) {
    this._intensity = x;
   }


}

const mytest = new Test();

mytest.intensity = 7;
alert(mytest.intensity);

