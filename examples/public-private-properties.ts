class Test {
   color: string = 'orange';
   private _intensity: number = 5;

   get intensity(): number {
      return this._intensity;
   }


}

const mytest = new Test();

alert(mytest.intensity);